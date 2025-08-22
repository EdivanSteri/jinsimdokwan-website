import {
  AcademicCapIcon,
  FireIcon,
  MapIcon,
  ShieldExclamationIcon,
  TrophyIcon,
} from "@heroicons/react/16/solid";
import type { InstructorItem } from "./PresidentTypes";

export const hilightsItems: ReadonlyArray<InstructorItem> = [
  {
    id: 0,
    icon: TrophyIcon,
    iconBgColor: "bg-[#DC2626]",
    title: "Cintura Nera V Dan",
    subTitle: "Taekwondo ITF",
    kind: "highlight",
  },
  {
    id: 1,
    icon: ShieldExclamationIcon,
    iconBgColor: "bg-black",
    title: "Istruttrice Certificata",
    subTitle: "Difesa Personale",
    kind: "highlight",
  },
  {
    id: 2,
    icon: FireIcon,
    iconBgColor: "bg-[#EAB308]",
    title: "Campionessa Regionale",
    subTitle: "Multiple volte vincitrice",
    kind: "highlight",
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    iconBgColor: "bg-[#2563EB]",
    title: "Formatrice Istruttori",
    subTitle: "Accademia Nazionale",
    kind: "highlight",
  },
];

export const specialitiesItems: ReadonlyArray<InstructorItem> = [
  {
    id: 0,
    icon: AcademicCapIcon,
    title: "Taekwondo Tradizionale",
    subTitle:
      "Tecniche classiche coreane, forme (poomsae) e filosofia marziale",
    kind: "speciality",
  },
  {
    id: 1,
    icon: TrophyIcon,
    title: "Taekwondo Sportivo",
    subTitle: "Preparazione agonistica, combattimento e competizioni",
    kind: "speciality",
  },
  {
    id: 2,
    icon: ShieldExclamationIcon,
    title: "Difesa Personale Femminile",
    subTitle: "Tecniche specifiche per donne, gestione situazioni di pericolo",
    kind: "speciality",
  },
  {
    id: 3,
    icon: MapIcon,
    title: "Autodifesa Urbana",
    subTitle: "Tecniche pratiche per la vita quotidiana e situazioni reali",
    kind: "speciality",
  },
];
