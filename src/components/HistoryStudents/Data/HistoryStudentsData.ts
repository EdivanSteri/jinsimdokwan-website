import type { BeltGrade, HistoryStudent } from "./HistoryStudentsTypes";

/**
 * Standardized belt colors (hex)
 */
const BELT_COLORS = {
  WHITE: "#FFFFFF",
  YELLOW: "#F5D042",
  GREEN: "#34D399",
  BLUE: "#3B82F6",
  RED: "#EF4444",
  BLACK: "#000000",
} as const;

export const beltGrades: BeltGrade[] = [
  {
    id: "10-Kup",
    degree: "10th Kup",
    name: "Cintura Bianca",
    colors: [BELT_COLORS.WHITE],
  },
  {
    id: "9-Kup",
    degree: "9th Kup",
    name: "Cintura Bianca Superiore",
    colors: [BELT_COLORS.WHITE, BELT_COLORS.YELLOW],
  },
  {
    id: "8-Kup",
    degree: "8th Kup",
    name: "Cintura Gialla",
    colors: [BELT_COLORS.YELLOW],
  },
  {
    id: "7-Kup",
    degree: "7th Kup",
    name: "Cintura Gialla Superiore",
    colors: [BELT_COLORS.YELLOW, BELT_COLORS.GREEN],
  },
  {
    id: "6-Kup",
    degree: "6th Kup",
    name: "Cintura Verde",
    colors: [BELT_COLORS.GREEN],
  },
  {
    id: "5-Kup",
    degree: "5th Kup",
    name: "Cintura Verde Superiore",
    colors: [BELT_COLORS.GREEN, BELT_COLORS.BLUE],
  },
  {
    id: "4-Kup",
    degree: "4th Kup",
    name: "Cintura Blu",
    colors: [BELT_COLORS.BLUE],
  },
  {
    id: "3-Kup",
    degree: "3rd Kup",
    name: "Cintura Blu Superiore",
    colors: [BELT_COLORS.BLUE, BELT_COLORS.RED],
  },
  {
    id: "2-Kup",
    degree: "2nd Kup",
    name: "Cintura Rossa",
    colors: [BELT_COLORS.RED],
  },
  {
    id: "1-Kup",
    degree: "1st Kup",
    name: "Cintura Rossa Superiore",
    colors: [BELT_COLORS.RED, BELT_COLORS.BLACK],
  },

  // Dan (black belt) — manteniamo lo stesso name ma degree differente
  {
    id: "1-Dan",
    degree: "1st Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "2-Dan",
    degree: "2nd Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "3-Dan",
    degree: "3rd Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "4-Dan",
    degree: "4th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "5-Dan",
    degree: "5th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "6-Dan",
    degree: "6th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "7-Dan",
    degree: "7th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "8-Dan",
    degree: "8th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "9-Dan",
    degree: "9th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
];

/**
 * Helper per trovare una cintura in modo sicuro tramite id
 * @param id id della cintura (es: "1-Dan", "8-Kup
 */
const findBelt = (id: string): BeltGrade => {
  const found = beltGrades.find((b) => b.id === id);
  if (found) return found;
  // fallback: ultima cintura (9-Dan) nel caso non venga trovato alcun id corrispondente
  return beltGrades[beltGrades.length - 1];
};

export const historyStudents: HistoryStudent[] = [
  {
    id: "1",
    personalInfo: {
      id: "his-stud-1",
      name: "Claudia",
      surname: "Mocci",
      persomalImage: {
        url: "/historicStudents/claudia-mocci.webp",
        altText: "Claudia Mocci - cintura nera 1° Dan",
      },
    },
    beltGrade: findBelt("1-Dan"),
    yearsOfPractice: 14,
    description: `Sono Claudia Mocci, una ragazza di 26 anni, cintura nera I Dan del Team Jin Sim Do Kwan del Maestro Placido. Ho iniziato a praticare taekwondo nel 2011 perché volevo esplorare le arti marziali; quando ho trovato una palestra vicino a casa ho fatto una prova e mi sono appassionata subito. Continuo a praticarlo perché mi stimola sia fisicamente che mentalmente e mi motiva a migliorare. Apprezzo l'approccio del Maestro Placido, l'organizzazione delle lezioni e l'ambiente accogliente che si respira in palestra.`,
  },
  {
    id: "2",
    personalInfo: {
      id: "his-stud-2",
      name: "Marco",
      surname: "Mereu",
      persomalImage: {
        url: "/historicStudents/marco-mereu.webp",
        altText: "Marco Mereu - cintura nera 2° Dan",
      },
    },
    beltGrade: findBelt("2-Dan"),
    yearsOfPractice: 15,
    description: `Mi chiamo Marco Mereu, ho 36 anni e sono appassionato di sport. Mi sono avvicinato al taekwondo da ragazzo e l'ho ripreso durante l'università con la variante ITF. Ho scelto la scuola della Maestro Veronica Placido per la qualità dell'insegnamento: allenamenti vari, attenti alla tecnica e al miglioramento personale, in un contesto familiare che favorisce la crescita dell'atleta.`,
  },
  {
    id: "3",
    personalInfo: {
      id: "his-stud-3",
      name: "Chiara",
      surname: "Pani",
      persomalImage: {
        url: "historicStudents/chiara-pani.webp",
        altText: "Chiara Pani - cintura nera 3° Dan",
      },
    },
    beltGrade: findBelt("3-Dan"),
    yearsOfPractice: 19,
    description: `Sono Chiara, ho 24 anni e pratico taekwondo dall’età di 5. Mi sono appassionata a quest’arte marziale dalla prima volta che ho visto delle persone praticarla, da lì non ho più smesso. Del corso del Maestro mi piace molto il fatto che gli allenamenti siano sempre diversi e stimolanti, mirati sopratutto a migliorare le capacità personali senza perdere di vista le necessità del gruppo,. Inoltre il maestro è sempre molto attento e preparato su quelle che sono le nostre necessità, ancor prima che noi ce ne rendiamo conto. Tutto ciò porta ad avere degli allenamenti davvero piacevoli, sia dal punto di vista psicologico che fisico, inoltre l’attenzione rivolta al gruppo fa sì che nessuno si senta escluso e che le lezioni si svolgano in maniera coinvolgente per tutti`,
  },
  {
    id: "4",
    personalInfo: {
      id: "his-stud-4",
      name: "Mattia",
      surname: "Casu",
      persomalImage: {
        url: "historicStudents/mattia-casu.webp",
        altText: "Mattia Casu - cintura nera 2° Dan",
      },
    },
    beltGrade: findBelt("2-Dan"),
    yearsOfPractice: 16,
    description: `Ciao, sono Mattia!
      Ho 19 anni e studio ingegneria all’università di Cagliari.
      Pratico Taekwon-do dal 2009, da quando avevo 4 anni.
      Ho iniziato questo percorso grazie ai miei genitori, specialmente mio padre, il quale avendo praticato Karate per molti anni, sarebbe stato felice io intraprendessi un percorso simile. Ed eccomi qui!
      Sono Agonista da 3 anni, e nel 2023 ho vinto il campionato europeo nella categoria di Forme a Squadre.
      Ciò che preferisco della Jin Sim Do Kwan e del maestro Veronica Placido sono sicuramente il clima di familiarità ed accoglienza che si trovano all’interno della palestra, abbinati ad un alternarsi di lezioni ed esercizi sempre stimolanti per qualunque atleta.`,
  },
  {
    id: "5",
    personalInfo: {
      id: "his-stud-5",
      name: "Edivan",
      surname: "Steri",
      persomalImage: {
        url: "historicStudents/edivan-steri.webp",
        altText: "Edivan Steri - cintura rossa superiore 1° Kup",
      },
    },
    beltGrade: findBelt("1-Kup"),
    yearsOfPractice: 10,
    description: `Ho 23 anni, nato in Brasile e adottato a 8. Sono programmatore, diplomato perito informatico nel 2021 come perito informatico. Lo sport è la mia più grande passione: il calcio resta il mio primo amore e lo pratico a livello amatoriale, ma per esigenze personali ho scelto attività al chiuso. Dal 2015, a 14 anni, pratico Taekwondo: iniziato quasi per obbligo, è diventato fondamentale per la mia crescita fisica e mentale. Ciò che mi ha legato è il valore umano della palestra e, in particolare, il Maestro Veronica Placido: ha creato un ambiente familiare, trasmette dedizione, sacrificio e una forza mentale straordinaria, ed è in gran parte merito suo se amo così tanto quest’arte. Le lezioni curano preparazione atletica, forme, combattimento e difesa personale.`,
  },
  {
    id: "6",
    personalInfo: {
      id: "his-stud-6",
      name: "Gabriele",
      surname: "Olla",
      persomalImage: {
        url: "historicStudents/gabriele-olla.webp",
        altText: "Gabrielle Olla - cintura nera 1° Dan",
      },
    },
    beltGrade: findBelt("1-Dan"),
    yearsOfPractice: 10,
    description: `Ragazzo di 15 anni. Pratico taekwondo da 10 anni per sapermi autocontrollare.
      Del corso mi piace tutto, soprattutto quando pratichiamo esercizi atletic`,
  },
  {
    id: "7",
    personalInfo: {
      id: "his-stud-7",
      name: "Marco",
      surname: "Bellinzas",
      persomalImage: {
        url: "historicStudents/marco-bellinzas.webp",
        altText: "Marco Bellinzas - cintura rossa superiore 1° Kup",
      },
    },
    beltGrade: findBelt("1-Kup"),
    yearsOfPractice: 12,
    description: `Marco Bellinzas
      29 anni…
      Pratico Taekwon-do perché mi da la possibilità di imparare tanto riguardo la disciplina e soprattutto mi permette di applicarlo nella mia vita sia fisicamente e mentalmente per stare bene sia con me chee con gli altri. Ma soprattutto amo la mia squadra di cui faccio parte perché prima di essere atleta ne sono tifoso praticando con lei da 12 anni… mi piace molto il modo di come applica il metodo di allenamento la mia Maestra Veronica Placido e soprattutto come riesce a motivarti e stimolarti a migliorare e a fare sempre di più con grande dedizione perché lei per me è un grande esempio da seguire e non smetterò mai di ringraziarla per quello che fa per me`,
  },
];
