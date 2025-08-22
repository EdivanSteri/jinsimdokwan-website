import React, { type JSX } from "react";

export default React.memo(function PresidentQuote(): JSX.Element {
  return (
    <figure
      className="p-4  lg:p-8 flex flex-col items-center justify-center gap-y-4 text-center bg-red-600/15 rounded-3xl border border-red-600/20"
      role="region"
      aria-labelledby="president-quote"
    >
      <blockquote
        id="president-quote"
        className="text-xl italic sm:text-2xl lg:text-3xl"
        lang="it"
      >
        "Il Taekwondo non è solo uno sport, è una filosofia di vita. Ogni
        calcio, ogni forma, ogni respiro ci insegna a essere migliori."
      </blockquote>

      <figcaption
        className="text-sm text-[#F77171]"
        aria-label="Autore della citazione"
      >
        - Maestro Placido, Presidente ASD JinSimDoKwan
      </figcaption>
    </figure>
  );
});
