import { HeartIcon, HeartPulse, House, MapPinned } from "lucide-react";
import type { HousePillar } from "./HousePillarsTypes";

export const pillars: HousePillar[] = [
  {
    id: "jin-sincerità",
    icon: HeartPulse,
    iconBgColor: "from-[#D54042] to-[#DF2B2B]",
    corean: "진 (Jin)",
    italian: "Sincerità",
    description: `Essere autentici con noi stessi e con gli altri, togliendo le maschere
          imposte dalla società`,
  },
  {
    id: "sim-cuore",
    icon: HeartIcon,
    iconBgColor: "from-[#EC478B] to-[#EF4553]",
    corean: "심 (Sim)",
    italian: "Cuore",
    description: `Mettere passione e dedizione in ogni gesto, vivendo con il cuore aperto`,
  },
  {
    id: "do-via",
    icon: MapPinned,
    iconBgColor: "from-[#377DF4] to-[#2968ED]",
    corean: "도 (Do)",
    italian: "Via",
    description:
      "Il percorso di crescita personale che ci porta a scoprire nuove parti di noi",
  },
  {
    id: "kwan-casa",
    icon: House,
    iconBgColor: "from-[#20C05B] to-[#18A94E]",
    corean: "관 (Kwan)",
    italian: "Casa",
    description:
      "Un luogo sicuro dove rifugiarsi dalla vita frenetica e crescere insieme",
  },
];
