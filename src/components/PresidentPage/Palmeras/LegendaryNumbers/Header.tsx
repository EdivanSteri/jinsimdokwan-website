import React, { type JSX } from "react";
import { ChartNoAxesColumn } from "lucide-react";

export default React.memo(function Header(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div
        className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#A53233] rounded-full border border-white/10 text-white text-sm sm:text-base md:text-lg font-semibold"
        aria-hidden="true"
      >
        <ChartNoAxesColumn
          className="w-4 h-4"
          color="white"
          aria-hidden="true"
        />
        NUMERI DA LEGGENDA
      </div>

      <h3
        id="legendary-heading"
        className="p-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-tight"
      >
        Una Carriera <span className="text-[#FDE047]">Straordinaria</span>
      </h3>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-2xl leading-relaxed text-white/90">
        I numeri di una carriera costruita con dedizione e passione
      </p>
    </div>
  );
});
