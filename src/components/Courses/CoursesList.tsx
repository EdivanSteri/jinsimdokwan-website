import type React from "react";
import CourseCard from "./CoursesCard";

type Weekday =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

type TimeString = `${number}:${number}`; //"HH:mm"

// rappresentazione più strutturata dell'intervallo d'età
type AgesRange = {
  min: number;
  max?: number; // se omesso => "min e oltre"
};

// timetable domain model (più chiaro e immutabile)
type CourseTimetable = Readonly<{
  days: ReadonlyArray<Weekday>;
  startTime: TimeString;
  endTime: TimeString;
  targetAudience?: "Bambini" | "Ragazzi" | "Adulti" | "Tutti";
  agesRange?: AgesRange;
}>;

// modello di dominio (senza elementi UI come icone)
type DomainCourse = Readonly<{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  // prezzo in centesimi per evitare problemi con i float
  priceCents: number;
  courseTimetable: ReadonlyArray<CourseTimetable>;
  learningOutcomes?: ReadonlyArray<string>;
  familyBenefits?: ReadonlyArray<string>;
  isPrimary?: boolean;
}>;

// modello per la UI (estende il domain model con proprietà di visualizzazione)
export type CourseView = DomainCourse & {
  imageUrl?: string;
  icon?: React.ReactNode;
};

const courses: CourseView[] = [
  {
    id: "taekwondo",
    title: "Taekwondo ITF",
    subtitle: "Il nostro corso principale per tutta la famiglia",
    description:
      "L'arte marziale coreana ITF più praticata al mondo, perfetta per bambini e ragazzi. Sviluppa disciplina, rispetto, autostima e forma fisica.",
    imageUrl: "/tkd-img-course-card.avif",
    tag: "Bambini - Ragazzi",
    priceCents: 4000, // 40,00 €
    courseTimetable: [
      {
        days: ["Martedì", "Giovedì"],
        startTime: "18:30",
        endTime: "19:45",
        targetAudience: "Bambini",
        agesRange: { min: 6, max: 13 },
      },
      {
        days: ["Martedì", "Giovedì"],
        startTime: "20:00",
        endTime: "21:30",
        targetAudience: "Ragazzi",
        agesRange: { min: 14 }, // 14 e oltre
      },
    ],
    familyBenefits: [
      "Prima settimana gratuita",
      "Sconto famiglia 15%",
      "Divisa inclusa",
      "Genitori possono assistere",
    ],
    icon: <span>🥋</span>,
    isPrimary: true,
  },
  {
    id: "difesa-personale",
    title: "Difesa Personale",
    subtitle: "Proteggiti nella vita reale",
    description:
      "Tecniche pratiche ed efficaci per situazioni reali. Sistema completo che combina elementi di diverse arti marziali.",
    imageUrl: "/difesa personale.jpg",
    tag: "Principianti/Avanzati",
    priceCents: 4000,
    courseTimetable: [
      {
        days: ["Venerdì"],
        startTime: "19:00",
        endTime: "20:30",
        targetAudience: "Adulti",
      },
    ],
    learningOutcomes: [
      "Tecniche di disarmo",
      "Gestione situazioni di pericolo",
      "Sviluppo dell'istinto difensivo",
      "Controllo dello stress",
    ],
    icon: <span>🛡️</span>,
    isPrimary: false,
  },
  {
    id: "pilates",
    title: "Pilates",
    subtitle: "Equilibrio e benessere",
    description:
      "Rafforza il core, migliora la postura e trova l'equilibrio perfetto tra mente e corpo. Metodo scientificamente provato.",
    imageUrl: "/pilates.jpg",
    tag: "Tutti i livelli",
    priceCents: 3000,
    courseTimetable: [
      {
        days: ["Mercoledì"],
        startTime: "10:00",
        endTime: "11:30",
        targetAudience: "Tutti",
      },
    ],
    learningOutcomes: [
      "Rafforzamento del core",
      "Correzione posturale",
      "Aumento flessibilità",
      "Tecniche di respirazione",
    ],
    icon: <span>🧘</span>,
    isPrimary: false,
  },
];

export default function CoursesList() {
  return (
    <ul>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ul>
  );
}
