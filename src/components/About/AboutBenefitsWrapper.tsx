import React from "react";
import {
  SparklesIcon,
  UsersIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import AboutBenefit from "./AboutBenefit";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
};

const benefits: Benefit[] = [
  {
    id: "benessere-fisico-1",
    title: "Benessere Fisico",
    description: "Migliora forza, flessibilità e resistenza cardiovascolare",
    icon: <HeartIcon className="w-5 h-5 text-white" aria-hidden="true" />,
  },
  {
    id: "equilibrio-mentale",
    title: "Equilibrio Mentale",
    description: "Sviluppa disciplina, concentrazione e fiducia in te stesso",
    icon: <SparklesIcon className="w-5 h-5 text-white" aria-hidden="true" />,
  },
  {
    id: "autodifesa",
    title: "Autodifesa",
    description: "Impara a proteggerti e aumenta la tua sicurezza personale",
    icon: <ShieldCheckIcon className="w-5 h-5 text-white" aria-hidden="true" />,
  },
  {
    id: "socializzazione",
    title: "Socializzazione",
    description: "Cresci insieme ad una comunità motivante e solidale",
    icon: <UsersIcon className="w-5 h-5 text-white" aria-hidden="true" />,
  },
];

export default function AboutBenefitsWrapper() {
  return (
    <ul
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
      role="list"
      aria-label="Vantaggi della palestra"
    >
      {benefits.map((benefit) => (
        <li key={benefit.id}>
          <AboutBenefit key={benefit.id} benefit={benefit} />
        </li>
      ))}
    </ul>
  );
}
