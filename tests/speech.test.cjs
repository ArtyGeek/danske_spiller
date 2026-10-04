// Deterministic text-level pronunciation regression tests for shared/dansk-speech.js.
// Run: node tests/speech.test.cjs   (exit 1 on any failure). Audio-level checks are NOT covered here.
const S = require('../shared/dansk-speech.js');
const N = (t, o) => S.normalize(t, o);
const cases = [
  // [id, input, expected]
  ['num-tens-50', '50 år', 'halvtreds år'],
  ['num-60', '60', 'tres'],
  ['num-70', '70', 'halvfjerds'],
  ['num-80', '80', 'firs'],
  ['num-97', '97', 'syvoghalvfems'],
  ['num-21', '21', 'enogtyve'],
  ['num-35', 'Hun er 35', 'Hun er femogtredive'],
  ['num-19', '19', 'nitten'],
  ['num-100', '100', 'ethundrede'],
  ['num-400', '400 meter', 'firehundrede meter'],
  ['num-123', '123', 'ethundrede og treogtyve'],
  ['year-1990', 'i 1990', 'i nitten hundrede og halvfems'],
  ['year-1523', '1523', 'femten hundrede og treogtyve'],
  ['year-2023', 'i 2023', 'i totusind og treogtyve'],
  ['year-1973', '1973', 'nitten hundrede og treoghalvfjerds'],
  ['decade', 'I 1990\'erne', 'I halvfemserne'],
  ['century', '1600-tallet', 'sekstenhundredetallet'],
  ['time-round', 'kl. 19.00', 'klokken nitten'],
  ['time-min', 'Vi kom kl. 17.30.', 'Vi kom klokken sytten tredive.'],
  ['time-0x', 'kl. 8.05', 'klokken otte nul fem'],
  ['time-bare', 'Du kom kl. 1.', 'Du kom klokken et.'],
  ['time-sentence-end', 'Butikken lukkede kl. 17. Vi kom', 'Butikken lukkede klokken sytten. Vi kom'],
  ['ord-date', 'den 24. juni', 'den fireogtyvende juni'],
  ['ord-1', 'senest den 1. marts', 'senest den første marts'],
  ['ord-2', '2. maj', 'anden maj'],
  ['ord-30', '30. juli', 'tredivte juli'],
  ['ord-20', '20. august', 'tyvende august'],
  ['abbr-fx', 'fx en bil', 'for eksempel en bil'],
  ['abbr-feks', 'f.eks. en bil', 'for eksempel en bil'],
  ['abbr-osv', 'bil, hus osv.', 'bil, hus og så videre.'],
  ['abbr-dvs', 'dvs. i dag', 'det vil sige i dag'],
  ['abbr-eu-untouched', 'medlem af EU', 'medlem af EU'],
  ['lex-aarhus-untouched', 'Aarhus', 'Aarhus'],
  ['blank-mid', 'Filmen … allerede, da vi kom.', 'Filmen, allerede, da vi kom.'],
  ['blank-start', '___ dine hænder', 'dine hænder'],
  ['blank-custom', 'Jeg ___ hjem', 'Jeg hmm hjem', { blank: 'hmm' }],
  ['sym-arrow', 'en bil → bilen', 'en bil bliver til bilen'],
  ['sym-plus', 'kan/skal/vil + verbum', 'kan eller skal eller vil plus verbum'],
  ['sym-dash', 'verbum – subjekt', 'verbum, subjekt'],
  ['sym-spaced-slash', 'og / men / eller', 'og, men, eller'],
  ['sym-percent', '25 %', 'femogtyve procent'],
  ['decimal', '3,5', 'tre komma fem'],
  ['thousand', '1.250', 'ettusind tohundrede og halvtreds'],
  ['plain-passthrough', 'Jeg har ikke tid i dag.', 'Jeg har ikke tid i dag.'],
  // negative cases: ordinary text that must NOT be rewritten as a date/ordinal
  ['fraction', '1/5 af eleverne', 'en femtedel af eleverne'],
  ['fraction-plural', '3/4 time', 'tre fjerdedele time'],
  ['pair-24-7', 'Åbent 24/7 hele ugen', 'Åbent fireogtyve syv hele ugen'],
  ['neg-ordinal-lower', 'Svar 12. han kom', 'Svar tolv. han kom'],
  ['neg-opgave', 'opgave 2. a', 'opgave to. a'],
  ['date-ctx-after', 'Vi holder fri 1/5.', 'Vi holder fri første maj.'],
  ['date-ctx-before', 'fra 3/10 til 5/10', 'fra tredje oktober til femte oktober'],
  ['og-eller', 'og/eller', 'og eller'],
  ['phone-zero', 'Ring 12 05 67 89', 'Ring tolv nul fem syvogtres niogfirs'],
  ['century-2000', '2000-tallet', 'totusindtallet'],
  ['decade-2digit', "80'erne", 'firserne'],
  ['ord-gang-start', '1. gang', 'første gang'],
  ['ord-gang-mid', 'Det er 40. gang', 'Det er fyrretyvende gang'],
  ['known-case-en-et', '1 hus', 'en hus'], // KNOWN LIMITATION: should be "et hus"; write the number in words for neuter nouns (standard §3)
  ['null', null, ''],
];
const voices = [
  { name: 'Microsoft Helle', lang: 'da-DK', localService: true },
  { name: 'Microsoft Christel Online (Natural) - Danish (Denmark)', lang: 'da-DK', localService: false },
  { name: 'Google US English', lang: 'en-US' },
  { name: 'Sara', lang: 'da-DK', localService: true },
];
const voiceCases = [
  ['voice-prefers-natural', S.pickVoice(voices) && S.pickVoice(voices).name.indexOf('Christel') >= 0, true],
  ['voice-helle-last', S.rankVoices(voices).pop().name, 'Microsoft Helle'],
  ['voice-excludes-nonda', S.rankVoices(voices).some(v => v.lang === 'en-US'), false],
  ['voice-none', S.pickVoice([{ name: 'Google US English', lang: 'en-US' }]), null],
];

let fail = 0;
for (const [id, input, exp, opts] of cases) {
  const got = N(input, opts);
  if (got !== exp) { fail++; console.log('FAIL', id, '\n  in :', JSON.stringify(input), '\n  exp:', JSON.stringify(exp), '\n  got:', JSON.stringify(got)); }
}
for (const [id, got, exp] of voiceCases) {
  if (got !== exp) { fail++; console.log('FAIL', id, 'got', got, 'exp', exp); }
}
console.log((cases.length + voiceCases.length - fail) + '/' + (cases.length + voiceCases.length) + ' passed');
process.exit(fail ? 1 : 0);
