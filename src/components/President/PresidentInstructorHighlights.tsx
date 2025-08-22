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

const instructorHilightsItems: InstructorHighlight[] = [
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

export default function PresidentInstructorHighlights() {
  return (
    <div className="grid grid-cols-1 items-start justify-center gap-y-4">
      {instructorHilightsItems.map((hilight) => (
        <PresidentInstructorHilightItem key={hilight.id} hilight={hilight} />
      ))}
    </div>
  );
}
