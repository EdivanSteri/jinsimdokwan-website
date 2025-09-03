import { useMemo } from "react";
import { palmerasData } from "./data/palmerasData";
import { MapPin, Medal, Trophy } from "lucide-react";
import "./sliders.css";

export default function Sliders() {
  const gradientBgColorHandler = (color: string): string => {
    switch (color) {
      case "gold":
        return "from-yellow-500/10 via-yellow-400/10 to-orange-500/10";
      case "silver":
        return "bg-gradient-to-br from-gray-200/10 via-blue-900/10 to-blue-400/10";
      case "bronze":
        return "from-orange-400/10 via-orange-500/10 to-amber-600/10";
      default:
        return "from-gray-200 to-gray-400";
    }
  };

  const borderColorHandler = (color: string): string => {
    switch (color) {
      case "gold":
        return "border border-orange-500/20";
      case "silver":
        return "border border-gray-500/20";
      case "bronze":
        return "border border-amber-600/20 ";
      default:
        return "border-gray-400/10";
    }
  };

  // Funzione helper per determinare i colori in base alla posizione
  const getRankingColors = (rankingPosition: number) => {
    switch (rankingPosition) {
      case 1:
        return {
          yearColor: "text-[#FDE047]",
          positionColor: "text-[#E2B917]",
          gradient: "from-[#F7C712] to-[#E67814]",
          badgeGradient: "from-[#4E411D]/60 to-[#523223]/60",
          badgeBorder: "border-[#523223]/5",
          badgeText: "text-[#FDE047]",
        };
      case 2:
        return {
          yearColor: "text-white",
          positionColor: "text-[#9AA0AD]",
          gradient: "from-[#C1C6CE] to-[#676D7B]",
          badgeGradient: "from-[#2E3341]/60 to-[#242A39]/60",
          badgeBorder: "border-[#242A39]/5",
          badgeText: "text-gray-400",
        };
      default:
        return {
          yearColor: "text-[#FB923C]",
          positionColor: "text-[#F58E3B]",
          gradient: "from-[#FA8A32] to-[#CE5914]",
          badgeGradient: "from-[#533222]/60 to-[#512A20]/60",
          badgeBorder: "border-[#512A20]/5",
          badgeText: "text-[#FB923C]",
        };
    }
  };

  // Pre-calcola i dati per migliorare le prestazioni
  const processedData = useMemo(
    () =>
      palmerasData.map((item, index) => ({
        ...item,
        colors: getRankingColors(item.rankingPosition),
        key: index,
      })),
    []
  );

  return (
    <div className="relative mt-16 md:mt-20 py-8">
      <div
        className="slider overflow-visible py-4"
        style={
          {
            "--width": "288px",
            "--height": "350px",
            "--quantity": processedData.length,
          } as React.CSSProperties
        }
      >
        <div className="list">
          {processedData.map((tmp) => (
            <article
              className={`relative w-72 md:w-96 h-[400px] md:h-[450px] 
                  rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden          
                  backdrop-blur-lg 
                  flex flex-col items-center justify-center gap-4 md:gap-6
                  bg-gradient-to-r 
                  ${gradientBgColorHandler(tmp.color)} 
                  ${borderColorHandler(tmp.color)} 
                  text-black
                  py-8 md:py-10 item`}
              style={{ "--position": tmp.key + 1 } as React.CSSProperties}
              key={tmp.key}
            >
              <div className="flex flex-col items-center justify-center gap-2 text-base md:text-lg font-bold">
                <div>
                  <Medal size={36} className="md:w-10 md:h-10" color="white" />
                </div>
                <span className={tmp.colors.yearColor}>{tmp.year}</span>
                <span className={`font-semibold ${tmp.colors.positionColor}`}>
                  {tmp.rankingPosition} Posto
                </span>
              </div>

              <div
                className={`w-12 h-16 flex items-center justify-center rounded-xl 
                  bg-gradient-to-tr ${tmp.colors.gradient}`}
              >
                <Trophy size={18} className="md:w-5 md:h-5" color="white" />
              </div>

              <div className="flex flex-col items-center justify-center gap-2 px-2">
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold text-center">
                  {tmp.competitionName}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs md:text-sm text-gray-400 font-semibold">
                  <MapPin size={13} className="md:w-4 md:h-4" color="#A95353" />
                  <span>
                    {tmp.venue.country}, {tmp.venue.city}
                  </span>
                </div>
              </div>

              <div className="w-full flex items-center justify-center px-4">
                <span
                  className={`w-full py-2 bg-gradient-to-r border rounded-lg text-center text-xs md:text-sm font-semibold ${tmp.colors.badgeGradient} ${tmp.colors.badgeBorder} ${tmp.colors.badgeText}`}
                >
                  {tmp.category.age} {tmp.category.gender} {tmp.category.rank}{" "}
                  {tmp.category.type === "sparring" && tmp.category.weight}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
