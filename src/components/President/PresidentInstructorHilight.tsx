import React, { type JSX } from "react";
import type {
  InstructorHighlight,
  InstructorItem,
} from "./data/PresidentTypes";

type PresidentInstructorHilightItemProps = {
  highlight: InstructorItem;
};

export default React.memo(function PresidentInstructorHilight({
  highlight,
}: PresidentInstructorHilightItemProps): JSX.Element {
  const item = highlight as InstructorHighlight;
  const Icon = item.icon;

  return (
    <div className="w-full p-4 rounded-xl flex flex-col items-start justify-between gap-y-2 bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition duration-300 ease-in-out">
      <div className="flex items-center justify-start gap-x-3">
        <div
          className={`flex items-center justify-center w-10 h-10 ${item.iconBgColor} rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out`}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-2">
        <span className="text-sm font-bold block">{item.title}</span>
        <p className="text-xs leading-tight text-gray-400 break-words">
          {item.subTitle}
        </p>
      </div>
    </div>
  );
});
