import { SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import AboutBenefit from "./AboutBenefit";

export type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Benessere Fisico",
    description: "Migliora forza, flessibilità e resistenza cardiovascolare",
    icon: <HeartIcon className="size-5 text-white" />,
  },
  {
    title: "Equilibrio Mentale",
    description: "Sviluppa disciplina, concentrazione e fiducia in te stesso",
    icon: <SparklesIcon className="size-5 text-white" />,
  },
  {
    title: "Autodifesa",
    description: "Impara a proteggerti e aumenta la tua sicurezza personale",
    icon: <ShieldCheckIcon className="size-5 text-white" />,
  },
  {
    title: "Benessere Fisico",
    description: "Migliora forza, flessibilità e resistenza cardiovascolare",
    icon: <UsersIcon className="size-5 text-white" />,
  },
  // Add more benefits as needed
];

export default function AboutBenefitsWrapper() {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      {benefits.map((benefit, index) => (
        <AboutBenefit benefit={benefit} index={index} />
      ))}
    </div>
  );
}
