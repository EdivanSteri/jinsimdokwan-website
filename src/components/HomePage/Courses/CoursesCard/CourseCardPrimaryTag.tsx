import { StarIcon } from "@heroicons/react/16/solid";
import React, { type JSX } from "react";

export default React.memo(function CourseCardPrimaryTag(): JSX.Element {
  return (
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 w-fit px-4 py-1.5 bg-[#EC3E3E] rounded-4xl text-xs text-center text-white font-bold flex items-center justify-center gap-x-1"
      role="status"
      aria-label="Corso principale"
      title="Corso principale"
    >
      <StarIcon className="w-4 h-4" aria-hidden="true" />
      <span>CORSO PRINCIPALE</span>
    </div>
  );
});
