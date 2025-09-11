import React, { type JSX } from "react";
import { TrophyIcon } from "lucide-react";

export default React.memo(function Quote(): JSX.Element {
  return (
    <figure className="p-6 w-full flex flex-col items-center justify-center gap-2 bg-[#A53233] rounded-2xl border border-white/10 text-white text-sm sm:text-base md:text-lg text-center">
      <TrophyIcon color="#FDE047" aria-hidden="true" />
      <blockquote className="text-xl md:text-2xl font-bold">
        "Ogni medaglia racconta una storia"
      </blockquote>
      <figcaption className="text-sm italic font-normal">
        Dietro ogni risultato c'è passione, sacrificio e determinazione.
      </figcaption>
    </figure>
  );
});
