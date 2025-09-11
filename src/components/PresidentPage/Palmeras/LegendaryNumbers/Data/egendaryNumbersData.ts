import { Flag } from "lucide-react";
import type { LegendaryNumber } from "./legendaryNumbersTypes";
import { palmerasData } from "../../data/palmerasData";

const competitionsCount = palmerasData.length;
const europeanTitles = palmerasData.filter(
  (p) =>
    p.competitionName === "European Championship" && p.rankingPosition === 1
).length;
const worldTitles = palmerasData.filter(
  (p) => p.competitionName === "World Championship" && p.rankingPosition === 1
).length;

export const legendaryNumbersData: LegendaryNumber[] = [
  {
    id: "competizioni",
    icon: Flag,
    iconBgColor: "from-[#60A5FA] to-[#2563EB]",
    counter: competitionsCount,
    counterColor: "text-[#8FFFF0]",
    title: "Competizioni",
  },
  {
    id: "titoli-europei",
    icon: Flag,
    iconBgColor: "from-[#FACB15] to-[#F97416]",
    counter: europeanTitles,
    counterColor: "text-[#F9C815]",
    title: "Titoli Europei",
  },
  {
    id: "titoli-mondiali",
    icon: Flag,
    iconBgColor: "from-[#EBB409] to-[#FDE046]",
    counter: worldTitles,
    counterColor: "text-[#EBB50B]",
    title: "Titoli Mondiali",
  },
  {
    id: "anni-carriera",
    icon: Flag,
    iconBgColor: "from-[#F87172] to-[#EC4898]",
    counter: 24,
    counterColor: "text-[#FFFFFF]",
    title: "Anni di Carriera",
  },
];
