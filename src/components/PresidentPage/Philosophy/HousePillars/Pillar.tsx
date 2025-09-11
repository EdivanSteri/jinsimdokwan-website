import React, { type JSX } from "react";
import type { HousePillar } from "./Data/HousePillarsTypes";

type PillarProps = {
  pillar: HousePillar;
};

export default React.memo(function Pillar({
  pillar,
}: PillarProps): JSX.Element {
  const ICON = pillar.icon;

  return (
    <li
      tabIndex={0}
      role="listitem"
      aria-labelledby="pillar-jin-title"
      className="flex flex-col items-center justify-center gap-4 bg-[#52404B] border border-white/15 hover:border-red-600/30 transition duration-300 ease-in group/pilastri rounded-2xl p-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600/30"
    >
      <span
        className={`w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tl ${pillar.iconBgColor} group-hover/pilastri:scale-110 transform transition duration-300 ease-in`}
        aria-hidden="true"
      >
        <ICON size={20} aria-hidden="true" focusable={false} />
      </span>

      <div className="flex flex-col items-center justify-center gap-1">
        <h4
          id="pillar-jin-title"
          className="text-2xl sm:text-2xl md:text-3xl font-bold"
        >
          {pillar.corean}
        </h4>
        <span className="text-lg sm:text-xl text-[#FFBCBF] font-semibold">
          {pillar.italian}
        </span>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs">
        {pillar.description}
      </p>
    </li>
  );
});
