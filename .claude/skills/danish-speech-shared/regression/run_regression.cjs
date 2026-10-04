#!/usr/bin/env node
// Danish pronunciation regression runner.
//   node run_regression.cjs [--snapshot name]   (run from anywhere)
// Gate (exit 1 on failure): every level T/TA row's normalized text equals `spoken` (space/case-insensitive),
// and every spoken:"=" row is left byte-identical by the normalizer (no mangling of names/words).
// Audio rows (level A/TA) are NOT scored here: they are emitted as a listening checklist. Never mark them passed without a listener.
const fs = require('fs');
const path = require('path');
// Locate shared/dansk-speech.js whether this folder lives in the repo (.claude/skills/...) or in a parent-level skills dir.
const speechPath = ['../../../../shared/dansk-speech.js', '../../../../shared/dansk-speech.js']
  .map(r => path.resolve(__dirname, r)).find(fs.existsSync);
if (!speechPath) { console.error('dansk-speech.js not found'); process.exit(2); }
const S0 = require(speechPath);
// RAW=1 simulates the pre-fix pipeline (text sent to the voice unchanged) to produce the 'before' baseline.
const S = process.env.RAW ? Object.assign({}, S0, { normalize: x => String(x == null ? '' : x), VERSION: 'raw-before' }) : S0;
const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
const squash = x => String(x).toLowerCase().replace(/\s+/g, '');
let pass = 0, fail = 0; const out = {}; const audio = [];
for (const c of cases) {
  const got = S.normalize(c.text);
  out[c.id] = got;
  if (c.level === 'T' || c.level === 'TA' || c.spoken === '=') {
    const exp = c.spoken === '=' ? c.text : c.spoken;
    const ok = c.spoken === '=' ? got === c.text : squash(got) === squash(exp);
    if (ok) pass++; else { fail++; console.log(`FAIL ${c.id}  in : ${c.text}\n         exp: ${exp}\n         got: ${got}`); }
  }
  if (c.level.includes('A') && !c.info) audio.push(c);
}
const snapName = process.argv.indexOf('--snapshot') > -1 ? process.argv[process.argv.indexOf('--snapshot') + 1] : null;
if (snapName) {
  fs.writeFileSync(path.join(__dirname, `snapshot-${snapName}.json`), JSON.stringify({ normalizerVersion: S.VERSION, out }, null, 1));
}
console.log(`text-level: ${pass} pass, ${fail} fail  (${cases.length} cases; ${audio.length} audio rows need a listener)`);
if (process.argv.includes('--audio-checklist')) {
  console.log('\nAUDIO CHECKLIST (score 0=clearly foreign/wrong, 1=noticeably non-native, 2=acceptable, marked, 3=native-like; IPA flagged verify is a reference, not an answer key)');
  for (const c of audio) console.log(`${c.id} [${c.cat}] "${c.text}"${c.text_b ? ' / "' + c.text_b + '"' : ''}  watch for: ${c.err}  ipa(${c.ipa_conf || 'n/a'}): ${c.ipa || '-'}`);
}
process.exit(fail ? 1 : 0);
