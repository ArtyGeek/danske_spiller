# Scene schema (contract between scenes and player)

A scene is a plain JS file that sets `window.EXPLAINER_SCENE = { ... }`. No fetch, no modules (must work on file://).

```js
window.EXPLAINER_SCENE = {
  id: "en-et",                       // kebab-case
  title: "en eller et",              // Danish, shown on monitor title bar
  level: "A1",                       // A1-C1
  verify: false,                     // true = needs native-speaker check
  steps: [ /* see step types */ ]
};
```

Silent: no audio, no narration. All visible text Danish. Total length 20-40 s.

## Step types (every step has optional `t` = duration ms, default per type)

| type | fields | effect |
|---|---|---|
| `sentence` | `words: ["Jeg","har","{2}","hus"]`, `slots: {2:{answer:"et"}}` | shows sentence as pixel tiles; `{n}` is an empty gap; n equals the gap's word index. Use `{n:{none:true}}` for a gap where no word fits (wrong position), so every `try` there has `ok:false` |
| `try` | `slot:2, word:"en", ok:false` | tile flies into gap; wrong = shake + red X and flies back; ok = locks green with check |
| `highlight` | `word:3` or `words:[2,3]`, `color:"Y"` | pulse/outline tiles (PAL letter) |
| `arrow` | `from:2, to:3, label:"hører til"` | pixel arrow between two tiles |
| `move` | `word:1, to:3` | tile slides to new index, others shift (word order) |
| `swap` | `words:[1,2]` | two tiles exchange places |
| `rule` | `lines:["et-ord","et hus → huset"]` | rule card replaces stage; max 3 short lines |
| `cycle` | `sentence:{...}` | clears and starts next example (same shape as `sentence`) |
| `pause` | `t:600` | wait |

Word indices are 0-based positions in the current `words` array. Colour letters use the Sjovt PAL (`W O Y C A B R T G L P S`, `K` outline).

## Structure of a good scene
1. `sentence` with a gap. 2. `try` wrong, `try` right. 3. `rule`. 4. 2-3 `cycle` examples with `try ok:true`. Loops at the end.

## Player API (`explainer.js`)
`Explainer.mount(rootEl, scene, opts)` returns `{play, pause, step, restart, onend}`. `opts`: `{autoplay, loop, speed, tts}`. Honors `prefers-reduced-motion` (manual step mode, no motion). Keyboard: Space play/pause, Right step, R restart. Controls >=44px. Works at 360px width, dark mode.
