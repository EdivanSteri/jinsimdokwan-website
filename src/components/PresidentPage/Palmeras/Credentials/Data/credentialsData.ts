import { Crown, GraduationCap, Scale, ShieldPlus } from "lucide-react";
import type { Credential } from "./credentialsTypes";

export const credentials: Credential[] = [
  {
    id: "taekwondo-grade",
    icon: Crown,
    iconBgColor: "from-[#080A0E] via-[#1D2633] to-[#080A0E]",
    title: "V Dan Taekwondo ITF",
    subTitle: "Massimo grado tecnico raggiunto nel 2021",
    cardHoverBgColor: "hover:bg-[#151924]",
  },
  {
    id: "jin-sincerità",
    icon: GraduationCap,
    iconBgColor: "from-[#E83A3A] to-[#C82020]",
    title: "Istruttrice Nazionale",
    subTitle: "Certificazione per la formazione di nuovi istruttori",
    cardHoverBgColor: "hover:bg-[#4F212A]",
  },
  {
    id: "jin-sincerità",
    icon: Scale,
    iconBgColor: "from-[#377DF4] to-[#1E51DB]",
    title: "Giudice Internazionale",
    subTitle: "Abilitata a giudicare competizioni mondiali ed europee",
    cardHoverBgColor: "hover:bg-[#1B3167]",
  },
  {
    id: "jin-sincerità",
    icon: ShieldPlus,
    iconBgColor: "from-[#A450F5] to-[#8125D2]",
    title: "Master Trainer Difesa",
    subTitle: "Certificazione avanzata per autodifesa e formazione istruttori",
    cardHoverBgColor: "hover:bg-[#392364]",
  },
];
