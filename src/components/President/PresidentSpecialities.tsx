import {
  AcademicCapIcon,
  MapIcon,
  ShieldExclamationIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import PresidentSpecialityItem from "./PresidentSpecialityItem";

export type InstructorSpeciality = {
  id: string | number;
  icon: React.ElementType;
  title: string;
  subTitle: string;
};

const instructorSpecialitiesItems: InstructorSpeciality[] = [
  {
    id: 0,
    icon: AcademicCapIcon,
    title: "Taekwondo Tradizionale",
    subTitle:
      "Tecniche classiche coreane, forme (poomsae) e filosofia marziale",
  },
  {
    id: 1,
    icon: TrophyIcon,
    title: "Taekwondo Sportivo",
    subTitle: "Preparazione agonistica, combattimento e competizioni",
  },
  {
    id: 2,
    icon: ShieldExclamationIcon,
    title: "Difesa Personale Femminile",
    subTitle: "Tecniche specifiche per donne, gestione situazioni di pericolo",
  },
  {
    id: 3,
    icon: MapIcon,
    title: "Autodifesa Urbana",
    subTitle: "Tecniche pratiche per la vita quotidiana e situazioni reali",
  },
];

export default function PresidentSpecialities() {
  return (
    <div className="p-8 lg:p-16 bg-red-600/15 rounded-3xl border border-red-600/20">
      <div className=" text-center mb-8 flex flex-col items-center justify-center gap-y-2">
        <h3 className="text-2xl font-bold">Le Sue Specialità</h3>
        <p className="text-sm font-medium text-gray-300">
          Expertise e competenze che la rendono unica
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-center gap-y-4">
        {instructorSpecialitiesItems.map((speciality) => (
          <PresidentSpecialityItem key={speciality.id} hilight={speciality} />
        ))}
      </div>
    </div>
  );
}
