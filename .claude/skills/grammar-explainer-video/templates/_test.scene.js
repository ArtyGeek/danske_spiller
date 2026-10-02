/* Minimal test scene exercising every step type. Not a real lesson. */
window.EXPLAINER_SCENE = {
  id: "test-all-steps",
  title: "en eller et",
  level: "A1",
  verify: true,
  steps: [
    { type: "sentence", words: ["Jeg", "har", "{1}", "hus"], slots: { 1: { answer: "et" } } },
    { type: "highlight", word: 3, color: "Y" },
    { type: "try", slot: 1, word: "en", ok: false },
    { type: "try", slot: 1, word: "et", ok: true },
    { type: "arrow", from: 2, to: 3, label: "hører til" },
    { type: "pause", t: 600 },
    { type: "cycle", sentence: { words: ["Hun", "ser", "{1}", "bil"], slots: { 1: { answer: "en" } } } },
    { type: "try", slot: 1, word: "en", ok: true },
    { type: "move", word: 0, to: 2 },
    { type: "swap", words: [0, 1] },
    { type: "highlight", words: [0, 1], color: "C" },
    { type: "rule", lines: ["en-ord eller et-ord", "et hus → huset", "en bil → bilen"] },
    { type: "cycle", sentence: { words: ["Vi", "har", "{1}", "bord"], slots: { 1: { answer: "et" } } } },
    { type: "try", slot: 1, word: "et", ok: true }
  ]
};
