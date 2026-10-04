/* DanskSpeech — text-to-speech preparation for Danish (UMD: browser global + CommonJS).
 *
 * Two jobs, both text-level and testable without audio:
 *   1. normalize(text)  — expand digits, times, dates, ordinals, abbreviations, symbols and
 *                         blanks into the words a Dane would SAY, so the voice never has to guess.
 *   2. rankVoices / pickVoice — prefer neural/natural da-DK voices over legacy SAPI ones.
 *
 * What this CANNOT fix (voice-engine territory): stød, blødt d, r-colouring, schwa reduction,
 * vowel quality, intonation. See .claude/skills/danish-speech-shared/references/pronunciation-standard.md.
 * Web Speech API ignores SSML in practice, so output is plain text only.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DanskSpeech = api;
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var VERSION = '1.0.0';

  var ONES = ['nul', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'otte', 'ni', 'ti',
    'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten'];
  var TENS = { 20: 'tyve', 30: 'tredive', 40: 'fyrre', 50: 'halvtreds', 60: 'tres', 70: 'halvfjerds', 80: 'firs', 90: 'halvfems' };
  var ORD_ONES = ['nulte', 'første', 'anden', 'tredje', 'fjerde', 'femte', 'sjette', 'syvende', 'ottende', 'niende', 'tiende',
    'ellevte', 'tolvte', 'trettende', 'fjortende', 'femtende', 'sekstende', 'syttende', 'attende', 'nittende'];
  var ORD_TENS = { 20: 'tyvende', 30: 'tredivte', 40: 'fyrretyvende', 50: 'halvtredsindstyvende', 60: 'tresindstyvende',
    70: 'halvfjerdsindstyvende', 80: 'firsindstyvende', 90: 'halvfemsindstyvende' };
  var DECADES = { 0: 'nullerne', 10: 'tierne', 20: 'tyverne', 30: 'trediverne', 40: 'fyrrerne', 50: 'halvtredserne',
    60: 'tresserne', 70: 'halvfjerdserne', 80: 'firserne', 90: 'halvfemserne' };
  var MONTH_NAMES = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
  var MONTH_ABBR = { jan: 'januar', feb: 'februar', mar: 'marts', apr: 'april', jun: 'juni', jul: 'juli', aug: 'august', sep: 'september', sept: 'september', okt: 'oktober', nov: 'november', dec: 'december' };
  var MONTHS = 'januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december';

  // Cardinal 0–99. Units come before tens ("enogtyve"); 50–90 count in twenties via TENS names.
  function below100(n) {
    if (n < 20) return ONES[n];
    var t = n - (n % 10), u = n % 10;
    return u ? ONES[u] + 'og' + TENS[t] : TENS[t];
  }

  // Cardinal 0–999999. "et" vs "en" cannot be known without the noun: default "en".
  function cardinal(n) {
    if (n < 100) return below100(n);
    if (n < 1000) {
      var h = Math.floor(n / 100), r = n % 100;
      var head = (h === 1 ? 'et' : ONES[h]) + 'hundrede';
      return r ? head + ' og ' + below100(r) : head;
    }
    if (n < 1000000) {
      var th = Math.floor(n / 1000), rest = n % 1000;
      var thw = th === 1 ? 'et' : cardinal(th);
      var headT = thw + 'tusind';
      if (!rest) return headT;
      return headT + (rest < 100 ? ' og ' : ' ') + cardinal(rest);
    }
    return String(n);
  }

  function ordinal(n) {
    if (n < 20) return ORD_ONES[n];
    if (n < 100) {
      var t = n - (n % 10), u = n % 10;
      return u ? ONES[u] + 'og' + ORD_TENS[t] : ORD_TENS[t];
    }
    if (n === 100) return 'hundrede';
    return cardinal(n);
  }

  // Years 1100–1999 are said in hundreds ("nitten hundrede og halvfems"); 2000+ in thousands.
  function year(n) {
    if (n >= 2000) return cardinal(n);
    var h = Math.floor(n / 100), r = n % 100;
    var head = below100(h) + ' hundrede';
    return r ? head + ' og ' + below100(r) : head;
  }

  var ABBR = [
    [/\bf\.?\s?eks\.?/gi, 'for eksempel'], [/\bfx\.?(?=\s|$|,)/gi, 'for eksempel'],
    [/\bosv\./gi, 'og så videre'], [/\bdvs\./gi, 'det vil sige'], [/\bm\.m\./gi, 'med mere'],
    [/\bm\.fl\./gi, 'med flere'], [/\bbl\.a\./gi, 'blandt andet'], [/\bca\./gi, 'cirka'],
    [/\bnr\./gi, 'nummer'], [/\bpga\./gi, 'på grund af'], [/\bmht\./gi, 'med hensyn til'],
    [/\bevt\./gi, 'eventuelt'], [/\btlf\./gi, 'telefon'], [/\bjf\./gi, 'jævnfør'],
    [/\bhhv\./gi, 'henholdsvis'], [/\bifm\./gi, 'i forbindelse med'], [/\bmv\./gi, 'med videre'],
    [/\bkr\./gi, 'kroner'], [/\bkg\b/g, 'kilo'], [/\bkm\b/g, 'kilometer'], [/\bcm\b/g, 'centimeter']
  ];

  // Intentionally empty. Respellings (Aarhus→Århus, EU→"E U") are [verify]-status and voice-dependent:
  // add an entry only after listening on the target voice (see ledger F008/F009).
  var LEXICON = [];

  function normalize(input, opts) {
    opts = opts || {};
    if (input == null) return '';
    var s = String(input);

    // Blanks (gap-fill prompts) → a pause; never voice "…" or "___".
    s = s.replace(/(?:_{2,}|…|\.{3})/g, opts.blank === undefined ? ',' : opts.blank);

    // Times: "kl. 19.00", "kl. 7.50", "kl. 10", "klokken 20"
    s = s.replace(/\bkl\.?\s*(\d{1,2})(?:[.:](\d{2}))?(?!\d)/gi, function (_, h, m) {
      var out = 'klokken ' + (+h === 1 ? 'et' : cardinal(+h));
      if (m && +m !== 0) out += ' ' + (m.charAt(0) === '0' ? 'nul ' + cardinal(+m) : cardinal(+m));
      return out;
    });

    // Decades and centuries: 1990'erne, 1990erne, 1600-tallet
    s = s.replace(/\b(?:\d{2})?(\d{2})['’]?erne\b/g, function (m, y) { return DECADES[+y] || m; });
    s = s.replace(/\b(\d{2})00-tallet\b/g, function (_, c) { return +c === 20 ? 'totusindtallet' : cardinal(+c) + 'hundredetallet'; });


    // Full dates: 03.10.2026 and 1/5 (day/month, Danish order); "d." before a date = den
    s = s.replace(/\b(\d{1,2})\.(\d{1,2})\.(\d{4})\b/g, function (m, d, mo, y) {
      return +mo >= 1 && +mo <= 12 ? 'den ' + ordinal(+d) + ' ' + MONTH_NAMES[+mo - 1] + ' ' + year(+y) : m;
    });
    // d/m only with date context (a date word before, or the clause ends after); otherwise "1/5 af", "24/7", "3/4 time" stay untouched
    s = s.replace(/\b(\d{1,2})\/(\d{1,2})\b/g, function (m, d, mo, off, str) {
      var ctxBefore = /\b(?:den|d\.|fra|til|før|efter|siden|indtil|senest|mandag|tirsdag|onsdag|torsdag|fredag|lørdag|søndag)\s*$/i.test(str.slice(0, off));
      var ctxAfter = /^\s*(?:[.,;!?]|$)/.test(str.slice(off + m.length));
      return (ctxBefore || ctxAfter) && +mo >= 1 && +mo <= 12 && +d >= 1 && +d <= 31 ? ordinal(+d) + ' ' + MONTH_NAMES[+mo - 1] : m;
    });
    // Remaining n/m is not a date: a fraction (1/5 → en femtedel) or, when n >= m or m > 10, a plain pair ("24/7")
    s = s.replace(/\b(\d{1,2})\/(\d{1,2})\b/g, function (m, n, d) {
      var FR = { 2: 'halv', 3: 'tredjedel', 4: 'fjerdedel', 5: 'femtedel', 6: 'sjettedel', 7: 'syvendedel', 8: 'ottendedel', 9: 'niendedel', 10: 'tiendedel' };
      if (+n < +d && FR[+d] && +n >= 1) {
        return (+n === 1 ? 'en ' : cardinal(+n) + ' ') + FR[+d] + (+n === 1 ? '' : (+d === 2 ? 'e' : 'e'));
      }
      return cardinal(+n) + ' ' + cardinal(+d);
    });
    s = s.replace(/\bd\.\s*(?=\d)/g, 'den ');
    s = s.replace(/\b(jan|feb|mar|apr|jun|jul|aug|sep|sept|okt|nov|dec)\./gi, function (_, a) { return MONTH_ABBR[a.toLowerCase()]; });

    // Phone numbers in 4 pairs: 12 34 56 78
    s = s.replace(/\b(\d{2}) (\d{2}) (\d{2}) (\d{2})\b/g, function (_, a, b, c, d) {
      return [a, b, c, d].map(function (x) { return x.charAt(0) === '0' ? 'nul ' + cardinal(+x) : cardinal(+x); }).join(' ');
    });

    // Ordinals: "den 24. juni", "1. marts"
    s = s.replace(new RegExp('\\b(\\d{1,2})\\.\\s*(?=(?:' + MONTHS + ')\\b)', 'gi'), function (_, d) { return ordinal(+d) + ' '; });
    s = s.replace(/\b(den|det|som|til|fra)\s+(\d{1,2})\.(?=\s+[a-zæøå])/gi, function (_, w, d) { return w + ' ' + ordinal(+d); });

    // Ordinal before a known ordinal-taking noun ("hans 3. forsøg", "1. gang"); whitelist, so "Svar 12. han kom" is untouched
    s = s.replace(/(^|[^\d.])(\d{1,2})\.(?=\s+(?:gang|gange|sal|klasse|forsøg|plads|række|runde|etage|verdenskrig|halvleg|kapitel|sæson|periode|generation|gruppe|version|udgave|præmie|dag|år|århundrede|division|liga|sekund|akt|salme|vers)\b)/giu, function (_, pre, d) { return pre + ordinal(+d); });

    // Percent, plus, ampersand
    s = s.replace(/(\d)\s*%/g, '$1 procent').replace(/\s&\s/g, ' og ');

    // Years vs. plain numbers
    s = s.replace(/\b(\d{4})\b/g, function (_, y) { var n = +y; return n >= 1100 && n <= 2099 ? year(n) : cardinal(n); });
    s = s.replace(/\b(\d{1,3})(?:\.(\d{3}))+\b/g, function (m) { return cardinal(+m.replace(/\./g, '')); });
    s = s.replace(/\b(\d{1,3})(?:,(\d{1,2}))\b/g, function (_, a, b) { return cardinal(+a) + ' komma ' + b.split('').map(function (d) { return ONES[+d]; }).join(' '); });
    s = s.replace(/\b\d{1,6}\b/g, function (m) { return cardinal(+m); });

    // Expand abbreviations; if the abbreviation's dot also ended the sentence, keep the full stop
    // (the voice needs it for sentence-final intonation).
    ABBR.forEach(function (p) {
      s = s.replace(p[0], function (m) {
        var off = arguments[arguments.length - 2], after = s.slice(off + m.length);
        return m.slice(-1) === '.' && (after === '' || /^\s+[A-ZÆØÅ]/.test(after)) ? p[1] + '.' : p[1];
      });
    });
    LEXICON.forEach(function (p) { s = s.replace(p[0], p[1]); });

    // Symbols used in explainer rule lines
    s = s.replace(/\s*→\s*/g, ' bliver til ').replace(/\s*\+\s*/g, ' plus ').replace(/\s=\s/g, ', ')
      .replace(/\s[–—\/]\s/g, ', ').replace(/\bog\/eller\b/gi, 'og eller').replace(/(\p{L})\/(\p{L})/gu, '$1 eller $2');
    s = s.replace(/[«»"“”()\[\]]/g, ' ');

    return s.replace(/\s+,/g, ',').replace(/,\s*,+/g, ',').replace(/^\s*,\s*/, '').replace(/\s+/g, ' ').trim();
  }

  // TTS-hostile tokens still present in a string (what a voice would have to guess).
  function risks(text) {
    var t = String(text == null ? '' : text), out = [];
    var checks = [
      ['digit', /\d/], ['abbreviation', /(?:kl|fx|f\.eks|osv|dvs|m\.m|bl\.a|ca|nr|pga|evt|tlf|jf|hhv)\./i],
      ['acronym', /[A-ZÆØÅ]{2,}/], ['symbol', /[→+=\/%&–—«»]/], ['blank', /_{2,}|…|\.{3}/],
      ['apostrophe-form', /\w['’]\w/]
    ];
    checks.forEach(function (c) { if (c[1].test(t)) out.push(c[0]); });
    return out;
  }

  // ---- Voice ranking -------------------------------------------------
  function scoreVoice(v) {
    var lang = String(v.lang || '').toLowerCase().replace('_', '-');
    var name = String(v.name || '');
    if (lang.indexOf('da') !== 0) return -1;
    var sc = lang === 'da-dk' ? 30 : 25;
    if (/natural|neural/i.test(name)) sc += 100;
    if (/online/i.test(name)) sc += 60;
    if (/premium|enhanced/i.test(name)) sc += 50;
    if (/google/i.test(name)) sc += 40;
    if (v.localService === false) sc += 5;
    if (/helle/i.test(name)) sc -= 20; // legacy SAPI voice, robotic
    return sc;
  }
  function rankVoices(voices) {
    return (voices || []).map(function (v) { return { v: v, s: scoreVoice(v) }; })
      .filter(function (x) { return x.s >= 0; }).sort(function (a, b) { return b.s - a.s; })
      .map(function (x) { return x.v; });
  }
  function pickVoice(voices) { return rankVoices(voices)[0] || null; }

  return { VERSION: VERSION, normalize: normalize, risks: risks, cardinal: cardinal, ordinal: ordinal, year: year, rankVoices: rankVoices, pickVoice: pickVoice };
}));
