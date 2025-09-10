import React, { type JSX } from "react";
import type { TimelineCard } from "./data/timelineTypes";

type TimelineNodeProps = {
  card: TimelineCard;
};

export default React.memo(function TimelineNode({
  card,
}: TimelineNodeProps): JSX.Element {
  return (
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
  );
});
