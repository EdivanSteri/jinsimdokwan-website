import { useMemo } from "react";
import Card from "./Card";
import { timelineCardData } from "./data/timelineData";
import type { JSX } from "react";

/**
 * Timeline (font più grandi su desktop)
 */
export default function Timeline(): JSX.Element {
  const timelineItems = useMemo(
    () =>
      timelineCardData.map((card, index) => {
        return (
          <div
            key={card.id}
            role="listitem"
            aria-labelledby={`timeline-item-${card.id}-year`}
            className={`relative w-full lg:col-span-2 lg:flex lg:items-center lg:justify-center ${
              index % 2 === 0 ? "lg:pr-145" : "lg:pl-145"
            } `}
          >
            <div
              className={`absolute -left-12 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 
                          flex flex-col items-center justify-center 
                          text-center 
                          w-15 h-15 sm:w-18 sm:h-18 lg:w-32 lg:h-32 
                          ${card.data.color} rounded-full border-[2px] lg:border-[6px] border-white 
                          p-2 
                          z-10 
                          transform hover:scale-110 transition-transform duration-300 ease-in-out`}
              role="img"
              aria-label={`${card.data.year} — ${card.data.age} anni`}
            >
              <time
                id={`timeline-item-${card.id}-year`}
                dateTime={String(card.data.year)}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white"
              >
                {card.data.year}
              </time>

              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 font-semibold">
                {card.data.age} anni
              </span>
            </div>

            <Card data={card.data} />
          </div>
        );
      }),
    [] // static import, stabile
  );

  return (
    <div
      aria-labelledby="timeline-title"
      className="text-center"
      role="region"
    >
      <h2 id="timeline-title" className="sr-only">
        Cronologia: dalla nascita dell'associazione ai giorni nostri
      </h2>

      <div className="flex items-center justify-center gap-4 text-md font-semibold">
        <span className="text-[#9CA2AE] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          INIZIO
        </span>
        <div className="h-1 w-12 bg-gradient-to-r from-[#9CA2AE] to-[#DC2626]"></div>
        <span className="text-[#DC2626] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          PRESENTE
        </span>
      </div>

      <div
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-32 border-gradient lg:border-l-0 pl-8 lg:pl-0 mt-10"
        role="list"
        aria-label="Timeline storica"
      >
        <div
          className="hidden absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full w-[8px] bg-gradient-to-b from-[#9CA2AE] to-[#DC2626] lg:block"
          aria-hidden="true"
        />
        {timelineItems}
      </div>
    </div>
  );
}
