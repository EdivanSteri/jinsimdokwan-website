import React, { useMemo, type JSX } from "react";
import {
  AcademicCapIcon,
  FireIcon,
  ShieldExclamationIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import PresidentInstructorHilightItem from "./PresidentInstructorHilightItem";

export type InstructorHighlight = {
  id: string | number;
  icon: React.ElementType;
  iconBgColor?: string;
  title: string;
  subTitle: string;
};

const instructorHilightsItems: ReadonlyArray<InstructorHighlight> = [
  {
    id: 0,
    icon: TrophyIcon,
    iconBgColor: "bg-[#DC2626]",
    title: "Cintura Nera V Dan",
    subTitle: "Taekwondo ITF",
  },
  {
    id: 1,
    icon: ShieldExclamationIcon,
    iconBgColor: "bg-black",
    title: "Istruttrice Certificata",
    subTitle: "Difesa Personale",
  },
  {
    id: 2,
    icon: FireIcon,
    iconBgColor: "bg-[#EAB308]",
    title: "Campionessa Regionale",
    subTitle: "Multiple volte vincitrice",
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    iconBgColor: "bg-[#2563EB]",
    title: "Formatrice Istruttori",
    subTitle: "Accademia Nazionale",
  },
];

export default React.memo(function PresidentInstructorHighlights(): JSX.Element {
  // memoizziamo gli elementi per non ricrearli ad ogni render del genitore
  const items = useMemo(
    () =>
      instructorHilightsItems.map((hilight) => (
        <PresidentInstructorHilightItem key={hilight.id} hilight={hilight} />
      )),
    []
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-label="Qualifiche dell'istruttrice">
      {items}
    </div>
  );
});
