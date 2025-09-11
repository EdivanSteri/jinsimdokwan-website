import React, { type JSX } from "react";

export default React.memo(function Quote(): JSX.Element {
  return (
    <figure className="px-4 py-2 w-full flex flex-col items-center justify-center gap-2 bg-[#A53233] rounded-2xl border border-white/10 text-white text-sm sm:text-base md:text-lg text-center">
      <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold">
        "Il successo non è mai casuale"
      </blockquote>
      <figcaption className="text-sm md:text-base italic font-normal">
        È il risultato di preparazione, duro lavoro e apprendimento dai
        fallimenti.
      </figcaption>
    </figure>
  );
});
