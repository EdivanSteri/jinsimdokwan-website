import {
  ChartNoAxesColumn,
  Flag,
  Globe,
  HeartPulse,
  Trophy,
  TrophyIcon,
} from "lucide-react";
import { palmerasData } from "./data/palmerasData";

export default function LegendaryNumbers() {
  const competionsNumber = palmerasData.length;
  const europeenChampionNumbers = palmerasData.filter(
    (p) =>
      p.competitionName === "European Championship" && p.rankingPosition === 1
  ).length;
  const worldChampionNumbers = palmerasData.filter(
    (p) => p.competitionName === "World Championship" && p.rankingPosition === 1
  ).length;

  const practiceYears = 24;

  return (
    <div
      className="bg-gradient-to-r from-[#B11F1F] to-[#7F1C1E] rounded-2xl lg:rounded-4xl
                  mx-auto
                  flex flex-col items-center justify-center gap-10
                  px-4 py-12
                  text-white text-center"
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <div className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#A53233] rounded-full border border-white/10 text-white text-sm sm:text-base md:text-lg font-semibold">
          <ChartNoAxesColumn
            className="w-4 h-4"
            color="white"
            aria-hidden="true"
          />
          NUMERI DA LEGGENDA
        </div>

        <h3
          id="timeline-heading"
          className="p-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-tight"
        >
          Una Carriera <span className="text-[#FDE047]">Straordinaria</span>
        </h3>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-2xl leading-relaxed text-white/90">
          I numeri di una carriera costruita con dedizione e passione
        </p>
      </div>

      <div className="w-full flex flex-col items-stretch justify-center gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-start justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-10 rounded-lg">
            <span
              className="self-center w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center
                             bg-gradient-to-r from-[#60A5FA] to-[#2563EB]"
            >
              <Flag size={20} />
            </span>
            <span className="font-bold text-[#5EA3FA]">{competionsNumber}</span>
            <span className="text-left">Competizioni</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-10 rounded-lg">
            <span
              className="self-center w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center
                             bg-gradient-to-r from-[#FACB15] to-[#F97416]"
            >
              <Trophy size={20} />
            </span>
            <span className="font-bold text-[#F9C815]">
              {europeenChampionNumbers}
            </span>
            <span className="text-left">Titoli Europei</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-10 rounded-lg">
            <span
              className="self-center w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center
                             bg-gradient-to-r from-[#EBB409] to-[#FDE046]"
            >
              <Globe size={20} />
            </span>
            <span className="font-bold text-[#EBB50B]">
              {worldChampionNumbers}
            </span>
            <span className="text-left">Titoli Mondiali</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-10 rounded-lg">
            <span
              className="self-center w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center
                             bg-gradient-to-r from-[#F87172] to-[#EC4898]"
            >
              <HeartPulse size={20} />
            </span>
            <span className="font-bold text-[#F87072]">{practiceYears}</span>
            <span className="text-left">Anni di Carriera</span>
          </div>
        </div>

        <figure className="p-6 w-full flex flex-col items-center justify-center gap-2 bg-[#A53233] rounded-2xl border border-white/10 text-white text-sm sm:text-base md:text-lg  text-center">
          <TrophyIcon color="#FDE047" />
          <blockquote className="text-xl font-bold">
            "Ogni medaglia racconta una storia"
          </blockquote>
          <figcaption className="text-sm italic font-normal">
            Dietro ogni risultato c'è passione, sacrificio e determinazione.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
