// tidsmaskinen/data.js
// Tidsmaskinen item bank. Exports window.TIDS_DATA = { <mode>: [items] }.
// Modes: present_vs_preterite, preterite_vs_perfect, pluperfect, future, modal,
// conditional, infinitive, passive, imperative. Verb forms were generated from
// shared/data/verbs.js where the verb is listed there.
// MC items: options + correct (+ accepted_answers). future: accepted_answers + distractors.
// conditional: slots[{accepted_answers, distractors}] (one slot per ___).
window.TIDS_DATA = {
  "present_vs_preterite": [
    {
      "id": "lige-nu-leger-boernene-i-haven",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det foregår lige nu.",
      "sentence": "Lige nu ___ børnene i haven.",
      "options": [
        "legede",
        "havde leget",
        "leger"
      ],
      "correct": "leger",
      "accepted_answers": [
        "leger"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "nu-laver-vi-aftensmad",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi er i køkkenet nu.",
      "sentence": "Nu ___ vi aftensmad.",
      "options": [
        "havde lavet",
        null,
        "laver"
      ],
      "correct": "laver",
      "accepted_answers": [
        "laver"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "se-det-regner-nu",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du kigger ud ad vinduet.",
      "sentence": "Se! Det ___ nu.",
      "options": [
        "regner",
        "havde regnet",
        "regnede"
      ],
      "correct": "regner",
      "accepted_answers": [
        "regner"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "min-soester-arbejder-stadig-paa-kontoret",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Hun er stadig på arbejde.",
      "sentence": "Min søster ___ stadig på kontoret.",
      "options": [
        "arbejder",
        "havde arbejdet",
        null
      ],
      "correct": "arbejder",
      "accepted_answers": [
        "arbejder"
      ],
      "note": "Når noget gælder stadig, bruges nutid."
    },
    {
      "id": "min-mor-taler-med-min-bror-i-telefonen-lige-nu",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du ringer til din bror.",
      "sentence": "Min mor ___ med min bror i telefonen lige nu.",
      "options": [
        "taler",
        "talte",
        "havde talt"
      ],
      "correct": "taler",
      "accepted_answers": [
        "taler"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "nu-om-dage-arbejder-mange-mennesker-hjemmefra",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er sådan i dag.",
      "sentence": "Nu om dage ___ mange mennesker hjemmefra.",
      "options": [
        "arbejder",
        "arbejdede",
        null
      ],
      "correct": "arbejder",
      "accepted_answers": [
        "arbejder"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "vi-bor-paa-hotel-i-denne-uge",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi er i Aarhus på ferie.",
      "sentence": "Vi ___ på hotel i denne uge.",
      "options": [
        "havde boet",
        null,
        "bor"
      ],
      "correct": "bor",
      "accepted_answers": [
        "bor"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "han-ligger-i-sengen-fordi-han-er-syg",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Han er syg i dag.",
      "sentence": "Han ___ i sengen, fordi han er syg.",
      "options": [
        "ligger",
        "lå",
        null
      ],
      "correct": "ligger",
      "accepted_answers": [
        "ligger"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "jeg-koeber-maelk-og-broed-og-saa-gaar-jeg-hjem",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Jeg er i supermarkedet.",
      "sentence": "Jeg ___ mælk og brød, og så går jeg hjem.",
      "options": [
        "købte",
        "køber",
        "havde købt"
      ],
      "correct": "køber",
      "accepted_answers": [
        "køber"
      ],
      "note": "Inden for samme tidsramme skal verberne have samme tid."
    },
    {
      "id": "jeg-hedder-mette-og-jeg-er-28-aar",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du præsenterer dig selv.",
      "sentence": "Jeg ___ Mette, og jeg er 28 år.",
      "options": [
        "hed",
        "havde heddet",
        "hedder"
      ],
      "correct": "hedder",
      "accepted_answers": [
        "hedder"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "min-bror-bor-i-koebenhavn-og-studerer-medicin",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi taler om min familie nu.",
      "sentence": "Min bror ___ i København og studerer medicin.",
      "options": [
        "bor",
        null,
        "boede"
      ],
      "correct": "bor",
      "accepted_answers": [
        "bor"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "boernene-bader-i-poolen-mens-vi-laver-mad",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er sommer, og vi er i haven.",
      "sentence": "Børnene ___ i poolen, mens vi laver mad.",
      "options": [
        "badede",
        "bader",
        "havde badet"
      ],
      "correct": "bader",
      "accepted_answers": [
        "bader"
      ],
      "note": "Inden for samme tidsramme skal verberne have samme tid."
    },
    {
      "id": "til-venstre-ser-i-rundetaarn-som-blev-bygget-i-1600",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du er guide og viser rundt nu.",
      "sentence": "Til venstre ___ I Rundetårn, som blev bygget i 1600-tallet.",
      "options": [
        "ser",
        null,
        "så"
      ],
      "correct": "ser",
      "accepted_answers": [
        "ser"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "tilbuddet-gaelder-til-og-med-fredag",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Tilbuddet gælder stadig.",
      "sentence": "Tilbuddet ___ til og med fredag.",
      "options": [
        "gælder",
        "gjaldt",
        null
      ],
      "correct": "gælder",
      "accepted_answers": [
        "gælder"
      ],
      "note": "Når noget gælder stadig, bruges nutid."
    },
    {
      "id": "i-oejeblikket-giver-butikken-rabat-paa-alle-varer",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det er butikkens tilbud i dag.",
      "sentence": "I øjeblikket ___ butikken rabat på alle varer.",
      "options": [
        "havde givet",
        "gav",
        "giver"
      ],
      "correct": "giver",
      "accepted_answers": [
        "giver"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "skoledagen-starter-klokken-otte-og-slutter-klokken-tre",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er sådan hver dag i dag.",
      "sentence": "Skoledagen ___ klokken otte og slutter klokken tre.",
      "options": [
        "startede",
        "starter",
        null
      ],
      "correct": "starter",
      "accepted_answers": [
        "starter"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "vand-koger-ved-100-grader",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det gælder altid.",
      "sentence": "Vand ___ ved 100 grader.",
      "options": [
        "koger",
        null,
        "havde kogt"
      ],
      "correct": "koger",
      "accepted_answers": [
        "koger"
      ],
      "note": "Generelle sandheder står i nutid."
    },
    {
      "id": "solen-staar-op-i-oest",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det gælder altid.",
      "sentence": "Solen ___ op i øst.",
      "options": [
        "havde stået",
        "står",
        "stod"
      ],
      "correct": "står",
      "accepted_answers": [
        "står"
      ],
      "note": "Generelle sandheder står i nutid."
    },
    {
      "id": "danmark-ligger-mellem-nordsoeen-og-oestersoeen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er stadig sådan i dag.",
      "sentence": "Danmark ___ mellem Nordsøen og Østersøen.",
      "options": [
        "lå",
        "ligger",
        null
      ],
      "correct": "ligger",
      "accepted_answers": [
        "ligger"
      ],
      "note": "Generelle sandheder står i nutid."
    },
    {
      "id": "jeg-er-sulten-saa-jeg-spiser-nu",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er sandt, mens du taler.",
      "sentence": "Jeg ___ sulten, så jeg spiser nu.",
      "options": [
        "var",
        "er",
        "havde været"
      ],
      "correct": "er",
      "accepted_answers": [
        "er"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "nu-danser-hun-med-sin-kaereste-og-musikken-er-hoej",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Hun er til en fest i aften.",
      "sentence": "Nu ___ hun med sin kæreste, og musikken er høj.",
      "options": [
        "danser",
        "havde danset",
        "dansede"
      ],
      "correct": "danser",
      "accepted_answers": [
        "danser"
      ],
      "note": "Inden for samme tidsramme skal verberne have samme tid."
    },
    {
      "id": "direktoeren-taler-i-oejeblikket-om-budgettet",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du er i et møde.",
      "sentence": "Direktøren ___ i øjeblikket om budgettet.",
      "options": [
        "havde talt",
        "taler",
        "talte"
      ],
      "correct": "taler",
      "accepted_answers": [
        "taler"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "nu-starter-nyhederne-saa-vaer-stille",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du ser fjernsyn.",
      "sentence": "Nu ___ nyhederne, så vær stille.",
      "options": [
        "startede",
        "havde startet",
        "starter"
      ],
      "correct": "starter",
      "accepted_answers": [
        "starter"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "jeg-drikker-en-kop-kaffe-og-laeser-avisen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Jeg sidder på cafeen nu.",
      "sentence": "Jeg ___ en kop kaffe og læser avisen.",
      "options": [
        "drak",
        "havde drukket",
        "drikker"
      ],
      "correct": "drikker",
      "accepted_answers": [
        "drikker"
      ],
      "note": "Inden for samme tidsramme skal verberne have samme tid."
    },
    {
      "id": "kunden-koeber-tre-rundstykker",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Han står ved bagerens disk.",
      "sentence": "Kunden ___ tre rundstykker.",
      "options": [
        "køber",
        null,
        "købte"
      ],
      "correct": "køber",
      "accepted_answers": [
        "køber"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "min-ven-bor-i-oejeblikket-i-kina-saa-vi-skriver-til",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Nu fortæller en ven.",
      "sentence": "Min ven ___ i øjeblikket i Kina, så vi skriver til hinanden hver dag.",
      "options": [
        "havde boet",
        "bor",
        "boede"
      ],
      "correct": "bor",
      "accepted_answers": [
        "bor"
      ],
      "note": "Det, der foregår nu eller er sandt nu, står i nutid."
    },
    {
      "id": "boernene-sover-stadig-saa-vi-kan-ikke-gaa-endnu",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du taler om i dag.",
      "sentence": "Børnene ___ stadig, så vi kan ikke gå endnu.",
      "options": [
        "havde sovet",
        "sov",
        "sover"
      ],
      "correct": "sover",
      "accepted_answers": [
        "sover"
      ],
      "note": "Når noget gælder stadig, bruges nutid."
    },
    {
      "id": "laereren-skriver-paa-tavlen-og-vi-skriver-ned",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi sidder i klassen nu.",
      "sentence": "Læreren ___ på tavlen, og vi skriver ned.",
      "options": [
        "skriver",
        null,
        "havde skrevet"
      ],
      "correct": "skriver",
      "accepted_answers": [
        "skriver"
      ],
      "note": "Inden for samme tidsramme skal verberne have samme tid."
    },
    {
      "id": "i-gaar-gik-jeg-en-lang-tur-i-skoven",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete i går.",
      "sentence": "I går ___ jeg en lang tur i skoven.",
      "options": [
        "var gået",
        null,
        "gik"
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-loerdags-saa-vi-en-god-film",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete i lørdags.",
      "sentence": "I lørdags ___ vi en god film.",
      "options": [
        "havde set",
        "ser",
        "så"
      ],
      "correct": "så",
      "accepted_answers": [
        "så"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "for-to-aar-siden-fik-jeg-et-nyt-job",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete for to år siden.",
      "sentence": "For to år siden ___ jeg et nyt job.",
      "options": [
        "fik",
        "får",
        null
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "sidste-uge-rejste-min-soester-til-spanien",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete i sidste uge.",
      "sentence": "Sidste uge ___ min søster til Spanien.",
      "options": [
        "rejser",
        "rejste",
        null
      ],
      "correct": "rejste",
      "accepted_answers": [
        "rejste"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-morges-stod-jeg-tidligt-og-tog-toget-klokken-seks",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er afsluttet.",
      "sentence": "I morges ___ jeg tidligt og tog toget klokken seks.",
      "options": [
        "havde stået",
        null,
        "stod"
      ],
      "correct": "stod",
      "accepted_answers": [
        "stod"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-1999-koebte-de-deres-foerste-hus",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det skete i 1999.",
      "sentence": "I 1999 ___ de deres første hus.",
      "options": [
        "køber",
        "købte",
        "havde købt"
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "vi-dansede-hele-natten-og-gik-foerst-i-seng-klokken-fem",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om en fest sidste weekend.",
      "sentence": "Vi ___ hele natten og gik først i seng klokken fem.",
      "options": [
        "dansede",
        "havde danset",
        "danser"
      ],
      "correct": "dansede",
      "accepted_answers": [
        "dansede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "jeg-moedte-min-nye-nabo-i-fredags",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete i fredags.",
      "sentence": "Jeg ___ min nye nabo i fredags.",
      "options": [
        "havde mødt",
        "mødte",
        "møder"
      ],
      "correct": "mødte",
      "accepted_answers": [
        "mødte"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-sommers-var-vi-en-uge-i-norge",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det var i sommers.",
      "sentence": "I sommers ___ vi en uge i Norge.",
      "options": [
        "er",
        "var",
        "havde været"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-gaar-aftes-laeste-jeg-en-bog-faerdig",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om i går aftes.",
      "sentence": "I går aftes ___ jeg en bog færdig.",
      "options": [
        "havde læst",
        "læste",
        "læser"
      ],
      "correct": "læste",
      "accepted_answers": [
        "læste"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "for-fem-minutter-siden-ringede-telefonen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete for lidt siden.",
      "sentence": "For fem minutter siden ___ telefonen.",
      "options": [
        "ringede",
        "ringer",
        null
      ],
      "correct": "ringede",
      "accepted_answers": [
        "ringede"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "for-et-par-maaneder-siden-koebte-vi-en-ny-sofa",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det skete for et par måneder siden.",
      "sentence": "For et par måneder siden ___ vi en ny sofa.",
      "options": [
        "købte",
        "havde købt",
        null
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "som-barn-boede-jeg-i-en-lille-by-ved-havet",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om din barndom.",
      "sentence": "Som barn ___ jeg i en lille by ved havet.",
      "options": [
        "bor",
        "havde boet",
        "boede"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "sidste-sommer-var-vi-i-italien",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om en ferie, der er slut.",
      "sentence": "Sidste sommer ___ vi i Italien.",
      "options": [
        "er",
        "var",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-2010-afsluttede-hun-sin-uddannelse-og-fik-straks",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det var i 2010.",
      "sentence": "I 2010 ___ hun sin uddannelse og fik straks arbejde.",
      "options": [
        "afsluttede",
        "afslutter",
        null
      ],
      "correct": "afsluttede",
      "accepted_answers": [
        "afsluttede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-gaar-regnede-det-hele-dagen-saa-vi-blev-inde",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det var i går.",
      "sentence": "I går ___ det hele dagen, så vi blev inde.",
      "options": [
        "havde regnet",
        null,
        "regnede"
      ],
      "correct": "regnede",
      "accepted_answers": [
        "regnede"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-tirsdags-fik-jeg-en-pakke-fra-tyskland",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det var i tirsdags.",
      "sentence": "I tirsdags ___ jeg en pakke fra Tyskland.",
      "options": [
        "får",
        "fik",
        null
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "sidste-aar-holdt-de-en-stor-fest-for-hele-familien",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om en begivenhed sidste år.",
      "sentence": "Sidste år ___ de en stor fest for hele familien.",
      "options": [
        "holder",
        "holdt",
        "havde holdt"
      ],
      "correct": "holdt",
      "accepted_answers": [
        "holdt"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "min-bedstefar-arbejdede-som-landmand-da-han-var-ung",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Din bedstefar er død nu.",
      "sentence": "Min bedstefar ___ som landmand, da han var ung.",
      "options": [
        "arbejder",
        "havde arbejdet",
        "arbejdede"
      ],
      "correct": "arbejdede",
      "accepted_answers": [
        "arbejdede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-2015-arbejdede-jeg-paa-en-fabrik-men-i-dag-arbejder",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om dit første job.",
      "sentence": "I 2015 ___ jeg på en fabrik, men i dag arbejder jeg på et kontor.",
      "options": [
        "arbejder",
        "arbejdede",
        "havde arbejdet"
      ],
      "correct": "arbejdede",
      "accepted_answers": [
        "arbejdede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-gaar-koebte-jeg-nye-sko-i-byen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om gårsdagens indkøb.",
      "sentence": "I går ___ jeg nye sko i byen.",
      "options": [
        "køber",
        "havde købt",
        "købte"
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "koncerten-startede-klokken-otte-i-gaar-aftes",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er over nu.",
      "sentence": "Koncerten ___ klokken otte i går aftes.",
      "options": [
        "havde startet",
        "starter",
        "startede"
      ],
      "correct": "startede",
      "accepted_answers": [
        "startede"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-soendags-gik-vi-ud-at-spise-bagefter",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi var i biografen i søndags.",
      "sentence": "I søndags ___ vi ud at spise bagefter.",
      "options": [
        "går",
        "gik",
        null
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "for-mange-aar-siden-var-der-en-bager-i-vores-gade",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det skete for mange år siden.",
      "sentence": "For mange år siden ___ der en bager i vores gade.",
      "options": [
        "var",
        null,
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-weekenden-vaskede-jeg-hele-huset",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om weekenden, som er slut.",
      "sentence": "I weekenden ___ jeg hele huset.",
      "options": [
        "havde vasket",
        "vasker",
        "vaskede"
      ],
      "correct": "vaskede",
      "accepted_answers": [
        "vaskede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-morges-fandt-jeg-min-cykel-og-saa-kom-jeg-for-sent",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det skete i morges.",
      "sentence": "I morges ___ jeg min cykel, og så kom jeg for sent.",
      "options": [
        "finder",
        "fandt",
        null
      ],
      "correct": "fandt",
      "accepted_answers": [
        "fandt"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "foer-2018-boede-de-sammen-i-et-lille-hus-ved-vandet",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Hendes mand døde i 2018.",
      "sentence": "Før 2018 ___ de sammen i et lille hus ved vandet.",
      "options": [
        "havde boet",
        "boede",
        "bor"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "sidste-maaned-gav-jeg-en-ny-telefon",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det var sidste måned.",
      "sentence": "Sidste måned ___ jeg en ny telefon.",
      "options": [
        "giver",
        "gav",
        null
      ],
      "correct": "gav",
      "accepted_answers": [
        "gav"
      ],
      "note": "Tidsudtryk som \"for tre år siden\" og \"i går\" peger på en afsluttet fortid og kræver datid."
    },
    {
      "id": "i-aftes-saa-jeg-en-film-og-saa-gik-jeg-i-seng",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om i aftes.",
      "sentence": "I aftes ___ jeg en film, og så gik jeg i seng.",
      "options": [
        "så",
        null,
        "havde set"
      ],
      "correct": "så",
      "accepted_answers": [
        "så"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "til-jul-var-vi-alle-sammen-hos-mormor-sidste-aar",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det skete i julen.",
      "sentence": "Til jul ___ vi alle sammen hos mormor sidste år.",
      "options": [
        "havde været",
        "var",
        "er"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "jeg-spillede-fodbold-i-ti-aar-men-jeg-stoppede-i-2020",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det er en afsluttet periode.",
      "sentence": "Jeg ___ fodbold i ti år, men jeg stoppede i 2020.",
      "options": [
        "havde spillet",
        "spiller",
        "spillede"
      ],
      "correct": "spillede",
      "accepted_answers": [
        "spillede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-september-koerte-vi-til-berlin-og-besoegte-nogle",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det var i september.",
      "sentence": "I september ___ vi til Berlin og besøgte nogle venner.",
      "options": [
        "kørte",
        null,
        null
      ],
      "correct": "kørte",
      "accepted_answers": [
        "kørte"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "hun-boede-her-indtil-i-fredags-men-saa-flyttede-hun",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Hun er ikke her længere.",
      "sentence": "Hun ___ her indtil i fredags, men så flyttede hun.",
      "options": [
        "boede",
        "havde boet",
        null
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "i-gaar-gik-jeg-til-tandlaege-og-bagefter-handlede-jeg",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller, hvad du lavede i går.",
      "sentence": "I går ___ jeg til tandlæge, og bagefter handlede jeg.",
      "options": [
        "var gået",
        null,
        "gik"
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "note": "En afsluttet handling på et bestemt tidspunkt i fortiden står i datid."
    },
    {
      "id": "hver-morgen-drikker-jeg-en-kop-kaffe-foer-jeg-tager-paa",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om din rutine i dag.",
      "sentence": "Hver morgen ___ jeg en kop kaffe, før jeg tager på arbejde.",
      "options": [
        "havde drukket",
        "drikker",
        "drak"
      ],
      "correct": "drikker",
      "accepted_answers": [
        "drikker"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "hver-sommer-koerte-vi-til-jylland-da-jeg-var-barn",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om din barndom.",
      "sentence": "Hver sommer ___ vi til Jylland, da jeg var barn.",
      "options": [
        "havde kørt",
        "kører",
        "kørte"
      ],
      "correct": "kørte",
      "accepted_answers": [
        "kørte"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "min-far-laeser-altid-avisen-om-morgenen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Sådan er det stadig.",
      "sentence": "Min far ___ altid avisen om morgenen.",
      "options": [
        "læser",
        null,
        "læste"
      ],
      "correct": "læser",
      "accepted_answers": [
        "læser"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "dengang-spiste-vi-hver-soendag-hos-mormor",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Sådan var det, da du var barn.",
      "sentence": "Dengang ___ vi hver søndag hos mormor.",
      "options": [
        "spiste",
        "spiser",
        null
      ],
      "correct": "spiste",
      "accepted_answers": [
        "spiste"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "hver-tirsdag-gaar-jeg-til-svoemning-og-det-goer-jeg",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du beskriver din nuværende uge.",
      "sentence": "Hver tirsdag ___ jeg til svømning, og det gør jeg stadig.",
      "options": [
        "går",
        null,
        null
      ],
      "correct": "går",
      "accepted_answers": [
        "går"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "som-studerende-spiste-jeg-naesten-aldrig-morgenmad",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Sådan var det i studietiden.",
      "sentence": "Som studerende ___ jeg næsten aldrig morgenmad.",
      "options": [
        "havde spist",
        "spiser",
        "spiste"
      ],
      "correct": "spiste",
      "accepted_answers": [
        "spiste"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "hun-koerer-altid-i-bil-paa-arbejde",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Sådan er det i dag.",
      "sentence": "Hun ___ altid i bil på arbejde.",
      "options": [
        "kørte",
        "havde kørt",
        "kører"
      ],
      "correct": "kører",
      "accepted_answers": [
        "kører"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "i-gymnasiet-spiste-vi-hver-dag-i-kantinen",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det gjaldt i skoletiden.",
      "sentence": "I gymnasiet ___ vi hver dag i kantinen.",
      "options": [
        "spiste",
        "spiser",
        "havde spist"
      ],
      "correct": "spiste",
      "accepted_answers": [
        "spiste"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "nu-for-tiden-staar-jeg-ofte-tidligt-fordi-jeg-vil-loebe",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Sådan er det nu for tiden.",
      "sentence": "Nu for tiden ___ jeg ofte tidligt, fordi jeg vil løbe om morgenen.",
      "options": [
        "stod",
        "havde stået",
        "står"
      ],
      "correct": "står",
      "accepted_answers": [
        "står"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "dengang-vaskede-vi-vores-toej-i-haanden",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Din farmor fortæller om gamle dage.",
      "sentence": "Dengang ___ vi vores tøj i hånden.",
      "options": [
        "vaskede",
        "havde vasket",
        null
      ],
      "correct": "vaskede",
      "accepted_answers": [
        "vaskede"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "boernene-spiller-fodbold-hver-onsdag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Sådan er det hver uge.",
      "sentence": "Børnene ___ fodbold hver onsdag.",
      "options": [
        "spillede",
        "havde spillet",
        "spiller"
      ],
      "correct": "spiller",
      "accepted_answers": [
        "spiller"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "hver-weekend-var-vi-i-byen-da-vi-var-unge",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du taler om din ungdom.",
      "sentence": "Hver weekend ___ vi i byen, da vi var unge.",
      "options": [
        "havde været",
        "var",
        "er"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "normalt-begynder-jeg-foerst-klokken-ni-men-i-dag-har",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du beskriver din hverdag i dag.",
      "sentence": "Normalt ___ jeg først klokken ni, men i dag har jeg fri.",
      "options": [
        "begyndte",
        "havde begyndt",
        "begynder"
      ],
      "correct": "begynder",
      "accepted_answers": [
        "begynder"
      ],
      "note": "Vaner, der stadig gælder, står i nutid.",
      "verify": true
    },
    {
      "id": "hun-har-aldrig-sukker-i-sin-kaffe",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Din chef har den vane stadig.",
      "sentence": "Hun ___ aldrig sukker i sin kaffe.",
      "options": [
        "har",
        null,
        "havde"
      ],
      "correct": "har",
      "accepted_answers": [
        "har"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "dengang-kom-posten-kun-en-gang-om-dagen",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du taler om dengang.",
      "sentence": "Dengang ___ posten kun én gang om dagen.",
      "options": [
        "var kommet",
        null,
        "kom"
      ],
      "correct": "kom",
      "accepted_answers": [
        "kom"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "vi-spiser-sammen-om-soendagen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er en fast vane i dag.",
      "sentence": "Vi ___ sammen om søndagen.",
      "options": [
        "spiser",
        null,
        "havde spist"
      ],
      "correct": "spiser",
      "accepted_answers": [
        "spiser"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "den-gang-havde-man-ikke-mobiltelefon-saa-vi-skrev-breve",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om gamle dage.",
      "sentence": "Den gang ___ man ikke mobiltelefon, så vi skrev breve.",
      "options": [
        "har",
        "havde haft",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "note": "Vaner, der hørte til en afsluttet periode, står i datid."
    },
    {
      "id": "hver-dag-gaar-vi-tur-med-hunden",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Vi gør det stadig.",
      "sentence": "Hver dag ___ vi tur med hunden.",
      "options": [
        "går",
        "var gået",
        "gik"
      ],
      "correct": "går",
      "accepted_answers": [
        "går"
      ],
      "note": "Vaner, der stadig gælder, står i nutid."
    },
    {
      "id": "foerst-stod-jeg-op-saa-boerstede-jeg-taender-og-til",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om i morges.",
      "sentence": "Først ___ jeg op, så børstede jeg tænder, og til sidst gik jeg i bad.",
      "options": [
        "havde stået",
        "stod",
        "står"
      ],
      "correct": "stod",
      "accepted_answers": [
        "stod"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "han-aabnede-doeren-gik-ind-og-taendte-lyset",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller en historie, som er slut.",
      "sentence": "Han åbnede døren, ___ ind og tændte lyset.",
      "options": [
        "var gået",
        "gik",
        "går"
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "jeg-tog-bussen-steg-ud-ved-stationen-og-gik-det-sidste",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om gårsdagen.",
      "sentence": "Jeg tog bussen, ___ ud ved stationen og gik det sidste stykke.",
      "options": [
        "stiger",
        "var steget",
        "steg"
      ],
      "correct": "steg",
      "accepted_answers": [
        "steg"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "hun-kom-hjem-lagde-sin-taske-i-gangen-og-gik-direkte-i",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om en dag, der er gået.",
      "sentence": "Hun kom hjem, ___ sin taske i gangen og gik direkte i seng.",
      "options": [
        "lagde",
        null,
        "lægger"
      ],
      "correct": "lagde",
      "accepted_answers": [
        "lagde"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "manden-gik-ind-i-butikken-tog-en-vare-og-loeb-ud-igen",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "En politirapport om i går.",
      "sentence": "Manden gik ind i butikken, ___ en vare og løb ud igen.",
      "options": [
        "tog",
        "havde taget",
        "tager"
      ],
      "correct": "tog",
      "accepted_answers": [
        "tog"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "der-var-engang-en-konge-som-boede-i-et-stort-slot",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller et eventyr.",
      "sentence": "Der var engang en konge, som ___ i et stort slot.",
      "options": [
        "havde boet",
        "boede",
        "bor"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "jeg-lavede-mad-spiste-og-tog-opvasken",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om din aften.",
      "sentence": "Jeg lavede mad, spiste og ___ opvasken.",
      "options": [
        "tog",
        null,
        null
      ],
      "correct": "tog",
      "accepted_answers": [
        "tog"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "vi-landede-klokken-seks-hentede-vores-bagage-og-koerte",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om din rejse.",
      "sentence": "Vi landede klokken seks, hentede vores bagage og ___ med taxa til hotellet.",
      "options": [
        "kører",
        "kørte",
        null
      ],
      "correct": "kørte",
      "accepted_answers": [
        "kørte"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "pigen-hoerte-en-lyd-vendte-sig-om-og-saa-en-raev",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "En historie i datid.",
      "sentence": "Pigen hørte en lyd, ___ sig om og så en ræv.",
      "options": [
        "havde vendt",
        null,
        "vendte"
      ],
      "correct": "vendte",
      "accepted_answers": [
        "vendte"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "jeg-ringede-til-hende-men-hun-svarede-ikke",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om i går.",
      "sentence": "Jeg ringede til hende, men hun ___ ikke.",
      "options": [
        "havde svaret",
        "svarer",
        "svarede"
      ],
      "correct": "svarede",
      "accepted_answers": [
        "svarede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "han-stod-lidt-ved-vinduet-og-gik-derefter-ud-i-regnen",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "En roman, der fortælles i datid.",
      "sentence": "Han stod lidt ved vinduet og ___ derefter ud i regnen.",
      "options": [
        "går",
        "gik",
        null
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "jeg-kom-hjem-lavede-aftensmad-og-saa-fjernsyn",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om i går.",
      "sentence": "Jeg kom hjem, ___ aftensmad og så fjernsyn.",
      "options": [
        "havde lavet",
        null,
        "lavede"
      ],
      "correct": "lavede",
      "accepted_answers": [
        "lavede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid."
    },
    {
      "id": "hun-sagde-ja-og-alle-gaesterne-klappede",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om et bryllup, der er slut.",
      "sentence": "Hun sagde ja, og alle gæsterne ___.",
      "options": [
        "havde klappet",
        null,
        "klappede"
      ],
      "correct": "klappede",
      "accepted_answers": [
        "klappede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid.",
      "verify": true
    },
    {
      "id": "toget-stoppede-doerene-gik-op-og-passagererne",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "En kort beretning om i går.",
      "sentence": "Toget stoppede, dørene gik op, og passagererne ___ ud.",
      "options": [
        "strømmede",
        "var strømmet",
        null
      ],
      "correct": "strømmede",
      "accepted_answers": [
        "strømmede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid.",
      "verify": true
    },
    {
      "id": "toget-afgaar-klokken-otte-i-morgen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Afgangen står i køreplanen.",
      "sentence": "Toget ___ klokken otte i morgen.",
      "options": [
        "afgik",
        "afgår",
        "var afgået"
      ],
      "correct": "afgår",
      "accepted_answers": [
        "afgår"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "vi-rejser-paa-fredag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du har en billet.",
      "sentence": "Vi ___ på fredag.",
      "options": [
        "havde rejst",
        null,
        "rejser"
      ],
      "correct": "rejser",
      "accepted_answers": [
        "rejser"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "min-kusine-kommer-i-morgen-kl-15",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er aftalt.",
      "sentence": "Min kusine ___ i morgen kl. 15.",
      "options": [
        "kom",
        "var kommet",
        "kommer"
      ],
      "correct": "kommer",
      "accepted_answers": [
        "kommer"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "moedet-starter-i-naeste-uge-paa-tirsdag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det står i kalenderen.",
      "sentence": "Mødet ___ i næste uge på tirsdag.",
      "options": [
        "havde startet",
        null,
        "starter"
      ],
      "correct": "starter",
      "accepted_answers": [
        "starter"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "jeg-gaar-til-tandlaege-paa-mandag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du har bestilt en tid.",
      "sentence": "Jeg ___ til tandlæge på mandag.",
      "options": [
        "var gået",
        "gik",
        "går"
      ],
      "correct": "går",
      "accepted_answers": [
        "går"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "skolen-lukker-for-sommerferie-den-24-juni",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Skolen har planlagt det.",
      "sentence": "Skolen ___ for sommerferie den 24. juni.",
      "options": [
        "havde lukket",
        "lukker",
        "lukkede"
      ],
      "correct": "lukker",
      "accepted_answers": [
        "lukker"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "koncerten-begynder-klokken-20-paa-loerdag",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Programmet er trykt.",
      "sentence": "Koncerten ___ klokken 20 på lørdag.",
      "options": [
        "begyndte",
        "begynder",
        null
      ],
      "correct": "begynder",
      "accepted_answers": [
        "begynder"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "vi-overtager-vores-nye-lejlighed-naeste-maaned",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er besluttet.",
      "sentence": "Vi ___ vores nye lejlighed næste måned.",
      "options": [
        "havde overtaget",
        "overtog",
        "overtager"
      ],
      "correct": "overtager",
      "accepted_answers": [
        "overtager"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "flyet-lander-i-rom-klokken-fjorten-i-morgen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Flyet har en fast tid.",
      "sentence": "Flyet ___ i Rom klokken fjorten i morgen.",
      "options": [
        "lander",
        "landede",
        null
      ],
      "correct": "lander",
      "accepted_answers": [
        "lander"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "naeste-sommer-rejser-vi-til-graekenland",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det er planlagt og betalt.",
      "sentence": "Næste sommer ___ vi til Grækenland.",
      "options": [
        "rejser",
        null,
        null
      ],
      "correct": "rejser",
      "accepted_answers": [
        "rejser"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "jeg-ringer-dig-klokken-ti-i-morgen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er aftalt til i morgen.",
      "sentence": "Jeg ___ dig klokken ti i morgen.",
      "options": [
        "ringer",
        "havde ringet",
        "ringede"
      ],
      "correct": "ringer",
      "accepted_answers": [
        "ringer"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "butikken-aabner-foerst-kl-10-i-morgen-paa-grund-af-en",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Butikken har åbningstider.",
      "sentence": "Butikken ___ først kl. 10 i morgen på grund af en kursusdag.",
      "options": [
        "åbner",
        "havde åbnet",
        null
      ],
      "correct": "åbner",
      "accepted_answers": [
        "åbner"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "i-aften-kommer-der-gaester-til-middag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du har inviteret gæster.",
      "sentence": "I aften ___ der gæster til middag.",
      "options": [
        "var kommet",
        "kom",
        "kommer"
      ],
      "correct": "kommer",
      "accepted_answers": [
        "kommer"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "hun-flyver-til-london-paa-soendag-og-bliver-der-en-uge",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det er en fast plan.",
      "sentence": "Hun ___ til London på søndag og bliver der en uge.",
      "options": [
        "flyver",
        "fløj",
        null
      ],
      "correct": "flyver",
      "accepted_answers": [
        "flyver"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "naeste-fredag-gaar-vi-ud-at-spise-sammen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er et fast arrangement.",
      "sentence": "Næste fredag ___ vi ud at spise sammen.",
      "options": [
        "var gået",
        "gik",
        "går"
      ],
      "correct": "går",
      "accepted_answers": [
        "går"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "operationen-finder-sted-den-3-marts",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Din læge har sat det på.",
      "sentence": "Operationen ___ sted den 3. marts.",
      "options": [
        "finder",
        "fandt",
        null
      ],
      "correct": "finder",
      "accepted_answers": [
        "finder"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "vi-bor-paa-hotel-i-to-naetter-naar-vi-kommer-til-rom",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du har bestilt hotellet.",
      "sentence": "Vi ___ på hotel i to nætter, når vi kommer til Rom.",
      "options": [
        "havde boet",
        "bor",
        "boede"
      ],
      "correct": "bor",
      "accepted_answers": [
        "bor"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "min-bror-bliver-30-i-naeste-maaned",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er sikkert nok, fordi det er planlagt.",
      "sentence": "Min bror ___ 30 i næste måned.",
      "options": [
        "var blevet",
        "blev",
        "bliver"
      ],
      "correct": "bliver",
      "accepted_answers": [
        "bliver"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "skolen-begynder-igen-paa-mandag-efter-ferien",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du har et fast skema.",
      "sentence": "Skolen ___ igen på mandag efter ferien.",
      "options": [
        "begyndte",
        "havde begyndt",
        "begynder"
      ],
      "correct": "begynder",
      "accepted_answers": [
        "begynder"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "i-morgen-arbejder-jeg-hjemmefra",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Det er aftalt med chefen.",
      "sentence": "I morgen ___ jeg hjemmefra.",
      "options": [
        "arbejdede",
        "arbejder",
        null
      ],
      "correct": "arbejder",
      "accepted_answers": [
        "arbejder"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "i-1801-angriber-englaenderne-koebenhavn-og-saenker",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "Teksten fortæller i nutid for at gøre historien levende.",
      "sentence": "I 1801 ___ englænderne København og sænker flåden.",
      "options": [
        "havde angrebet",
        null,
        "angriber"
      ],
      "correct": "angriber",
      "accepted_answers": [
        "angriber"
      ],
      "note": "Nutid kan bruges til at gøre en historisk fortælling levende.",
      "verify": true
    },
    {
      "id": "i-1849-faar-danmark-sin-foerste-grundlov",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "Historiebogen fortæller bevidst i nutid.",
      "sentence": "I 1849 ___ Danmark sin første grundlov.",
      "options": [
        "fik",
        "får",
        "havde fået"
      ],
      "correct": "får",
      "accepted_answers": [
        "får"
      ],
      "note": "Nutid kan bruges til at gøre en historisk fortælling levende."
    },
    {
      "id": "aaret-er-1523-kongen-forlader-landet-og-et-nyt-rige",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "En guide fortæller levende om fortiden i nutid.",
      "sentence": "Året er 1523: Kongen ___ landet, og et nyt rige begynder.",
      "options": [
        "forlader",
        "forlod",
        "havde forladt"
      ],
      "correct": "forlader",
      "accepted_answers": [
        "forlader"
      ],
      "note": "Nutid kan bruges til at gøre en historisk fortælling levende."
    },
    {
      "id": "i-1945-slutter-krigen-og-danmark-bliver-fri",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "Dokumentaren bruger nutid, selv om det er historie.",
      "sentence": "I 1945 ___ krigen, og Danmark bliver fri.",
      "options": [
        "sluttede",
        "havde sluttet",
        "slutter"
      ],
      "correct": "slutter",
      "accepted_answers": [
        "slutter"
      ],
      "note": "Nutid kan bruges til at gøre en historisk fortælling levende."
    },
    {
      "id": "i-1969-lander-mennesket-for-foerste-gang-paa-maanen",
      "level": "B2",
      "mode": "present_vs_preterite",
      "context": "En avisoverskrift bruger nutid om gamle begivenheder.",
      "sentence": "I 1969 ___ mennesket for første gang på månen.",
      "options": [
        "havde landet",
        null,
        "lander"
      ],
      "correct": "lander",
      "accepted_answers": [
        "lander"
      ],
      "note": "Nutid kan bruges til at gøre en historisk fortælling levende."
    },
    {
      "id": "et-aar-har-tolv-maaneder",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er en generel regel.",
      "sentence": "Et år ___ tolv måneder.",
      "options": [
        "havde",
        "har",
        null
      ],
      "correct": "har",
      "accepted_answers": [
        "har"
      ],
      "note": "Generelle sandheder står i nutid."
    }
  ],
  "preterite_vs_perfect": [
    {
      "id": "hun-har-boet-i-aarhus-siden-2023",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun flyttede til Aarhus i 2023 og bor der stadig.",
      "sentence": "Hun ___ i Aarhus siden 2023.",
      "options": [
        "boede",
        "havde boet",
        "har boet",
        null
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "2023",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-arbejdet-paa-det-samme-kontor-siden-marts",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg startede på jobbet i marts og er der stadig.",
      "sentence": "Jeg ___ på det samme kontor siden marts.",
      "options": [
        "arbejder",
        "arbejdede",
        "havde arbejdet",
        "har arbejdet"
      ],
      "correct": "har arbejdet",
      "accepted_answers": [
        "har arbejdet"
      ],
      "timeline": {
        "start": "marts",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "vi-har-kendt-hinanden-siden-skolen",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Vi kendte hinanden som børn og er stadig venner.",
      "sentence": "Vi ___ hinanden siden skolen.",
      "options": [
        "har kendt",
        "kendte",
        null,
        "kender"
      ],
      "correct": "har kendt",
      "accepted_answers": [
        "har kendt"
      ],
      "timeline": {
        "start": "skolen",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "han-har-spillet-guitar-siden-2020",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Min bror lærte at spille guitar i 2020 og spiller stadig.",
      "sentence": "Han ___ guitar siden 2020.",
      "options": [
        "spillede",
        "havde spillet",
        "spiller",
        "har spillet"
      ],
      "correct": "har spillet",
      "accepted_answers": [
        "har spillet"
      ],
      "timeline": {
        "start": "2020",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "det-har-regnet-siden-i-morges",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det begyndte at regne i morges, og det regner stadig.",
      "sentence": "Det ___ siden i morges.",
      "options": [
        "regner",
        "regnede",
        "har regnet",
        "havde regnet"
      ],
      "correct": "har regnet",
      "accepted_answers": [
        "har regnet"
      ],
      "timeline": {
        "start": "i morges",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-vaeret-syg-siden-mandag",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg blev syg i mandags og er stadig syg.",
      "sentence": "Jeg ___ syg siden mandag.",
      "options": [
        "havde været",
        "er",
        "har været",
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "mandag",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "vi-har-ventet-paa-bussen-siden-klokken-otte",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Vi kom klokken otte og venter stadig.",
      "sentence": "Vi ___ på bussen siden klokken otte.",
      "options": [
        "venter",
        "havde ventet",
        null,
        "har ventet"
      ],
      "correct": "har ventet",
      "accepted_answers": [
        "har ventet"
      ],
      "timeline": {
        "start": "kl. 8",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "hun-har-vaeret-uden-telefon-siden-januar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hendes telefon gik i stykker i januar, og hun mangler stadig en ny.",
      "sentence": "Hun ___ uden telefon siden januar.",
      "options": [
        "var",
        "er",
        "har været",
        "havde været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "januar",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-studeret-dansk-siden-2022",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg begyndte at læse dansk i 2022 og læser det stadig.",
      "sentence": "Jeg ___ dansk siden 2022.",
      "options": [
        "studerede",
        "har studeret",
        null,
        null
      ],
      "correct": "har studeret",
      "accepted_answers": [
        "har studeret"
      ],
      "timeline": {
        "start": "2022",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "firmaet-har-eksisteret-siden-1990",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Firmaet blev grundlagt i 1990 og findes stadig.",
      "sentence": "Firmaet ___ siden 1990.",
      "options": [
        "eksisterer",
        null,
        "har eksisteret",
        "havde eksisteret"
      ],
      "correct": "har eksisteret",
      "accepted_answers": [
        "har eksisteret"
      ],
      "timeline": {
        "start": "1990",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "hun-har-traenet-hver-morgen-siden-2018",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun begyndte at træne i 2018 og træner stadig.",
      "sentence": "Hun ___ hver morgen siden 2018.",
      "options": [
        "har trænet",
        null,
        "havde trænet",
        "trænede"
      ],
      "correct": "har trænet",
      "accepted_answers": [
        "har trænet"
      ],
      "timeline": {
        "start": "2018",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "min-nabo-har-boet-ved-siden-af-os-siden-2019",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Min nabo flyttede ind i 2019 og bor her stadig.",
      "sentence": "Min nabo ___ ved siden af os siden 2019.",
      "options": [
        "boede",
        "har boet",
        null,
        null
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "2019",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "det-har-vaeret-koldt-siden-december",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det blev koldt i december, og det er stadig koldt.",
      "sentence": "Det ___ koldt siden december.",
      "options": [
        "var",
        "har været",
        null,
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "december",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "han-har-boet-i-danmark-siden-2015",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han kom til Danmark i 2015 og er her stadig.",
      "sentence": "Han ___ i Danmark siden 2015.",
      "options": [
        "har boet",
        "boede",
        "havde boet",
        "bor"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "2015",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-ikke-set-ham-ikke-siden-juni",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg så ham sidst i juni, og nu er det august.",
      "sentence": "Jeg ___ ham ikke siden juni.",
      "options": [
        "havde ikke set",
        "har ikke set",
        "så ikke",
        null
      ],
      "correct": "har ikke set",
      "accepted_answers": [
        "har ikke set"
      ],
      "timeline": {
        "start": "juni",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Ikke ... siden\" om noget, der ikke er sket frem til nu, kræver perfektum."
    },
    {
      "id": "jeg-har-ikke-talt-ikke-med-hende-siden-jul",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du talte sidst med din mor til jul.",
      "sentence": "Jeg ___ ikke med hende siden jul.",
      "options": [
        "talte ikke",
        "taler ikke",
        null,
        "har ikke talt"
      ],
      "correct": "har ikke talt",
      "accepted_answers": [
        "har ikke talt"
      ],
      "timeline": {
        "start": "jul",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Ikke ... siden\" om noget, der ikke er sket frem til nu, kræver perfektum."
    },
    {
      "id": "den-har-ikke-virket-ikke-siden-mandag",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Kaffemaskinen holdt op med at virke i mandags.",
      "sentence": "Den ___ ikke siden mandag.",
      "options": [
        "har ikke virket",
        "havde ikke virket",
        null,
        null
      ],
      "correct": "har ikke virket",
      "accepted_answers": [
        "har ikke virket"
      ],
      "timeline": {
        "start": "mandag",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Ikke ... siden\" om noget, der ikke er sket frem til nu, kræver perfektum."
    },
    {
      "id": "hun-har-koert-bil-siden-2010",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun fik kørekort i 2010 og kører stadig.",
      "sentence": "Hun ___ bil siden 2010.",
      "options": [
        "kørte",
        "har kørt",
        null,
        null
      ],
      "correct": "har kørt",
      "accepted_answers": [
        "har kørt"
      ],
      "timeline": {
        "start": "2010",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "firmaet-har-haft-underskud-siden-2021",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Firmaet fik underskud i 2021, og det varer ved.",
      "sentence": "Firmaet ___ underskud siden 2021.",
      "options": [
        "havde haft",
        "har",
        "havde",
        "har haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "2021",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-deltaget-paa-kurset-siden-september",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Jeg begyndte på kurset i september og er stadig i gang.",
      "sentence": "Jeg ___ på kurset siden september.",
      "options": [
        "har deltaget",
        "deltager",
        null,
        "deltog"
      ],
      "correct": "har deltaget",
      "accepted_answers": [
        "har deltaget"
      ],
      "timeline": {
        "start": "september",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "vi-har-haft-hunden-siden-2021",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Vi fik hunden i 2021, og vi har den stadig.",
      "sentence": "Vi ___ hunden siden 2021.",
      "options": [
        "har",
        "har haft",
        "havde",
        "havde haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "2021",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "hun-har-drevet-butikken-siden-2016",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Hun overtog butikken i 2016 og driver den stadig.",
      "sentence": "Hun ___ butikken siden 2016.",
      "options": [
        "havde drevet",
        null,
        "har drevet",
        "driver"
      ],
      "correct": "har drevet",
      "accepted_answers": [
        "har drevet"
      ],
      "timeline": {
        "start": "2016",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-ikke-set-ikke-et-teaterstykke-siden-2023",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg så sidst et teaterstykke for to år siden.",
      "sentence": "Jeg ___ ikke et teaterstykke siden 2023.",
      "options": [
        "havde ikke set",
        "så ikke",
        "har ikke set",
        "ser ikke"
      ],
      "correct": "har ikke set",
      "accepted_answers": [
        "har ikke set"
      ],
      "timeline": {
        "start": "2023",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Ikke ... siden\" om noget, der ikke er sket frem til nu, kræver perfektum."
    },
    {
      "id": "hun-har-ikke-hoert-ikke-fra-ham-siden-paaske",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han er rejst, og hun har ikke hørt fra ham siden.",
      "sentence": "Hun ___ ikke fra ham siden påske.",
      "options": [
        "havde ikke hørt",
        null,
        "hører ikke",
        "har ikke hørt"
      ],
      "correct": "har ikke hørt",
      "accepted_answers": [
        "har ikke hørt"
      ],
      "timeline": {
        "start": "påske",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Ikke ... siden\" om noget, der ikke er sket frem til nu, kræver perfektum."
    },
    {
      "id": "jeg-har-boet-i-odense-i-tre-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg kom til Odense for tre år siden og bor der stadig.",
      "sentence": "Jeg ___ i Odense i tre år.",
      "options": [
        "havde boet",
        "boede",
        "har boet",
        null
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "for 3 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "hun-har-vaeret-laerer-i-fem-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun begyndte for fem år siden og er lærer stadig.",
      "sentence": "Hun ___ lærer i fem år.",
      "options": [
        "havde været",
        "er",
        "var",
        "har været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "for 5 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "de-har-vaeret-gift-i-tyve-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "De blev gift for tyve år siden og er stadig gift.",
      "sentence": "De ___ gift i tyve år.",
      "options": [
        "havde været",
        null,
        "har været",
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "for 20 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "jeg-har-haft-svoemmetraening-i-to-maaneder",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg begyndte på svømning for to måneder siden og går stadig til det.",
      "sentence": "Jeg ___ svømmetræning i to måneder.",
      "options": [
        "har",
        "havde haft",
        null,
        "har haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "for 2 mdr. siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "vi-har-ventet-i-en-time",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Vi har ventet siden klokken to, og klokken er nu tre.",
      "sentence": "Vi ___ i en time.",
      "options": [
        "har ventet",
        "ventede",
        null,
        null
      ],
      "correct": "har ventet",
      "accepted_answers": [
        "har ventet"
      ],
      "timeline": {
        "start": "kl. 2",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "hun-har-boet-i-paris-i-to-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Min kusine flyttede for to år siden og bor der stadig.",
      "sentence": "Hun ___ i Paris i to år.",
      "options": [
        "har boet",
        "bor",
        null,
        "boede"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "for 2 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "hun-har-arbejdet-for-firmaet-i-ti-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun begyndte for ti år siden og arbejder der stadig.",
      "sentence": "Hun ___ for firmaet i ti år.",
      "options": [
        "har arbejdet",
        "arbejder",
        "arbejdede",
        null
      ],
      "correct": "har arbejdet",
      "accepted_answers": [
        "har arbejdet"
      ],
      "timeline": {
        "start": "for 10 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "det-har-regnet-i-tre-dage",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det startede for tre dage siden, og det er ikke slut.",
      "sentence": "Det ___ i tre dage.",
      "options": [
        "har regnet",
        "havde regnet",
        "regner",
        "regnede"
      ],
      "correct": "har regnet",
      "accepted_answers": [
        "har regnet"
      ],
      "timeline": {
        "start": "for 3 dage siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "han-har-arbejdet-paa-sin-afhandling-i-to-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han begyndte på afhandlingen for to år siden og er ikke færdig.",
      "sentence": "Han ___ på sin afhandling i to år.",
      "options": [
        "havde arbejdet",
        "arbejdede",
        "har arbejdet",
        null
      ],
      "correct": "har arbejdet",
      "accepted_answers": [
        "har arbejdet"
      ],
      "timeline": {
        "start": "for 2 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "vi-har-haft-lejligheden-i-seks-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Vi købte lejligheden for seks år siden og har den stadig.",
      "sentence": "Vi ___ lejligheden i seks år.",
      "options": [
        "havde haft",
        "har",
        "har haft",
        "havde"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "for 6 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "min-far-har-staaet-i-koeen-i-en-halv-time",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Min far stillede sig i kø for en halv time siden og står der stadig.",
      "sentence": "Min far ___ i køen i en halv time.",
      "options": [
        "har stået",
        "stod",
        "havde stået",
        null
      ],
      "correct": "har stået",
      "accepted_answers": [
        "har stået"
      ],
      "timeline": {
        "start": "for 30 min. siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "danmark-har-vaeret-medlem-af-eu-i-over-halvtreds-aar",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Danmark kom med i EU i 1973 og er stadig medlem.",
      "sentence": "Danmark ___ medlem af EU i over halvtreds år.",
      "options": [
        "havde været",
        null,
        "er",
        "har været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "1973",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "jeg-har-kendt-hende-i-mange-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg lærte hende at kende for mange år siden, og jeg kender hende stadig.",
      "sentence": "Jeg ___ hende i mange år.",
      "options": [
        "kendte",
        "havde kendt",
        "har kendt",
        null
      ],
      "correct": "har kendt",
      "accepted_answers": [
        "har kendt"
      ],
      "timeline": {
        "start": "for mange år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "de-har-boet-i-huset-i-fyrre-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "De flyttede ind for fyrre år siden og bor der stadig.",
      "sentence": "De ___ i huset i fyrre år.",
      "options": [
        "har boet",
        "bor",
        null,
        "boede"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "for 40 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "jeg-har-vaeret-syg-i-tre-dage",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Jeg blev syg for tre dage siden og er stadig syg.",
      "sentence": "Jeg ___ syg i tre dage.",
      "options": [
        "er",
        null,
        "har været",
        "havde været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "for 3 dage siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "hun-har-spillet-klaver-i-otte-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun begyndte at spille for otte år siden og spiller stadig.",
      "sentence": "Hun ___ klaver i otte år.",
      "options": [
        "spillede",
        "havde spillet",
        "har spillet",
        "spiller"
      ],
      "correct": "har spillet",
      "accepted_answers": [
        "har spillet"
      ],
      "timeline": {
        "start": "for 8 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "han-har-vaeret-i-koekkenet-i-to-timer",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Han begyndte for to timer siden og er stadig i gang.",
      "sentence": "Han ___ i køkkenet i to timer.",
      "options": [
        "havde været",
        null,
        "er",
        "har været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "for 2 timer siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid.",
      "verify": true
    },
    {
      "id": "jeg-boede-i-odense-fra-2019-til-2021",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Jeg bor ikke længere i Odense.",
      "sentence": "Jeg ___ i Odense fra 2019 til 2021.",
      "options": [
        "bor",
        null,
        "boede",
        "havde boet"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "2019",
        "end": "2021",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "han-arbejdede-i-banken-fra-2010-til-2015",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Han arbejder ikke i banken længere.",
      "sentence": "Han ___ i banken fra 2010 til 2015.",
      "options": [
        "arbejdede",
        "har arbejdet",
        "arbejder",
        null
      ],
      "correct": "arbejdede",
      "accepted_answers": [
        "arbejdede"
      ],
      "timeline": {
        "start": "2010",
        "end": "2015",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "vi-saa-filmen-i-sidste-uge",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Filmen er set, og det var i sidste uge.",
      "sentence": "Vi ___ filmen i sidste uge.",
      "options": [
        "har set",
        "så",
        "ser",
        null
      ],
      "correct": "så",
      "accepted_answers": [
        "så"
      ],
      "timeline": {
        "start": "sidste uge",
        "end": "sidste uge",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "jeg-moedte-ham-i-gaar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i går.",
      "sentence": "Jeg ___ ham i går.",
      "options": [
        "har mødt",
        "mødte",
        "havde mødt",
        null
      ],
      "correct": "mødte",
      "accepted_answers": [
        "mødte"
      ],
      "timeline": {
        "start": "i går",
        "end": "i går",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hun-flyttede-til-koebenhavn-for-to-aar-siden",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun bor i København nu, men flyttede for to år siden.",
      "sentence": "Hun ___ til København for to år siden.",
      "options": [
        "flytter",
        null,
        "flyttede",
        "havde flyttet"
      ],
      "correct": "flyttede",
      "accepted_answers": [
        "flyttede"
      ],
      "timeline": {
        "start": "for 2 år siden",
        "end": "for 2 år siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "jeg-moedte-min-mand-i-1998",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i 1998.",
      "sentence": "Jeg ___ min mand i 1998.",
      "options": [
        "har mødt",
        "havde mødt",
        "mødte",
        null
      ],
      "correct": "mødte",
      "accepted_answers": [
        "mødte"
      ],
      "timeline": {
        "start": "1998",
        "end": "1998",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "vi-var-tre-uger-i-spanien-sidste-sommer",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Sommeren er forbi.",
      "sentence": "Vi ___ tre uger i Spanien sidste sommer.",
      "options": [
        "har været",
        "var",
        "havde været",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "sidste sommer",
        "end": "sidste sommer",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hun-arbejdede-som-sygeplejerske-fra-1985-til-2020",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun er pensioneret nu.",
      "sentence": "Hun ___ som sygeplejerske fra 1985 til 2020.",
      "options": [
        "havde arbejdet",
        "har arbejdet",
        "arbejdede",
        null
      ],
      "correct": "arbejdede",
      "accepted_answers": [
        "arbejdede"
      ],
      "timeline": {
        "start": "1985",
        "end": "2020",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "i-morges-drak-jeg-kaffe-og-tog-derefter-paa-arbejde",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Klokken er nu 18, og morgenen er forbi.",
      "sentence": "I morges ___ jeg kaffe og tog derefter på arbejde.",
      "options": [
        "drikker",
        null,
        "drak",
        "havde drukket"
      ],
      "correct": "drak",
      "accepted_answers": [
        "drak"
      ],
      "timeline": {
        "start": "i morges",
        "end": "i morges",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-2012-koebte-vi-vores-foerste-hus",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var i 2012.",
      "sentence": "I 2012 ___ vi vores første hus.",
      "options": [
        "havde købt",
        null,
        "købte",
        null
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "timeline": {
        "start": "2012",
        "end": "2012",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-loerdags-gik-jeg-til-fest",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i lørdags.",
      "sentence": "I lørdags ___ jeg til fest.",
      "options": [
        "var gået",
        "gik",
        "er gået",
        "går"
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "timeline": {
        "start": "lørdag",
        "end": "lørdag",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "dengang-boede-jeg-i-en-lille-lejlighed",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din barndom.",
      "sentence": "Dengang ___ jeg i en lille lejlighed.",
      "options": [
        "boede",
        "havde boet",
        "bor",
        "har boet"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "dengang",
        "end": "dengang",
        "ongoing": false
      },
      "note": "\"Dengang\" og \"da jeg var ...\" peger på en afsluttet periode og kræver datid."
    },
    {
      "id": "hun-var-medlem-af-klubben-fra-2016-til-2019",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun er ikke medlem længere.",
      "sentence": "Hun ___ medlem af klubben fra 2016 til 2019.",
      "options": [
        "er",
        "var",
        "har været",
        "havde været"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "2016",
        "end": "2019",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "han-var-leder-af-afdelingen-indtil-2020",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han er ikke leder længere.",
      "sentence": "Han ___ leder af afdelingen indtil 2020.",
      "options": [
        "har været",
        "havde været",
        "var",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "2020",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "da-jeg-var-barn-boede-vi-i-norge",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din barndom.",
      "sentence": "Da jeg var barn, ___ vi i Norge.",
      "options": [
        "har boet",
        "boede",
        "havde boet",
        null
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "barndom",
        "end": "barndom",
        "ongoing": false
      },
      "note": "\"Dengang\" og \"da jeg var ...\" peger på en afsluttet periode og kræver datid."
    },
    {
      "id": "i-tre-aar-boede-jeg-i-norge-og-saa-flyttede-jeg-tilbage",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Jeg bor ikke i Norge længere.",
      "sentence": "I tre år ___ jeg i Norge, og så flyttede jeg tilbage til Danmark.",
      "options": [
        "bor",
        null,
        "boede"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "3 år",
        "end": "3 år",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "julen-2022-var-vi-hos-mormor",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i julen 2022.",
      "sentence": "Julen 2022 ___ vi hos mormor.",
      "options": [
        "har været",
        "var",
        "er",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "jul 2022",
        "end": "jul 2022",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-gaar-aftes-laeste-jeg-en-bog-faerdig-2",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i går aftes.",
      "sentence": "I går aftes ___ jeg en bog færdig.",
      "options": [
        "læste",
        null,
        null,
        "har læst"
      ],
      "correct": "læste",
      "accepted_answers": [
        "læste"
      ],
      "timeline": {
        "start": "i går aftes",
        "end": "i går aftes",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-2005-flyttede-de-sig-til-aarhus",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var i 2005.",
      "sentence": "I 2005 ___ de sig til Aarhus.",
      "options": [
        "har flyttet",
        "flytter",
        "flyttede"
      ],
      "correct": "flyttede",
      "accepted_answers": [
        "flyttede"
      ],
      "timeline": {
        "start": "2005",
        "end": "2005",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hun-besoegte-os-i-paasken-sidste-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun besøgte os i påsken.",
      "sentence": "Hun ___ os i påsken sidste år.",
      "options": [
        "besøgte",
        null,
        "besøger",
        null
      ],
      "correct": "besøgte",
      "accepted_answers": [
        "besøgte"
      ],
      "timeline": {
        "start": "påsken sidste år",
        "end": "påsken sidste år",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "telefonen-ringede-for-fem-minutter-siden",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete for fem minutter siden.",
      "sentence": "Telefonen ___ for fem minutter siden.",
      "options": [
        "ringer",
        null,
        "havde ringet",
        "ringede"
      ],
      "correct": "ringede",
      "accepted_answers": [
        "ringede"
      ],
      "timeline": {
        "start": "for 5 min. siden",
        "end": "for 5 min. siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "i-1990-erne-arbejdede-min-far-i-en-bank",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var i 1990'erne.",
      "sentence": "I 1990'erne ___ min far i en bank.",
      "options": [
        "har arbejdet",
        "arbejdede",
        null,
        "arbejder"
      ],
      "correct": "arbejdede",
      "accepted_answers": [
        "arbejdede"
      ],
      "timeline": {
        "start": "1990'erne",
        "end": "1990'erne",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "jeg-boede-i-aarhus-mens-jeg-studerede",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Jeg boede der, mens jeg studerede.",
      "sentence": "Jeg ___ i Aarhus, mens jeg studerede.",
      "options": [
        "har boet",
        "boede",
        null
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "studietiden",
        "end": "studietiden",
        "ongoing": false
      },
      "note": "Tilstande i en afsluttet periode står i datid."
    },
    {
      "id": "han-var-syg-fra-mandag-til-fredag",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han var syg i en uge, men har det godt nu.",
      "sentence": "Han ___ syg fra mandag til fredag.",
      "options": [
        "havde været",
        null,
        "var",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "mandag",
        "end": "fredag",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "for-tre-aar-siden-fik-jeg-et-nyt-job",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er tre år siden.",
      "sentence": "For tre år siden ___ jeg et nyt job.",
      "options": [
        "får",
        null,
        null,
        "fik"
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "for 3 år siden",
        "end": "for 3 år siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "hun-besoegte-ham-i-2017-men-siden-da-har-de-ikke-set",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun besøgte ham i 2017.",
      "sentence": "Hun ___ ham i 2017, men siden da har de ikke set hinanden.",
      "options": [
        "besøgte",
        null,
        null,
        null
      ],
      "correct": "besøgte",
      "accepted_answers": [
        "besøgte"
      ],
      "timeline": {
        "start": "2017",
        "end": "2017",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "vi-var-venner-da-vi-gik-i-skole",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Vi ses ikke mere, men vi var venner i skolen.",
      "sentence": "Vi ___ venner, da vi gik i skole.",
      "options": [
        "har været",
        "var",
        null,
        "er"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "skoletiden",
        "end": "skoletiden",
        "ongoing": false
      },
      "note": "\"Dengang\" og \"da jeg var ...\" peger på en afsluttet periode og kræver datid."
    },
    {
      "id": "sidste-aar-skrev-jeg-to-boeger",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete sidste år.",
      "sentence": "Sidste år ___ jeg to bøger.",
      "options": [
        "skriver",
        "havde skrevet",
        "skrev",
        "har skrevet"
      ],
      "correct": "skrev",
      "accepted_answers": [
        "skrev"
      ],
      "timeline": {
        "start": "sidste år",
        "end": "sidste år",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "han-var-formand-i-fire-aar-fra-2012-til-2016",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han er tidligere formand, og det var i fire år.",
      "sentence": "Han ___ formand i fire år, fra 2012 til 2016.",
      "options": [
        "havde været",
        "har været",
        "var",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "2012",
        "end": "2016",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "i-morges-regnede-det-men-nu-skinner-solen",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i morges. Nu er det aften.",
      "sentence": "I morges ___ det, men nu skinner solen.",
      "options": [
        "har regnet",
        "regner",
        null,
        "regnede"
      ],
      "correct": "regnede",
      "accepted_answers": [
        "regnede"
      ],
      "timeline": {
        "start": "i morges",
        "end": "i morges",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "han-boede-i-tyskland-til-sidst-i-halvfemserne",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er afsluttet.",
      "sentence": "Han ___ i Tyskland til sidst i halvfemserne.",
      "options": [
        "boede",
        "har boet",
        "bor"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "sidst i 90'erne",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "for-ti-aar-siden-var-der-en-stor-storm",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var for ti år siden.",
      "sentence": "For ti år siden ___ der en stor storm.",
      "options": [
        "er",
        "har været",
        "var"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "for 10 år siden",
        "end": "for 10 år siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "sidste-vinter-var-vi-i-fjeldene-i-en-uge",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var sidste vinter.",
      "sentence": "Sidste vinter ___ vi i fjeldene i en uge.",
      "options": [
        "har været",
        "havde været",
        "var",
        "er"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "sidste vinter",
        "end": "sidste vinter",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hun-afsluttede-sin-uddannelse-i-2003",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var i 2003.",
      "sentence": "Hun ___ sin uddannelse i 2003.",
      "options": [
        "afsluttede",
        "afslutter",
        "havde afsluttet",
        null
      ],
      "correct": "afsluttede",
      "accepted_answers": [
        "afsluttede"
      ],
      "timeline": {
        "start": "2003",
        "end": "2003",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "jeg-har-aldrig-vaeret-aldrig-til-island",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om hele dit liv indtil nu.",
      "sentence": "Jeg ___ aldrig til Island.",
      "options": [
        "var aldrig",
        "er aldrig",
        "havde aldrig været",
        "har aldrig været"
      ],
      "correct": "har aldrig været",
      "accepted_answers": [
        "har aldrig været"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-spoerger-om-du-nogensinde-har-spist-sushi",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om livserfaring.",
      "sentence": "Jeg spørger, om du nogensinde ___ sushi.",
      "options": [
        "spiser",
        null,
        null,
        "har spist"
      ],
      "correct": "har spist",
      "accepted_answers": [
        "har spist"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "hun-har-aldrig-ejet-aldrig-en-bil",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det handler om hele hendes liv indtil nu.",
      "sentence": "Hun ___ aldrig en bil.",
      "options": [
        "ejede aldrig",
        "har aldrig ejet",
        null,
        null
      ],
      "correct": "har aldrig ejet",
      "accepted_answers": [
        "har aldrig ejet"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum.",
      "verify": true
    },
    {
      "id": "jeg-spoerger-om-du-nogensinde-har-set-en-elg",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om livserfaring.",
      "sentence": "Jeg spørger, om du nogensinde ___ en elg.",
      "options": [
        "havde set",
        null,
        "har set",
        "så"
      ],
      "correct": "har set",
      "accepted_answers": [
        "har set"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "det-er-den-bedste-film-jeg-nogensinde-har-set",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du sammenligner med alt, du har set indtil nu.",
      "sentence": "Det er den bedste film, jeg nogensinde ___.",
      "options": [
        "så",
        "har set",
        "ser",
        "havde set"
      ],
      "correct": "har set",
      "accepted_answers": [
        "har set"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "hun-har-aldrig-staaet-aldrig-paa-ski",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun er 35 og taler om sit liv.",
      "sentence": "Hun ___ aldrig på ski.",
      "options": [
        "står aldrig",
        null,
        "har aldrig stået",
        "havde aldrig stået"
      ],
      "correct": "har aldrig stået",
      "accepted_answers": [
        "har aldrig stået"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-har-boet-i-flere-lande-i-mit-liv",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du er til jobsamtale og ser tilbage på dit liv.",
      "sentence": "Jeg ___ i flere lande i mit liv.",
      "options": [
        "har boet",
        "havde boet",
        null,
        "boede"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "han-har-moedt-mange-mennesker-i-sit-liv",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om hans liv indtil nu.",
      "sentence": "Han ___ mange mennesker i sit liv.",
      "options": [
        "havde mødt",
        "mødte",
        "har mødt",
        null
      ],
      "correct": "har mødt",
      "accepted_answers": [
        "har mødt"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-spoerger-om-du-nogensinde-har-laest-en-bog-paa-dansk",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om livserfaring.",
      "sentence": "Jeg spørger, om du nogensinde ___ en bog på dansk.",
      "options": [
        "har læst",
        null,
        null,
        "havde læst"
      ],
      "correct": "har læst",
      "accepted_answers": [
        "har læst"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-har-aldrig-set-aldrig-saa-mange-mennesker-samlet",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dit liv indtil nu.",
      "sentence": "Jeg ___ aldrig så mange mennesker samlet.",
      "options": [
        "så aldrig",
        "har aldrig set",
        null,
        "ser aldrig"
      ],
      "correct": "har aldrig set",
      "accepted_answers": [
        "har aldrig set"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "hun-har-boet-paa-mange-hoteller-i-sit-liv",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Hun er 60 og ser tilbage på sit liv.",
      "sentence": "Hun ___ på mange hoteller i sit liv.",
      "options": [
        "har boet",
        null,
        null,
        "boede"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-spoerger-om-du-nogensinde-har-vaeret-paa-hospitalet",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om livserfaring.",
      "sentence": "Jeg spørger, om du nogensinde ___ på hospitalet.",
      "options": [
        "var",
        "har været",
        null,
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-har-aldrig-haft-aldrig-en-rigtig-ferie",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dit liv indtil nu.",
      "sentence": "Jeg ___ aldrig en rigtig ferie.",
      "options": [
        "har aldrig haft",
        "havde aldrig",
        null,
        "havde aldrig haft"
      ],
      "correct": "har aldrig haft",
      "accepted_answers": [
        "har aldrig haft"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-spoerger-om-hun-nogensinde-har-danset-tango",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om livserfaring.",
      "sentence": "Jeg spørger, om hun nogensinde ___ tango.",
      "options": [
        "danser",
        "har danset",
        "havde danset",
        "dansede"
      ],
      "correct": "har danset",
      "accepted_answers": [
        "har danset"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "mine-foraeldre-har-aldrig-vaeret-aldrig-i-usa",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dine forældre og deres liv indtil nu.",
      "sentence": "Mine forældre ___ aldrig i USA.",
      "options": [
        "har aldrig været",
        null,
        "var aldrig",
        "havde aldrig været"
      ],
      "correct": "har aldrig været",
      "accepted_answers": [
        "har aldrig været"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "det-er-det-mest-spaendende-job-jeg-nogensinde-har-haft",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dit arbejdsliv indtil nu.",
      "sentence": "Det er det mest spændende job, jeg nogensinde ___.",
      "options": [
        "har haft",
        null,
        null,
        null
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "han-har-aldrig-vaeret-aldrig-til-koncert",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om hele hans liv indtil nu.",
      "sentence": "Han ___ aldrig til koncert.",
      "options": [
        "er aldrig",
        "havde aldrig været",
        "var aldrig",
        "har aldrig været"
      ],
      "correct": "har aldrig været",
      "accepted_answers": [
        "har aldrig været"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "vi-har-aldrig-haft-aldrig-en-kat",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dit liv indtil nu.",
      "sentence": "Vi ___ aldrig en kat.",
      "options": [
        "har aldrig",
        "har aldrig haft",
        null,
        "havde aldrig"
      ],
      "correct": "har aldrig haft",
      "accepted_answers": [
        "har aldrig haft"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-har-aldrig-haft-aldrig-brug-for-en-tolk",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om din erfaring indtil nu.",
      "sentence": "Jeg ___ aldrig brug for en tolk.",
      "options": [
        "havde aldrig",
        "har aldrig",
        "havde aldrig haft",
        "har aldrig haft"
      ],
      "correct": "har aldrig haft",
      "accepted_answers": [
        "har aldrig haft"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "min-mormor-har-aldrig-siddet-aldrig-i-et-fly",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om dit liv indtil nu.",
      "sentence": "Min mormor ___ aldrig i et fly.",
      "options": [
        "havde aldrig siddet",
        "har aldrig siddet",
        "sidder aldrig",
        "sad aldrig"
      ],
      "correct": "har aldrig siddet",
      "accepted_answers": [
        "har aldrig siddet"
      ],
      "timeline": {
        "start": "livet",
        "end": "now",
        "ongoing": true
      },
      "note": "Livserfaring uden bestemt tidspunkt udtrykkes med perfektum."
    },
    {
      "id": "jeg-har-spist-allerede-morgenmad",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket tidligere i dag.",
      "sentence": "Jeg ___ allerede morgenmad.",
      "options": [
        "spiser",
        "har spist",
        null,
        "spiste"
      ],
      "correct": "har spist",
      "accepted_answers": [
        "har spist"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "jeg-har-ikke-spist-endnu-ikke-frokost",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er endnu ikke sket.",
      "sentence": "Jeg ___ endnu ikke frokost.",
      "options": [
        "spiste ikke",
        "spiser ikke",
        "har ikke spist",
        "havde ikke spist"
      ],
      "correct": "har ikke spist",
      "accepted_answers": [
        "har ikke spist"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "vi-har-ikke-set-ikke-filmen-endnu",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du har endnu ikke set filmen.",
      "sentence": "Vi ___ ikke filmen endnu.",
      "options": [
        "har ikke set",
        null,
        null,
        "ser ikke"
      ],
      "correct": "har ikke set",
      "accepted_answers": [
        "har ikke set"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "jeg-spoerger-om-du-allerede-har-spist",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger, om det er sket.",
      "sentence": "Jeg spørger, om du allerede ___.",
      "options": [
        "spiste",
        "har spist",
        null,
        "spiser"
      ],
      "correct": "har spist",
      "accepted_answers": [
        "har spist"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "min-mor-har-ringet-allerede-saa-hun-ved-det",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket tidligere i dag.",
      "sentence": "Min mor ___ allerede, så hun ved det.",
      "options": [
        "har ringet",
        null,
        null,
        "havde ringet"
      ],
      "correct": "har ringet",
      "accepted_answers": [
        "har ringet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "toget-er-ikke-kommet-endnu-ikke",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du venter stadig på toget.",
      "sentence": "Toget ___ endnu ikke.",
      "options": [
        "kommer ikke",
        "kom ikke",
        null,
        "er ikke kommet"
      ],
      "correct": "er ikke kommet",
      "accepted_answers": [
        "er ikke kommet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "boernene-er-kommet-allerede",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Børnene er her nu.",
      "sentence": "Børnene ___ allerede.",
      "options": [
        "er kommet",
        "var kommet",
        "kommer",
        "kom"
      ],
      "correct": "er kommet",
      "accepted_answers": [
        "er kommet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "jeg-spoerger-om-du-allerede-har-koebt-billetterne",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger, om det er sket.",
      "sentence": "Jeg spørger, om du allerede ___ billetterne.",
      "options": [
        "købte",
        "har købt",
        null,
        null
      ],
      "correct": "har købt",
      "accepted_answers": [
        "har købt"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "jeg-har-ikke-moedt-endnu-ikke-hende",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er ikke sket endnu.",
      "sentence": "Jeg ___ endnu ikke hende.",
      "options": [
        "har ikke mødt",
        null,
        "mødte ikke",
        "møder ikke"
      ],
      "correct": "har ikke mødt",
      "accepted_answers": [
        "har ikke mødt"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "vi-har-ordnet-allerede-alt-saa-i-kan-bare-komme",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er allerede klaret.",
      "sentence": "Vi ___ allerede alt, så I kan bare komme.",
      "options": [
        "har ordnet",
        null,
        "ordnede",
        null
      ],
      "correct": "har ordnet",
      "accepted_answers": [
        "har ordnet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "vi-har-ikke-besluttet-endnu-ikke-hvad-vi-skal-lave-i",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er ikke afgjort endnu.",
      "sentence": "Vi ___ endnu ikke, hvad vi skal lave i weekenden.",
      "options": [
        "havde ikke besluttet",
        "besluttede ikke",
        "har ikke besluttet",
        null
      ],
      "correct": "har ikke besluttet",
      "accepted_answers": [
        "har ikke besluttet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum.",
      "verify": true
    },
    {
      "id": "jeg-har-lavet-allerede-maden-saa-vi-kan-spise-nu",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Maden er færdig.",
      "sentence": "Jeg ___ allerede maden, så vi kan spise nu.",
      "options": [
        "har lavet",
        "havde lavet",
        "lavede",
        null
      ],
      "correct": "har lavet",
      "accepted_answers": [
        "har lavet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "jeg-har-lavet-ikke-mine-lektier-endnu",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Lektierne er ikke lavet.",
      "sentence": "Jeg ___ ikke mine lektier endnu.",
      "options": [
        "havde lavet",
        "lavede",
        "har lavet",
        null
      ],
      "correct": "har lavet",
      "accepted_answers": [
        "har lavet"
      ],
      "timeline": {
        "start": "før nu",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Allerede\", \"endnu\" og \"aldrig\" knytter fortiden til nutiden og kræver perfektum."
    },
    {
      "id": "hun-har-ringet-allerede-tre-gange-i-dag-men-han-tager",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket tidligere i dag.",
      "sentence": "Hun ___ allerede tre gange i dag, men han tager den ikke.",
      "options": [
        "havde ringet",
        "ringede",
        "ringer",
        "har ringet"
      ],
      "correct": "har ringet",
      "accepted_answers": [
        "har ringet"
      ],
      "timeline": {
        "start": "i dag",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "vi-har-haft-allerede-tre-moeder-i-denne-uge",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om denne uges møder.",
      "sentence": "Vi ___ allerede tre møder i denne uge.",
      "options": [
        "havde",
        "har",
        "har haft",
        null
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "denne uge",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "jeg-har-drukket-allerede-tre-kopper-kaffe-i-dag",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er stadig i dag, og du tæller indtil nu.",
      "sentence": "Jeg ___ allerede tre kopper kaffe i dag.",
      "options": [
        "drikker",
        "drak",
        "havde drukket",
        "har drukket"
      ],
      "correct": "har drukket",
      "accepted_answers": [
        "har drukket"
      ],
      "timeline": {
        "start": "i dag",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "vi-har-vaeret-allerede-to-gange-i-spanien-i-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Året er ikke slut, og du tæller indtil nu.",
      "sentence": "Vi ___ allerede to gange i Spanien i år.",
      "options": [
        "var",
        "havde været",
        "har været",
        "er"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "i år",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "han-har-ikke-drukket-endnu-ikke-noget-i-dag",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du vil have noget at drikke, og din ven har ikke drukket endnu.",
      "sentence": "Han ___ endnu ikke noget i dag.",
      "options": [
        "havde ikke drukket",
        "drak ikke",
        "har ikke drukket",
        "drikker ikke"
      ],
      "correct": "har ikke drukket",
      "accepted_answers": [
        "har ikke drukket"
      ],
      "timeline": {
        "start": "i dag",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "holdet-har-ikke-vundet-endnu-ikke-en-eneste-kamp-i",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om denne sæson, som stadig er i gang.",
      "sentence": "Holdet ___ endnu ikke en eneste kamp i denne sæson.",
      "options": [
        "havde ikke vundet",
        "vandt ikke",
        "har ikke vundet",
        null
      ],
      "correct": "har ikke vundet",
      "accepted_answers": [
        "har ikke vundet"
      ],
      "timeline": {
        "start": "denne sæson",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "der-har-vaeret-allerede-mange-problemer-i-denne-uge",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om alt, der er sket indtil nu i denne uge.",
      "sentence": "Der ___ allerede mange problemer i denne uge.",
      "options": [
        "havde været",
        "har været",
        "var",
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "denne uge",
        "end": "now",
        "ongoing": true
      },
      "note": "Når tidsrummet ikke er slut (i dag, i år, denne uge), bruges perfektum."
    },
    {
      "id": "priserne-er-steget-meget-de-seneste-tre-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om de seneste år og frem til nu.",
      "sentence": "Priserne ___ meget de seneste tre år.",
      "options": [
        "steg",
        "var steget",
        "stiger",
        "er steget"
      ],
      "correct": "er steget",
      "accepted_answers": [
        "er steget"
      ],
      "timeline": {
        "start": "seneste 3 år",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu.",
      "verify": true
    },
    {
      "id": "samfundet-har-aendret-sig-meget-de-sidste-ti-aar",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om en udvikling, der stadig pågår.",
      "sentence": "Samfundet ___ sig meget de sidste ti år.",
      "options": [
        "ændrer",
        "ændrede",
        "havde ændret",
        "har ændret"
      ],
      "correct": "har ændret",
      "accepted_answers": [
        "har ændret"
      ],
      "timeline": {
        "start": "seneste 10 år",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu."
    },
    {
      "id": "holdet-har-vundet-hidtil-alle-kampe",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det gælder fra sæsonens start og frem til nu.",
      "sentence": "Holdet ___ hidtil alle kampe.",
      "options": [
        "vandt",
        "havde vundet",
        "har vundet",
        null
      ],
      "correct": "har vundet",
      "accepted_answers": [
        "har vundet"
      ],
      "timeline": {
        "start": "start",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu."
    },
    {
      "id": "vi-har-set-hinanden-naesten-hver-dag-de-seneste-uger",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket i ugerne indtil nu.",
      "sentence": "Vi ___ hinanden næsten hver dag de seneste uger.",
      "options": [
        "så",
        "har set",
        null,
        null
      ],
      "correct": "har set",
      "accepted_answers": [
        "har set"
      ],
      "timeline": {
        "start": "seneste uger",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu."
    },
    {
      "id": "hun-har-arbejdet-meget-i-de-seneste-maaneder",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du taler om de seneste måneder og frem til nu.",
      "sentence": "Hun ___ meget i de seneste måneder.",
      "options": [
        "arbejdede",
        "havde arbejdet",
        "har arbejdet",
        null
      ],
      "correct": "har arbejdet",
      "accepted_answers": [
        "har arbejdet"
      ],
      "timeline": {
        "start": "seneste måneder",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu."
    },
    {
      "id": "vi-har-haft-det-meget-varmt-de-seneste-dage",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket i de seneste dage.",
      "sentence": "Vi ___ det meget varmt de seneste dage.",
      "options": [
        "havde",
        "havde haft",
        "har",
        "har haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "seneste dage",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu."
    },
    {
      "id": "jeg-har-haft-meget-travlt-de-seneste-uger",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du ser tilbage på de seneste uger.",
      "sentence": "Jeg ___ meget travlt de seneste uger.",
      "options": [
        "havde",
        "har",
        "havde haft",
        "har haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "seneste uger",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu.",
      "verify": true
    },
    {
      "id": "boligpriserne-er-steget-i-de-sidste-fem-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket i de sidste fem år, og det fortsætter.",
      "sentence": "Boligpriserne ___ i de sidste fem år.",
      "options": [
        "var steget",
        null,
        "er steget",
        "steg"
      ],
      "correct": "er steget",
      "accepted_answers": [
        "er steget"
      ],
      "timeline": {
        "start": "seneste 5 år",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu.",
      "verify": true
    },
    {
      "id": "byen-har-udviklet-sig-meget-i-de-seneste-aar",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Det er sket i de seneste år, og vi står stadig midt i det.",
      "sentence": "Byen ___ sig meget i de seneste år.",
      "options": [
        "udviklede",
        "havde udviklet",
        "udvikler",
        "har udviklet"
      ],
      "correct": "har udviklet",
      "accepted_answers": [
        "har udviklet"
      ],
      "timeline": {
        "start": "seneste år",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu.",
      "verify": true
    },
    {
      "id": "vi-har-haft-hele-ugen-travlt",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det gælder hele ugen frem til nu.",
      "sentence": "Vi ___ hele ugen travlt.",
      "options": [
        "har",
        "havde",
        "havde haft",
        "har haft"
      ],
      "correct": "har haft",
      "accepted_answers": [
        "har haft"
      ],
      "timeline": {
        "start": "ugen",
        "end": "now",
        "ongoing": true
      },
      "note": "Perfektum bruges, når en nylig begivenhed har betydning nu.",
      "verify": true
    },
    {
      "id": "hvornaar-kom-du-til-danmark",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et bestemt tidspunkt i fortiden.",
      "sentence": "Hvornår ___ du til Danmark?",
      "options": [
        "er kommet",
        "var kommet",
        "kom",
        null
      ],
      "correct": "kom",
      "accepted_answers": [
        "kom"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-saa-du-ham-sidst",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et bestemt tidspunkt i fortiden.",
      "sentence": "Hvornår ___ du ham sidst?",
      "options": [
        "har set",
        "ser",
        null,
        "så"
      ],
      "correct": "så",
      "accepted_answers": [
        "så"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-blev-i-gift",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om bryllupsdatoen.",
      "sentence": "Hvornår ___ I gift?",
      "options": [
        "er blevet",
        "blev",
        null,
        null
      ],
      "correct": "blev",
      "accepted_answers": [
        "blev"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-afsluttede-hun-sin-uddannelse",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et bestemt tidspunkt.",
      "sentence": "Hvornår ___ hun sin uddannelse?",
      "options": [
        "afsluttede",
        "har afsluttet",
        null,
        null
      ],
      "correct": "afsluttede",
      "accepted_answers": [
        "afsluttede"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-koebte-i-huset",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger, hvornår huset blev købt.",
      "sentence": "Hvornår ___ I huset?",
      "options": [
        "har købt",
        "købte",
        null,
        null
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-stod-du-op-i-morges",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om i morges.",
      "sentence": "Hvornår ___ du op i morges?",
      "options": [
        "var stået",
        "stod",
        "har stået",
        "står"
      ],
      "correct": "stod",
      "accepted_answers": [
        "stod"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-skete-det",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et uheld, der skete.",
      "sentence": "Hvornår ___ det?",
      "options": [
        "sker",
        null,
        "er sket",
        "skete"
      ],
      "correct": "skete",
      "accepted_answers": [
        "skete"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-ringede-hun",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om, hvornår hun ringede.",
      "sentence": "Hvornår ___ hun?",
      "options": [
        "ringede",
        "havde ringet",
        null,
        null
      ],
      "correct": "ringede",
      "accepted_answers": [
        "ringede"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvornaar-moedte-du-din-mand",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et bestemt tidspunkt.",
      "sentence": "Hvornår ___ du din mand?",
      "options": [
        "har mødt",
        "møder",
        "havde mødt",
        "mødte"
      ],
      "correct": "mødte",
      "accepted_answers": [
        "mødte"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid."
    },
    {
      "id": "hvor-var-du-i-gaar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om gårsdagen.",
      "sentence": "Hvor ___ du i går?",
      "options": [
        "har været",
        "var",
        "er",
        "havde været"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "i går",
        "end": "i går",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hvornaar-begyndte-filmen",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger, hvornår filmen begyndte.",
      "sentence": "Hvornår ___ filmen?",
      "options": [
        "begyndte",
        null,
        "var begyndt",
        null
      ],
      "correct": "begyndte",
      "accepted_answers": [
        "begyndte"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid.",
      "verify": true
    },
    {
      "id": "hvornaar-rejste-i-til-norge",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du spørger om et bestemt tidspunkt.",
      "sentence": "Hvornår ___ I til Norge?",
      "options": [
        "rejste",
        "havde rejst",
        "rejser",
        "har rejst"
      ],
      "correct": "rejste",
      "accepted_answers": [
        "rejste"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "Spørgsmål om et bestemt tidspunkt (\"hvornår\") bruger datid.",
      "verify": true
    },
    {
      "id": "min-bror-besoegte-mig-i-fredags",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i fredags.",
      "sentence": "Min bror ___ mig i fredags.",
      "options": [
        "besøgte",
        "har besøgt",
        "besøger",
        null
      ],
      "correct": "besøgte",
      "accepted_answers": [
        "besøgte"
      ],
      "timeline": {
        "start": "fredag",
        "end": "fredag",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "jeg-fik-en-ny-telefon-i-mandags",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i mandags.",
      "sentence": "Jeg ___ en ny telefon i mandags.",
      "options": [
        "har fået",
        "havde fået",
        "fik",
        null
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "mandag",
        "end": "mandag",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-sommer-var-vi-en-uge-i-tyskland",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i sommer.",
      "sentence": "I sommer ___ vi en uge i Tyskland.",
      "options": [
        "var",
        "har været",
        "havde været",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "sommer",
        "end": "sommer",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "festen-sluttede-klokken-tre-i-nat",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det er over.",
      "sentence": "Festen ___ klokken tre i nat.",
      "options": [
        "slutter",
        "har sluttet",
        null,
        "sluttede"
      ],
      "correct": "sluttede",
      "accepted_answers": [
        "sluttede"
      ],
      "timeline": {
        "start": "i nat",
        "end": "i nat",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "min-foerste-arbejdsdag-var-i-2014",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din første dag.",
      "sentence": "Min første arbejdsdag ___ i 2014.",
      "options": [
        "havde været",
        "var",
        "har været",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "2014",
        "end": "2014",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "vi-badede-hver-dag-i-havet-da-vi-var-i-spanien",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din ferie, som er slut.",
      "sentence": "Vi ___ hver dag i havet, da vi var i Spanien.",
      "options": [
        "har badet",
        "bader",
        "badede"
      ],
      "correct": "badede",
      "accepted_answers": [
        "badede"
      ],
      "timeline": {
        "start": "ferien",
        "end": "ferien",
        "ongoing": false
      },
      "note": "\"Dengang\" og \"da jeg var ...\" peger på en afsluttet periode og kræver datid."
    },
    {
      "id": "sidste-aar-koebte-de-et-hus-paa-landet",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om sidste år.",
      "sentence": "Sidste år ___ de et hus på landet.",
      "options": [
        "har købt",
        "havde købt",
        "købte",
        null
      ],
      "correct": "købte",
      "accepted_answers": [
        "købte"
      ],
      "timeline": {
        "start": "sidste år",
        "end": "sidste år",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-tirsdags-gik-vi-til-svoemning",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din uge.",
      "sentence": "I tirsdags ___ vi til svømning.",
      "options": [
        "er gået",
        "gik",
        "går",
        null
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "timeline": {
        "start": "tirsdag",
        "end": "tirsdag",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-april-fik-jeg-et-nyt-job",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i april.",
      "sentence": "I april ___ jeg et nyt job.",
      "options": [
        "fik",
        "får",
        null,
        null
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "april",
        "end": "april",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "hun-var-formand-i-2015-og-2016",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Hun er ikke formand længere.",
      "sentence": "Hun ___ formand i 2015 og 2016.",
      "options": [
        "var",
        null,
        "har været",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "2015",
        "end": "2016",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "vi-havde-meget-sne-i-vinteren-2020",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det er en afsluttet vinter.",
      "sentence": "Vi ___ meget sne i vinteren 2020.",
      "options": [
        "havde",
        "havde haft",
        "har haft",
        "har"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "vinter 2020",
        "end": "vinter 2020",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "i-gaar-gik-jeg-til-tandlaege",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller, hvad du lavede i går.",
      "sentence": "I går ___ jeg til tandlæge.",
      "options": [
        "gik",
        null,
        "er gået",
        "går"
      ],
      "correct": "gik",
      "accepted_answers": [
        "gik"
      ],
      "timeline": {
        "start": "i går",
        "end": "i går",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "klokken-otte-i-morges-tog-jeg-bussen",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller, hvad du gjorde i dag klokken otte.",
      "sentence": "Klokken otte i morges ___ jeg bussen.",
      "options": [
        "har taget",
        "havde taget",
        "tog",
        null
      ],
      "correct": "tog",
      "accepted_answers": [
        "tog"
      ],
      "timeline": {
        "start": "kl. 8",
        "end": "kl. 8",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-1972-fik-min-far-sit-koerekort",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i 1972.",
      "sentence": "I 1972 ___ min far sit kørekort.",
      "options": [
        "får",
        "havde fået",
        "har fået",
        "fik"
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "1972",
        "end": "1972",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "for-et-halvt-aar-siden-flyttede-de-sig-i-koebenhavn",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var for et halvt år siden.",
      "sentence": "For et halvt år siden ___ de sig i København.",
      "options": [
        "har flyttet",
        "flyttede",
        null
      ],
      "correct": "flyttede",
      "accepted_answers": [
        "flyttede"
      ],
      "timeline": {
        "start": "for 6 mdr. siden",
        "end": "for 6 mdr. siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "som-ung-boede-hun-i-amerika-i-to-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din bedstemors ungdom.",
      "sentence": "Som ung ___ hun i Amerika i to år.",
      "options": [
        "har boet",
        "boede",
        "bor"
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "ung",
        "end": "ung",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "min-ven-var-syg-i-gaar-men-nu-har-han-det-godt",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Din ven blev syg i går.",
      "sentence": "Min ven ___ syg i går, men nu har han det godt.",
      "options": [
        "havde været",
        "har været",
        "var",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "i går",
        "end": "i går",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "for-tyve-minutter-siden-loed-brandalarmen",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det skete for tyve minutter siden.",
      "sentence": "For tyve minutter siden ___ brandalarmen.",
      "options": [
        "har lydt",
        "lød",
        null,
        "havde lydt"
      ],
      "correct": "lød",
      "accepted_answers": [
        "lød"
      ],
      "timeline": {
        "start": "for 20 min. siden",
        "end": "for 20 min. siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "i-november-fik-vi-et-nyt-koekken",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i november.",
      "sentence": "I november ___ vi et nyt køkken.",
      "options": [
        "har fået",
        "havde fået",
        "fik",
        null
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "november",
        "end": "november",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-2019-ansatte-firmaet-tre-nye-medarbejdere",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det skete i 2019.",
      "sentence": "I 2019 ___ firmaet tre nye medarbejdere.",
      "options": [
        "har ansat",
        "ansætter",
        "ansatte",
        "havde ansat"
      ],
      "correct": "ansatte",
      "accepted_answers": [
        "ansatte"
      ],
      "timeline": {
        "start": "2019",
        "end": "2019",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid.",
      "verify": true
    },
    {
      "id": "hun-boede-i-paris-fra-januar-til-marts-og-kom-saa-hjem",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var en kort periode.",
      "sentence": "Hun ___ i Paris fra januar til marts og kom så hjem.",
      "options": [
        "boede",
        "bor",
        null
      ],
      "correct": "boede",
      "accepted_answers": [
        "boede"
      ],
      "timeline": {
        "start": "januar",
        "end": "marts",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "for-en-uge-siden-saa-jeg-ham-foerste-gang",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete for en uge siden.",
      "sentence": "For en uge siden ___ jeg ham første gang.",
      "options": [
        "ser",
        null,
        null,
        "så"
      ],
      "correct": "så",
      "accepted_answers": [
        "så"
      ],
      "timeline": {
        "start": "for en uge siden",
        "end": "for en uge siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "i-gaar-spiste-vi-kage-fordi-det-var-min-foedselsdag",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i går.",
      "sentence": "I går ___ vi kage, fordi det var min fødselsdag.",
      "options": [
        "har spist",
        "spiste",
        null,
        "spiser"
      ],
      "correct": "spiste",
      "accepted_answers": [
        "spiste"
      ],
      "timeline": {
        "start": "i går",
        "end": "i går",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "vi-har-boet-i-samme-by-siden-2015",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Vi bor stadig i samme by.",
      "sentence": "Vi ___ i samme by siden 2015.",
      "options": [
        "bor",
        null,
        "havde boet",
        "har boet"
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "2015",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "hun-har-vaeret-ikke-rigtig-sig-selv-siden-foraaret",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det startede i foråret og er stadig sådan.",
      "sentence": "Hun ___ ikke rigtig sig selv siden foråret.",
      "options": [
        "var",
        "havde været",
        "har været",
        null
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "foråret",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum.",
      "verify": true
    },
    {
      "id": "min-soester-har-studeret-paa-universitetet-siden-2021",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Min søster begyndte på universitetet i 2021 og går der stadig.",
      "sentence": "Min søster ___ på universitetet siden 2021.",
      "options": [
        "studerer",
        null,
        "havde studeret",
        "har studeret"
      ],
      "correct": "har studeret",
      "accepted_answers": [
        "har studeret"
      ],
      "timeline": {
        "start": "2021",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-ventet-paa-svar-siden-i-mandags",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du venter stadig.",
      "sentence": "Jeg ___ på svar siden i mandags.",
      "options": [
        "har ventet",
        "ventede",
        "venter",
        null
      ],
      "correct": "har ventet",
      "accepted_answers": [
        "har ventet"
      ],
      "timeline": {
        "start": "mandag",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "de-har-kendt-hinanden-siden-de-var-boern",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Vi har kendt hinanden, siden vi var børn.",
      "sentence": "De ___ hinanden, siden de var børn.",
      "options": [
        "har kendt",
        null,
        null,
        null
      ],
      "correct": "har kendt",
      "accepted_answers": [
        "har kendt"
      ],
      "timeline": {
        "start": "barndom",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "han-har-vaeret-ked-af-det-siden-han-hoerte-nyheden",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Han er stadig ked af det.",
      "sentence": "Han ___ ked af det, siden han hørte nyheden.",
      "options": [
        "er",
        "var",
        "har været",
        "havde været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "nyheden",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "sagen-har-vaeret-uafklaret-siden-den-kom-op-i-2020",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Det er stadig ikke afklaret.",
      "sentence": "Sagen ___ uafklaret, siden den kom op i 2020.",
      "options": [
        "har været",
        null,
        "er",
        "havde været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "2020",
        "end": "now",
        "ongoing": true
      },
      "note": "\"Siden\" + et startpunkt for noget, der stadig gælder, kræver perfektum."
    },
    {
      "id": "jeg-har-vaeret-i-danmark-i-to-maaneder",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du er stadig i Danmark.",
      "sentence": "Jeg ___ i Danmark i to måneder.",
      "options": [
        "havde været",
        "er",
        "var",
        "har været"
      ],
      "correct": "har været",
      "accepted_answers": [
        "har været"
      ],
      "timeline": {
        "start": "for 2 mdr. siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid.",
      "verify": true
    },
    {
      "id": "hun-er-gaaet-i-skole-i-ti-aar",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Din søster er stadig i skole.",
      "sentence": "Hun ___ i skole i ti år.",
      "options": [
        "gik",
        "var gået",
        "er gået",
        null
      ],
      "correct": "er gået",
      "accepted_answers": [
        "er gået"
      ],
      "timeline": {
        "start": "for 10 år siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid.",
      "verify": true
    },
    {
      "id": "jeg-har-boet-paa-kollegiet-i-et-halvt-aar",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du bor stadig på kollegiet.",
      "sentence": "Jeg ___ på kollegiet i et halvt år.",
      "options": [
        "har boet",
        null,
        null,
        null
      ],
      "correct": "har boet",
      "accepted_answers": [
        "har boet"
      ],
      "timeline": {
        "start": "for 6 mdr. siden",
        "end": "now",
        "ongoing": true
      },
      "note": "Når perioden fortsætter helt til nu, bruges perfektum, ikke datid eller nutid."
    },
    {
      "id": "kurset-loeb-fra-august-til-oktober",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var en afsluttet periode: kurset er slut.",
      "sentence": "Kurset ___ fra august til oktober.",
      "options": [
        "løber",
        null,
        "løb",
        "havde løbet"
      ],
      "correct": "løb",
      "accepted_answers": [
        "løb"
      ],
      "timeline": {
        "start": "august",
        "end": "oktober",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid.",
      "verify": true
    },
    {
      "id": "hun-var-min-kollega-i-to-aar-men-nu-har-hun-nyt-job",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun er ikke længere kollega.",
      "sentence": "Hun ___ min kollega i to år, men nu har hun nyt job.",
      "options": [
        "har været",
        "er",
        "havde været",
        "var"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "ukendt tidspunkt",
        "end": "ukendt tidspunkt",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "jeg-studerede-ved-universitetet-fra-2012-til-2017",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du er ikke længere studerende.",
      "sentence": "Jeg ___ ved universitetet fra 2012 til 2017.",
      "options": [
        "studerer",
        "havde studeret",
        "har studeret",
        "studerede"
      ],
      "correct": "studerede",
      "accepted_answers": [
        "studerede"
      ],
      "timeline": {
        "start": "2012",
        "end": "2017",
        "ongoing": false
      },
      "note": "En afsluttet periode med fast start og slut står i datid."
    },
    {
      "id": "for-tre-uger-siden-fik-vi-nye-naboer",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det skete for tre uger siden.",
      "sentence": "For tre uger siden ___ vi nye naboer.",
      "options": [
        "får",
        "havde fået",
        "fik",
        "har fået"
      ],
      "correct": "fik",
      "accepted_answers": [
        "fik"
      ],
      "timeline": {
        "start": "for 3 uger siden",
        "end": "for 3 uger siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    },
    {
      "id": "sidste-sommer-regnede-det-naesten-aldrig",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det var sidste sommer.",
      "sentence": "Sidste sommer ___ det næsten aldrig.",
      "options": [
        "regnede",
        "har regnet",
        "regner",
        "havde regnet"
      ],
      "correct": "regnede",
      "accepted_answers": [
        "regnede"
      ],
      "timeline": {
        "start": "sidste sommer",
        "end": "sidste sommer",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-weekenden-sov-jeg-meget",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om din weekend, som er slut.",
      "sentence": "I weekenden ___ jeg meget.",
      "options": [
        "har sovet",
        "havde sovet",
        "sov",
        null
      ],
      "correct": "sov",
      "accepted_answers": [
        "sov"
      ],
      "timeline": {
        "start": "weekenden",
        "end": "weekenden",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "sidste-maaned-holdt-vi-et-moede-om-budgettet",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om sidste måneds møde.",
      "sentence": "Sidste måned ___ vi et møde om budgettet.",
      "options": [
        "havde holdt",
        "holder",
        "har holdt",
        "holdt"
      ],
      "correct": "holdt",
      "accepted_answers": [
        "holdt"
      ],
      "timeline": {
        "start": "sidste måned",
        "end": "sidste måned",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid."
    },
    {
      "id": "i-1990-erne-vokse-internettet-hurtigt",
      "level": "B2",
      "mode": "preterite_vs_perfect",
      "context": "Du fortæller om 1990'erne.",
      "sentence": "I 1990'erne ___ internettet hurtigt.",
      "options": [
        "har vokset",
        "havde vokset",
        "vokse",
        null
      ],
      "correct": "vokse",
      "accepted_answers": [
        "vokse"
      ],
      "timeline": {
        "start": "1990'erne",
        "end": "1990'erne",
        "ongoing": false
      },
      "note": "Et bestemt tidspunkt i fortiden kræver datid.",
      "verify": true
    },
    {
      "id": "hun-forsvandt-for-et-oejeblik-siden",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Hun er forsvundet.",
      "sentence": "Hun ___ for et øjeblik siden.",
      "options": [
        "er forsvundet",
        "forsvinder",
        "var forsvundet",
        "forsvandt"
      ],
      "correct": "forsvandt",
      "accepted_answers": [
        "forsvandt"
      ],
      "timeline": {
        "start": "for lidt siden",
        "end": "for lidt siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid.",
      "verify": true
    },
    {
      "id": "for-tre-maaneder-siden-talte-vi-om-det",
      "level": "B1",
      "mode": "preterite_vs_perfect",
      "context": "Det skete for tre måneder siden.",
      "sentence": "For tre måneder siden ___ vi om det.",
      "options": [
        "talte",
        "taler",
        "har talt",
        null
      ],
      "correct": "talte",
      "accepted_answers": [
        "talte"
      ],
      "timeline": {
        "start": "for 3 mdr. siden",
        "end": "for 3 mdr. siden",
        "ongoing": false
      },
      "note": "\"For ... siden\" peger på et bestemt tidspunkt i fortiden og kræver datid."
    }
  ],
  "pluperfect": [
    {
      "id": "filmen-var-begyndt-allerede-da-vi-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Filmen startede kl. 19.00. Vi kom kl. 19.20.",
      "sentence": "Filmen ___ allerede, da vi kom.",
      "options": [
        "er begyndt",
        "begyndte",
        "var begyndt",
        null
      ],
      "correct": "var begyndt",
      "accepted_answers": [
        "var begyndt",
        "havde begyndt"
      ],
      "timeline": {
        "start": "filmen begynder",
        "end": "vi kommer",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "jeg-var-gaaet-allerede-hjem-da-du-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg gik hjem kl. 17. Du kom kl. 18.",
      "sentence": "Jeg ___ allerede hjem, da du kom.",
      "options": [
        "var gået",
        "er gået",
        "går",
        "gik"
      ],
      "correct": "var gået",
      "accepted_answers": [
        "var gået"
      ],
      "timeline": {
        "start": "jeg går hjem",
        "end": "du kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "butikken-havde-lukket-allerede-da-vi-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Butikken lukkede kl. 17. Vi kom kl. 17.30.",
      "sentence": "Butikken ___ allerede, da vi kom.",
      "options": [
        "havde lukket",
        "lukkede",
        null,
        "har lukket"
      ],
      "correct": "havde lukket",
      "accepted_answers": [
        "havde lukket"
      ],
      "timeline": {
        "start": "butikken lukker",
        "end": "vi kommer",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "filmen-havde-sluttet-allerede-da-vi-kom-ud",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Filmen sluttede kl. 21. Vi kom ud kl. 21.10.",
      "sentence": "Filmen ___ allerede, da vi kom ud.",
      "options": [
        "havde sluttet",
        "sluttede",
        "har sluttet",
        null
      ],
      "correct": "havde sluttet",
      "accepted_answers": [
        "havde sluttet"
      ],
      "timeline": {
        "start": "filmen slutter",
        "end": "vi kommer ud",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "gaesterne-var-kommet-allerede-da-vi-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Gæsterne kom kl. 8. Vi kom først kl. 9.",
      "sentence": "Gæsterne ___ allerede, da vi kom.",
      "options": [
        "kom",
        "var kommet",
        "er kommet",
        null
      ],
      "correct": "var kommet",
      "accepted_answers": [
        "var kommet"
      ],
      "timeline": {
        "start": "gæsterne kommer",
        "end": "vi kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "chefen-havde-aflyst-allerede-moedet-da-vi-moedte-op",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Chefen aflyste mødet mandag. Vi mødte op tirsdag.",
      "sentence": "Chefen ___ allerede mødet, da vi mødte op.",
      "options": [
        "aflyste",
        "har aflyst",
        "havde aflyst",
        null
      ],
      "correct": "havde aflyst",
      "accepted_answers": [
        "havde aflyst"
      ],
      "timeline": {
        "start": "aflysning",
        "end": "vi møder op",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "jeg-havde-handlet-allerede-da-du-ringede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg handlede kl. 15. Du ringede kl. 16.",
      "sentence": "Jeg ___ allerede, da du ringede.",
      "options": [
        "handlede",
        "har handlet",
        "handler",
        "havde handlet"
      ],
      "correct": "havde handlet",
      "accepted_answers": [
        "havde handlet"
      ],
      "timeline": {
        "start": "jeg handler",
        "end": "du ringer",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "hun-havde-skrevet-allerede-rapporten-da-chefen-bad-om",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun skrev rapporten i marts. Chefen bad om den i april.",
      "sentence": "Hun ___ allerede rapporten, da chefen bad om den.",
      "options": [
        "havde skrevet",
        null,
        "har skrevet",
        null
      ],
      "correct": "havde skrevet",
      "accepted_answers": [
        "havde skrevet"
      ],
      "timeline": {
        "start": "rapport",
        "end": "chefens ønske",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "bussen-var-koert-allerede-da-jeg-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Bussen kørte kl. 7.50. Jeg kom kl. 8.00.",
      "sentence": "Bussen ___ allerede, da jeg kom.",
      "options": [
        "kørte",
        "var kørt",
        null,
        "er kørt"
      ],
      "correct": "var kørt",
      "accepted_answers": [
        "var kørt"
      ],
      "timeline": {
        "start": "bussen kører",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "jeg-havde-sendt-allerede-svaret-da-hun-spurgte",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du sendte svaret i går. Hun spurgte i dag.",
      "sentence": "Jeg ___ allerede svaret, da hun spurgte.",
      "options": [
        "sender",
        null,
        "sendte",
        "havde sendt"
      ],
      "correct": "havde sendt",
      "accepted_answers": [
        "havde sendt"
      ],
      "timeline": {
        "start": "svar sendt",
        "end": "hun spørger",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "han-havde-faaet-allerede-visum-da-han-skulle-rejse",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han fik visum i maj. I juni skulle han rejse.",
      "sentence": "Han ___ allerede visum, da han skulle rejse.",
      "options": [
        "har fået",
        "havde fået",
        "fik",
        null
      ],
      "correct": "havde fået",
      "accepted_answers": [
        "havde fået"
      ],
      "timeline": {
        "start": "visum",
        "end": "afrejse",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "min-mor-havde-ringet-allerede-to-gange-da-jeg-vaagnede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Min mor ringede kl. 10. Jeg vågnede kl. 11.",
      "sentence": "Min mor ___ allerede to gange, da jeg vågnede.",
      "options": [
        "ringer",
        "ringede",
        null,
        "havde ringet"
      ],
      "correct": "havde ringet",
      "accepted_answers": [
        "havde ringet"
      ],
      "timeline": {
        "start": "opkald",
        "end": "jeg vågner",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "tyven-var-forsvundet-for-laengst-da-politiet-kom",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Tyven forsvandt kl. 21. Politiet kom kl. 22.",
      "sentence": "Tyven ___ for længst, da politiet kom.",
      "options": [
        "forsvandt",
        "forsvinder",
        null,
        "var forsvundet"
      ],
      "correct": "var forsvundet",
      "accepted_answers": [
        "var forsvundet"
      ],
      "timeline": {
        "start": "tyven forsvinder",
        "end": "politiet kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "hun-havde-betalt-allerede-regningen-da-rykkeren-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun betalte regningen i sidste uge. Rykkeren kom i dag.",
      "sentence": "Hun ___ allerede regningen, da rykkeren kom.",
      "options": [
        "betaler",
        "betalte",
        "havde betalt",
        "har betalt"
      ],
      "correct": "havde betalt",
      "accepted_answers": [
        "havde betalt"
      ],
      "timeline": {
        "start": "betaling",
        "end": "rykker",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "jeg-havde-laest-allerede-bogen-da-min-ven-begyndte-paa",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg læste bogen i sommer. Min ven begyndte på den i efteråret.",
      "sentence": "Jeg ___ allerede bogen, da min ven begyndte på den.",
      "options": [
        "læser",
        "læste",
        "har læst",
        "havde læst"
      ],
      "correct": "havde læst",
      "accepted_answers": [
        "havde læst"
      ],
      "timeline": {
        "start": "jeg læser",
        "end": "ven begynder",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "han-havde-glemt-allerede-at-ringe-da-chefen-spurgte",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han glemte at ringe mandag. Chefen spurgte tirsdag.",
      "sentence": "Han ___ allerede at ringe, da chefen spurgte.",
      "options": [
        "glemte",
        "har glemt",
        "glemmer",
        "havde glemt"
      ],
      "correct": "havde glemt",
      "accepted_answers": [
        "havde glemt"
      ],
      "timeline": {
        "start": "glemt",
        "end": "chef spørger",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "vi-havde-vidst-det-for-laengst-da-du-fortalte-det",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi vidste det kl. 8. Du fortalte det kl. 9.",
      "sentence": "Vi ___ det for længst, da du fortalte det.",
      "options": [
        "vidste",
        "havde vidst",
        "ved",
        null
      ],
      "correct": "havde vidst",
      "accepted_answers": [
        "havde vidst"
      ],
      "timeline": {
        "start": "vi ved det",
        "end": "du fortæller",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "boernene-var-gaaet-for-laengst-i-seng-da-vi-kom-hjem",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Børnene gik i seng kl. 20. Vi kom hjem kl. 22.",
      "sentence": "Børnene ___ for længst i seng, da vi kom hjem.",
      "options": [
        "gik",
        "var gået",
        null,
        null
      ],
      "correct": "var gået",
      "accepted_answers": [
        "var gået"
      ],
      "timeline": {
        "start": "seng",
        "end": "vi kommer hjem",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "hun-havde-solgt-for-laengst-huset-da-han-ville-koebe-det",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Hun solgte huset i maj. Han ville købe det i juni.",
      "sentence": "Hun ___ for længst huset, da han ville købe det.",
      "options": [
        "har solgt",
        "solgte",
        "sælger",
        "havde solgt"
      ],
      "correct": "havde solgt",
      "accepted_answers": [
        "havde solgt"
      ],
      "timeline": {
        "start": "salg",
        "end": "købstilbud",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "vi-havde-aabnet-allerede-da-de-foerste-kunder-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi åbnede kl. 9. De første kunder kom kl. 10.",
      "sentence": "Vi ___ allerede, da de første kunder kom.",
      "options": [
        "har åbnet",
        "åbnede",
        "åbner",
        "havde åbnet"
      ],
      "correct": "havde åbnet",
      "accepted_answers": [
        "havde åbnet"
      ],
      "timeline": {
        "start": "åbning",
        "end": "kunder",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "jeg-var-rejst-allerede-da-du-ringede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg rejste kl. 6. Du ringede kl. 7.",
      "sentence": "Jeg ___ allerede, da du ringede.",
      "options": [
        "rejste",
        "var rejst",
        null,
        "er rejst"
      ],
      "correct": "var rejst",
      "accepted_answers": [
        "var rejst"
      ],
      "timeline": {
        "start": "jeg rejser",
        "end": "du ringer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\".",
      "verify": true
    },
    {
      "id": "jeg-havde-spist-allerede-frokost-da-min-ven-kom",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Jeg spiste kl. 12. Min ven kom kl. 13.",
      "sentence": "Jeg ___ allerede frokost, da min ven kom.",
      "options": [
        "spiste",
        "har spist",
        "havde spist",
        "spiser"
      ],
      "correct": "havde spist",
      "accepted_answers": [
        "havde spist"
      ],
      "timeline": {
        "start": "frokost",
        "end": "ven kommer",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "hun-havde-fundet-allerede-noeglen-da-han-ledte-efter-den",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun fandt nøglen kl. 8. Han ledte efter den kl. 9.",
      "sentence": "Hun ___ allerede nøglen, da han ledte efter den.",
      "options": [
        "finder",
        "fandt",
        null,
        "havde fundet"
      ],
      "correct": "havde fundet",
      "accepted_answers": [
        "havde fundet"
      ],
      "timeline": {
        "start": "fundet",
        "end": "leder",
        "ongoing": false
      },
      "note": "\"Allerede\" og \"for længst\" viser, at noget var sket, før det andet tidspunkt i fortiden."
    },
    {
      "id": "da-jeg-kom-hjem-havde-min-mor-allerede-lavet-aftensmad",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Jeg kom hjem kl. 18. Min mor lavede mad kl. 17.",
      "sentence": "Da jeg kom hjem, ___ min mor allerede lavet aftensmad.",
      "options": [
        "blev",
        "havde",
        "er",
        "har"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "maden",
        "end": "jeg kommer hjem",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-kom-havde-gaesterne-allerede-spist",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Vi kom kl. 19. Gæsterne spiste kl. 18.",
      "sentence": "Da vi kom, ___ gæsterne allerede spist.",
      "options": [
        "er",
        null,
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "gæsterne spiser",
        "end": "vi kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-hun-kom-var-jeg-allerede-gaaet-hjem",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg gik kl. 8. Hun kom kl. 9.",
      "sentence": "Da hun kom, ___ jeg allerede gået hjem.",
      "options": [
        "blev",
        "har",
        "var",
        "havde"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "jeg går",
        "end": "hun kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "da-jeg-vaagnede-havde-han-allerede-ringet-tre-gange",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han ringede kl. 10. Jeg vågnede kl. 11.",
      "sentence": "Da jeg vågnede, ___ han allerede ringet tre gange.",
      "options": [
        "havde",
        "har",
        "blev",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "opkald",
        "end": "jeg vågner",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-hun-kom-hjem-havde-boernene-allerede-sovet-i-to-timer",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun kom hjem kl. 22. Børnene sov siden kl. 20.",
      "sentence": "Da hun kom hjem, ___ børnene allerede sovet i to timer.",
      "options": [
        "var",
        "blev",
        "havde",
        "har"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "børn sover",
        "end": "hun kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-jeg-kom-til-stationen-var-toget-allerede-koert",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg kom til stationen. Toget kørte kl. 8.",
      "sentence": "Da jeg kom til stationen, ___ toget allerede kørt.",
      "options": [
        "var",
        null,
        "havde",
        "blev"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "toget kører",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\".",
      "verify": true
    },
    {
      "id": "da-vi-kom-ud-havde-det-regnet-i-to-timer",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi kom ud kl. 22. Det regnede siden kl. 20.",
      "sentence": "Da vi kom ud, ___ det regnet i to timer.",
      "options": [
        "havde",
        null,
        null,
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "regn",
        "end": "vi kommer ud",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-hun-kom-havde-jeg-allerede-drukket-min-kaffe",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Hun kom kl. 9. Jeg drak kaffe kl. 8.",
      "sentence": "Da hun kom, ___ jeg allerede drukket min kaffe.",
      "options": [
        "har",
        "var",
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "kaffe",
        "end": "hun kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-besoegte-ham-var-han-allerede-blevet-rask",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han blev rask i maj. Vi besøgte ham i juni.",
      "sentence": "Da vi besøgte ham, ___ han allerede blevet rask.",
      "options": [
        "blev",
        "var",
        "har",
        "havde"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "rask",
        "end": "besøg",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "da-jeg-ringede-var-hun-allerede-gaaet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun gik kl. 17. Jeg ringede kl. 18.",
      "sentence": "Da jeg ringede, ___ hun allerede gået.",
      "options": [
        "blev",
        "var",
        "har",
        "havde"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "hun går",
        "end": "jeg ringer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\".",
      "verify": true
    },
    {
      "id": "da-jeg-kom-havde-de-allerede-danset-i-en-time",
      "level": "A2",
      "mode": "pluperfect",
      "context": "De dansede siden kl. 19. Jeg kom kl. 20.",
      "sentence": "Da jeg kom, ___ de allerede danset i en time.",
      "options": [
        "har",
        "blev",
        "var",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "dans",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-du-kom-havde-vi-allerede-laest-en-time",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi læste siden kl. 9. Du kom kl. 10.",
      "sentence": "Da du kom, ___ vi allerede læst en time.",
      "options": [
        "var",
        "har",
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "læsning",
        "end": "du kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-du-kom-havde-han-allerede-sagt-farvel",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han sagde farvel kl. 8. Du kom kl. 9.",
      "sentence": "Da du kom, ___ han allerede sagt farvel.",
      "options": [
        "var",
        "havde",
        "har",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "farvel",
        "end": "du kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-moedet-begyndte-havde-vi-allerede-faaet-besked",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi fik besked i går. Mødet var i dag.",
      "sentence": "Da mødet begyndte, ___ vi allerede fået besked.",
      "options": [
        "har",
        "havde",
        null,
        "blev"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "besked",
        "end": "møde",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-hun-fandt-en-ny-havde-hun-allerede-solgt-den-gamle",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Hun solgte lejligheden i foråret. I sommeren fandt hun en ny.",
      "sentence": "Da hun fandt en ny, ___ hun allerede solgt den gamle.",
      "options": [
        "blev",
        null,
        "har",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "salg",
        "end": "nyt fund",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "hun-sagde-at-hun-allerede-havde-spist-maden",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer en samtale fra i går. Hun talte om noget, der var sket før.",
      "sentence": "Hun sagde, at hun allerede ___ maden.",
      "options": [
        "spiser",
        "havde spist",
        "har spist",
        "spiste"
      ],
      "correct": "havde spist",
      "accepted_answers": [
        "havde spist"
      ],
      "timeline": {
        "start": "hun spiser",
        "end": "hun siger",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "han-sagde-at-han-allerede-havde-koebt-billetterne",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer, hvad han sagde i går.",
      "sentence": "Han sagde, at han allerede ___ billetterne.",
      "options": [
        "køber",
        "havde købt",
        null,
        "købte"
      ],
      "correct": "havde købt",
      "accepted_answers": [
        "havde købt"
      ],
      "timeline": {
        "start": "køb",
        "end": "udsagn",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "hun-fortalte-at-hun-allerede-havde-forberedet-alt-til",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer, hvad hun fortalte i går.",
      "sentence": "Hun fortalte, at hun allerede ___ alt til festen.",
      "options": [
        "forberedede",
        "forbereder",
        "har forberedet",
        "havde forberedet"
      ],
      "correct": "havde forberedet",
      "accepted_answers": [
        "havde forberedet"
      ],
      "timeline": {
        "start": "forberedelse",
        "end": "fortælling",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "min-mor-spurgte-om-jeg-allerede-havde-ringet-til-hende",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du fortæller om gårsdagens telefonsamtale.",
      "sentence": "Min mor spurgte, om jeg allerede ___ til hende.",
      "options": [
        "ringede",
        "har ringet",
        "havde ringet",
        "ringer"
      ],
      "correct": "havde ringet",
      "accepted_answers": [
        "havde ringet"
      ],
      "timeline": {
        "start": "opkald",
        "end": "spørgsmål",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "laereren-sagde-at-eleverne-allerede-havde-laest-teksten",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer, hvad læreren sagde i går.",
      "sentence": "Læreren sagde, at eleverne allerede ___ teksten.",
      "options": [
        "læser",
        "læste",
        null,
        "havde læst"
      ],
      "correct": "havde læst",
      "accepted_answers": [
        "havde læst"
      ],
      "timeline": {
        "start": "læst",
        "end": "udsagn",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "direktoeren-forklarede-at-firmaet-for-laengst-havde",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du refererer, hvad der blev sagt til mødet.",
      "sentence": "Direktøren forklarede, at firmaet for længst ___ pengene.",
      "options": [
        "mister",
        "havde mistet",
        "mistede",
        "har mistet"
      ],
      "correct": "havde mistet",
      "accepted_answers": [
        "havde mistet"
      ],
      "timeline": {
        "start": "tab",
        "end": "forklaring",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "han-skrev-at-han-allerede-havde-fundet-sin-telefon",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer en besked fra i går.",
      "sentence": "Han skrev, at han allerede ___ sin telefon.",
      "options": [
        "havde fundet",
        "fandt",
        "har fundet",
        null
      ],
      "correct": "havde fundet",
      "accepted_answers": [
        "havde fundet"
      ],
      "timeline": {
        "start": "fund",
        "end": "besked",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "laegen-sagde-at-patienten-allerede-havde-taget-medicinen",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer, hvad lægen sagde.",
      "sentence": "Lægen sagde, at patienten allerede ___ medicinen.",
      "options": [
        "havde taget",
        null,
        "har taget",
        "tog"
      ],
      "correct": "havde taget",
      "accepted_answers": [
        "havde taget"
      ],
      "timeline": {
        "start": "medicin",
        "end": "udsagn",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "han-indroemmede-at-han-allerede-havde-gjort-det-hele",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du refererer, hvad han indrømmede.",
      "sentence": "Han indrømmede, at han allerede ___ det hele selv.",
      "options": [
        "gjorde",
        "har gjort",
        "havde gjort",
        null
      ],
      "correct": "havde gjort",
      "accepted_answers": [
        "havde gjort"
      ],
      "timeline": {
        "start": "gjort",
        "end": "indrømmelse",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "politiet-sagde-at-tyven-allerede-var-forsvundet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer til en samtale i går.",
      "sentence": "Politiet sagde, at tyven allerede ___.",
      "options": [
        "forsvandt",
        "forsvinder",
        null,
        "var forsvundet"
      ],
      "correct": "var forsvundet",
      "accepted_answers": [
        "var forsvundet"
      ],
      "timeline": {
        "start": "tyv",
        "end": "udsagn",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "hun-sagde-at-de-allerede-havde-koebt-et-hus",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du refererer en samtale fra i går.",
      "sentence": "Hun sagde, at de allerede ___ et hus.",
      "options": [
        "køber",
        "havde købt",
        null,
        "købte"
      ],
      "correct": "havde købt",
      "accepted_answers": [
        "havde købt"
      ],
      "timeline": {
        "start": "køb",
        "end": "udsagn",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "jeg-svarede-at-jeg-allerede-havde-laest-rapporten",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du svarer på chefens spørgsmål i går.",
      "sentence": "Jeg svarede, at jeg allerede ___ rapporten.",
      "options": [
        "læste",
        "har læst",
        "havde læst",
        null
      ],
      "correct": "havde læst",
      "accepted_answers": [
        "havde læst"
      ],
      "timeline": {
        "start": "læst",
        "end": "svar",
        "ongoing": false
      },
      "note": "I referat af noget, der allerede var sket, bruges pluskvamperfektum."
    },
    {
      "id": "da-jeg-kom-til-danmark-havde-aldrig-set-sne-foer",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du kom til Danmark for ti år siden og så sne første gang dengang.",
      "sentence": "Da jeg kom til Danmark, ___ sne før.",
      "options": [
        "så aldrig",
        "har aldrig set",
        "havde aldrig set",
        "ser aldrig"
      ],
      "correct": "havde aldrig set",
      "accepted_answers": [
        "havde aldrig set"
      ],
      "timeline": {
        "start": "før",
        "end": "ankomst",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "da-jeg-kom-til-danmark-havde-jeg-aldrig-smagt-rugbroed",
      "level": "B1",
      "mode": "pluperfect",
      "context": "I 2015 kom du til Danmark. Du kendte ikke rugbrød.",
      "sentence": "Da jeg kom til Danmark, ___ jeg aldrig smagt rugbrød.",
      "options": [
        "havde",
        null,
        "blev",
        "har"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2015",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-i-gaar-havde-hun-aldrig-set-ham",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du mødte ham første gang i går.",
      "sentence": "Før i går ___ hun aldrig set ham.",
      "options": [
        "har",
        "havde",
        null,
        "var"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "i går",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-2018-havde-jeg-aldrig-boet-alene",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du boede første gang alene i 2018.",
      "sentence": "Før 2018 ___ jeg aldrig boet alene.",
      "options": [
        "havde",
        null,
        null,
        "var"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2018",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "da-vi-kom-til-norge-havde-vi-aldrig-set-et-fjordlandskab",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du rejste første gang til Norge i 2012.",
      "sentence": "Da vi kom til Norge, ___ vi aldrig set et fjordlandskab.",
      "options": [
        "var",
        "blev",
        "har",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2012",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-i-gaar-havde-jeg-aldrig-smagt-sushi",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du smagte sushi første gang i går.",
      "sentence": "Før i går ___ jeg aldrig smagt sushi.",
      "options": [
        "har",
        "var",
        "havde",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "i går",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-2020-havde-jeg-aldrig-vaeret-i-aarhus",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Du var første gang i Aarhus i 2020.",
      "sentence": "Før 2020 ___ jeg aldrig været i Aarhus.",
      "options": [
        "var",
        null,
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2020",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-2019-havde-hun-aldrig-staaet-paa-ski",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun stod første gang på ski i 2019.",
      "sentence": "Før 2019 ___ hun aldrig stået på ski.",
      "options": [
        "har",
        "havde",
        null,
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2019",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-loerdag-havde-jeg-aldrig-vaeret-til-en-rigtig",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du så koncerten i lørdags.",
      "sentence": "Før lørdag ___ jeg aldrig været til en rigtig koncert.",
      "options": [
        "har",
        "havde",
        "var",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "lørdag",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "foer-2010-havde-vi-aldrig-floejet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du fløj første gang i 2010.",
      "sentence": "Før 2010 ___ vi aldrig fløjet.",
      "options": [
        "var",
        "blev",
        "har",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "før",
        "end": "2010",
        "ongoing": false
      },
      "note": "\"Aldrig før\" om fortiden kræver pluskvamperfektum: erfaringen manglede på det andet tidspunkt."
    },
    {
      "id": "hun-havde-boet-i-oslo-i-fem-aar-da-hun-moedte-ham",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun mødte ham efter fem år i Oslo.",
      "sentence": "Hun ___ i Oslo i fem år, da hun mødte ham.",
      "options": [
        "bor",
        "boede",
        null,
        "havde boet"
      ],
      "correct": "havde boet",
      "accepted_answers": [
        "havde boet"
      ],
      "timeline": {
        "start": "Oslo i 5 år",
        "end": "mødet",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "jeg-havde-ventet-en-time-da-bussen-endelig-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du ventede fra kl. 8. Bussen kom kl. 9.",
      "sentence": "Jeg ___ en time, da bussen endelig kom.",
      "options": [
        "ventede",
        "havde ventet",
        "har ventet",
        "venter"
      ],
      "correct": "havde ventet",
      "accepted_answers": [
        "havde ventet"
      ],
      "timeline": {
        "start": "ventetid",
        "end": "bussen",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "han-havde-arbejdet-der-i-ti-aar-da-han-fik-sparken",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Han arbejdede der fra 2000. I 2010 fik han sparken.",
      "sentence": "Han ___ der i ti år, da han fik sparken.",
      "options": [
        "arbejdede",
        "havde arbejdet",
        "har arbejdet",
        null
      ],
      "correct": "havde arbejdet",
      "accepted_answers": [
        "havde arbejdet"
      ],
      "timeline": {
        "start": "2000",
        "end": "2010",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "det-havde-regnet-i-seks-timer-da-solen-endelig-kom-frem",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Det regnede fra kl. 6. Solen kom frem kl. 12.",
      "sentence": "Det ___ i seks timer, da solen endelig kom frem.",
      "options": [
        "regnede",
        "regner",
        "havde regnet",
        "har regnet"
      ],
      "correct": "havde regnet",
      "accepted_answers": [
        "havde regnet"
      ],
      "timeline": {
        "start": "regn",
        "end": "sol",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "de-var-gift-i-femogtyve-aar-da-de-blev-skilt",
      "level": "B1",
      "mode": "pluperfect",
      "context": "De blev gift i 1990 og blev skilt i 2015.",
      "sentence": "De ___ gift i femogtyve år, da de blev skilt.",
      "options": [
        "var",
        "havde været",
        null,
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "1990",
        "end": "2015",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf.",
      "verify": true
    },
    {
      "id": "vi-havde-spillet-i-to-timer-da-det-begyndte-at-regne",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi spillede fra kl. 14. Regnen kom kl. 16.",
      "sentence": "Vi ___ i to timer, da det begyndte at regne.",
      "options": [
        "har spillet",
        "spillede",
        "havde spillet",
        null
      ],
      "correct": "havde spillet",
      "accepted_answers": [
        "havde spillet"
      ],
      "timeline": {
        "start": "leg",
        "end": "regn",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "hun-havde-laest-i-tre-timer-da-telefonen-ringede",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Hun læste fra kl. 18. Telefonen ringede kl. 21.",
      "sentence": "Hun ___ i tre timer, da telefonen ringede.",
      "options": [
        "har læst",
        "læste",
        "havde læst",
        null
      ],
      "correct": "havde læst",
      "accepted_answers": [
        "havde læst"
      ],
      "timeline": {
        "start": "læsning",
        "end": "opkald",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "jeg-havde-staaet-i-to-timer-da-jeg-endelig-kom-ind",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du stod i kø fra kl. 9. Kl. 11 kom du ind.",
      "sentence": "Jeg ___ i to timer, da jeg endelig kom ind.",
      "options": [
        "står",
        "har stået",
        "havde stået",
        "stod"
      ],
      "correct": "havde stået",
      "accepted_answers": [
        "havde stået"
      ],
      "timeline": {
        "start": "kø",
        "end": "indgang",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "han-havde-sovet-i-otte-timer-da-vaekkeuret-ringede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han sov fra kl. 22. Vækkeuret ringede kl. 6.",
      "sentence": "Han ___ i otte timer, da vækkeuret ringede.",
      "options": [
        "havde sovet",
        "sov",
        null,
        null
      ],
      "correct": "havde sovet",
      "accepted_answers": [
        "havde sovet"
      ],
      "timeline": {
        "start": "søvn",
        "end": "vækkeur",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "jeg-havde-studeret-i-fem-aar-da-jeg-skrev-mit-speciale",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Du studerede fra 2015. I 2020 skrev du speciale.",
      "sentence": "Jeg ___ i fem år, da jeg skrev mit speciale.",
      "options": [
        "havde studeret",
        "har studeret",
        "studerede",
        null
      ],
      "correct": "havde studeret",
      "accepted_answers": [
        "havde studeret"
      ],
      "timeline": {
        "start": "2015",
        "end": "2020",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "efter-at-han-var-kommet-hjem-lavede-han-mad",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Først kom han hjem. Derefter lavede han mad.",
      "sentence": "Efter at han ___ hjem, lavede han mad.",
      "options": [
        "kommer",
        null,
        "var kommet"
      ],
      "correct": "var kommet",
      "accepted_answers": [
        "var kommet",
        "kom"
      ],
      "timeline": {
        "start": "hjem",
        "end": "mad",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-vi-havde-spist-gik-vi-en-tur",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Først spiste vi. Derefter gik vi en tur.",
      "sentence": "Efter at vi ___, gik vi en tur.",
      "options": [
        "har spist",
        "havde spist",
        null
      ],
      "correct": "havde spist",
      "accepted_answers": [
        "havde spist",
        "spiste"
      ],
      "timeline": {
        "start": "spise",
        "end": "tur",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-hun-havde-laest-brevet-ringede-hun-til-ham",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Først læste hun brevet. Derefter ringede hun.",
      "sentence": "Efter at hun ___ brevet, ringede hun til ham.",
      "options": [
        "havde læst",
        null,
        "har læst"
      ],
      "correct": "havde læst",
      "accepted_answers": [
        "havde læst",
        "læste"
      ],
      "timeline": {
        "start": "læse",
        "end": "ringe",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-jeg-havde-vasket-op-saa-jeg-tv",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Først vaskede jeg op. Derefter så jeg tv.",
      "sentence": "Efter at jeg ___ op, så jeg tv.",
      "options": [
        "har vasket",
        "vasker",
        "havde vasket"
      ],
      "correct": "havde vasket",
      "accepted_answers": [
        "havde vasket",
        "vaskede"
      ],
      "timeline": {
        "start": "opvask",
        "end": "tv",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-gaesterne-var-kommet-begyndte-talen",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Først ankom gæsterne. Derefter begyndte talen.",
      "sentence": "Efter at gæsterne ___, begyndte talen.",
      "options": [
        "er kommet",
        "kommer",
        "var kommet"
      ],
      "correct": "var kommet",
      "accepted_answers": [
        "var kommet",
        "kom"
      ],
      "timeline": {
        "start": "gæster",
        "end": "tale",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-han-havde-betalt-regningen-forlod-han",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Først betalte han. Derefter gik han.",
      "sentence": "Efter at han ___ regningen, forlod han restauranten.",
      "options": [
        "har betalt",
        "betaler",
        "havde betalt"
      ],
      "correct": "havde betalt",
      "accepted_answers": [
        "havde betalt",
        "betalte"
      ],
      "timeline": {
        "start": "betale",
        "end": "gå",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-vi-havde-skrevet-kontrakten-underskrev-vi-den",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Først skrev vi kontrakten. Derefter underskrev vi den.",
      "sentence": "Efter at vi ___ kontrakten, underskrev vi den.",
      "options": [
        "havde skrevet",
        null,
        "skriver"
      ],
      "correct": "havde skrevet",
      "accepted_answers": [
        "havde skrevet",
        "skrev"
      ],
      "timeline": {
        "start": "skrive",
        "end": "skrive under",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "efter-at-hun-havde-ringet-kom-han-med-det-samme",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Først ringede hun. Derefter kom han.",
      "sentence": "Efter at hun ___, kom han med det samme.",
      "options": [
        "har ringet",
        "ringer",
        "havde ringet"
      ],
      "correct": "havde ringet",
      "accepted_answers": [
        "havde ringet",
        "ringede"
      ],
      "timeline": {
        "start": "ringe",
        "end": "komme",
        "ongoing": false
      },
      "note": "Efter \"efter at\" kommer pluskvamperfektum om den handling, der skete først; datid er mere uformel."
    },
    {
      "id": "da-jeg-kom-havde-han-endnu-ikke-staaet-op",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du ankom kl. 12. Han stod først op kl. 13.",
      "sentence": "Da jeg kom, ___ han endnu ikke stået op.",
      "options": [
        "var",
        "har",
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "opvågning",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-kom-havde-de-endnu-ikke-lavet-mad",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi kom kl. 18. Maden var ikke lavet endnu.",
      "sentence": "Da vi kom, ___ de endnu ikke lavet mad.",
      "options": [
        "var",
        "havde",
        "blev",
        "har"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "mad",
        "end": "vi kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-jeg-ringede-var-hun-endnu-ikke-kommet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du ringede kl. 9. Hun kom først kl. 10.",
      "sentence": "Da jeg ringede, ___ hun endnu ikke kommet.",
      "options": [
        "havde",
        "var",
        "har",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "hun kommer",
        "end": "jeg ringer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "da-jeg-kom-var-moedet-allerede-begyndt",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Mødet begyndte kl. 10. Du kom først kl. 10.15.",
      "sentence": "Da jeg kom, ___ mødet allerede begyndt.",
      "options": [
        "havde",
        "var",
        "har",
        null
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "møde",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid.",
      "verify": true
    },
    {
      "id": "da-jeg-endelig-kom-var-alle-gaesterne-gaaet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Ved midnat var alle gæster gået. Du kom kl. 1.",
      "sentence": "Da jeg endelig kom, ___ alle gæsterne gået.",
      "options": [
        "havde",
        "har",
        "var",
        "blev"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "gæster går",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    },
    {
      "id": "da-hun-kom-hjem-havde-han-allerede-lavet-mad-i-to-timer",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun kom hjem kl. 17. Han lavede mad fra kl. 15.",
      "sentence": "Da hun kom hjem, ___ han allerede lavet mad i to timer.",
      "options": [
        "havde",
        "har",
        "var",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "mad",
        "end": "hun kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-ankom-havde-de-endnu-ikke-ryddet-vaerelset",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Vi ankom til hotellet, men ingen havde ryddet værelset.",
      "sentence": "Da vi ankom, ___ de endnu ikke ryddet værelset.",
      "options": [
        "blev",
        null,
        null,
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "rydning",
        "end": "ankomst",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-naaede-stationen-var-toget-ikke-engang-naaet-frem",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du ankom til stationen. Toget fra Odense var ikke ankommet endnu.",
      "sentence": "Da vi nåede stationen, ___ toget ikke engang nået frem.",
      "options": [
        "blev",
        "har",
        "havde",
        "var"
      ],
      "correct": "var",
      "accepted_answers": [
        "var"
      ],
      "timeline": {
        "start": "tog",
        "end": "vi nåede",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\".",
      "verify": true
    },
    {
      "id": "da-jeg-kom-hjem-havde-min-mand-lavet-mad",
      "level": "A2",
      "mode": "pluperfect",
      "context": "Du kom hjem kl. 20. Din mand lavede mad kl. 19.",
      "sentence": "Da jeg kom hjem, ___ min mand lavet mad.",
      "options": [
        "har",
        "var",
        "blev",
        "havde"
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "mad",
        "end": "hjemkomst",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "da-vi-moedtes-i-2020-havde-vi-ikke-set-hinanden-i-fem",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Det var sommer i 2020, og vi havde ikke set hinanden siden 2015.",
      "sentence": "Da vi mødtes i 2020, ___ vi ikke set hinanden i fem år.",
      "options": [
        "har",
        "havde",
        "var",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "2015",
        "end": "2020",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "da-jeg-ankom-havde-jeg-allerede-vaeret-vaagen-i-tre",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du ankom kl. 7. Du havde stået op kl. 4.",
      "sentence": "Da jeg ankom, ___ jeg allerede været vågen i tre timer.",
      "options": [
        "har",
        "havde",
        "blev",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "opvågning",
        "end": "ankomst",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf.",
      "verify": true
    },
    {
      "id": "hun-havde-laert-dansk-i-fire-aar-da-hun-begyndte-at",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun lærte dansk fra 2018. I 2022 begyndte hun at arbejde.",
      "sentence": "Hun ___ dansk i fire år, da hun begyndte at arbejde.",
      "options": [
        "lærer",
        null,
        "havde lært",
        "har lært"
      ],
      "correct": "havde lært",
      "accepted_answers": [
        "havde lært"
      ],
      "timeline": {
        "start": "2018",
        "end": "2022",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf.",
      "verify": true
    },
    {
      "id": "han-var-forsvundet-i-en-uge-da-man-fandt-ham",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Han var forsvundet i en uge. Så fandt man ham.",
      "sentence": "Han ___ i en uge, da man fandt ham.",
      "options": [
        "forsvinder",
        "er forsvundet",
        "var forsvundet"
      ],
      "correct": "var forsvundet",
      "accepted_answers": [
        "var forsvundet"
      ],
      "timeline": {
        "start": "forsvinden",
        "end": "fund",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\".",
      "verify": true
    },
    {
      "id": "han-havde-malet-hele-dagen-da-han-endelig-blev-faerdig",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Han havde malet siden morgenen. Kl. 16 var han færdig.",
      "sentence": "Han ___ hele dagen, da han endelig blev færdig.",
      "options": [
        "malede",
        "har malet",
        "maler",
        "havde malet"
      ],
      "correct": "havde malet",
      "accepted_answers": [
        "havde malet"
      ],
      "timeline": {
        "start": "maling",
        "end": "færdig",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "de-havde-diskuteret-i-tre-timer-da-de-endelig-blev-enige",
      "level": "B2",
      "mode": "pluperfect",
      "context": "De havde diskuteret i tre timer. Så blev de enige.",
      "sentence": "De ___ i tre timer, da de endelig blev enige.",
      "options": [
        "diskuterer",
        "havde diskuteret",
        "diskuterede",
        "har diskuteret"
      ],
      "correct": "havde diskuteret",
      "accepted_answers": [
        "havde diskuteret"
      ],
      "timeline": {
        "start": "debat",
        "end": "enighed",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "jeg-havde-sovet-to-timer-da-telefonen-ringede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg havde sovet to timer. Så ringede telefonen.",
      "sentence": "Jeg ___ to timer, da telefonen ringede.",
      "options": [
        "sov",
        "havde sovet",
        null,
        "sover"
      ],
      "correct": "havde sovet",
      "accepted_answers": [
        "havde sovet"
      ],
      "timeline": {
        "start": "søvn",
        "end": "opkald",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "hun-havde-skrevet-i-en-time-da-computeren-gik-i-stykker",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Hun havde skrevet i en time. Så gik computeren i stykker.",
      "sentence": "Hun ___ i en time, da computeren gik i stykker.",
      "options": [
        "skrev",
        "havde skrevet",
        null,
        null
      ],
      "correct": "havde skrevet",
      "accepted_answers": [
        "havde skrevet"
      ],
      "timeline": {
        "start": "skrivning",
        "end": "nedbrud",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "firmaet-havde-eksisteret-i-halvtreds-aar-da-det-lukkede",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Firmaet havde eksisteret i 50 år. I 2020 lukkede det.",
      "sentence": "Firmaet ___ i halvtreds år, da det lukkede i 2020.",
      "options": [
        "eksisterer",
        "havde eksisteret",
        null,
        "eksisterede"
      ],
      "correct": "havde eksisteret",
      "accepted_answers": [
        "havde eksisteret"
      ],
      "timeline": {
        "start": "1970",
        "end": "2020",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "vi-var-gaaet-i-to-timer-da-regnen-kom",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Vi havde gået i to timer. Så kom regnen.",
      "sentence": "Vi ___ i to timer, da regnen kom.",
      "options": [
        "gik",
        "er gået",
        "var gået",
        null
      ],
      "correct": "var gået",
      "accepted_answers": [
        "var gået"
      ],
      "timeline": {
        "start": "gåtur",
        "end": "regn",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf.",
      "verify": true
    },
    {
      "id": "hun-havde-sparet-op-i-ti-aar-da-hun-endelig-koebte-huset",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Hun havde sparet op i ti år. Så købte hun huset.",
      "sentence": "Hun ___ op i ti år, da hun endelig købte huset.",
      "options": [
        "havde sparet",
        "har sparet",
        null,
        null
      ],
      "correct": "havde sparet",
      "accepted_answers": [
        "havde sparet"
      ],
      "timeline": {
        "start": "opsparing",
        "end": "køb",
        "ongoing": false
      },
      "note": "Pluskvamperfektum viser, hvor længe noget havde varet, før en anden begivenhed i fortiden indtraf."
    },
    {
      "id": "da-jeg-kom-havde-hun-allerede-toemt-skabet",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Du kom kl. 10. Hun havde allerede tømt skabet kl. 9.",
      "sentence": "Da jeg kom, ___ hun allerede tømt skabet.",
      "options": [
        "havde",
        "har",
        "blev",
        null
      ],
      "correct": "havde",
      "accepted_answers": [
        "havde"
      ],
      "timeline": {
        "start": "skab",
        "end": "jeg kommer",
        "ongoing": false
      },
      "note": "Pluskvamperfektum dannes med \"havde\" + participium; nutidens \"har\" passer ikke i en fortælling i datid."
    },
    {
      "id": "ulykken-var-sket-for-flere-timer-siden-da-han-hoerte-om",
      "level": "B2",
      "mode": "pluperfect",
      "context": "Han hørte om ulykken kl. 20. Ulykken skete kl. 17.",
      "sentence": "Ulykken ___ for flere timer siden, da han hørte om den.",
      "options": [
        "var sket",
        "er sket",
        "skete",
        null
      ],
      "correct": "var sket",
      "accepted_answers": [
        "var sket",
        "havde sket"
      ],
      "timeline": {
        "start": "ulykke",
        "end": "nyhed",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    }
  ]
};
