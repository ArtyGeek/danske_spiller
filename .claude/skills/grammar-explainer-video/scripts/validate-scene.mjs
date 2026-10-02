// Usage: node validate-scene.mjs <scene.js> [more.js ...]
// Loads each scene with a fake window and checks it against reference/scene-schema.md.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const TYPES = ["sentence", "try", "highlight", "arrow", "move", "swap", "rule", "cycle", "pause"];
const DEFAULT_T = { sentence: 2500, try: 1800, highlight: 1200, arrow: 1500, move: 1500, swap: 1500, rule: 4000, cycle: 2500, pause: 600 };
const MIN_MS = 20000, MAX_MS = 40000;

function check(file) {
  const errs = [];
  const err = (m) => errs.push(m);
  const window = {};
  try {
    vm.runInNewContext(readFileSync(file, "utf8"), { window }, { filename: file });
  } catch (e) { return { errs: ["load failed: " + e.message], total: 0 }; }
  const s = window.EXPLAINER_SCENE;
  if (!s || typeof s !== "object") return { errs: ["window.EXPLAINER_SCENE not set"], total: 0 };

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id || "")) err("id missing or not kebab-case");
  if (!s.title || typeof s.title !== "string") err("title missing");
  if (!/^(A1|A2|B1|B2|C1)$/.test(s.level || "")) err("level must be A1-C1");
  if (typeof s.verify !== "boolean") err("verify must be boolean");
  if (!Array.isArray(s.steps) || !s.steps.length) { err("steps missing/empty"); return { errs, total: 0 }; }

  let words = null, slots = null, total = 0;
  const idxOk = (i) => Number.isInteger(i) && words && i >= 0 && i < words.length;

  const loadSentence = (sn, where) => {
    if (!sn || !Array.isArray(sn.words) || !sn.words.length) { err(where + ": words missing"); words = null; return; }
    words = sn.words.slice(); slots = sn.slots || {};
    words.forEach((w, i) => {
      const m = /^\{(\d+)\}$/.exec(w);
      if (!m) return;
      if (Number(m[1]) !== i) err(`${where}: gap ${w} at index ${i} (number must equal index)`);
      if (!slots[m[1]] || (!slots[m[1]].answer && !slots[m[1]].none)) err(`${where}: slot ${m[1]} has no answer (or none:true)`);
    });
    for (const k of Object.keys(slots)) {
      if (!/^\{\d+\}$/.test(words[k] || "")) err(`${where}: slots[${k}] has no matching {${k}} gap`);
    }
  };

  s.steps.forEach((st, n) => {
    const w = `step ${n} (${st && st.type})`;
    if (!st || !TYPES.includes(st.type)) { err(w + ": unknown type"); return; }
    if (st.t !== undefined && !(Number.isFinite(st.t) && st.t > 0)) err(w + ": bad t");
    total += st.t ?? DEFAULT_T[st.type];
    switch (st.type) {
      case "sentence": loadSentence(st, w); break;
      case "cycle": loadSentence(st.sentence, w); break;
      case "try":
        if (!idxOk(st.slot) || !slots || !slots[st.slot]) err(w + ": slot not a gap in current sentence");
        if (!st.word) err(w + ": word missing");
        if (typeof st.ok !== "boolean") err(w + ": ok must be boolean");
        else if (slots && slots[st.slot] && st.word) {
          const right = !slots[st.slot].none && st.word === slots[st.slot].answer;
          if (st.ok !== right) err(`${w}: ok=${st.ok} but word "${st.word}" vs answer "${slots[st.slot].none ? "(none fits)" : slots[st.slot].answer}"`);
        }
        break;
      case "highlight": {
        const l = st.words ?? [st.word];
        if (!l.every(idxOk)) err(w + ": word index out of range");
        break;
      }
      case "arrow":
        if (!idxOk(st.from) || !idxOk(st.to)) err(w + ": from/to out of range");
        break;
      case "move":
        if (!idxOk(st.word) || !idxOk(st.to)) err(w + ": word/to out of range");
        break;
      case "swap":
        if (!Array.isArray(st.words) || st.words.length !== 2 || !st.words.every(idxOk)) err(w + ": needs 2 in-range indices");
        break;
      case "rule":
        if (!Array.isArray(st.lines) || !st.lines.length) err(w + ": lines missing");
        else if (st.lines.length > 3) err(w + `: ${st.lines.length} lines (max 3)`);
        break;
    }
  });

  if (total < MIN_MS || total > MAX_MS) err(`total duration ${total / 1000}s outside 20-40 s`);
  if (!s.steps.some((x) => x.type === "rule")) err("no rule step");
  return { errs, total };
}

const files = process.argv.slice(2);
if (!files.length) { console.error("usage: node validate-scene.mjs <scene.js>..."); process.exit(2); }
let bad = 0;
for (const f of files) {
  const { errs, total } = check(f);
  if (errs.length) { bad++; console.log(`FAIL ${f}`); errs.forEach((e) => console.log("  - " + e)); }
  else console.log(`OK   ${f} (${(total / 1000).toFixed(1)} s)`);
}
process.exit(bad ? 1 : 0);
