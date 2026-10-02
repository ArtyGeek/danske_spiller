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
        "laver",
        "havde lavet",
        "lavede"
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
        "havde arbejdet",
        "arbejdede",
        "arbejder"
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
        "havde arbejdet",
        "arbejdede",
        "arbejder"
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
        "boede",
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
        "havde ligget"
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
        "havde heddet",
        "hedder",
        "hed"
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
        "havde boet",
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
        "havde set",
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
        "havde gældt"
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
        "giver",
        "havde givet",
        "gav"
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
        "havde startet"
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
        "kogte",
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
        "havde ligget",
        "ligger"
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
        "havde købt",
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
        "sover",
        "havde sovet",
        "sov"
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
        "skrev",
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
        "gik",
        "var gået",
        "går"
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
        "så",
        "havde set",
        "ser"
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
        "havde fået"
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
        "havde rejst"
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
        "står",
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
        "havde ringet",
        "ringer",
        "ringede"
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
        "havde købt",
        "køber",
        "købte"
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
      "id": "sidste-sommer-var-vi-i-italien",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du fortæller om en ferie, der er slut.",
      "sentence": "Sidste sommer ___ vi i Italien.",
      "options": [
        "er",
        "havde været",
        "var"
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
        "havde afsluttet",
        "afslutter",
        "afsluttede"
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
        "regnede",
        "havde regnet",
        "regner"
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
        "havde fået",
        "fik"
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
        "startede",
        "havde startet",
        "starter"
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
        "var gået"
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
        "er",
        "havde været"
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
        "havde fundet"
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
        "havde givet",
        "gav"
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
        "ser",
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
        "spillede",
        "havde spillet",
        "spiller"
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
        "kører",
        "havde kørt"
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
        "havde boet",
        "bor",
        "boede"
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
        "gik",
        "var gået",
        "går"
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
        "havde læst",
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
        "havde spist"
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
        "gik",
        "var gået"
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
        "spiste",
        "havde spist",
        "spiser"
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
        "havde stået",
        "står",
        "stod"
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
        "havde vasket",
        "vasker",
        "vaskede"
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
        "havde haft",
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
        "kom",
        "var kommet",
        "kommer"
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
        "spiste",
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
        "havde lagt",
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
        "tager",
        "havde taget"
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
        "havde kørt",
        "kørte"
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
        "vender",
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
        "svarede",
        "havde svaret",
        "svarer"
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
        "var gået",
        "gik"
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
        "lavede",
        "havde lavet",
        "laver"
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
        "klappede",
        "havde klappet",
        "klapper"
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
        "var strømmet",
        "strømmer",
        "strømmede"
      ],
      "correct": "strømmede",
      "accepted_answers": [
        "strømmede"
      ],
      "note": "I en fortælling om afsluttede handlinger i rækkefølge bruges datid.",
      "verify": true
    },
    {
      "id": "toget-til-odense-afgaar-klokken-otte-i-morgen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Afgangen står i køreplanen.",
      "sentence": "Toget til Odense ___ klokken otte i morgen.",
      "options": [
        "var afgået",
        "afgik",
        "afgår"
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
        "rejste",
        "rejser"
      ],
      "correct": "rejser",
      "accepted_answers": [
        "rejser"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "min-tante-kommer-i-morgen-kl-16",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er aftalt.",
      "sentence": "Min tante ___ i morgen kl. 16.",
      "options": [
        "kom",
        "kommer",
        "var kommet"
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
        "starter",
        "havde startet",
        "startede"
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
      "id": "gymnasiet-lukker-for-sommerferie-den-24-juni",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Skolen har planlagt det.",
      "sentence": "Gymnasiet ___ for sommerferie den 24. juni.",
      "options": [
        "havde lukket",
        "lukkede",
        "lukker"
      ],
      "correct": "lukker",
      "accepted_answers": [
        "lukker"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "teaterstykket-begynder-klokken-20-paa-loerdag",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Programmet er trykt.",
      "sentence": "Teaterstykket ___ klokken 20 på lørdag.",
      "options": [
        "havde begyndt",
        "begynder",
        "begyndte"
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
        "overtager",
        "havde overtaget",
        "overtog"
      ],
      "correct": "overtager",
      "accepted_answers": [
        "overtager"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "flyet-lander-i-rom-klokken-fjorten-paa-mandag",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Flyet har en fast tid.",
      "sentence": "Flyet ___ i Rom klokken fjorten på mandag.",
      "options": [
        "lander",
        "landede",
        "havde landet"
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
        "rejste",
        "havde rejst"
      ],
      "correct": "rejser",
      "accepted_answers": [
        "rejser"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "jeg-ringer-dig-klokken-elleve-i-morgen",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Det er aftalt til i morgen.",
      "sentence": "Jeg ___ dig klokken elleve i morgen.",
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
        "havde åbnet",
        "åbnede",
        "åbner"
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
        "var fløjet",
        "fløj",
        "flyver"
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
        "havde fundet",
        "fandt",
        "finder"
      ],
      "correct": "finder",
      "accepted_answers": [
        "finder"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk.",
      "verify": true
    },
    {
      "id": "vi-bor-paa-hotel-i-tre-naetter-naar-vi-kommer-til-rom",
      "level": "B1",
      "mode": "present_vs_preterite",
      "context": "Du har bestilt hotellet.",
      "sentence": "Vi ___ på hotel i tre nætter, når vi kommer til Rom.",
      "options": [
        "havde boet",
        "boede",
        "bor"
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
        "bliver",
        "var blevet",
        "blev"
      ],
      "correct": "bliver",
      "accepted_answers": [
        "bliver"
      ],
      "note": "Planlagte begivenheder i fremtiden kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "boernehaven-begynder-igen-paa-mandag-efter-ferien",
      "level": "A2",
      "mode": "present_vs_preterite",
      "context": "Du har et fast skema.",
      "sentence": "Børnehaven ___ igen på mandag efter ferien.",
      "options": [
        "havde begyndt",
        "begyndte",
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
        "havde arbejdet",
        "arbejder"
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
        "angreb",
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
        "landede",
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
        "havde haft",
        "har"
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
        "bor",
        "har boet",
        "boede",
        "havde boet"
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
        "havde kendt",
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
        "havde spillet",
        "spiller",
        "spillede",
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
        "har været",
        "havde været",
        "var",
        "er"
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
        "havde ventet",
        "ventede",
        "venter",
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
        "havde studeret",
        "studerer"
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
        "eksisterede",
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
        "træner",
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
        "bor",
        "har boet",
        "havde boet"
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
        "er",
        "har været",
        "havde været",
        "var"
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
        "ser ikke",
        "har ikke set",
        "så ikke",
        "havde ikke set"
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
        "havde ikke talt",
        "taler ikke",
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
        "virker ikke",
        "virkede ikke",
        "har ikke virket",
        "havde ikke virket"
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
        "kører",
        "har kørt",
        "havde kørt",
        "kørte"
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
        "havde deltaget",
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
        "har drevet",
        "havde drevet",
        "drev",
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
        "hørte ikke",
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
        "har boet",
        "havde boet",
        "bor",
        "boede"
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
        "har været",
        "havde været",
        "er",
        "var"
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
        "havde haft",
        "havde",
        "har",
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
        "venter",
        "havde ventet",
        "ventede"
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
        "havde boet",
        "bor",
        "har boet",
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
        "havde arbejdet",
        "arbejdede",
        "arbejder"
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
        "arbejder",
        "har arbejdet",
        "arbejdede"
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
        "har haft",
        "havde haft",
        "har",
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
        "står",
        "havde stået"
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
        "er",
        "havde været",
        "var",
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
        "havde kendt",
        "har kendt",
        "kendte",
        "kender"
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
        "havde boet",
        "bor",
        "har boet",
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
        "var",
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
        "var",
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
        "boede",
        "bor",
        "har boet",
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
        "havde arbejdet"
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
        "havde set"
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
        "møder"
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
        "flyttede",
        "flytter",
        "har flyttet",
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
        "havde mødt",
        "mødte",
        "har mødt",
        "møder"
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
        "er",
        "havde været"
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
        "arbejder"
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
        "drak",
        "drikker",
        "har drukket",
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
        "købte",
        "køber",
        "har købt",
        "havde købt"
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
        "er"
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
        "bor",
        "boede",
        "havde boet",
        "har boet"
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
        "boede",
        "bor",
        "har boet"
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
        "havde været"
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
      "id": "i-gaar-aftes-laeste-jeg-min-roman-faerdig",
      "level": "A2",
      "mode": "preterite_vs_perfect",
      "context": "Det var i går aftes.",
      "sentence": "I går aftes ___ jeg min roman færdig.",
      "options": [
        "læste",
        "havde læst",
        "har læst",
        "læser"
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
        "har besøgt",
        "besøger",
        "havde besøgt"
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
        "har ringet",
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
        "havde arbejdet",
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
        "bor",
        "boede"
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
        "var",
        "havde været",
        "er",
        "har været"
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
        "har fået",
        "havde fået",
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
        "besøger",
        "havde besøgt",
        "har besøgt"
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
        "havde været",
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
        "havde skrevet",
        "skrev",
        "skriver",
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
        "var",
        "havde været",
        "har været",
        "er"
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
        "havde regnet",
        "regner",
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
        "var",
        "er",
        "har været"
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
        "har afsluttet",
        "havde afsluttet",
        "afslutter"
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
        "spiste",
        "havde spist",
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
        "ejer aldrig",
        "havde aldrig ejet",
        "har aldrig ejet",
        "ejede aldrig"
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
        "ser",
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
        "stod aldrig",
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
        "havde boet",
        "bor",
        "har boet",
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
        "har mødt",
        "møder",
        "mødte",
        "havde mødt"
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
        "læste",
        "læser",
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
        "havde aldrig set",
        "har aldrig set",
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
        "bor",
        "havde boet",
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
        "havde været",
        "er"
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
        "har aldrig",
        "havde aldrig",
        "har aldrig haft",
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
        "er aldrig",
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
        "havde haft",
        "har",
        "havde"
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
        "havde aldrig haft",
        "har aldrig haft",
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
        "havde spist",
        "har spist",
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
        "så ikke",
        "havde ikke set",
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
        "havde spist",
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
        "ringede",
        "ringer",
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
        "var ikke kommet",
        "kom ikke",
        "kommer ikke",
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
        "køber",
        "havde købt",
        "har købt",
        "købte"
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
        "havde ikke mødt",
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
        "ordner",
        "ordnede",
        "havde ordnet"
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
        "beslutter ikke",
        "har ikke besluttet",
        "besluttede ikke"
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
        "laver",
        "lavede",
        "havde lavet"
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
        "har lavet",
        "havde lavet",
        "laver",
        "lavede"
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
        "har",
        "har haft",
        "havde haft",
        "havde"
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
        "havde været",
        "har været",
        "var",
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
        "har ikke drukket",
        "havde ikke drukket",
        "drak ikke",
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
        "vinder ikke",
        "har ikke vundet",
        "vandt ikke"
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
        "er"
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
        "var steget",
        "stiger",
        "steg",
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
        "vinder",
        "har vundet",
        "vandt",
        "havde vundet"
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
        "ser",
        "havde set",
        "har set",
        "så"
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
        "arbejder",
        "har arbejdet",
        "havde arbejdet"
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
        "er steget",
        "var steget",
        "stiger",
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
        "havde udviklet",
        "udvikler",
        "udviklede",
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
        "var kommet",
        "kom",
        "er kommet",
        "kommer"
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
        "havde set",
        "ser",
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
        "bliver",
        "blev",
        "var blevet"
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
        "afslutter",
        "havde afsluttet",
        "har afsluttet"
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
        "køber",
        "havde købt",
        "købte",
        "har købt"
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
        "var sket",
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
        "havde ringet",
        "ringer",
        "ringede",
        "har ringet"
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
        "begynder",
        "var begyndt",
        "er begyndt"
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
        "havde besøgt",
        "har besøgt",
        "besøgte",
        "besøger"
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
        "får",
        "fik",
        "havde fået"
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
        "er",
        "havde været"
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
        "havde sluttet",
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
        "bader",
        "badede",
        "har badet"
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
        "køber",
        "købte",
        "havde købt"
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
        "var gået"
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
        "har fået",
        "havde fået",
        "får"
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
        "havde været",
        "er",
        "har været"
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
        "var gået",
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
        "tager"
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
        "flytter",
        "flyttede"
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
        "er",
        "var",
        "har været"
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
        "lyder",
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
        "ansætter",
        "ansatte",
        "har ansat",
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
        "bor",
        "har boet",
        "boede"
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
        "har set",
        "havde set",
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
        "havde spist",
        "spiste",
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
        "boede",
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
        "er",
        "har været",
        "var",
        "havde været"
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
        "studerede",
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
        "havde ventet"
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
        "kender",
        "havde kendt",
        "kendte"
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
        "har været",
        "er",
        "var",
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
        "var",
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
        "går",
        "er gået",
        "var gået"
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
        "bor",
        "havde boet",
        "boede"
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
        "har løbet",
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
        "havde fået",
        "fik",
        "får",
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
        "sover",
        "sov",
        "havde sovet"
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
        "havde vokset",
        "vokse",
        "har vokset",
        "vokser"
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
        "havde talt",
        "har talt",
        "taler"
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
        "begynder"
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
        "lukker",
        "lukkede",
        "havde lukket",
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
        "slutter",
        "har sluttet"
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
        "kommer"
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
        "aflyser",
        "har aflyst",
        "havde aflyst",
        "aflyste"
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
      "id": "jeg-havde-handlet-allerede-i-supermarkedet-da-du-ringede",
      "level": "B1",
      "mode": "pluperfect",
      "context": "Jeg handlede kl. 15. Du ringede kl. 16.",
      "sentence": "Jeg ___ allerede i supermarkedet, da du ringede.",
      "options": [
        "handler",
        "handlede",
        "havde handlet",
        "har handlet"
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
        "skrev",
        "skriver",
        "har skrevet"
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
        "kører",
        "var kørt",
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
        "har sendt",
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
        "får",
        "fik"
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
        "har ringet",
        "ringede",
        "ringer",
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
        "er forsvundet",
        "forsvinder",
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
        "har glemt",
        "glemmer",
        "glemte",
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
        "har vidst",
        "havde vidst",
        "ved"
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
        "går",
        "er gået",
        "var gået",
        "gik"
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
        "sælger",
        "har solgt",
        "solgte",
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
        "åbner",
        "har åbnet",
        "åbnede",
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
        "rejser",
        "var rejst",
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
        "har spist",
        "havde spist",
        "spiste",
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
        "har fundet",
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
        "har",
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
        "har",
        "var",
        "blev",
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
        "var"
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
        "har",
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
        "blev",
        "var",
        "har"
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
        "blev",
        "havde",
        "har",
        "var"
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
        "var",
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
        "var",
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
        "har købt",
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
        "har ringet",
        "havde ringet",
        "ringede",
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
        "har læst",
        "læste",
        "læser",
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
        "finder",
        "har fundet"
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
        "tager",
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
        "gør",
        "har gjort",
        "havde gjort",
        "gjorde"
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
        "er forsvundet",
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
        "har købt",
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
        "læser",
        "havde læst",
        "har læst"
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
        "har aldrig set",
        "havde aldrig set",
        "så aldrig",
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
        "var",
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
        "blev",
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
        "har",
        "blev",
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
        "blev",
        "var",
        "har",
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
        "blev",
        "var",
        "havde",
        "har"
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
        "blev",
        "havde",
        "var",
        "har"
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
        "har boet",
        "boede",
        "bor",
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
        "arbejder",
        "havde arbejdet",
        "har arbejdet",
        "arbejdede"
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
        "er",
        "har været",
        "havde været"
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
        "havde spillet",
        "spiller",
        "spillede",
        "har spillet"
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
        "havde læst",
        "har læst",
        "læser",
        "læste"
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
        "sover",
        "har sovet",
        "sov"
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
        "studerer",
        "studerede",
        "har studeret"
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
        "var kommet",
        "kommer",
        "er kommet"
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
        "spiser"
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
        "læser",
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
        "kommer",
        "var kommet",
        "er kommet"
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
        "har skrevet",
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
        "blev",
        "var",
        "har",
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
        "har",
        "var",
        "havde",
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
        "blev"
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
        "har",
        "var",
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
        "blev"
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
        "var",
        "havde",
        "blev"
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
        "lærte",
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
        "var forsvundet",
        "forsvinder",
        "er forsvundet"
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
        "har malet",
        "maler",
        "malede",
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
        "har sovet",
        "havde sovet",
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
        "skriver",
        "havde skrevet",
        "har skrevet",
        "skrev"
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
        "har eksisteret",
        "havde eksisteret",
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
        "er gået",
        "var gået",
        "gik",
        "går"
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
        "sparer",
        "sparede",
        "havde sparet",
        "har sparet"
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
        "var"
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
        "sker",
        "skete",
        "er sket"
      ],
      "correct": "var sket",
      "accepted_answers": [
        "var sket"
      ],
      "timeline": {
        "start": "ulykke",
        "end": "nyhed",
        "ongoing": false
      },
      "note": "Gå, komme, blive og forsvinde danner perfektum og pluskvamperfektum med \"er/var\", ikke \"har/havde\"."
    }
  ],
  "future": [
    {
      "id": "toget-afgaar-klokken-otte-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Afgangen står i køreplanen.",
      "sentence": "Toget ___ klokken otte i morgen.",
      "accepted_answers": [
        "afgår",
        "skal afgå"
      ],
      "distractors": [
        "afgik",
        "ville afgå",
        "kommer til at afgå"
      ],
      "note": "Planlagte fremtidige begivenheder kan stå i nutid sammen med et tidsudtryk."
    },
    {
      "id": "jeg-rejser-paa-fredag",
      "level": "A2",
      "mode": "future",
      "context": "Du har købt billetten.",
      "sentence": "Jeg ___ på fredag.",
      "accepted_answers": [
        "rejser",
        "skal rejse"
      ],
      "distractors": [
        "rejste",
        "har rejst",
        "ville rejse"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "moedet-starter-paa-tirsdag",
      "level": "A2",
      "mode": "future",
      "context": "Det står i kalenderen.",
      "sentence": "Mødet ___ på tirsdag.",
      "accepted_answers": [
        "starter",
        "skal starte"
      ],
      "distractors": [
        "startede",
        "har startet",
        "ville starte"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "jeg-gaar-til-tandlaege-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Du har bestilt tid hos tandlægen.",
      "sentence": "Jeg ___ til tandlæge i morgen.",
      "accepted_answers": [
        "går",
        "skal gå"
      ],
      "distractors": [
        "gik",
        "har gået",
        "ville gå"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "min-kusine-kommer-i-morgen-kl-15",
      "level": "A2",
      "mode": "future",
      "context": "Hun har fået en aftale.",
      "sentence": "Min kusine ___ i morgen kl. 15.",
      "accepted_answers": [
        "kommer",
        "skal komme"
      ],
      "distractors": [
        "kom",
        "er kommet",
        "ville komme"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "skolen-lukker-for-sommerferie-den-24-juni",
      "level": "B1",
      "mode": "future",
      "context": "Skolen har planlagt det.",
      "sentence": "Skolen ___ for sommerferie den 24. juni.",
      "accepted_answers": [
        "lukker",
        "skal lukke"
      ],
      "distractors": [
        "lukkede",
        "har lukket",
        "ville lukke"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "koncerten-begynder-klokken-20-paa-loerdag",
      "level": "B1",
      "mode": "future",
      "context": "Programmet er trykt.",
      "sentence": "Koncerten ___ klokken 20 på lørdag.",
      "accepted_answers": [
        "begynder",
        "skal begynde"
      ],
      "distractors": [
        "begyndte",
        "har begyndt",
        "ville begynde"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "flyet-lander-i-rom-klokken-fjorten-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Flyet har en fast tid.",
      "sentence": "Flyet ___ i Rom klokken fjorten i morgen.",
      "accepted_answers": [
        "lander",
        "skal lande"
      ],
      "distractors": [
        "landede",
        "har landet",
        "ville lande"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "jeg-ringer-til-dig-klokken-ti-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Du har ringet og aftalt det.",
      "sentence": "Jeg ___ dig klokken ti i morgen.",
      "accepted_answers": [
        "ringer til",
        "skal ringe til"
      ],
      "distractors": [
        "ringede til",
        "har ringet til",
        "ville ringe til"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk.",
      "verify": true
    },
    {
      "id": "vi-rejser-til-graekenland-naeste-sommer",
      "level": "B1",
      "mode": "future",
      "context": "Det er planlagt og betalt.",
      "sentence": "Vi ___ til Grækenland næste sommer.",
      "accepted_answers": [
        "rejser",
        "skal rejse"
      ],
      "distractors": [
        "rejste",
        "har rejst",
        "ville rejse"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "butikken-aabner-foerst-kl-10-i-morgen",
      "level": "B1",
      "mode": "future",
      "context": "Butikken har skiftet åbningstid.",
      "sentence": "Butikken ___ først kl. 10 i morgen.",
      "accepted_answers": [
        "åbner",
        "skal åbne"
      ],
      "distractors": [
        "åbnede",
        "har åbnet",
        "ville åbne"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "der-kommer-gaester-til-middag-i-aften",
      "level": "A2",
      "mode": "future",
      "context": "Du har inviteret gæster.",
      "sentence": "Der ___ gæster til middag i aften.",
      "accepted_answers": [
        "kommer",
        "skal komme"
      ],
      "distractors": [
        "kom",
        "er kommet",
        "ville komme"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "hun-flyver-til-london-paa-soendag",
      "level": "B1",
      "mode": "future",
      "context": "Det er en fast plan.",
      "sentence": "Hun ___ til London på søndag.",
      "accepted_answers": [
        "flyver",
        "skal flyve"
      ],
      "distractors": [
        "fløj",
        "er fløjet",
        "ville flyve"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "skolen-begynder-igen-paa-mandag-efter-ferien",
      "level": "A2",
      "mode": "future",
      "context": "Skolen har et fast skema.",
      "sentence": "Skolen ___ igen på mandag efter ferien.",
      "accepted_answers": [
        "begynder",
        "skal begynde"
      ],
      "distractors": [
        "begyndte",
        "har begyndt",
        "ville begynde"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "operationen-finder-sted-den-3-marts-2",
      "level": "B1",
      "mode": "future",
      "context": "Lægen har sat en dato.",
      "sentence": "Operationen ___ den 3. marts.",
      "accepted_answers": [
        "finder sted",
        "skal finde sted"
      ],
      "distractors": [
        "fandt sted",
        "har fundet sted",
        "ville finde sted"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "vi-bor-paa-hotel-i-to-naetter-naar-vi-kommer-til-rom",
      "level": "B1",
      "mode": "future",
      "context": "Du har bestilt hotel til to nætter.",
      "sentence": "Vi ___ på hotel i to nætter, når vi kommer til Rom.",
      "accepted_answers": [
        "bor",
        "skal bo"
      ],
      "distractors": [
        "boede",
        "har boet",
        "ville bo"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "jeg-arbejder-hjemmefra-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Det er aftalt med din chef.",
      "sentence": "Jeg ___ hjemmefra i morgen.",
      "accepted_answers": [
        "arbejder",
        "skal arbejde"
      ],
      "distractors": [
        "arbejdede",
        "har arbejdet",
        "ville arbejde"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "vi-gaar-i-biografen-i-aften",
      "level": "A2",
      "mode": "future",
      "context": "Du har fået en billet.",
      "sentence": "Vi ___ i biografen i aften.",
      "accepted_answers": [
        "går",
        "skal gå"
      ],
      "distractors": [
        "gik",
        "har gået",
        "ville gå"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "konferencen-foregaar-naeste-uge-i-koebenhavn",
      "level": "B1",
      "mode": "future",
      "context": "Det står på programmet.",
      "sentence": "Konferencen ___ næste uge i København.",
      "accepted_answers": [
        "foregår",
        "skal foregå"
      ],
      "distractors": [
        "foregik",
        "har foregået",
        "ville foregå"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk.",
      "verify": true
    },
    {
      "id": "biblioteket-lukker-i-naeste-maaned",
      "level": "B1",
      "mode": "future",
      "context": "Det er besluttet af kommunen.",
      "sentence": "Biblioteket ___ i næste måned.",
      "accepted_answers": [
        "lukker",
        "skal lukke"
      ],
      "distractors": [
        "lukkede",
        "har lukket",
        "ville lukke"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "bussen-koerer-hver-halve-time-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Der er en fast plan.",
      "sentence": "Bussen ___ hver halve time i morgen.",
      "accepted_answers": [
        "kører",
        "skal køre"
      ],
      "distractors": [
        "kørte",
        "har kørt",
        "ville køre"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "du-skal-aflevere-rapporten-paa-fredag",
      "level": "A2",
      "mode": "future",
      "context": "Din chef kræver det.",
      "sentence": "Du ___ rapporten på fredag.",
      "accepted_answers": [
        "skal aflevere"
      ],
      "distractors": [
        "kommer til at aflevere",
        "vil gerne aflevere",
        "afleverede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "vi-skal-moedes-foran-biografen-i-aften",
      "level": "A2",
      "mode": "future",
      "context": "Det er en aftale.",
      "sentence": "Vi ___ foran biografen i aften.",
      "accepted_answers": [
        "skal mødes"
      ],
      "distractors": [
        "mødtes",
        "har mødtes",
        "vil gerne mødes"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "jeg-skal-besoege-min-mormor-i-weekenden",
      "level": "A2",
      "mode": "future",
      "context": "Du har aftalt det med din mor.",
      "sentence": "Jeg ___ min mormor i weekenden.",
      "accepted_answers": [
        "skal besøge"
      ],
      "distractors": [
        "kommer til at besøge",
        "vil gerne besøge",
        "besøgte"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "du-skal-tage-medicinen-to-gange-om-dagen",
      "level": "B1",
      "mode": "future",
      "context": "Lægen siger det.",
      "sentence": "Du ___ medicinen to gange om dagen.",
      "accepted_answers": [
        "skal tage"
      ],
      "distractors": [
        "kommer til at tage",
        "vil gerne tage",
        "tog"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "man-skal-ikke-larme-her",
      "level": "A2",
      "mode": "future",
      "context": "Det er en regel i biblioteket.",
      "sentence": "Man ___ her.",
      "accepted_answers": [
        "skal ikke larme"
      ],
      "distractors": [
        "vil ikke larme",
        "kommer ikke til at larme",
        "larmede ikke"
      ],
      "note": "Skal ikke udtrykker et forbud eller en pligt til at lade være.",
      "verify": true
    },
    {
      "id": "du-skal-ikke-spise-sukker",
      "level": "A2",
      "mode": "future",
      "context": "Din læge forbyder det.",
      "sentence": "Du ___ sukker.",
      "accepted_answers": [
        "skal ikke spise"
      ],
      "distractors": [
        "kommer ikke til at spise",
        "vil ikke spise",
        "spiste ikke"
      ],
      "note": "Skal ikke udtrykker et forbud eller en pligt til at lade være.",
      "verify": true
    },
    {
      "id": "jeg-skal-holde-oplaeg-paa-moedet-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Din chef har bestemt det.",
      "sentence": "Jeg ___ oplæg på mødet i morgen.",
      "accepted_answers": [
        "skal holde"
      ],
      "distractors": [
        "kommer til at holde",
        "vil gerne holde",
        "holdt"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "i-skal-rydde-op-foer-i-gaar-ud",
      "level": "A2",
      "mode": "future",
      "context": "Børnene har fået besked.",
      "sentence": "I ___ op, før I går ud.",
      "accepted_answers": [
        "skal rydde"
      ],
      "distractors": [
        "kommer til at rydde",
        "vil gerne rydde",
        "ryddede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "holdet-skal-spille-finale-naeste-loerdag",
      "level": "B1",
      "mode": "future",
      "context": "Der er en fast aftale med klubben.",
      "sentence": "Holdet ___ finale næste lørdag.",
      "accepted_answers": [
        "skal spille"
      ],
      "distractors": [
        "kommer til at spille",
        "vil gerne spille",
        "spillede"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "jeg-skal-hjaelpe-min-nabo-med-at-flytte-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Du har aftalt at hjælpe.",
      "sentence": "Jeg ___ min nabo med at flytte i morgen.",
      "accepted_answers": [
        "skal hjælpe"
      ],
      "distractors": [
        "kommer til at hjælpe",
        "hjalp",
        "har hjulpet"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "alle-medarbejdere-skal-deltage-i-kurset",
      "level": "B1",
      "mode": "future",
      "context": "Chefen kræver det.",
      "sentence": "Alle medarbejdere ___ i kurset.",
      "accepted_answers": [
        "skal deltage"
      ],
      "distractors": [
        "kommer til at deltage",
        "vil gerne deltage",
        "deltog"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "vi-skal-flytte-ind-i-det-nye-hus-i-naeste-uge",
      "level": "B1",
      "mode": "future",
      "context": "Der er en fast aftale.",
      "sentence": "Vi ___ ind i det nye hus i næste uge.",
      "accepted_answers": [
        "skal flytte"
      ],
      "distractors": [
        "flyttede",
        "har flyttet",
        "kommer til at flytte"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "du-skal-ringe-til-din-mormor-i-dag",
      "level": "A2",
      "mode": "future",
      "context": "Din mor har bedt dig om det.",
      "sentence": "Du ___ til din mormor i dag.",
      "accepted_answers": [
        "skal ringe"
      ],
      "distractors": [
        "kommer til at ringe",
        "vil gerne ringe",
        "ringede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "alle-virksomheder-skal-aflevere-regnskab-inden-1-maj",
      "level": "B2",
      "mode": "future",
      "context": "Loven kræver det.",
      "sentence": "Alle virksomheder ___ regnskab inden 1. maj.",
      "accepted_answers": [
        "skal aflevere"
      ],
      "distractors": [
        "kommer til at aflevere",
        "vil gerne aflevere",
        "afleverede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "vi-skal-spille-fodbold-i-eftermiddag",
      "level": "A2",
      "mode": "future",
      "context": "Du har fået en aftale.",
      "sentence": "Vi ___ fodbold i eftermiddag.",
      "accepted_answers": [
        "skal spille"
      ],
      "distractors": [
        "kommer til at spille",
        "vil gerne spille",
        "spillede"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "vi-skal-ses-paa-mandag",
      "level": "B1",
      "mode": "future",
      "context": "Det er en aftale mellem dig og din ven.",
      "sentence": "Vi ___ på mandag.",
      "accepted_answers": [
        "skal ses"
      ],
      "distractors": [
        "sås",
        "har set",
        "kommer til at ses"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "i-skal-ikke-gaa-over-gaardspladsen",
      "level": "B1",
      "mode": "future",
      "context": "Det er forbudt.",
      "sentence": "I ___ over gårdspladsen.",
      "accepted_answers": [
        "skal ikke gå"
      ],
      "distractors": [
        "kommer ikke til at gå",
        "vil ikke gå",
        "gik ikke"
      ],
      "note": "Skal ikke udtrykker et forbud eller en pligt til at lade være.",
      "verify": true
    },
    {
      "id": "du-skal-hvile-dig-i-tre-dage",
      "level": "A2",
      "mode": "future",
      "context": "Din læge har bestemt det.",
      "sentence": "Du ___ dig i tre dage.",
      "accepted_answers": [
        "skal hvile"
      ],
      "distractors": [
        "kommer til at hvile",
        "vil gerne hvile",
        "hvilede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "vi-skal-aflevere-bilen-paa-fredag",
      "level": "B1",
      "mode": "future",
      "context": "Der er aftalt en fast tid.",
      "sentence": "Vi ___ bilen på fredag.",
      "accepted_answers": [
        "skal aflevere"
      ],
      "distractors": [
        "kommer til at aflevere",
        "vil gerne aflevere",
        "afleverede"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "vi-skal-starte-projektet-i-januar",
      "level": "B1",
      "mode": "future",
      "context": "Din chef har lagt en plan.",
      "sentence": "Vi ___ projektet i januar.",
      "accepted_answers": [
        "skal starte"
      ],
      "distractors": [
        "kommer til at starte",
        "vil gerne starte",
        "startede"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "i-skal-aflevere-lektierne-hver-mandag",
      "level": "A2",
      "mode": "future",
      "context": "Der er en regel i klassen.",
      "sentence": "I ___ lektierne hver mandag.",
      "accepted_answers": [
        "skal aflevere"
      ],
      "distractors": [
        "kommer til at aflevere",
        "vil gerne aflevere",
        "afleverede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "jeg-skal-hjaelpe-hende-med-at-male-i-weekenden",
      "level": "B1",
      "mode": "future",
      "context": "Du har lovet din søster at hjælpe.",
      "sentence": "Jeg ___ hende med at male i weekenden.",
      "accepted_answers": [
        "skal hjælpe"
      ],
      "distractors": [
        "kommer til at hjælpe",
        "hjalp",
        "har hjulpet"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "beboerne-skal-sortere-affaldet-fra-nytaar",
      "level": "B2",
      "mode": "future",
      "context": "Det er et påbud fra myndighederne.",
      "sentence": "Beboerne ___ affaldet fra nytår.",
      "accepted_answers": [
        "skal sortere"
      ],
      "distractors": [
        "kommer til at sortere",
        "vil gerne sortere",
        "sorterede"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "han-vil-flytte-til-norge-uanset-hvad-vi-siger",
      "level": "B1",
      "mode": "future",
      "context": "Han har besluttet det selv.",
      "sentence": "Han ___ til Norge, uanset hvad vi siger.",
      "accepted_answers": [
        "vil flytte"
      ],
      "distractors": [
        "kommer til at flytte",
        "flyttede",
        "har flyttet"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning."
    },
    {
      "id": "jeg-vil-ikke-deltage-i-konkurrencen",
      "level": "A2",
      "mode": "future",
      "context": "Du har ikke lyst.",
      "sentence": "Jeg ___ i konkurrencen.",
      "accepted_answers": [
        "vil ikke deltage"
      ],
      "distractors": [
        "kommer ikke til at deltage",
        "deltog ikke",
        "har ikke deltaget"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "han-vil-ikke-undskylde-uanset-hvad-vi-siger",
      "level": "B1",
      "mode": "future",
      "context": "Din ven nægter.",
      "sentence": "Han ___, uanset hvad vi siger.",
      "accepted_answers": [
        "vil ikke undskylde"
      ],
      "distractors": [
        "undskyldte ikke",
        "har ikke undskyldt",
        "kommer ikke til at undskylde"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "min-datter-vil-ikke-spise-groentsager",
      "level": "A2",
      "mode": "future",
      "context": "Barnet nægter.",
      "sentence": "Min datter ___ grøntsager.",
      "accepted_answers": [
        "vil ikke spise"
      ],
      "distractors": [
        "kommer ikke til at spise",
        "spiste ikke",
        "har ikke spist"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "jeg-vil-spise-mere-sundt-fra-i-dag",
      "level": "A2",
      "mode": "future",
      "context": "Du har besluttet det.",
      "sentence": "Jeg ___ mere sundt fra i dag.",
      "accepted_answers": [
        "vil spise"
      ],
      "distractors": [
        "kommer til at spise",
        "spiste",
        "har spist"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning.",
      "verify": true
    },
    {
      "id": "han-vil-gerne-blive-laege",
      "level": "B1",
      "mode": "future",
      "context": "Det er hans ønske.",
      "sentence": "Han ___ læge.",
      "accepted_answers": [
        "vil gerne blive"
      ],
      "distractors": [
        "kommer til at blive",
        "blev",
        "er blevet"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "jeg-vil-gerne-tage-opvasken-hvis-du-vil",
      "level": "B1",
      "mode": "future",
      "context": "Du tilbyder din hjælp.",
      "sentence": "Jeg ___ opvasken, hvis du vil.",
      "accepted_answers": [
        "vil gerne tage"
      ],
      "distractors": [
        "tog",
        "har taget",
        "kommer til at tage"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "hun-vil-gerne-rejse-til-japan-en-dag",
      "level": "B1",
      "mode": "future",
      "context": "Hun har lyst til at rejse.",
      "sentence": "Hun ___ til Japan en dag.",
      "accepted_answers": [
        "vil gerne rejse"
      ],
      "distractors": [
        "kommer til at rejse",
        "rejste",
        "har rejst"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "han-vil-betale-regningen-selv",
      "level": "B1",
      "mode": "future",
      "context": "Det er hans beslutning, og han insisterer.",
      "sentence": "Han ___ regningen selv.",
      "accepted_answers": [
        "vil betale"
      ],
      "distractors": [
        "kommer til at betale",
        "betalte",
        "har betalt"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning.",
      "verify": true
    },
    {
      "id": "hun-vil-ikke-komme-med-os",
      "level": "A2",
      "mode": "future",
      "context": "Hun nægter.",
      "sentence": "Hun ___ med os.",
      "accepted_answers": [
        "vil ikke komme"
      ],
      "distractors": [
        "kom ikke",
        "er ikke kommet",
        "kommer ikke til at komme"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "de-vil-ikke-skrive-under-paa-kontrakten",
      "level": "B1",
      "mode": "future",
      "context": "De nægter at skrive under.",
      "sentence": "De ___ under på kontrakten.",
      "accepted_answers": [
        "vil ikke skrive"
      ],
      "distractors": [
        "skrev ikke",
        "har ikke skrevet",
        "kommer ikke til at skrive"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "han-vil-gerne-bo-i-spanien",
      "level": "A2",
      "mode": "future",
      "context": "Din ven har et ønske.",
      "sentence": "Han ___ i Spanien.",
      "accepted_answers": [
        "vil gerne bo"
      ],
      "distractors": [
        "kommer til at bo",
        "boede",
        "har boet"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "jeg-vil-stoppe-med-at-ryge-fra-naeste-maaned",
      "level": "B1",
      "mode": "future",
      "context": "Du har besluttet det.",
      "sentence": "Jeg ___ med at ryge fra næste måned.",
      "accepted_answers": [
        "vil stoppe"
      ],
      "distractors": [
        "kommer til at stoppe",
        "stoppede",
        "har stoppet"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning."
    },
    {
      "id": "jeg-vil-ikke-acceptere-den-loesning",
      "level": "B1",
      "mode": "future",
      "context": "Du er uenig og nægter.",
      "sentence": "Jeg ___ den løsning.",
      "accepted_answers": [
        "vil ikke acceptere"
      ],
      "distractors": [
        "accepterede ikke",
        "har ikke accepteret",
        "kommer ikke til at acceptere"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "vi-vil-gerne-spise-ude-i-aften",
      "level": "A2",
      "mode": "future",
      "context": "Du har et ønske.",
      "sentence": "Vi ___ ude i aften.",
      "accepted_answers": [
        "vil gerne spise"
      ],
      "distractors": [
        "spiste gerne",
        "har gerne spist",
        "kommer til at spise"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på.",
      "verify": true
    },
    {
      "id": "hun-vil-vaere-den-bedste-i-sin-klasse",
      "level": "B2",
      "mode": "future",
      "context": "Hun har et mål.",
      "sentence": "Hun ___ den bedste i sin klasse.",
      "accepted_answers": [
        "vil være"
      ],
      "distractors": [
        "kommer til at være",
        "var",
        "har været"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning.",
      "verify": true
    },
    {
      "id": "jeg-vil-gerne-baere-din-taske",
      "level": "A2",
      "mode": "future",
      "context": "Du tilbyder hjælp.",
      "sentence": "Jeg ___ din taske.",
      "accepted_answers": [
        "vil gerne bære"
      ],
      "distractors": [
        "bar",
        "har båret",
        "kommer til at bære"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "jeg-vil-ikke-tale-om-det-mere",
      "level": "B1",
      "mode": "future",
      "context": "Du siger nej.",
      "sentence": "Jeg ___ om det mere.",
      "accepted_answers": [
        "vil ikke tale"
      ],
      "distractors": [
        "talte ikke",
        "har ikke talt",
        "kommer ikke til at tale"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst."
    },
    {
      "id": "se-paa-himlen-det-kommer-til-at-regne",
      "level": "A2",
      "mode": "future",
      "context": "Himlen er mørk, og det regner ikke endnu.",
      "sentence": "Se på himlen! Det ___.",
      "accepted_answers": [
        "kommer til at regne"
      ],
      "distractors": [
        "regnede",
        "regner",
        "har regnet"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske."
    },
    {
      "id": "du-kommer-til-at-fortryde-det-hvis-du-ikke-tager-med",
      "level": "B1",
      "mode": "future",
      "context": "Du forudsiger en følelse.",
      "sentence": "Du ___ det, hvis du ikke tager med.",
      "accepted_answers": [
        "kommer til at fortryde",
        "vil fortryde",
        "fortryder"
      ],
      "distractors": [
        "fortrød",
        "har fortrudt",
        "fortryder ikke"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "jeg-tror-at-han-kommer-til-at-blive-meget-glad",
      "level": "B1",
      "mode": "future",
      "context": "Du forudsiger fremtiden.",
      "sentence": "Jeg tror, at han ___ meget glad.",
      "accepted_answers": [
        "kommer til at blive",
        "bliver"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan.",
      "verify": true
    },
    {
      "id": "befolkningen-kommer-til-at-stige-kraftigt-de-naeste-ti",
      "level": "B2",
      "mode": "future",
      "context": "Du forudsiger fremtiden i en rapport.",
      "sentence": "Befolkningen ___ kraftigt de næste ti år.",
      "accepted_answers": [
        "kommer til at stige",
        "vil stige"
      ],
      "distractors": [
        "steg",
        "er steget",
        "ville stige"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "gulvet-er-vaadt-du-kommer-til-at-glide",
      "level": "B1",
      "mode": "future",
      "context": "Du advarer.",
      "sentence": "Gulvet er vådt. Du ___.",
      "accepted_answers": [
        "kommer til at glide",
        "glider"
      ],
      "distractors": [
        "gled",
        "er gledet",
        "gleder"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske.",
      "verify": true
    },
    {
      "id": "det-kommer-til-at-koste-mere-efter-nytaar",
      "level": "B1",
      "mode": "future",
      "context": "Prisen stiger efter nytår.",
      "sentence": "Det ___ mere efter nytår.",
      "accepted_answers": [
        "kommer til at koste",
        "vil koste"
      ],
      "distractors": [
        "kostede",
        "har kostet",
        "koster ikke"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "klimaet-kommer-til-at-aendre-sig-meget-de-naeste-aartier",
      "level": "B2",
      "mode": "future",
      "context": "Eksperterne forudsiger.",
      "sentence": "Klimaet ___ meget de næste årtier.",
      "accepted_answers": [
        "kommer til at ændre sig",
        "vil ændre sig"
      ],
      "distractors": [
        "ændrede sig",
        "har ændret sig",
        "ville ændre sig"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "det-bliver-en-god-dag-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Det er en forudsigelse.",
      "sentence": "Det ___ en god dag i morgen.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "har været",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "jeg-tror-at-vores-hold-kommer-til-at-vinde",
      "level": "B1",
      "mode": "future",
      "context": "Du forudsiger resultatet.",
      "sentence": "Jeg tror, at vores hold ___.",
      "accepted_answers": [
        "kommer til at vinde",
        "vil vinde",
        "vinder"
      ],
      "distractors": [
        "vandt",
        "har vundet",
        "ville vinde"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan.",
      "verify": true
    },
    {
      "id": "pas-paa-flasken-kommer-til-at-falde-ned",
      "level": "A2",
      "mode": "future",
      "context": "Flasken står yderst på kanten af bordet.",
      "sentence": "Pas på! Flasken ___ ned.",
      "accepted_answers": [
        "kommer til at falde",
        "falder"
      ],
      "distractors": [
        "faldt",
        "er faldet",
        "ville falde"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske."
    },
    {
      "id": "han-kommer-til-at-blive-ked-af-det-naar-han-hoerer-det",
      "level": "B1",
      "mode": "future",
      "context": "Du kender din chef godt.",
      "sentence": "Han ___ ked af det, når han hører det.",
      "accepted_answers": [
        "kommer til at blive",
        "bliver"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "ville blive"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "du-kommer-til-at-faa-ondt-i-maven-hvis-du-spiser-alt",
      "level": "B1",
      "mode": "future",
      "context": "Du advarer din ven om slik.",
      "sentence": "Du ___ ondt i maven, hvis du spiser alt det slik.",
      "accepted_answers": [
        "kommer til at få",
        "får"
      ],
      "distractors": [
        "fik",
        "har fået",
        "ville få"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "vi-kommer-til-at-savne-dig-naar-du-rejser",
      "level": "B1",
      "mode": "future",
      "context": "Du siger farvel.",
      "sentence": "Vi ___ dig, når du rejser.",
      "accepted_answers": [
        "kommer til at savne",
        "vil savne",
        "savner"
      ],
      "distractors": [
        "savnede",
        "har savnet",
        "ville savne"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "boernene-kommer-til-at-blive-meget-glade-for-gaven",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om dine børn.",
      "sentence": "Børnene ___ meget glade for gaven.",
      "accepted_answers": [
        "kommer til at blive",
        "bliver"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "ville blive"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "bilen-kommer-til-at-ramme-muren",
      "level": "B2",
      "mode": "future",
      "context": "Du ser, at bilen kører mod muren.",
      "sentence": "Bilen ___ muren!",
      "accepted_answers": [
        "kommer til at ramme",
        "rammer"
      ],
      "distractors": [
        "ramte",
        "har ramt",
        "ville ramme"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske."
    },
    {
      "id": "hun-kommer-til-at-grine-naar-hun-ser-billedet",
      "level": "B1",
      "mode": "future",
      "context": "Du kender din søster.",
      "sentence": "Hun ___, når hun ser billedet.",
      "accepted_answers": [
        "kommer til at grine",
        "griner"
      ],
      "distractors": [
        "grinede",
        "har grinet",
        "ville grine"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "sommeren-i-aar-bliver-varm",
      "level": "B1",
      "mode": "future",
      "context": "Det er en forudsigelse om sommeren.",
      "sentence": "Sommeren i år ___ varm.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "har været",
        "ville være"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "priserne-kommer-til-at-stige-i-de-kommende-maaneder",
      "level": "B2",
      "mode": "future",
      "context": "Eksperterne regner med en udvikling.",
      "sentence": "Priserne ___ i de kommende måneder.",
      "accepted_answers": [
        "kommer til at stige",
        "vil stige"
      ],
      "distractors": [
        "steg",
        "er steget",
        "ville stige"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "pas-paa-barnet-kommer-til-at-falde",
      "level": "B1",
      "mode": "future",
      "context": "Du ser, at barnet er ved at falde.",
      "sentence": "Pas på! Barnet ___.",
      "accepted_answers": [
        "kommer til at falde",
        "falder"
      ],
      "distractors": [
        "faldt",
        "er faldet",
        "ville falde"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske."
    },
    {
      "id": "jeg-kommer-til-at-arbejde-meget-i-begyndelsen",
      "level": "B2",
      "mode": "future",
      "context": "Du taler om dit nye job.",
      "sentence": "Jeg ___ meget i begyndelsen.",
      "accepted_answers": [
        "kommer til at arbejde",
        "vil arbejde",
        "arbejder"
      ],
      "distractors": [
        "arbejdede",
        "har arbejdet",
        "ville arbejde"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan.",
      "verify": true
    },
    {
      "id": "teknologien-kommer-til-at-forandre-den-maade-vi",
      "level": "B2",
      "mode": "future",
      "context": "Du skriver en fremtidsprognose.",
      "sentence": "Teknologien ___ den måde, vi arbejder på.",
      "accepted_answers": [
        "kommer til at forandre",
        "vil forandre"
      ],
      "distractors": [
        "forandrede",
        "har forandret",
        "ville forandre"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "min-bror-kommer-til-at-komme-for-sent-som-han-plejer",
      "level": "B1",
      "mode": "future",
      "context": "Du kender din bror.",
      "sentence": "Min bror ___ for sent, som han plejer.",
      "accepted_answers": [
        "kommer til at komme",
        "kommer"
      ],
      "distractors": [
        "kom",
        "er kommet",
        "ville komme"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "vi-kommer-til-at-komme-for-sent-hvis-vi-ikke-skynder-os",
      "level": "A2",
      "mode": "future",
      "context": "Du ser, at det er sent.",
      "sentence": "Vi ___ for sent, hvis vi ikke skynder os.",
      "accepted_answers": [
        "kommer til at komme",
        "kommer"
      ],
      "distractors": [
        "kom",
        "er kommet",
        "ville komme"
      ],
      "note": "Kommer til at bruges, når der er tegn på, at noget snart vil ske."
    },
    {
      "id": "den-nye-skole-kommer-til-at-koste-mange-penge",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om en ny skole.",
      "sentence": "Den nye skole ___ mange penge.",
      "accepted_answers": [
        "kommer til at koste",
        "vil koste"
      ],
      "distractors": [
        "kostede",
        "har kostet",
        "ville koste"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "du-kommer-til-at-faa-problemer-hvis-du-ikke-ringer-til",
      "level": "B2",
      "mode": "future",
      "context": "Du advarer en kollega.",
      "sentence": "Du ___ problemer, hvis du ikke ringer til kunden.",
      "accepted_answers": [
        "kommer til at få",
        "får"
      ],
      "distractors": [
        "fik",
        "har fået",
        "ville få"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "danmark-kommer-til-at-vinde-kampen-i-aften",
      "level": "B1",
      "mode": "future",
      "context": "Du forudsiger udfaldet af kampen.",
      "sentence": "Danmark ___ kampen i aften.",
      "accepted_answers": [
        "kommer til at vinde",
        "vil vinde",
        "vinder"
      ],
      "distractors": [
        "vandt",
        "har vundet",
        "ville vinde"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan.",
      "verify": true
    },
    {
      "id": "jeg-kommer-til-at-elske-den-nye-lejlighed",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om din nye lejlighed.",
      "sentence": "Jeg ___ den nye lejlighed.",
      "accepted_answers": [
        "kommer til at elske",
        "vil elske"
      ],
      "distractors": [
        "elskede",
        "har elsket",
        "ville elske"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan.",
      "verify": true
    },
    {
      "id": "det-kommer-til-at-gaa-godt",
      "level": "A2",
      "mode": "future",
      "context": "Din ven er bange.",
      "sentence": "Det ___ godt.",
      "accepted_answers": [
        "kommer til at gå",
        "går"
      ],
      "distractors": [
        "gik",
        "er gået",
        "ville gå"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "du-kommer-til-at-dumpe-hvis-du-ikke-laeser",
      "level": "B1",
      "mode": "future",
      "context": "Din mor ser, at du ikke har læst.",
      "sentence": "Du ___, hvis du ikke læser.",
      "accepted_answers": [
        "kommer til at dumpe",
        "dumper"
      ],
      "distractors": [
        "dumpede",
        "har dumpet",
        "ville dumpe"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "det-bliver-varmt-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Du læser vejrudsigten.",
      "sentence": "Det ___ varmt i morgen.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "hun-bliver-tyve-naeste-aar",
      "level": "A2",
      "mode": "future",
      "context": "Din søster er 19 nu.",
      "sentence": "Hun ___ tyve næste år.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "har været"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "jeg-bliver-meget-sulten-hvis-jeg-ikke-spiser-snart",
      "level": "B1",
      "mode": "future",
      "context": "Du har ikke spist i dag.",
      "sentence": "Jeg ___ meget sulten, hvis jeg ikke spiser snart.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "min-mor-bliver-vred-naar-hun-ser-det",
      "level": "A2",
      "mode": "future",
      "context": "Du taler om din mor.",
      "sentence": "Min mor ___ vred, når hun ser det.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "min-bror-bliver-30-i-marts",
      "level": "A2",
      "mode": "future",
      "context": "Du taler om en fødselsdag.",
      "sentence": "Min bror ___ 30 i marts.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "det-bliver-moerkt-klokken-fire-i-december",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om vinteren.",
      "sentence": "Det ___ mørkt klokken fire i december.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "hun-bliver-glad-naar-hun-hoerer-at-hun-har-bestaaet",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om et eksamensresultat.",
      "sentence": "Hun ___ glad, når hun hører, at hun har bestået.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "suppen-bliver-kold-hvis-vi-venter-for-laenge",
      "level": "A2",
      "mode": "future",
      "context": "Du taler om maden.",
      "sentence": "Suppen ___ kold, hvis vi venter for længe.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "det-bliver-koldt-i-nat",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om natten.",
      "sentence": "Det ___ koldt i nat.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "firmaet-bliver-halvtreds-aar-naeste-aar",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om et jubilæum.",
      "sentence": "Firmaet ___ halvtreds år næste år.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "du-bliver-rask-igen-om-nogle-dage",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om, hvad der sker, hvis man er forkølet.",
      "sentence": "Du ___ rask igen om nogle dage.",
      "accepted_answers": [
        "bliver",
        "kommer til at blive"
      ],
      "distractors": [
        "blev",
        "er blevet",
        "var"
      ],
      "note": "Bliver bruges om tilstande, der indtræder i fremtiden (blive + adjektiv eller tal)."
    },
    {
      "id": "jeg-har-taenkt-mig-at-laese-medicin-naar-jeg-er-faerdig",
      "level": "B1",
      "mode": "future",
      "context": "Du fortæller om din plan.",
      "sentence": "Jeg ___ medicin, når jeg er færdig i gymnasiet.",
      "accepted_answers": [
        "har tænkt mig at læse",
        "vil læse"
      ],
      "distractors": [
        "tænkte mig at læse",
        "har læst",
        "læste"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "vi-har-taenkt-os-at-besoege-min-soester-i-norge",
      "level": "B1",
      "mode": "future",
      "context": "Du fortæller om din plan for ferien.",
      "sentence": "Vi ___ min søster i Norge.",
      "accepted_answers": [
        "har tænkt os at besøge",
        "vil besøge"
      ],
      "distractors": [
        "tænkte os at besøge",
        "har besøgt",
        "besøgte"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "jeg-har-taenkt-mig-at-ringe-til-ham-i-morgen-og",
      "level": "B1",
      "mode": "future",
      "context": "Du har en personlig plan.",
      "sentence": "Jeg ___ til ham i morgen og undskylde.",
      "accepted_answers": [
        "har tænkt mig at ringe",
        "vil ringe"
      ],
      "distractors": [
        "tænkte mig at ringe",
        "har ringet",
        "ringede"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "jeg-har-taenkt-mig-at-soege-et-nyt-job-i-loebet-af",
      "level": "B2",
      "mode": "future",
      "context": "Du fortæller om din karriere.",
      "sentence": "Jeg ___ et nyt job i løbet af foråret.",
      "accepted_answers": [
        "har tænkt mig at søge",
        "vil søge"
      ],
      "distractors": [
        "tænkte mig at søge",
        "har søgt",
        "søgte"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "han-har-taenkt-sig-at-male-huset-naeste-sommer",
      "level": "B1",
      "mode": "future",
      "context": "Din ven fortæller om sin plan.",
      "sentence": "Han ___ huset næste sommer.",
      "accepted_answers": [
        "har tænkt sig at male",
        "vil male"
      ],
      "distractors": [
        "tænkte sig at male",
        "har malet",
        "malede"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "min-mor-har-taenkt-sig-at-saelge-huset",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om din mors plan.",
      "sentence": "Min mor ___ huset.",
      "accepted_answers": [
        "har tænkt sig at sælge",
        "vil sælge"
      ],
      "distractors": [
        "tænkte sig at sælge",
        "har solgt",
        "solgte"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "jeg-har-taenkt-mig-at-tage-et-kursus-i-dansk",
      "level": "B2",
      "mode": "future",
      "context": "Du fortæller om din plan for efteråret.",
      "sentence": "Jeg ___ et kursus i dansk.",
      "accepted_answers": [
        "har tænkt mig at tage",
        "vil tage"
      ],
      "distractors": [
        "tænkte mig at tage",
        "har taget",
        "tog"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "jeg-har-taenkt-mig-at-aabne-en-lille-cafe-en-dag",
      "level": "B1",
      "mode": "future",
      "context": "Du taler om din drøm.",
      "sentence": "Jeg ___ en lille café en dag.",
      "accepted_answers": [
        "har tænkt mig at åbne",
        "vil åbne"
      ],
      "distractors": [
        "tænkte mig at åbne",
        "har åbnet",
        "åbnede"
      ],
      "note": "Har tænkt mig at udtrykker en personlig hensigt.",
      "verify": true
    },
    {
      "id": "skynd-dig-vi-er-ved-at-gaa-uden-dig",
      "level": "A2",
      "mode": "future",
      "context": "Du står i døren og venter.",
      "sentence": "Skynd dig! Vi ___ uden dig.",
      "accepted_answers": [
        "er ved at gå",
        "går"
      ],
      "distractors": [
        "gik",
        "er gået",
        "var ved at gå"
      ],
      "note": "Er ved at udtrykker, at noget næsten er ved at ske."
    },
    {
      "id": "pas-paa-kaffen-er-ved-at-koge-over",
      "level": "B1",
      "mode": "future",
      "context": "Det er lige ved at ske.",
      "sentence": "Pas på! Kaffen ___.",
      "accepted_answers": [
        "er ved at koge over",
        "koger over"
      ],
      "distractors": [
        "kogte over",
        "har kogt over",
        "var ved at koge over"
      ],
      "note": "Er ved at udtrykker, at noget næsten er ved at ske."
    },
    {
      "id": "filmen-er-ved-at-begynde-saa-saet-dig-ned",
      "level": "B1",
      "mode": "future",
      "context": "Det er ved at blive sent.",
      "sentence": "Filmen ___, så sæt dig ned.",
      "accepted_answers": [
        "er ved at begynde",
        "begynder"
      ],
      "distractors": [
        "begyndte",
        "er begyndt",
        "var ved at begynde"
      ],
      "note": "Er ved at udtrykker, at noget næsten er ved at ske."
    },
    {
      "id": "boernene-er-ved-at-falde-i-soevn",
      "level": "A2",
      "mode": "future",
      "context": "Du ser børnene.",
      "sentence": "Børnene ___ i søvn.",
      "accepted_answers": [
        "er ved at falde",
        "falder"
      ],
      "distractors": [
        "faldt",
        "er faldet",
        "var ved at falde"
      ],
      "note": "Er ved at udtrykker, at noget næsten er ved at ske."
    },
    {
      "id": "telefonen-er-ved-at-loebe-toer-for-stroem",
      "level": "B1",
      "mode": "future",
      "context": "Du ser, at batteriet snart er tomt.",
      "sentence": "Telefonen ___ tør for strøm.",
      "accepted_answers": [
        "er ved at løbe",
        "løber"
      ],
      "distractors": [
        "løb",
        "er løbet",
        "var ved at løbe"
      ],
      "note": "Er ved at udtrykker, at noget næsten er ved at ske.",
      "verify": true
    },
    {
      "id": "projektet-vil-tage-mindst-to-aar",
      "level": "B2",
      "mode": "future",
      "context": "Du skriver en formel rapport.",
      "sentence": "Projektet ___ mindst to år.",
      "accepted_answers": [
        "vil tage",
        "kommer til at tage"
      ],
      "distractors": [
        "tog",
        "har taget",
        "ville tage"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "beslutningen-vil-faa-store-foelger",
      "level": "B2",
      "mode": "future",
      "context": "Du skriver en formel rapport.",
      "sentence": "Beslutningen ___ store følger.",
      "accepted_answers": [
        "vil få",
        "kommer til at få"
      ],
      "distractors": [
        "fik",
        "har fået",
        "ville få"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "efterspoergslen-vil-stige-gradvist",
      "level": "B2",
      "mode": "future",
      "context": "Du skriver en formel prognose.",
      "sentence": "Efterspørgslen ___ gradvist.",
      "accepted_answers": [
        "vil stige",
        "kommer til at stige"
      ],
      "distractors": [
        "steg",
        "er steget",
        "ville stige"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "vi-vil-aldrig-glemme-det",
      "level": "B2",
      "mode": "future",
      "context": "Du taler om fremtiden i en tale.",
      "sentence": "Vi ___ det.",
      "accepted_answers": [
        "vil aldrig glemme",
        "kommer aldrig til at glemme"
      ],
      "distractors": [
        "glemte aldrig",
        "har aldrig glemt",
        "ville aldrig glemme"
      ],
      "note": "Kommer til at bruges om forudsigelser og om ting, der sker uden nogens plan."
    },
    {
      "id": "jeg-skal-nok-klare-det-saa-du-skal-ikke-bekymre-dig",
      "level": "B1",
      "mode": "future",
      "context": "Du lover din ven noget.",
      "sentence": "Jeg ___ det, så du skal ikke bekymre dig.",
      "accepted_answers": [
        "skal nok klare"
      ],
      "distractors": [
        "klarede nok",
        "har nok klaret",
        "ville nok klare"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "jeg-skal-nok-ringe-naar-jeg-er-hjemme",
      "level": "B1",
      "mode": "future",
      "context": "Du beroliger din mor.",
      "sentence": "Jeg ___, når jeg er hjemme.",
      "accepted_answers": [
        "skal nok ringe"
      ],
      "distractors": [
        "ringede nok",
        "har nok ringet",
        "ville nok ringe"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt.",
      "verify": true
    },
    {
      "id": "alle-skal-moede-op-klokken-otte-i-morgen",
      "level": "A2",
      "mode": "future",
      "context": "Din chef kræver det.",
      "sentence": "Alle ___ op klokken otte i morgen.",
      "accepted_answers": [
        "skal møde",
        "møder"
      ],
      "distractors": [
        "mødte",
        "har mødt",
        "vil gerne møde"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "jeg-skal-lave-mad-til-hele-familien-i-aften",
      "level": "A2",
      "mode": "future",
      "context": "Du har lovet din mor det.",
      "sentence": "Jeg ___ mad til hele familien i aften.",
      "accepted_answers": [
        "skal lave",
        "laver"
      ],
      "distractors": [
        "lavede",
        "har lavet",
        "ville lave"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "vi-skal-hjaelpe-naboen-med-at-flytte-paa-loerdag",
      "level": "B1",
      "mode": "future",
      "context": "Der er en aftale med naboen.",
      "sentence": "Vi ___ naboen med at flytte på lørdag.",
      "accepted_answers": [
        "skal hjælpe",
        "hjælper"
      ],
      "distractors": [
        "hjalp",
        "har hjulpet",
        "ville hjælpe"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "eleverne-skal-aflevere-deres-projekt-senest-i-marts",
      "level": "B1",
      "mode": "future",
      "context": "Det er et krav fra skolen.",
      "sentence": "Eleverne ___ deres projekt senest i marts.",
      "accepted_answers": [
        "skal aflevere"
      ],
      "distractors": [
        "afleverede",
        "har afleveret",
        "ville aflevere"
      ],
      "note": "Skal udtrykker pligt eller et krav fra en anden."
    },
    {
      "id": "jeg-skal-vaere-med-til-festen-i-morgen",
      "level": "B1",
      "mode": "future",
      "context": "Du har lovet din ven at komme.",
      "sentence": "Jeg ___ med til festen i morgen.",
      "accepted_answers": [
        "skal være",
        "kommer"
      ],
      "distractors": [
        "var",
        "har været",
        "kom"
      ],
      "note": "Skal udtrykker en aftale eller en plan, der allerede er lagt."
    },
    {
      "id": "jeg-vil-gerne-rejse-til-italien-i-sommer",
      "level": "A2",
      "mode": "future",
      "context": "Du har et ønske til sommeren.",
      "sentence": "Jeg ___ til Italien i sommer.",
      "accepted_answers": [
        "vil gerne rejse"
      ],
      "distractors": [
        "rejste",
        "har rejst",
        "kommer til at rejse"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "hun-vil-gerne-laese-mere-i-fremtiden",
      "level": "B1",
      "mode": "future",
      "context": "Din veninde har et ønske.",
      "sentence": "Hun ___ mere i fremtiden.",
      "accepted_answers": [
        "vil gerne læse"
      ],
      "distractors": [
        "læste",
        "har læst",
        "kommer til at læse"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "jeg-vil-gerne-hjaelpe-dig-med-lektierne",
      "level": "A2",
      "mode": "future",
      "context": "Du tilbyder din hjælp.",
      "sentence": "Jeg ___ dig med lektierne.",
      "accepted_answers": [
        "vil gerne hjælpe"
      ],
      "distractors": [
        "hjalp",
        "har hjulpet",
        "kommer til at hjælpe"
      ],
      "note": "Vil gerne er den almindelige måde at udtrykke et ønske eller et tilbud på."
    },
    {
      "id": "jeg-vil-ikke-goere-det",
      "level": "B1",
      "mode": "future",
      "context": "Du nægter.",
      "sentence": "Jeg ___ det.",
      "accepted_answers": [
        "vil ikke gøre"
      ],
      "distractors": [
        "gjorde ikke",
        "har ikke gjort",
        "ville ikke gøre"
      ],
      "note": "Vil ikke udtrykker, at man nægter eller ikke har lyst.",
      "verify": true
    },
    {
      "id": "han-vil-vaere-pilot",
      "level": "A2",
      "mode": "future",
      "context": "Din ven har et mål.",
      "sentence": "Han ___ pilot.",
      "accepted_answers": [
        "vil være"
      ],
      "distractors": [
        "var",
        "har været",
        "kommer til at være"
      ],
      "note": "Vil udtrykker egen vilje eller beslutning."
    },
    {
      "id": "jeg-ringer-til-laegen-i-naeste-uge",
      "level": "B1",
      "mode": "future",
      "context": "Du aftaler en tid med lægen.",
      "sentence": "Jeg ___ til lægen i næste uge.",
      "accepted_answers": [
        "ringer",
        "skal ringe"
      ],
      "distractors": [
        "ringede",
        "har ringet",
        "ville ringe"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "jeg-tager-en-tur-til-odense-paa-torsdag",
      "level": "B1",
      "mode": "future",
      "context": "Du planlægger din uge.",
      "sentence": "Jeg ___ en tur til Odense på torsdag.",
      "accepted_answers": [
        "tager",
        "skal tage"
      ],
      "distractors": [
        "tog",
        "har taget",
        "ville tage"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "vi-besoeger-vores-bedsteforaeldre-i-weekenden",
      "level": "A2",
      "mode": "future",
      "context": "Du planlægger weekenden.",
      "sentence": "Vi ___ vores bedsteforældre i weekenden.",
      "accepted_answers": [
        "besøger",
        "skal besøge"
      ],
      "distractors": [
        "besøgte",
        "har besøgt",
        "ville besøge"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "vi-ses-paa-torsdag",
      "level": "B1",
      "mode": "future",
      "context": "Du planlægger et møde med din ven.",
      "sentence": "Vi ___ på torsdag.",
      "accepted_answers": [
        "ses",
        "skal ses"
      ],
      "distractors": [
        "sås",
        "har set",
        "ville ses"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "hun-rejser-paa-ferie-i-naeste-uge",
      "level": "A2",
      "mode": "future",
      "context": "Din kollega har fået ferie.",
      "sentence": "Hun ___ på ferie i næste uge.",
      "accepted_answers": [
        "rejser",
        "skal rejse"
      ],
      "distractors": [
        "rejste",
        "har rejst",
        "ville rejse"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "vi-praesenterer-budgettet-den-1-oktober",
      "level": "B1",
      "mode": "future",
      "context": "Chefen har bestemt datoen.",
      "sentence": "Vi ___ budgettet den 1. oktober.",
      "accepted_answers": [
        "præsenterer",
        "skal præsentere"
      ],
      "distractors": [
        "præsenterede",
        "har præsenteret",
        "ville præsentere"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "regeringen-fremlaegger-lovforslaget-i-naeste-uge",
      "level": "B2",
      "mode": "future",
      "context": "Du læser en nyhed.",
      "sentence": "Regeringen ___ lovforslaget i næste uge.",
      "accepted_answers": [
        "fremlægger",
        "skal fremlægge"
      ],
      "distractors": [
        "fremlagde",
        "har fremlagt",
        "ville fremlægge"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk.",
      "verify": true
    },
    {
      "id": "jeg-moeder-dig-klokken-17-ved-stationen",
      "level": "A2",
      "mode": "future",
      "context": "Du aftaler tid med en ven.",
      "sentence": "Jeg ___ dig klokken 17 ved stationen.",
      "accepted_answers": [
        "møder",
        "skal møde"
      ],
      "distractors": [
        "mødte",
        "har mødt",
        "ville møde"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    },
    {
      "id": "jeg-koeber-en-ny-telefon-i-morgen",
      "level": "B1",
      "mode": "future",
      "context": "Du har bestemt det.",
      "sentence": "Jeg ___ en ny telefon i morgen.",
      "accepted_answers": [
        "køber",
        "skal købe"
      ],
      "distractors": [
        "købte",
        "har købt",
        "ville købe"
      ],
      "note": "Faste planer kan udtrykkes både med nutid og med skal; nutid kræver et tidsudtryk."
    }
  ],
  "modal": [
    {
      "id": "hun-kan-tale-fem-sprog",
      "level": "A2",
      "mode": "modal",
      "context": "Hun er god til sprog.",
      "sentence": "Hun ___ tale fem sprog.",
      "options": [
        "skal",
        "må",
        "kan",
        "bør"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "jeg-kan-svoemme-400-meter",
      "level": "A2",
      "mode": "modal",
      "context": "Du har lært at svømme.",
      "sentence": "Jeg ___ svømme 400 meter.",
      "options": [
        "må",
        "skal",
        "bør",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "jeg-kan-ikke-koere-bil",
      "level": "A2",
      "mode": "modal",
      "context": "Du har aldrig lært det, så det er umuligt for dig.",
      "sentence": "Jeg ___ ikke køre bil.",
      "options": [
        "skal",
        "kan",
        "må",
        "bør"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "han-kan-se-meget-langt",
      "level": "A2",
      "mode": "modal",
      "context": "Din ven har et godt syn.",
      "sentence": "Han ___ se meget langt.",
      "options": [
        "må",
        "kan",
        "bør",
        "skal"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "kan-du-spille-klaver",
      "level": "B1",
      "mode": "modal",
      "context": "Du spørger, om han har lært det.",
      "sentence": "___ du spille klaver?",
      "options": [
        "Bør",
        "Skal",
        "Må",
        "Kan"
      ],
      "correct": "Kan",
      "accepted_answers": [
        "Kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "kassen-er-saa-tung-at-jeg-ikke-kan-loefte-den",
      "level": "B1",
      "mode": "modal",
      "context": "Kassen er meget tung.",
      "sentence": "Kassen er så tung, at jeg ikke ___ løfte den.",
      "options": [
        "kan",
        "skal",
        "bør",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "nu-kan-hun-cykle-uden-stoettehjul",
      "level": "A2",
      "mode": "modal",
      "context": "Hun er blevet bedre til at cykle.",
      "sentence": "Nu ___ hun cykle uden støttehjul.",
      "options": [
        "bør",
        "må",
        "skal",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "nu-kan-fuglen-flyve-igen",
      "level": "B1",
      "mode": "modal",
      "context": "Fuglen er rask igen.",
      "sentence": "Nu ___ fuglen flyve igen.",
      "options": [
        "bør",
        "kan",
        "skal",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "hun-kan-allerede-taelle-til-hundrede",
      "level": "A2",
      "mode": "modal",
      "context": "Du taler om en pige på tre år.",
      "sentence": "Hun ___ allerede tælle til hundrede.",
      "options": [
        "kan",
        "bør",
        "skal",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "han-kan-reparere-naesten-alle-slags-computere",
      "level": "B1",
      "mode": "modal",
      "context": "Din kollega er ekspert.",
      "sentence": "Han ___ reparere næsten alle slags computere.",
      "options": [
        "skal",
        "kan",
        "bør",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "som-barn-kunne-jeg-ikke-svoemme",
      "level": "A2",
      "mode": "modal",
      "context": "Du fortæller om din barndom. Du havde ikke lært det.",
      "sentence": "Som barn ___ jeg ikke svømme.",
      "options": [
        "må",
        "kunne",
        "kan",
        "skulle"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "min-mormor-kunne-synge-smukt-da-hun-var-ung",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om din mormor, da hun var ung.",
      "sentence": "Min mormor ___ synge smukt, da hun var ung.",
      "options": [
        "skulle",
        "kan",
        "kunne",
        "må"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "dengang-kunne-jeg-loebe-en-mil-uden-problemer",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om gamle dage.",
      "sentence": "Dengang ___ jeg løbe en mil uden problemer.",
      "options": [
        "må",
        "skal",
        "kan",
        "kunne"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "i-gaar-kunne-jeg-ikke-lugte-noget",
      "level": "B1",
      "mode": "modal",
      "context": "Du var forkølet i går.",
      "sentence": "I går ___ jeg ikke lugte noget.",
      "options": [
        "kunne",
        "skal",
        "må",
        "kan"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "vi-kunne-ikke-se-noget-fordi-der-var-saa-moerkt",
      "level": "B1",
      "mode": "modal",
      "context": "Det var for mørkt til at se noget.",
      "sentence": "Vi ___ ikke se noget, fordi der var så mørkt.",
      "options": [
        "kan",
        "skulle",
        "måtte",
        "kunne"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "som-ung-kunne-hun-loefte-tunge-ting-uden-hjaelp",
      "level": "B2",
      "mode": "modal",
      "context": "Hun er blevet 80. Dengang var hun stærk.",
      "sentence": "Som ung ___ hun løfte tunge ting uden hjælp.",
      "options": [
        "må",
        "skal",
        "kunne",
        "kan"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "vi-kunne-ikke-komme-hjem-fordi-der-ikke-koerte-nogen",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om i går, hvor der ikke var nogen bus.",
      "sentence": "Vi ___ ikke komme hjem, fordi der ikke kørte nogen busser.",
      "options": [
        "skulle",
        "måtte",
        "kunne",
        "kan"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "i-gaar-var-jeg-saa-traet-at-jeg-naesten-ikke-kunne-staa",
      "level": "B1",
      "mode": "modal",
      "context": "Du har haft en lang dag.",
      "sentence": "I går var jeg så træt, at jeg næsten ikke ___ stå.",
      "options": [
        "skal",
        "kan",
        "kunne",
        "burde"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne er datid af kan og udtrykker evne i fortiden."
    },
    {
      "id": "maa-jeg-gaa-paa-toilettet",
      "level": "A2",
      "mode": "modal",
      "context": "Du beder din lærer om lov.",
      "sentence": "___ jeg gå på toilettet?",
      "options": [
        "Skal",
        "Bør",
        "Må",
        "Vil"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "du-maa-gaa-hjem-nu-hvis-du-vil",
      "level": "A2",
      "mode": "modal",
      "context": "Din chef giver dig lov.",
      "sentence": "Du ___ gå hjem nu, hvis du vil.",
      "options": [
        "skal",
        "bør",
        "må",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "i-maa-se-tv-naar-i-har-lavet-lektier",
      "level": "A2",
      "mode": "modal",
      "context": "Mor giver børnene lov.",
      "sentence": "I ___ se tv, når I har lavet lektier.",
      "options": [
        "må",
        "vil",
        "skal",
        "bør"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "maa-jeg-saette-mig-her",
      "level": "B1",
      "mode": "modal",
      "context": "Du spørger høfligt om lov.",
      "sentence": "___ jeg sætte mig her?",
      "options": [
        "Skal",
        "Vil",
        "Må",
        "Bør"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "maa-jeg-aabne-vinduet",
      "level": "A2",
      "mode": "modal",
      "context": "Du spørger din vært om lov.",
      "sentence": "___ jeg åbne vinduet?",
      "options": [
        "Bør",
        "Må",
        "Vil",
        "Skal"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "her-maa-man-gerne-tage-billeder",
      "level": "B1",
      "mode": "modal",
      "context": "Det er tilladt at tage billeder.",
      "sentence": "Her ___ man gerne tage billeder.",
      "options": [
        "vil",
        "skal",
        "bør",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse.",
      "verify": true
    },
    {
      "id": "du-maa-spise-lidt-chokolade-men-ikke-for-meget",
      "level": "A2",
      "mode": "modal",
      "context": "Din læge giver dig lov.",
      "sentence": "Du ___ spise lidt chokolade, men ikke for meget.",
      "options": [
        "må",
        "skal",
        "bør",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "medlemmer-maa-tage-gaester-med",
      "level": "B1",
      "mode": "modal",
      "context": "Reglen giver medlemmerne lov.",
      "sentence": "Medlemmer ___ tage gæster med.",
      "options": [
        "bør",
        "skal",
        "vil",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "maa-jeg-laane-bilen-i-aften",
      "level": "A2",
      "mode": "modal",
      "context": "Du beder om lov til at låne bilen.",
      "sentence": "___ jeg låne bilen i aften?",
      "options": [
        "Vil",
        "Må",
        "Skal",
        "Bør"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "maa-man-ryge-her",
      "level": "B1",
      "mode": "modal",
      "context": "Du spørger om lov til at ryge.",
      "sentence": "___ man ryge her?",
      "options": [
        "Bør",
        "Skal",
        "Vil",
        "Må"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "boern-maa-gerne-komme-med-ind",
      "level": "B1",
      "mode": "modal",
      "context": "Nogen siger, at det er tilladt.",
      "sentence": "Børn ___ gerne komme med ind.",
      "options": [
        "vil",
        "skal",
        "bør",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse.",
      "verify": true
    },
    {
      "id": "du-maa-godt-gaa-i-biografen-med-din-ven",
      "level": "A2",
      "mode": "modal",
      "context": "Din mor giver dig lov.",
      "sentence": "Du ___ godt gå i biografen med din ven.",
      "options": [
        "vil",
        "må",
        "bør",
        "skal"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "her-maa-man-ikke-ryge",
      "level": "A2",
      "mode": "modal",
      "context": "Der er et forbud.",
      "sentence": "Her ___ man ikke ryge.",
      "options": [
        "må",
        "ville",
        "vil",
        "kunne"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "du-maa-ikke-parkere-her",
      "level": "A2",
      "mode": "modal",
      "context": "Skiltet viser, at det er forbudt.",
      "sentence": "Du ___ ikke parkere her.",
      "options": [
        "kunne",
        "vil",
        "ville",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "du-maa-ikke-drikke-alkohol-mens-du-tager-medicinen",
      "level": "B1",
      "mode": "modal",
      "context": "Lægen har forbudt det.",
      "sentence": "Du ___ ikke drikke alkohol, mens du tager medicinen.",
      "options": [
        "vil",
        "ville",
        "kunne",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "man-maa-ikke-spise-i-timerne",
      "level": "A2",
      "mode": "modal",
      "context": "Reglen i klassen.",
      "sentence": "Man ___ ikke spise i timerne.",
      "options": [
        "ville",
        "vil",
        "må",
        "kunne"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "boern-under-12-maa-ikke-se-filmen",
      "level": "B1",
      "mode": "modal",
      "context": "Børn er for unge.",
      "sentence": "Børn under 12 ___ ikke se filmen.",
      "options": [
        "må",
        "vil",
        "ville",
        "kunne"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "du-maa-ikke-bruge-mobiltelefon-her",
      "level": "A2",
      "mode": "modal",
      "context": "Hospitalet har et forbud.",
      "sentence": "Du ___ ikke bruge mobiltelefon her.",
      "options": [
        "ville",
        "vil",
        "kunne",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "hunde-maa-ikke-loebe-frit-i-parken",
      "level": "B1",
      "mode": "modal",
      "context": "Det er et forbud i parken.",
      "sentence": "Hunde ___ ikke løbe frit i parken.",
      "options": [
        "ville",
        "vil",
        "må",
        "kunne"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "eleverne-maa-ikke-bruge-hjaelpemidler-til-eksamen",
      "level": "B1",
      "mode": "modal",
      "context": "Der er et forbud mod at hjælpe.",
      "sentence": "Eleverne ___ ikke bruge hjælpemidler til eksamen.",
      "options": [
        "kunne",
        "må",
        "vil",
        "ville"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "du-maa-ikke-gaa-ud-foer-du-har-ryddet-op",
      "level": "A2",
      "mode": "modal",
      "context": "Din mor forbyder det.",
      "sentence": "Du ___ ikke gå ud, før du har ryddet op.",
      "options": [
        "må",
        "vil",
        "ville",
        "kunne"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "man-maa-ikke-koere-over-for-roedt",
      "level": "B2",
      "mode": "modal",
      "context": "Loven forbyder det.",
      "sentence": "Man ___ ikke køre over for rødt.",
      "options": [
        "ville",
        "kunne",
        "vil",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "som-barn-maatte-jeg-ikke-se-tv-hver-dag",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller om din barndom. Dine forældre var strenge.",
      "sentence": "Som barn ___ jeg ikke se tv hver dag.",
      "options": [
        "må",
        "skal",
        "kunne",
        "måtte"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte",
        "skulle"
      ],
      "note": "Måtte ikke udtrykker et forbud i fortiden."
    },
    {
      "id": "i-gaar-maatte-jeg-gaa-tidligt-hjem",
      "level": "B1",
      "mode": "modal",
      "context": "Din chef gav dig lov i går.",
      "sentence": "I går ___ jeg gå tidligt hjem.",
      "options": [
        "må",
        "vil",
        "måtte",
        "skal"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte"
      ],
      "note": "Måtte er datid af må og udtrykker tilladelse i fortiden."
    },
    {
      "id": "vi-maatte-aldrig-blive-ude-efter-klokken-ti",
      "level": "B2",
      "mode": "modal",
      "context": "Dine forældre var meget strenge.",
      "sentence": "Vi ___ aldrig blive ude efter klokken ti.",
      "options": [
        "måtte",
        "kunne",
        "må",
        "skal"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte"
      ],
      "note": "Måtte ikke udtrykker et forbud i fortiden.",
      "verify": true
    },
    {
      "id": "sidste-uge-maatte-vi-vaelge-opgave-selv",
      "level": "B1",
      "mode": "modal",
      "context": "Din lærer gav jer lov sidste uge.",
      "sentence": "Sidste uge ___ vi vælge opgave selv.",
      "options": [
        "måtte",
        "må",
        "skal",
        "vil"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte"
      ],
      "note": "Måtte er datid af må og udtrykker tilladelse i fortiden."
    },
    {
      "id": "som-barn-maatte-jeg-ikke-spise-slik-andet-end-om",
      "level": "B1",
      "mode": "modal",
      "context": "Din mormor var streng, da du var barn.",
      "sentence": "Som barn ___ jeg ikke spise slik andet end om lørdagen.",
      "options": [
        "vil",
        "kunne",
        "måtte",
        "må"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte"
      ],
      "note": "Måtte ikke udtrykker et forbud i fortiden."
    },
    {
      "id": "i-den-tid-maatte-eleverne-ikke-tale-i-timerne",
      "level": "B2",
      "mode": "modal",
      "context": "Du fortæller om dine første år på skolen.",
      "sentence": "I den tid ___ eleverne ikke tale i timerne.",
      "options": [
        "må",
        "måtte",
        "vil",
        "kunne"
      ],
      "correct": "måtte",
      "accepted_answers": [
        "måtte"
      ],
      "note": "Måtte ikke udtrykker et forbud i fortiden."
    },
    {
      "id": "det-kan-regne-i-morgen",
      "level": "A2",
      "mode": "modal",
      "context": "Ingen ved, hvordan vejret bliver.",
      "sentence": "Det ___ regne i morgen.",
      "options": [
        "kan",
        "bør",
        "skal",
        "vil"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "han-kan-komme-senere-men-jeg-ved-det-ikke",
      "level": "B1",
      "mode": "modal",
      "context": "Han er ikke hjemme, men måske kommer han senere.",
      "sentence": "Han ___ komme senere, men jeg ved det ikke.",
      "options": [
        "vil",
        "kan",
        "skal",
        "bør"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "det-kan-vaere-at-hun-har-glemt-det",
      "level": "A2",
      "mode": "modal",
      "context": "Du er ikke sikker på noget.",
      "sentence": "Det ___ være, at hun har glemt det.",
      "options": [
        "kan",
        "bør",
        "vil",
        "skal"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "hvis-du-ikke-passer-paa-kan-du-blive-syg",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om en risiko.",
      "sentence": "Hvis du ikke passer på, ___ du blive syg.",
      "options": [
        "må",
        "bør",
        "kan",
        "skal"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "moedet-kan-blive-udsat-til-naeste-uge",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om en mulighed.",
      "sentence": "Mødet ___ blive udsat til næste uge.",
      "options": [
        "bør",
        "skal",
        "må",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "hun-kan-naa-det-hvis-toget-ikke-er-forsinket",
      "level": "B1",
      "mode": "modal",
      "context": "Du ved ikke, om hun kommer.",
      "sentence": "Hun ___ nå det, hvis toget ikke er forsinket.",
      "options": [
        "bør",
        "kan",
        "skal",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "det-kan-vaere-en-fejl-i-systemet",
      "level": "B1",
      "mode": "modal",
      "context": "Det er en mulighed, men ikke sikkert.",
      "sentence": "Det ___ være en fejl i systemet.",
      "options": [
        "bør",
        "skal",
        "vil",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "prisen-kan-stige-hvis-der-kommer-en-ny-afgift",
      "level": "B2",
      "mode": "modal",
      "context": "Du er forsigtig med at love noget.",
      "sentence": "Prisen ___ stige, hvis der kommer en ny afgift.",
      "options": [
        "kan",
        "bør",
        "skal",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "smerterne-kan-have-flere-aarsager",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om lægens undersøgelse.",
      "sentence": "Smerterne ___ have flere årsager.",
      "options": [
        "bør",
        "kan",
        "må",
        "skal"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "vejene-kan-vaere-glatte-i-morgen-tidlig",
      "level": "B1",
      "mode": "modal",
      "context": "Der er risiko for glatføre.",
      "sentence": "Vejene ___ være glatte i morgen tidlig.",
      "options": [
        "må",
        "skal",
        "bør",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "det-kunne-godt-vaere-at-han-tog-fejl-dengang",
      "level": "B2",
      "mode": "modal",
      "context": "Du er ikke sikker på, hvad der skete.",
      "sentence": "Det ___ godt være, at han tog fejl dengang.",
      "options": [
        "skal",
        "bør",
        "kunne",
        "vil"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne",
        "kan"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed."
    },
    {
      "id": "det-kunne-vaere-gaaet-meget-vaerre",
      "level": "B2",
      "mode": "modal",
      "context": "Du ser tilbage og tænker på, hvad der var muligt.",
      "sentence": "Det ___ være gået meget værre.",
      "options": [
        "bør",
        "kunne",
        "skal",
        "kan"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed."
    },
    {
      "id": "han-kunne-have-ringet-men-han-gjorde-det-ikke",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om en forkert afgørelse.",
      "sentence": "Han ___ have ringet, men han gjorde det ikke.",
      "options": [
        "skal",
        "kunne",
        "kan",
        "må"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed.",
      "verify": true
    },
    {
      "id": "i-en-bedre-verden-kunne-alle-boern-gaa-i-skole",
      "level": "B2",
      "mode": "modal",
      "context": "Du forestiller dig en anden verden.",
      "sentence": "I en bedre verden ___ alle børn gå i skole.",
      "options": [
        "kunne",
        "skal",
        "bør",
        "må"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne",
        "ville"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed."
    },
    {
      "id": "vi-kunne-maaske-gaa-i-biografen-i-aften",
      "level": "B1",
      "mode": "modal",
      "context": "Du kommer med et forsigtigt forslag.",
      "sentence": "Vi ___ måske gå i biografen i aften.",
      "options": [
        "kunne",
        "må",
        "skal",
        "bør"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed."
    },
    {
      "id": "han-kunne-vaere-blevet-laege-hvis-han-havde-villet",
      "level": "B2",
      "mode": "modal",
      "context": "Du taler om en tidligere mulighed.",
      "sentence": "Han ___ være blevet læge, hvis han havde villet.",
      "options": [
        "skal",
        "må",
        "kunne",
        "kan"
      ],
      "correct": "kunne",
      "accepted_answers": [
        "kunne"
      ],
      "note": "Kunne udtrykker en svagere, hypotetisk eller datids mulighed."
    },
    {
      "id": "han-maa-vaere-hjemme-der-er-lys-i-vinduet",
      "level": "B1",
      "mode": "modal",
      "context": "Du er næsten sikker, for lyset er tændt.",
      "sentence": "Han ___ være hjemme; der er lys i vinduet.",
      "options": [
        "bør",
        "vil",
        "skal",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "det-maa-vaere-en-dyr-bil-den-har-et-maerke-jeg-kender",
      "level": "B1",
      "mode": "modal",
      "context": "Du er næsten sikker, fordi du ser det.",
      "sentence": "Det ___ være en dyr bil; den har et mærke, jeg kender.",
      "options": [
        "bør",
        "vil",
        "skal",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved.",
      "verify": true
    },
    {
      "id": "hun-maa-vaere-meget-traet",
      "level": "B1",
      "mode": "modal",
      "context": "Hun har ikke sovet i to dage.",
      "sentence": "Hun ___ være meget træt.",
      "options": [
        "må",
        "vil",
        "bør",
        "skal"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "han-maa-vaere-meget-rig",
      "level": "B1",
      "mode": "modal",
      "context": "Han har tre huse og to både.",
      "sentence": "Han ___ være meget rig.",
      "options": [
        "vil",
        "må",
        "skal",
        "bør"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "hun-maa-vaere-udmattet",
      "level": "B1",
      "mode": "modal",
      "context": "Hun har arbejdet hele natten.",
      "sentence": "Hun ___ være udmattet.",
      "options": [
        "bør",
        "vil",
        "skal",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "jeg-maa-have-laest-det-et-sted",
      "level": "B1",
      "mode": "modal",
      "context": "Du er næsten sikker på, at du har hørt det før.",
      "sentence": "Jeg ___ have læst det et sted.",
      "options": [
        "bør",
        "skal",
        "må",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "der-maa-vaere-noget-gratis",
      "level": "B2",
      "mode": "modal",
      "context": "Der er masser af folk i køen.",
      "sentence": "Der ___ være noget gratis.",
      "options": [
        "bør",
        "skal",
        "vil",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "han-maa-vaere-paa-arbejde",
      "level": "B1",
      "mode": "modal",
      "context": "Han tager aldrig telefonen.",
      "sentence": "Han ___ være på arbejde.",
      "options": [
        "må",
        "bør",
        "vil",
        "skal"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved.",
      "verify": true
    },
    {
      "id": "hun-maa-vaere-meget-ked-af-det",
      "level": "B1",
      "mode": "modal",
      "context": "Du ser, at hun græder.",
      "sentence": "Hun ___ være meget ked af det.",
      "options": [
        "må",
        "skal",
        "bør",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "hun-maa-vaere-meget-dygtig",
      "level": "B1",
      "mode": "modal",
      "context": "Hun fik en 12-tal på eksamen.",
      "sentence": "Hun ___ være meget dygtig.",
      "options": [
        "vil",
        "bør",
        "må",
        "skal"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    },
    {
      "id": "du-skal-aflevere-rapporten-i-dag",
      "level": "A2",
      "mode": "modal",
      "context": "Din chef kræver det.",
      "sentence": "Du ___ aflevere rapporten i dag.",
      "options": [
        "ville",
        "kunne",
        "skal",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "alle-elever-skal-baere-skoleuniform",
      "level": "A2",
      "mode": "modal",
      "context": "Det er en regel.",
      "sentence": "Alle elever ___ bære skoleuniform.",
      "options": [
        "skal",
        "kan",
        "ville",
        "kunne"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "du-skal-tage-medicinen-hver-dag",
      "level": "A2",
      "mode": "modal",
      "context": "Lægen kræver det.",
      "sentence": "Du ___ tage medicinen hver dag.",
      "options": [
        "kunne",
        "ville",
        "kan",
        "skal"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "alle-bilister-skal-have-en-gyldig-forsikring",
      "level": "B1",
      "mode": "modal",
      "context": "Loven kræver det.",
      "sentence": "Alle bilister ___ have en gyldig forsikring.",
      "options": [
        "skal",
        "kunne",
        "ville",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "du-skal-goere-dine-lektier-foerst",
      "level": "A2",
      "mode": "modal",
      "context": "Din mor kræver det.",
      "sentence": "Du ___ gøre dine lektier først.",
      "options": [
        "kunne",
        "ville",
        "skal",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "gaester-skal-melde-sig-i-receptionen",
      "level": "B1",
      "mode": "modal",
      "context": "Der er en regel.",
      "sentence": "Gæster ___ melde sig i receptionen.",
      "options": [
        "ville",
        "skal",
        "kan",
        "kunne"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "medarbejdere-skal-aflevere-deres-noegler-naar-de-stopper",
      "level": "B1",
      "mode": "modal",
      "context": "Det er en kontraktlig pligt.",
      "sentence": "Medarbejdere ___ aflevere deres nøgler, når de stopper.",
      "options": [
        "kunne",
        "skal",
        "ville",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "eleverne-skal-sidde-stille-under-proeven",
      "level": "A2",
      "mode": "modal",
      "context": "Der er en regel i klassen.",
      "sentence": "Eleverne ___ sidde stille under prøven.",
      "options": [
        "kan",
        "kunne",
        "ville",
        "skal"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "ansoegere-skal-dokumentere-deres-indkomst",
      "level": "B2",
      "mode": "modal",
      "context": "Reglerne for tilskuddet.",
      "sentence": "Ansøgere ___ dokumentere deres indkomst.",
      "options": [
        "kunne",
        "kan",
        "ville",
        "skal"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "alle-skal-deltage-i-moedet",
      "level": "B1",
      "mode": "modal",
      "context": "Chefen har besluttet det.",
      "sentence": "Alle ___ deltage i mødet.",
      "options": [
        "skal",
        "ville",
        "kunne",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "du-skal-rydde-dit-vaerelse-i-dag",
      "level": "A2",
      "mode": "modal",
      "context": "Din far siger det.",
      "sentence": "Du ___ rydde dit værelse i dag.",
      "options": [
        "ville",
        "kan",
        "skal",
        "kunne"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "du-skal-udfylde-formularen-foer-du-kan-faa-et-kort",
      "level": "B1",
      "mode": "modal",
      "context": "Der er flere krav.",
      "sentence": "Du ___ udfylde formularen, før du kan få et kort.",
      "options": [
        "ville",
        "kunne",
        "skal",
        "kan"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "jeg-maa-gaa-nu-ellers-misser-jeg-bussen",
      "level": "A2",
      "mode": "modal",
      "context": "Du har travlt og kan ikke blive.",
      "sentence": "Jeg ___ gå nu, ellers misser jeg bussen.",
      "options": [
        "må",
        "vil",
        "kan",
        "ville"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "vi-maa-vente-til-han-kommer",
      "level": "B1",
      "mode": "modal",
      "context": "Der er ingen anden mulighed.",
      "sentence": "Vi ___ vente, til han kommer.",
      "options": [
        "må",
        "vil",
        "ville",
        "kan"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "jeg-er-syg-saa-jeg-maa-gaa-hjem",
      "level": "A2",
      "mode": "modal",
      "context": "Du er nødt til at tage hjem.",
      "sentence": "Jeg er syg, så jeg ___ gå hjem.",
      "options": [
        "vil",
        "ville",
        "må",
        "kan"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "naar-man-bor-i-danmark-maa-man-betale-skat",
      "level": "B1",
      "mode": "modal",
      "context": "Du har ikke noget valg.",
      "sentence": "Når man bor i Danmark, ___ man betale skat.",
      "options": [
        "ville",
        "må",
        "kan",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "vi-maa-droppe-turen-hvis-det-bliver-ved-med-at-regne",
      "level": "B1",
      "mode": "modal",
      "context": "Der er ikke andet at gøre.",
      "sentence": "Vi ___ droppe turen, hvis det bliver ved med at regne.",
      "options": [
        "ville",
        "kan",
        "vil",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "jeg-maa-skynde-mig-toget-gaar-om-fem-minutter",
      "level": "B1",
      "mode": "modal",
      "context": "Du har lovet at nå det.",
      "sentence": "Jeg ___ skynde mig; toget går om fem minutter.",
      "options": [
        "vil",
        "kan",
        "ville",
        "må"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "hvis-vi-vil-naa-det-maa-vi-arbejde-hele-weekenden",
      "level": "B2",
      "mode": "modal",
      "context": "Der er ingen vej uden om.",
      "sentence": "Hvis vi vil nå det, ___ vi arbejde hele weekenden.",
      "options": [
        "vil",
        "kan",
        "må",
        "ville"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "jeg-maa-desvaerre-aflyse-moedet-paa-grund-af-sygdom",
      "level": "B1",
      "mode": "modal",
      "context": "Du kan ikke undgå det.",
      "sentence": "Jeg ___ desværre aflyse mødet på grund af sygdom.",
      "options": [
        "må",
        "vil",
        "kan",
        "ville"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må kan udtrykke nødvendighed: man er nødt til noget."
    },
    {
      "id": "jeg-skulle-vaere-paa-arbejde-klokken-otte-i-gaar",
      "level": "B1",
      "mode": "modal",
      "context": "Det var aftalt, at du kom kl. 8.",
      "sentence": "Jeg ___ være på arbejde klokken otte i går.",
      "options": [
        "kan",
        "bør",
        "skulle",
        "skal"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "vi-skulle-moedes-kl-18-men-han-kom-for-sent",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller, hvad der var planen.",
      "sentence": "Vi ___ mødes kl. 18, men han kom for sent.",
      "options": [
        "kan",
        "skal",
        "bør",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "i-skolen-skulle-vi-staa-op-naar-laereren-kom-ind",
      "level": "B1",
      "mode": "modal",
      "context": "Der var en regel dengang.",
      "sentence": "I skolen ___ vi stå op, når læreren kom ind.",
      "options": [
        "ville",
        "skal",
        "kunne",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "i-gaar-skulle-jeg-tage-opvasken-men-jeg-glemte-det",
      "level": "B1",
      "mode": "modal",
      "context": "Det var din pligt i går.",
      "sentence": "I går ___ jeg tage opvasken, men jeg glemte det.",
      "options": [
        "bør",
        "kan",
        "skal",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "sidste-uge-skulle-vi-aflevere-en-opgave",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller om sidste uge.",
      "sentence": "Sidste uge ___ vi aflevere en opgave.",
      "options": [
        "bør",
        "skal",
        "skulle",
        "kan"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "alle-ansoegere-skulle-sende-en-tekst-paa-dansk-men",
      "level": "B2",
      "mode": "modal",
      "context": "Du fortæller, hvad der var kravet.",
      "sentence": "Alle ansøgere ___ sende en tekst på dansk, men flere glemte det.",
      "options": [
        "kan",
        "skulle",
        "bør",
        "skal"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "min-bror-skulle-hente-mig-men-han-kom-aldrig",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller, hvad der var aftalt.",
      "sentence": "Min bror ___ hente mig, men han kom aldrig.",
      "options": [
        "kan",
        "bør",
        "skal",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "i-gymnasiet-skulle-vi-laese-tre-boeger-om-aaret",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller om skoletiden.",
      "sentence": "I gymnasiet ___ vi læse tre bøger om året.",
      "options": [
        "kan",
        "bør",
        "skulle",
        "skal"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle er datid af skal og udtrykker pligt eller aftale i fortiden."
    },
    {
      "id": "du-boer-sove-mere-hvis-du-vil-have-det-bedre",
      "level": "B1",
      "mode": "modal",
      "context": "Lægen giver et råd.",
      "sentence": "Du ___ sove mere, hvis du vil have det bedre.",
      "options": [
        "ville",
        "bør",
        "vil",
        "måtte"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "man-boer-drikke-mindst-to-liter-vand-om-dagen",
      "level": "B1",
      "mode": "modal",
      "context": "Du anbefaler noget.",
      "sentence": "Man ___ drikke mindst to liter vand om dagen.",
      "options": [
        "vil",
        "ville",
        "måtte",
        "bør"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "virksomheder-boer-overveje-at-flytte-til-billigere",
      "level": "B2",
      "mode": "modal",
      "context": "Du skriver en anbefaling.",
      "sentence": "Virksomheder ___ overveje at flytte til billigere lokaler.",
      "options": [
        "bør",
        "vil",
        "måtte",
        "ville"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "du-boer-tage-en-pause-hvis-du-er-saa-traet",
      "level": "B1",
      "mode": "modal",
      "context": "Du rådgiver en ven.",
      "sentence": "Du ___ tage en pause, hvis du er så træt.",
      "options": [
        "vil",
        "måtte",
        "bør",
        "ville"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "alle-boer-kende-deres-rettigheder",
      "level": "B2",
      "mode": "modal",
      "context": "Du giver et rigtigt godt råd.",
      "sentence": "Alle ___ kende deres rettigheder.",
      "options": [
        "bør",
        "måtte",
        "vil",
        "ville"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "du-burde-ringe-til-kunden-inden-du-sender-fakturaen",
      "level": "B1",
      "mode": "modal",
      "context": "Du rådgiver en kollega.",
      "sentence": "Du ___ ringe til kunden, inden du sender fakturaen.",
      "options": [
        "burde",
        "måtte",
        "vil",
        "ville"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "vi-burde-nok-tage-en-paraply-med",
      "level": "B1",
      "mode": "modal",
      "context": "Du kommer med et blødt råd.",
      "sentence": "Vi ___ nok tage en paraply med.",
      "options": [
        "burde",
        "vil",
        "ville",
        "måtte"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "du-burde-besoege-aarhus-hvis-du-faar-tid",
      "level": "B1",
      "mode": "modal",
      "context": "Du anbefaler din ven et sted.",
      "sentence": "Du ___ besøge Aarhus, hvis du får tid.",
      "options": [
        "måtte",
        "burde",
        "vil",
        "ville"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "man-burde-nok-tjekke-tallene-en-ekstra-gang",
      "level": "B2",
      "mode": "modal",
      "context": "Du kritiserer forsigtigt.",
      "sentence": "Man ___ nok tjekke tallene en ekstra gang.",
      "options": [
        "vil",
        "ville",
        "burde",
        "måtte"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "du-burde-spise-noget-foer-du-gaar",
      "level": "A2",
      "mode": "modal",
      "context": "Du giver din ven et råd.",
      "sentence": "Du ___ spise noget, før du går.",
      "options": [
        "ville",
        "måtte",
        "vil",
        "burde"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "man-boer-motionere-mere-hvis-man-sidder-ved-en-computer",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om sundhed.",
      "sentence": "Man ___ motionere mere, hvis man sidder ved en computer hele dagen.",
      "options": [
        "bør",
        "vil",
        "ville",
        "måtte"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "du-burde-begynde-paa-opgaven-i-god-tid",
      "level": "B2",
      "mode": "modal",
      "context": "Du vejleder en studerende.",
      "sentence": "Du ___ begynde på opgaven i god tid.",
      "options": [
        "ville",
        "måtte",
        "vil",
        "burde"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "bør"
      ],
      "note": "Burde udtrykker et blødere råd eller en svag anbefaling."
    },
    {
      "id": "jeg-burde-have-ringet-til-hende-i-gaar",
      "level": "B1",
      "mode": "modal",
      "context": "Du ringede ikke, og det var en fejl.",
      "sentence": "Jeg ___ have ringet til hende i går.",
      "options": [
        "burde",
        "kan",
        "bør",
        "skal"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "jeg-burde-vaere-gaaet-tidligere-hjemmefra",
      "level": "B1",
      "mode": "modal",
      "context": "Du kom for sent, fordi du ikke tog tidligere af sted.",
      "sentence": "Jeg ___ være gået tidligere hjemmefra.",
      "options": [
        "vil",
        "bør",
        "burde",
        "kan"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "han-burde-have-lyttet-til-sin-soester",
      "level": "B2",
      "mode": "modal",
      "context": "Han tog en forkert beslutning.",
      "sentence": "Han ___ have lyttet til sin søster.",
      "options": [
        "bør",
        "burde",
        "kan",
        "vil"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "jeg-burde-have-taget-en-jakke-med",
      "level": "B1",
      "mode": "modal",
      "context": "Du glemte at tage en jakke med.",
      "sentence": "Jeg ___ have taget en jakke med.",
      "options": [
        "burde",
        "vil",
        "bør",
        "kan"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "vi-burde-have-forberedt-os-bedre",
      "level": "B1",
      "mode": "modal",
      "context": "Det gik galt, fordi vi ikke forberedte os.",
      "sentence": "Vi ___ have forberedt os bedre.",
      "options": [
        "vil",
        "kan",
        "burde",
        "bør"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "hun-burde-have-sagt-noget-dengang",
      "level": "B2",
      "mode": "modal",
      "context": "Hun fortryder, at hun ikke sagde noget.",
      "sentence": "Hun ___ have sagt noget dengang.",
      "options": [
        "burde",
        "kan",
        "vil",
        "bør"
      ],
      "correct": "burde",
      "accepted_answers": [
        "burde",
        "skulle"
      ],
      "note": "Burde have + participium udtrykker, at man ikke gjorde det rigtige i fortiden."
    },
    {
      "id": "jeg-vil-laere-dansk-foer-jeg-flytter-til-danmark",
      "level": "B1",
      "mode": "modal",
      "context": "Du har besluttet det.",
      "sentence": "Jeg ___ lære dansk, før jeg flytter til Danmark.",
      "options": [
        "ville",
        "vil",
        "bør",
        "kan"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "han-vil-vaere-pilot-naar-han-bliver-stor",
      "level": "A2",
      "mode": "modal",
      "context": "Din ven drømmer om det.",
      "sentence": "Han ___ være pilot, når han bliver stor.",
      "options": [
        "bør",
        "ville",
        "kan",
        "vil"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "jeg-vil-goere-mit-bedste-for-at-bestaa-eksamen",
      "level": "B1",
      "mode": "modal",
      "context": "Du har et mål.",
      "sentence": "Jeg ___ gøre mit bedste for at bestå eksamen.",
      "options": [
        "bør",
        "vil",
        "kan",
        "ville"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "hun-vil-have-den-uddannelse-uanset-hvad-det-koster",
      "level": "B1",
      "mode": "modal",
      "context": "Du er fast besluttet.",
      "sentence": "Hun ___ have den uddannelse, uanset hvad det koster.",
      "options": [
        "bør",
        "kan",
        "vil",
        "ville"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "han-vil-ikke-have-groentsager",
      "level": "B1",
      "mode": "modal",
      "context": "Barnet nægter.",
      "sentence": "Han ___ ikke have grøntsager.",
      "options": [
        "vil",
        "ville",
        "bør",
        "kan"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "jeg-vil-gerne-have-en-kop-kaffe",
      "level": "A2",
      "mode": "modal",
      "context": "Du har et ønske.",
      "sentence": "Jeg ___ gerne have en kop kaffe.",
      "options": [
        "burde",
        "bør",
        "vil",
        "må"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil",
        "ville"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "vi-vil-ikke-give-op-foer-vi-har-vundet",
      "level": "B1",
      "mode": "modal",
      "context": "Du er fast besluttet.",
      "sentence": "Vi ___ ikke give op, før vi har vundet.",
      "options": [
        "kan",
        "ville",
        "vil",
        "bør"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "jeg-vil-flytte-til-aarhus-naar-jeg-har-fundet-arbejde",
      "level": "B1",
      "mode": "modal",
      "context": "Det er din plan.",
      "sentence": "Jeg ___ flytte til Aarhus, når jeg har fundet arbejde.",
      "options": [
        "bør",
        "kan",
        "vil",
        "ville"
      ],
      "correct": "vil",
      "accepted_answers": [
        "vil"
      ],
      "note": "Vil udtrykker egen vilje eller hensigt."
    },
    {
      "id": "jeg-ville-ringe-til-dig-men-telefonen-var-doed",
      "level": "B1",
      "mode": "modal",
      "context": "Du havde en plan, men det gik ikke.",
      "sentence": "Jeg ___ ringe til dig, men telefonen var død.",
      "options": [
        "vil",
        "må",
        "skal",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "skulle"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "jeg-ville-komme-men-jeg-fik-ikke-fri",
      "level": "B1",
      "mode": "modal",
      "context": "Det var din hensigt, men du nåede det ikke.",
      "sentence": "Jeg ___ komme, men jeg fik ikke fri.",
      "options": [
        "må",
        "ville",
        "vil",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "skulle"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "barnet-ville-ikke-spise-sin-aftensmad-i-gaar",
      "level": "B1",
      "mode": "modal",
      "context": "Barnet nægtede i går.",
      "sentence": "Barnet ___ ikke spise sin aftensmad i går.",
      "options": [
        "ville",
        "må",
        "vil",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "som-barn-ville-jeg-vaere-astronaut",
      "level": "B2",
      "mode": "modal",
      "context": "Du fortæller om dit gamle ønske.",
      "sentence": "Som barn ___ jeg være astronaut.",
      "options": [
        "vil",
        "må",
        "ville",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "hun-ville-spoerge-sin-chef-om-en-loenforhoejelse-men",
      "level": "B1",
      "mode": "modal",
      "context": "Det var hendes plan i sidste uge.",
      "sentence": "Hun ___ spørge sin chef om en lønforhøjelse, men turde ikke.",
      "options": [
        "må",
        "ville",
        "skal",
        "vil"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "skulle"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "vi-ville-starte-tidligt-men-bilen-ville-ikke-starte",
      "level": "B2",
      "mode": "modal",
      "context": "Du fortæller om en plan, der ikke gik efter hensigten.",
      "sentence": "Vi ___ starte tidligt, men bilen ville ikke starte.",
      "options": [
        "må",
        "skal",
        "ville",
        "vil"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget.",
      "verify": true
    },
    {
      "id": "han-ville-ikke-fortaelle-os-hvad-der-var-sket",
      "level": "B1",
      "mode": "modal",
      "context": "Han nægtede at forklare sig.",
      "sentence": "Han ___ ikke fortælle os, hvad der var sket.",
      "options": [
        "vil",
        "skal",
        "må",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "jeg-ville-gerne-have-hjulpet-dig-men-jeg-havde-ikke-tid",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller, hvad du havde tænkt.",
      "sentence": "Jeg ___ gerne have hjulpet dig, men jeg havde ikke tid.",
      "options": [
        "ville",
        "skal",
        "vil",
        "må"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hensigt i fortiden, som ofte ikke blev til noget."
    },
    {
      "id": "han-skal-vaere-meget-rig-siger-folk",
      "level": "B2",
      "mode": "modal",
      "context": "Du har kun hørt det fra andre.",
      "sentence": "Han ___ være meget rig, siger folk.",
      "options": [
        "ville",
        "skal",
        "vil",
        "bør"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "politikeren-skal-have-solgt-sit-hus-for-30-millioner",
      "level": "B2",
      "mode": "modal",
      "context": "Du refererer en avis.",
      "sentence": "Politikeren ___ have solgt sit hus for 30 millioner.",
      "options": [
        "bør",
        "skal",
        "vil",
        "ville"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "den-nye-chef-skal-vaere-meget-streng",
      "level": "B2",
      "mode": "modal",
      "context": "Du refererer, hvad kollegerne siger.",
      "sentence": "Den nye chef ___ være meget streng.",
      "options": [
        "bør",
        "ville",
        "skal",
        "vil"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "filmen-skal-vaere-fremragende-siger-kritikerne",
      "level": "B2",
      "mode": "modal",
      "context": "Det siger anmelderne.",
      "sentence": "Filmen ___ være fremragende, siger kritikerne.",
      "options": [
        "bør",
        "vil",
        "ville",
        "skal"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "ifoelge-naboen-skal-de-have-koebt-et-nyt-hus",
      "level": "B1",
      "mode": "modal",
      "context": "Det siger naboerne.",
      "sentence": "Ifølge naboen ___ de have købt et nyt hus.",
      "options": [
        "skal",
        "ville",
        "bør",
        "vil"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved.",
      "verify": true
    },
    {
      "id": "hun-skal-vaere-blevet-gift-i-hemmelighed",
      "level": "B2",
      "mode": "modal",
      "context": "Det er et rygte.",
      "sentence": "Hun ___ være blevet gift i hemmelighed.",
      "options": [
        "skal",
        "bør",
        "vil",
        "ville"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "chefen-skal-angiveligt-vaere-paa-vej-til-en-ny-stilling",
      "level": "B2",
      "mode": "modal",
      "context": "Det siger vejrmeldingen.",
      "sentence": "Chefen ___ angiveligt være på vej til en ny stilling.",
      "options": [
        "skal",
        "ville",
        "bør",
        "vil"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved.",
      "verify": true
    },
    {
      "id": "der-skal-vaere-over-tusind-mennesker-til-demonstrationen",
      "level": "B2",
      "mode": "modal",
      "context": "Du har læst det i en avis.",
      "sentence": "Der ___ være over tusind mennesker til demonstrationen.",
      "options": [
        "vil",
        "skal",
        "ville",
        "bør"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal kan referere til noget, man har hørt, men ikke selv ved."
    },
    {
      "id": "han-skulle-vaere-foedt-i-norge-ifoelge-avisen",
      "level": "B2",
      "mode": "modal",
      "context": "Du refererer en gammel avis.",
      "sentence": "Han ___ være født i Norge, ifølge avisen.",
      "options": [
        "må",
        "skal",
        "kan",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle kan referere til noget, man har hørt om fortiden.",
      "verify": true
    },
    {
      "id": "dengang-skulle-det-vaere-det-bedste-gymnasium-i-landet",
      "level": "B2",
      "mode": "modal",
      "context": "Man mente det dengang.",
      "sentence": "Dengang ___ det være det bedste gymnasium i landet.",
      "options": [
        "skal",
        "må",
        "skulle",
        "kan"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle kan referere til noget, man har hørt om fortiden.",
      "verify": true
    },
    {
      "id": "hun-skulle-angiveligt-have-set-et-spoegelse-i-huset",
      "level": "B2",
      "mode": "modal",
      "context": "Du refererer en gammel historie.",
      "sentence": "Hun ___ angiveligt have set et spøgelse i huset.",
      "options": [
        "skulle",
        "må",
        "skal",
        "kan"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle kan referere til noget, man har hørt om fortiden.",
      "verify": true
    },
    {
      "id": "han-skulle-vaere-en-meget-dygtig-laege-sagde-man",
      "level": "B2",
      "mode": "modal",
      "context": "Man sagde det om ham.",
      "sentence": "Han ___ være en meget dygtig læge, sagde man.",
      "options": [
        "skal",
        "kan",
        "må",
        "skulle"
      ],
      "correct": "skulle",
      "accepted_answers": [
        "skulle"
      ],
      "note": "Skulle kan referere til noget, man har hørt om fortiden.",
      "verify": true
    },
    {
      "id": "kunne-du-hjaelpe-mig-med-mine-tasker",
      "level": "A2",
      "mode": "modal",
      "context": "Du taler til en fremmed.",
      "sentence": "___ du hjælpe mig med mine tasker?",
      "options": [
        "Må",
        "Skal",
        "Bør",
        "Kunne"
      ],
      "correct": "Kunne",
      "accepted_answers": [
        "Kunne",
        "Ville"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "kunne-du-vaere-saa-venlig-at-lukke-vinduet",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler til en ukendt kollega.",
      "sentence": "___ du være så venlig at lukke vinduet?",
      "options": [
        "Må",
        "Kunne",
        "Bør",
        "Skal"
      ],
      "correct": "Kunne",
      "accepted_answers": [
        "Kunne",
        "Ville"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "maa-jeg-bede-om-regningen",
      "level": "B1",
      "mode": "modal",
      "context": "Du bestiller på en restaurant.",
      "sentence": "___ jeg bede om regningen?",
      "options": [
        "Skal",
        "Vil",
        "Må",
        "Bør"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "maa-jeg-faa-lov-at-gaa-tidligt-i-dag",
      "level": "A2",
      "mode": "modal",
      "context": "Du taler til din chef.",
      "sentence": "___ jeg få lov at gå tidligt i dag?",
      "options": [
        "Bør",
        "Må",
        "Skal",
        "Vil"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "kunne-de-fortaelle-mig-hvor-stationen-er",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler til en hotelreceptionist.",
      "sentence": "___ De fortælle mig, hvor stationen er?",
      "options": [
        "Skal",
        "Kunne",
        "Må",
        "Bør"
      ],
      "correct": "Kunne",
      "accepted_answers": [
        "Kunne",
        "Ville"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "maa-jeg-proeve-den-her-jakke",
      "level": "B1",
      "mode": "modal",
      "context": "Du er i en butik.",
      "sentence": "___ jeg prøve den her jakke?",
      "options": [
        "Må",
        "Bør",
        "Skal",
        "Vil"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "kunne-de-sende-mig-de-relevante-dokumenter",
      "level": "B2",
      "mode": "modal",
      "context": "Du skriver en høflig mail.",
      "sentence": "___ De sende mig de relevante dokumenter?",
      "options": [
        "Kunne",
        "Bør",
        "Skal",
        "Må"
      ],
      "correct": "Kunne",
      "accepted_answers": [
        "Kunne",
        "Ville"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "maa-jeg-tale-med-direktoeren",
      "level": "B1",
      "mode": "modal",
      "context": "Du ringer til en receptionist.",
      "sentence": "___ jeg tale med direktøren?",
      "options": [
        "Vil",
        "Bør",
        "Må",
        "Skal"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "kunne-du-laane-mig-en-kop-sukker",
      "level": "A2",
      "mode": "modal",
      "context": "Du spørger din nabo.",
      "sentence": "___ du låne mig en kop sukker?",
      "options": [
        "Kunne",
        "Må",
        "Bør",
        "Skal"
      ],
      "correct": "Kunne",
      "accepted_answers": [
        "Kunne",
        "Ville"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "maa-jeg-sidde-her",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler til en fremmed i toget.",
      "sentence": "___ jeg sidde her?",
      "options": [
        "Bør",
        "Må",
        "Skal",
        "Vil"
      ],
      "correct": "Må",
      "accepted_answers": [
        "Må"
      ],
      "note": "Kunne og ville bruges til høflige forespørgsler."
    },
    {
      "id": "hvis-jeg-havde-tid-ville-jeg-hjaelpe-dig",
      "level": "B1",
      "mode": "modal",
      "context": "Du har ikke tid nu.",
      "sentence": "Hvis jeg havde tid, ___ jeg hjælpe dig.",
      "options": [
        "bør",
        "vil",
        "skal",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "kunne"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "hvis-jeg-var-rig-ville-jeg-rejse-jorden-rundt",
      "level": "B1",
      "mode": "modal",
      "context": "Du er ikke rig.",
      "sentence": "Hvis jeg var rig, ___ jeg rejse jorden rundt.",
      "options": [
        "skal",
        "bør",
        "vil",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "kunne"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "hvis-alle-cyklede-mere-ville-der-vaere-mindre-trafik",
      "level": "B2",
      "mode": "modal",
      "context": "Du taler om en tænkt situation.",
      "sentence": "Hvis alle cyklede mere, ___ der være mindre trafik.",
      "options": [
        "skal",
        "bør",
        "ville",
        "vil"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "kunne"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "jeg-ville-gerne-rejse-til-japan-hvis-jeg-havde-raad",
      "level": "B1",
      "mode": "modal",
      "context": "Du ved ikke, om det sker.",
      "sentence": "Jeg ___ gerne rejse til Japan, hvis jeg havde råd.",
      "options": [
        "bør",
        "ville",
        "skal",
        "vil"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "jeg-ville-elske-at-bo-ved-havet",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om en drøm.",
      "sentence": "Jeg ___ elske at bo ved havet.",
      "options": [
        "bør",
        "skal",
        "ville",
        "vil"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "det-ville-vaere-dejligt-hvis-solen-skinnede-i-morgen",
      "level": "B2",
      "mode": "modal",
      "context": "Du taler om, hvad der kunne ske.",
      "sentence": "Det ___ være dejligt, hvis solen skinnede i morgen.",
      "options": [
        "bør",
        "ville",
        "vil",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "hvis-jeg-var-dig-ville-jeg-sige-ja",
      "level": "B1",
      "mode": "modal",
      "context": "Du er ikke i den situation.",
      "sentence": "Hvis jeg var dig, ___ jeg sige ja.",
      "options": [
        "vil",
        "ville",
        "bør",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "det-ville-vaere-nemmere-hvis-vi-havde-flere-penge",
      "level": "B2",
      "mode": "modal",
      "context": "Du taler om en situation, som ikke findes.",
      "sentence": "Det ___ være nemmere, hvis vi havde flere penge.",
      "options": [
        "ville",
        "skal",
        "vil",
        "bør"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "jeg-ville-gerne-vaere-pilot-hvis-jeg-kunne-vaelge-igen",
      "level": "B1",
      "mode": "modal",
      "context": "Du drømmer.",
      "sentence": "Jeg ___ gerne være pilot, hvis jeg kunne vælge igen.",
      "options": [
        "vil",
        "ville",
        "bør",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "hvis-der-var-flere-cykelstier-ville-flere-mennesker",
      "level": "B2",
      "mode": "modal",
      "context": "Du forestiller dig en anden by.",
      "sentence": "Hvis der var flere cykelstier, ___ flere mennesker cykle.",
      "options": [
        "skal",
        "bør",
        "vil",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "kunne"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "jeg-ville-gerne-tale-med-chefen-hvis-det-var-muligt",
      "level": "B1",
      "mode": "modal",
      "context": "Du vil gerne fortælle, hvad du ville.",
      "sentence": "Jeg ___ gerne tale med chefen, hvis det var muligt.",
      "options": [
        "ville",
        "skal",
        "vil",
        "bør"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "hvad-ville-der-ske-hvis-alle-stoppede-med-at-betale-skat",
      "level": "B2",
      "mode": "modal",
      "context": "Du tænker på hypotetiske følger.",
      "sentence": "Hvad ___ der ske, hvis alle stoppede med at betale skat?",
      "options": [
        "vil",
        "ville",
        "bør",
        "skal"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "kan-hun-tale-dansk",
      "level": "A2",
      "mode": "modal",
      "context": "Du vil vide, om hun har evnen.",
      "sentence": "___ hun tale dansk?",
      "options": [
        "Kan",
        "Må",
        "Bør",
        "Skal"
      ],
      "correct": "Kan",
      "accepted_answers": [
        "Kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "maskinen-kan-skaere-i-baade-trae-og-metal",
      "level": "B1",
      "mode": "modal",
      "context": "Du taler om en maskine.",
      "sentence": "Maskinen ___ skære i både træ og metal.",
      "options": [
        "bør",
        "skal",
        "kan",
        "må"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "du-maa-ikke-komme-med-fordi-du-er-for-lille",
      "level": "A2",
      "mode": "modal",
      "context": "Du er for lille til at komme med.",
      "sentence": "Du ___ ikke komme med, fordi du er for lille.",
      "options": [
        "ville",
        "kunne",
        "må",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må",
        "skal"
      ],
      "note": "Må ikke udtrykker forbud."
    },
    {
      "id": "du-maa-vaelge-hvad-du-vil",
      "level": "B1",
      "mode": "modal",
      "context": "Der er ingen krav; det er op til dig.",
      "sentence": "Du ___ vælge, hvad du vil.",
      "options": [
        "må",
        "skal",
        "bør",
        "vil"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "hun-maa-gerne-bruge-min-computer",
      "level": "B1",
      "mode": "modal",
      "context": "Du giver din ven lov.",
      "sentence": "Hun ___ gerne bruge min computer.",
      "options": [
        "skal",
        "må",
        "vil",
        "bør"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må udtrykker tilladelse."
    },
    {
      "id": "du-boer-overveje-at-tale-med-en-raadgiver",
      "level": "B2",
      "mode": "modal",
      "context": "Du anbefaler en ven en rådgiver.",
      "sentence": "Du ___ overveje at tale med en rådgiver.",
      "options": [
        "ville",
        "bør",
        "måtte",
        "vil"
      ],
      "correct": "bør",
      "accepted_answers": [
        "bør",
        "burde"
      ],
      "note": "Bør udtrykker et råd eller en anbefaling."
    },
    {
      "id": "naar-man-koerer-bil-skal-man-bruge-sele",
      "level": "B1",
      "mode": "modal",
      "context": "Du forklarer en regel i trafikken.",
      "sentence": "Når man kører bil, ___ man bruge sele.",
      "options": [
        "ville",
        "skal",
        "kan",
        "kunne"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "leverandoeren-skal-levere-varerne-senest-den-1-maj",
      "level": "B2",
      "mode": "modal",
      "context": "Det står i kontrakten.",
      "sentence": "Leverandøren ___ levere varerne senest den 1. maj.",
      "options": [
        "kunne",
        "kan",
        "skal",
        "ville"
      ],
      "correct": "skal",
      "accepted_answers": [
        "skal"
      ],
      "note": "Skal udtrykker pligt eller krav fra andre."
    },
    {
      "id": "hun-kan-godt-koere-bil-men-hun-har-ikke-noget-koerekort",
      "level": "B1",
      "mode": "modal",
      "context": "Du fortæller om en ven.",
      "sentence": "Hun ___ godt køre bil, men hun har ikke noget kørekort.",
      "options": [
        "bør",
        "skal",
        "må",
        "kan"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker evne: noget, man har lært eller er i stand til."
    },
    {
      "id": "det-kan-godt-vaere-at-jeg-tager-med",
      "level": "B1",
      "mode": "modal",
      "context": "Du er ikke helt sikker.",
      "sentence": "Det ___ godt være, at jeg tager med.",
      "options": [
        "bør",
        "vil",
        "kan",
        "skal"
      ],
      "correct": "kan",
      "accepted_answers": [
        "kan"
      ],
      "note": "Kan udtrykker, at noget er muligt, men ikke sikkert."
    },
    {
      "id": "hvis-jeg-havde-mere-tid-ville-jeg-laese-flere-boeger",
      "level": "B2",
      "mode": "modal",
      "context": "Du tænker højt om dit liv.",
      "sentence": "Hvis jeg havde mere tid, ___ jeg læse flere bøger.",
      "options": [
        "skal",
        "bør",
        "vil",
        "ville"
      ],
      "correct": "ville",
      "accepted_answers": [
        "ville",
        "kunne"
      ],
      "note": "Ville udtrykker en hypotetisk følge af en betingelse."
    },
    {
      "id": "han-har-loebet-maraton-han-maa-vaere-udmattet",
      "level": "B1",
      "mode": "modal",
      "context": "Det er en sikker slutning, fordi han er træt.",
      "sentence": "Han har løbet maraton; han ___ være udmattet.",
      "options": [
        "skal",
        "vil",
        "må",
        "bør"
      ],
      "correct": "må",
      "accepted_answers": [
        "må"
      ],
      "note": "Må kan udtrykke en næsten sikker slutning ud fra det, man ser eller ved."
    }
  ]
};
