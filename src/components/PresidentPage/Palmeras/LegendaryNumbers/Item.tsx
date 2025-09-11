import React, { type JSX } from "react";
import type { LegendaryNumber } from "./Data/legendaryNumbersTypes";

type ItemProps = {
  legendaryNumber: LegendaryNumber;
};

export default React.memo(function Item({
  legendaryNumber,
}: ItemProps): JSX.Element {
  const ICON = legendaryNumber.icon;

  return (
    <li role="listitem">
      <figure
        role="figure"
        aria-label={`${legendaryNumber.counter} competizioni`}
        className="flex flex-col items-start justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-10 rounded-lg"
      >
        <span
          className={`self-center w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${legendaryNumber.iconBgColor}`}
          aria-hidden="true"
        >
          <ICON size={20} />
        </span>
        <span className="font-bold text-[#5EA3FA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {legendaryNumber.counter}
        </span>
        <span className="text-left text-sm sm:text-base">
          {legendaryNumber.title}
        </span>
      </figure>
    </li>
  );
});
