import React, { type JSX } from "react";
import type {
  InstructorItem,
  InstructorSpeciality,
} from "./data/PresidentTypes";

type PresidentSpecialityItemProps = {
  highlight: InstructorItem;
};

export default React.memo(function PresidentInstructorSpeciality({
  highlight,
}: PresidentSpecialityItemProps): JSX.Element {
  const item = highlight as InstructorSpeciality;
  const Icon = item.icon;
  return (
    <div className="p-4 rounded-xl flex gap-x-2 bg-red-800/15 backdrop-blur-sm border border-red-700/10 hover:border-red-600/30 group transition duration-300 ease-in-out">
      <div
        className={`flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#DC2626] rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out`}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="text-lg font-bold">{item.title}</span>
        <p className="text-sm text-gray-300 break-words">{item.subTitle}</p>
      </div>
    </div>
  );
});
