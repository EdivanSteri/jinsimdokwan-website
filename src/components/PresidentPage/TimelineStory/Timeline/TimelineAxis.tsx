import React, { type JSX } from "react";

export default React.memo(function TimelineAxis(): JSX.Element {
  return (
    <div className="flex items-center justify-center gap-4 text-md font-semibold">
      <span className="text-[#9CA2AE] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        INIZIO
      </span>
      <div className="h-1 w-12 bg-gradient-to-r from-[#9CA2AE] to-[#DC2626]"></div>
      <span className="text-[#DC2626] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        PRESENTE
      </span>
    </div>
  );
});
