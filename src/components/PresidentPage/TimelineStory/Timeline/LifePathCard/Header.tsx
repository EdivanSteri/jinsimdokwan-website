import React, { type JSX } from "react";
import { HeartPulse } from "lucide-react";

export default React.memo(function Header(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#A53233] rounded-full border border-white/10 text-white text-sm sm:text-base md:text-lg font-semibold"
        aria-hidden="true"
      >
        <HeartPulse className="w-4 h-4" aria-hidden="true" />
        IL PERCORSO DI UNA VITA
      </div>

      <h3
        id="lifepath-heading"
        className="p-4 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight"
      >
        Ogni goccia di <span className="text-[#FDE047]">sudore</span>
      </h3>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-md sm:max-w-lg leading-relaxed text-white/90">
        25 anni di allenamenti quotidiani, rinunce e determinazione. Dietro ogni
        vittoria ci sono migliaia di ore di preparazione silenziosa.
      </p>
    </div>
  );
});
