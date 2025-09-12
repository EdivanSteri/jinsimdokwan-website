import { Circle } from "lucide-react";
import type { JSX } from "react";
import React from "react";

export default React.memo(function HistoryStudentsTag(): JSX.Element {
  return (
    <div
      role="status"
      aria-label="Le nostre storie"
      className="flex items-center justify-center gap-x-2 text-sm sm:text-base font-bold my-8
                 bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2] 
                 border border-[#F26262]/40 rounded-full w-44 sm:w-48 h-9 sm:h-10 mx-auto"
    >
      <Circle 
        className="w-2 h-2 rounded-full bg-[#F26262] text-[#F26262]" 
        aria-hidden="true"
      />
      <span className="text-[#B91C1C]">LE NOSTRE STORIE</span>
    </div>
  );
});
