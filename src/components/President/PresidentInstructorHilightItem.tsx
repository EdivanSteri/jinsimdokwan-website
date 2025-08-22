import React, { type JSX } from "react";
import type { InstructorHighlight } from "./PresidentInstructorHighlights";

type PresidentInstructorHilightItemProps = {
  hilight: InstructorHighlight;
};

export default React.memo(function PresidentInstructorHilightItem({
  hilight,
}: PresidentInstructorHilightItemProps): JSX.Element {
  const Icon = hilight.icon as React.ElementType;

  return (
    // h-full e flex-column con justify-between garantiscono altezza uniforme
    <div className="h-full w-full p-4 rounded-xl flex flex-col items-start justify-between gap-y-2 bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition duration-300 ease-in-out">
      <div className="flex items-center justify-start gap-x-3">
        <div
          className={`flex items-center justify-center w-10 h-10 ${hilight.iconBgColor} rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out`}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>

      {/* contenitore testo: min-h-0 + flex-1 fa sì che il testo si adatti e non forzi l'altezza */}
      <div className="mt-2 min-h-0 flex-1">
        <span className="text-sm font-bold block">{hilight.title}</span>
        <p className="text-xs leading-tight text-gray-400 break-words">
          {hilight.subTitle}
        </p>
      </div>
    </div>
  );
});
