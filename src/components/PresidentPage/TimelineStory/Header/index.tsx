import React, { type JSX } from "react";
import { Timer } from "lucide-react";

export default React.memo(function Header(): JSX.Element {
  return (
    <header
      role="region"
      aria-labelledby="timeline-heading"
      className="w-full flex flex-col items-center justify-center text-center text-white mt-24"
    >
      <div className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#DC2626] rounded-full text-sm sm:text-base md:text-lg font-semibold">
        <Timer className="w-4 h-4" aria-hidden="true" />
        IL PERCORSO DI UNA VITA
        <Timer className="w-4 h-4" aria-hidden="true" />
      </div>

      <h2
        id="timeline-heading"
        className="p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
      >
        TIMELINE DEL SUCCESSO
      </h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl mb-10 leading-relaxed text-white/90">
        25 anni di dedizione, sacrifici e trionfi che hanno portato la Maestra
        Kim dai primi passi al vertice del Taekwondo mondiale
      </p>
    </header>
  );
});
