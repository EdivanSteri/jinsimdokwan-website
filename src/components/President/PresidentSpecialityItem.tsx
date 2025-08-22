import React, { type JSX } from "react";
import type { InstructorSpeciality } from "./PresidentSpecialities";

type PresidentSpecialityItemProps = {
  hilight: InstructorSpeciality;
};

export default React.memo(function PresidentSpecialityItem({
  hilight,
}: PresidentSpecialityItemProps): JSX.Element {
  const Icon = hilight.icon as React.ElementType;

  return (
    // h-full permette alla card di espandersi all'altezza della riga della grid
    <div className="h-full p-4 rounded-xl flex gap-x-2 bg-red-800/15 backdrop-blur-sm border border-red-700/10 hover:border-red-600/30 group transition duration-300 ease-in-out">
      <div
        className={`flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#DC2626] rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out`}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>

      {/* min-h-0 + flex-1 permettono al contenuto testuale di fare wrap correttamente */}
      <div className="flex flex-col gap-y-2 min-h-0 flex-1">
        <span className="text-lg font-bold">{hilight.title}</span>
        <p className="text-sm text-gray-300 break-words">{hilight.subTitle}</p>
      </div>
    </div>
  );
});
