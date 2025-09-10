import {
  FlowerIcon,
  Trophy,
  Users,
  Star,
  UserCheck,
  BookOpen,
  Award,
} from "lucide-react";
import type { TimelineCard } from "./timelineTypes";
import { BELT_COLORS } from "../../../../../utils/beltGradeUtils";

// helper palette / funzione di scelta "intelligente" dei colori di UI (non correlati alla cintura)
const ACCENT_FALLBACKS = [
  "bg-[#FF9F1C]", // arancio vibrante, ottimo su bianco e nero
  "bg-[#E71D36]", // rosso intenso, forte contrasto
  "bg-[#2EC4B6]", // turchese pieno, luminoso ma visibile
  "bg-[#118AB2]", // blu profondo, elegante e leggibile
  "bg-[#073B4C]", // blu notte, contrasto deciso
  "bg-[#FF9F1C]", // chiusura gradiente armoniosa
];

function pickAccentColor(age: number, index: number): string {
  // logica semplice e deterministica:
  // - fasce d'età (scalare verso palette luminose -> intense)
  if (age <= 12) return ACCENT_FALLBACKS[0]; // bambini
  if (age <= 15) return ACCENT_FALLBACKS[1]; // preadolescenti
  if (age <= 19) return ACCENT_FALLBACKS[2]; // adolescenti
  if (age <= 24) return ACCENT_FALLBACKS[3]; // giovani adulti
  if (age <= 30) return ACCENT_FALLBACKS[4]; // adulti
  // oltre -> colore d'impatto
  // usiamo anche l'indice per introdurre variazione riproducibile
  return ACCENT_FALLBACKS[(index + 5) % ACCENT_FALLBACKS.length];
}

/** timelineCardData (ogni item ora ha `.data.color` per l'UI) */
export const timelineCardData: TimelineCard[] = [
  {
    id: "primi-passi-2001",
    data: {
      icon: FlowerIcon,
      color: pickAccentColor(9, 0),
      title: "Primi Passi",
      year: 2001,
      age: 9,
      description:
        "Inizia a praticare Taekwondo in una piccola palestra di Seoul, subito affascinata dalla disciplina e filosofia dell'arte marziale.",
      beltGrade: {
        id: "10-Kup",
        degree: "10th Kup",
        name: "Cintura Bianca",
        colors: [BELT_COLORS.WHITE],
      },
    },
  },
  {
    id: "prima-competizione-2005",
    data: {
      icon: Trophy,
      color: pickAccentColor(13, 1),
      title: "Prima Competizione",
      year: 2005,
      age: 13,
      description:
        "Partecipa alla sua prima gara regionale, conquistando il terzo posto nella categoria juniores. Scopre la passione per il combattimento.",
      beltGrade: {
        id: "8-Kup",
        degree: "8th Kup",
        name: "Cintura Gialla",
        colors: [BELT_COLORS.YELLOW],
      },
    },
  },
  {
    id: "aiutante-istruttore-2009",
    data: {
      icon: UserCheck,
      color: pickAccentColor(17, 2),
      title: "Aiutante Istruttore Taekwon-do ITF",
      year: 2009,
      age: 17,
      description:
        "Da giovane aiutante istruttore supporta le lezioni base, insegna esercizi tecnici e assiste gli allievi principianti, sviluppando le doti didattiche.",
      beltGrade: {
        id: "6-Kup",
        degree: "6th Kup",
        name: "Cintura Verde",
        colors: [BELT_COLORS.GREEN],
      },
    },
  },
  {
    id: "atleta-nazionale-2011",
    data: {
      icon: Users,
      color: pickAccentColor(19, 3),
      title: "Atleta Nazionale - Taekwon-do ITF",
      year: 2011,
      age: 19,
      description:
        "Selezionata per alcune convocazioni della nazionale italiana ITF, partecipa a raduni tecnici e competizioni internazionali rappresentando l'Italia.",
      beltGrade: {
        id: "4-Kup",
        degree: "4th Kup",
        name: "Cintura Blu",
        colors: [BELT_COLORS.BLUE],
      },
    },
  },
  {
    id: "cintura-i-dan-kickboxing-2012",
    data: {
      icon: Star,
      color: pickAccentColor(20, 4),
      title: "Cintura I Dan - Kickboxing",
      year: 2012,
      age: 20,
      description:
        "Ottiene la cintura I Dan in Kickboxing ampliando le proprie competenze nel combattimento e nelle tecniche di striking.",
      beltGrade: {
        id: "1-Dan",
        degree: "1st Dan",
        name: "Cintura Nera",
        colors: [BELT_COLORS.BLACK],
      },
    },
  },
  {
    id: "insegnante-2016",
    data: {
      icon: UserCheck,
      color: pickAccentColor(24, 5),
      title: "Insegnante Taekwon-do ITF",
      year: 2016,
      age: 24,
      description:
        "Diventa insegnante a pieno titolo, tenendo corsi e formando nuove leve con metodologia strutturata e attenzione alla sicurezza.",
      beltGrade: {
        id: "2-Dan",
        degree: "2nd Dan",
        name: "Cintura Nera",
        colors: [BELT_COLORS.BLACK],
      },
    },
  },
  {
    id: "istruttore-ju-jitsu-2018",
    data: {
      icon: BookOpen,
      color: pickAccentColor(26, 6),
      title: "Istruttore Ju-Jitsu",
      year: 2018,
      age: 26,
      description:
        "Si specializza come istruttore di Ju-Jitsu, integrando tecniche di controllo e leva a corpo libero al bagaglio tecnico già consolidato.",
      beltGrade: {
        id: "3-Dan",
        degree: "3rd Dan",
        name: "Cintura Nera",
        colors: [BELT_COLORS.BLACK],
      },
    },
  },
  {
    id: "cintura-v-dan-2024",
    data: {
      icon: Award,
      color: pickAccentColor(32, 7),
      title: "Cintura V Dan - Taekwon-do ITF",
      year: 2024,
      age: 32,
      description:
        "Raggiunge il grado di V Dan in Taekwon-do ITF, riconoscimento di lungo percorso tecnico, impegno e contributo all'insegnamento della disciplina.",
      beltGrade: {
        id: "5-Dan",
        degree: "5th Dan",
        name: "Cintura Nera",
        colors: [BELT_COLORS.BLACK],
      },
    },
  },
];
