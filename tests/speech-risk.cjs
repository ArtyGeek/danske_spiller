// Before/after: TTS-hostile tokens in real spoken strings (from the pipeline audit) raw vs normalized.
const S = require('../shared/dansk-speech.js');
const raw = [
 'Filmen startede kl. 19.00. Vi kom kl. 19.20. Filmen … allerede, da vi kom.',
 'Bussen kørte kl. 7.50. Jeg kom kl. 8.00.', 'Mødet begyndte kl. 10. Du kom først kl. 10.15.',
 'Butikken lukkede kl. 17. Vi kom kl. 17.30.', 'Du stod i kø fra kl. 9. Kl. 11 kom du ind.',
 'Ved midnat var alle gæster gået. Du kom kl. 1.', 'Min tante … i morgen kl. 16.',
 'Hun flyttede til Aarhus i 2023 og bor der stadig. Hun … i Aarhus siden 2023.',
 "Du fortæller om 1990'erne. I 1990'erne … internettet hurtigt.",
 'Du er guide … Til venstre … I Rundetårn, som blev bygget i 1600-tallet.',
 'Skolen har planlagt det. Folkeskolerne … for sommerferie den 24. juni.',
 'Formelt skrift. Ansøgninger … senest den 1. marts.',
 'Danmark kom med i EU i 1973 og er stadig medlem. Danmark … medlem af EU i over halvtreds år.',
 'Året er 1523: Kongen … landet, og et nyt rige begynder.', 'Firmaet havde eksisteret i 50 år. I 2020 lukkede det.',
 'Du er lærer. … side 23.', 'Du har lært at svømme. Jeg … svømme 400 meter.', 'Børn under 12 … ikke se filmen.',
 'Hun er 35 og taler om sit liv.', 'Din søster er 19 nu. Hun … tyve næste år.', 'Maden … kun mellem klokken 11 og 13.',
 'Teaterstykket … klokken 20 på lørdag.', 'Det regnede fra kl. 6. Solen kom frem kl. 12.',
 'kan/skal/vil + verbum. jeg kan svømme.', 'fra = sted / afsender. af = lavet / skrevet af.', 'en bil → bilen. et hus → huset.',
 'Ofte -er: bil → biler. Hvert ord: barn → børn', 'og / men / eller / for:. subjekt – verbum – ikke.',
];
let before = 0, after = 0, residual = [];
for (const r of raw) {
  const gate = x => S.risks(x).filter(k => k !== 'acronym'); // acronym letter-naming is [verify], left to the voice
  const b = gate(r).length, n = S.normalize(r), a = gate(n);
  before += b; after += a.length; if (a.length) residual.push([n, a]);
}
console.log(`strings: ${raw.length}  risk flags before: ${before}  after: ${after}`);
residual.forEach(([n, a]) => console.log('  residual', a.join(','), '|', n));
process.exit(after === 0 ? 0 : 1);
