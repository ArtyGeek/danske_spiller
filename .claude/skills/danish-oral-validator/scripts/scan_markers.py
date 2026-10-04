#!/usr/bin/env python3
"""First-pass scan of a Danish speech transcript.

Usage: python scan_markers.py transcript.txt     (or pipe text on stdin)

Prints JSON. Flags are LEADS for a human/Claude to check in context, not findings:
regexes cannot tell a slip from a quote, a joke or a dialect form.
Extend the pattern lists below when you confirm a new recurring error.
"""
import json
import re
import sys

PARTICLES = ["jo", "altså", "vel", "nok", "da", "sgu", "skam", "osse", "også", "lige",
             "bare", "simpelthen", "faktisk", "egentlig", "mon", "jamen", "ligesom", "sådan"]
FILLERS = ["øh", "øhm", "nå", "nåh", "ej", "hov", "åh", "ad", "puh", "pyt", "okay", "hva", "ik", "ikk"]
REDUCED = ["hva'", "ik'", "sku'", "ku'", "vil'", "ha'", "ska'", "æ", "jæ", "nåt", "de'"]

FORMAL = ["hvorledes", "således", "endvidere", "desuden", "ydermere", "derudover",
          "vedrørende", "angående", "såfremt", "hvorvidt", "samtidig med"]

NEUTER = r"(barn|hus|navn|vand|brød|land|øje|sted|problem|spørgsmål|arbejde|liv|ord|hold|værelse)"
COMMON = r"(dag|bil|pige|mand|kvinde|gade|by|uge|ting|ven|mor|far)"

# (regex, category, severity, note)
FLAGS = [
    (r"\b(en|den|min|din|sin)\s+" + NEUTER + r"\b", "gender", "M", "common-gender article before an et-noun"),
    (r"\b(et|det|mit|dit|sit)\s+" + COMMON + r"\b", "gender", "M", "neuter article before an en-noun (check 'det' as pronoun)"),
    (r"\b(den|det)\s+\w+e\s+(?!ven\b|den\b|men\b|hen\b)\w{3,}(en|et)\b", "double-definiteness", "H", "e.g. 'den store bilen' (check false positives)"),
    (r"\bgør(e)?(\s+ikke)?\s+mening\b", "calque-en", "M", "give mening"),
    (r"\b(du|De)\s+er\s+velkommen\b", "calque-en", "M", "reply to thanks should be selv tak / det var så lidt"),
    (r"\bjeg\s+er\s+(varm|kold)\b", "calque-en", "M", "jeg har det varmt/koldt"),
    (r"\bjeg\s+er\s+god\b", "calque-en", "L", "jeg har det godt / det går fint"),
    (r"\bkan\s+ikke\s+vente\s+(med|til)\b", "calque-en", "M", "jeg glæder mig til"),
    (r"\bhvad\s+er\s+(din|dit)\s+navn\b", "calque-en", "M", "hvad hedder du"),
    (r"\bhave\s+en\s+god\s+tid\b", "calque-en", "M", "have det godt/hyggeligt"),
    (r"\btage\s+en\s+beslutning\b", "calque-en", "L", "træffe en beslutning (tage is increasingly accepted)"),
    (r"\bjeg\s+har\s+(kommet|gået|rejst)\b", "auxiliary", "M", "jeg er kommet/gået/rejst"),
    (r"\b(har|havde)\s+(gå|spise|se|gøre|tage|komme|sige)\b", "verb-form", "H", "infinitive where a participle is needed"),
    (r"\b(vil|kan|skal|må|bør)\s+(kommer|gør|siger|tager|ser|går|spiser)\b", "verb-form", "H", "present tense after a modal"),
    (r"\b(i\s+(dag|går|morgen|aften)|nu|så|derfor)\s+(jeg|du|han|hun|vi|de)\s+\w+", "word-order", "H", "possible V2 violation after fronted element"),
    (r"\b(fordi|at|hvis|når|som)\s+(jeg|du|han|hun|vi|de|det)\s+\w+\s+(ikke|aldrig|altid|også|bare)\b", "word-order", "L", "adverb after verb in subordinate clause (common in native speech; weight low)"),
    (r"\b(inte|och|mycket|jag|bara|någon|också|varför)\b", "leak-swedish", "M", "Swedish word"),
    (r"\b(veldig|noe|igjen|ikkje|heter)\b", "leak-norwegian", "M", "Norwegian word"),
    (r"\b(ich|nicht|und|aber|auch|sehr|gut)\b", "leak-german", "L", "German word ('gut' may be a loan)"),
    (r"\b(and|but|because|very|really|actually|the|with)\b", "leak-english", "L", "English word (sparse = code-switching)"),
]


def tokenize(text):
    return re.findall(r"[a-zæøåéèü']+", text.lower())


def count(tokens, vocab):
    return sum(1 for t in tokens if t in vocab)


def main():
    text = open(sys.argv[1], encoding="utf-8").read() if len(sys.argv) > 1 else sys.stdin.read()
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    # strip leading speaker labels like "A:" / "Interviewer:"
    utterances = [re.sub(r"^[\w .\-]{1,20}:\s*", "", l) for l in lines]
    tokens = tokenize(" ".join(utterances))
    n = max(len(tokens), 1)

    particles = count(tokens, set(PARTICLES))
    fillers = count(tokens, set(FILLERS))
    reduced = sum(text.lower().count(r) for r in REDUCED)
    formal = [w for w in FORMAL if re.search(r"\b" + re.escape(w) + r"\b", text.lower())]
    repairs = len(re.findall(r"(—|--|\.\.\.|…)\s*(altså|øh|nej|jeg mener)|\b(\w+)\s+\3\b", text.lower()))
    formal_de = len(re.findall(r"\bDe\b|\bDem\b|\bDeres\b", text))

    flags = []
    for i, u in enumerate(utterances, 1):
        for pat, cat, sev, note in FLAGS:
            m = re.search(pat, u, re.IGNORECASE)
            if m:
                flags.append({"utterance": i, "quote": m.group(0), "category": cat,
                              "severity": sev, "note": note})

    lens = [len(tokenize(u)) for u in utterances]
    out = {
        "utterances": len(utterances),
        "tokens": len(tokens),
        "avg_utterance_tokens": round(sum(lens) / max(len(lens), 1), 1),
        "per_100_tokens": {
            "particles": round(100 * particles / n, 1),
            "fillers": round(100 * fillers / n, 1),
            "reduced_forms": round(100 * reduced / n, 1),
        },
        "repair_like_patterns": repairs,
        "formal_register_hits": formal,
        "formal_pronoun_De_hits": formal_de,
        "flags": flags,
        "caveats": [
            "Flags are leads; read each in context.",
            "Low particle/filler/reduction density is weak evidence if the transcript is ASR-normalised or the passage is short or formal.",
            "Pronunciation is not assessable from text.",
        ],
    }
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        sys.stdout.reconfigure(encoding="utf-8")
    print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
