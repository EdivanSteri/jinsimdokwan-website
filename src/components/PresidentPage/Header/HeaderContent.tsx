import { MoveDown } from "lucide-react";
import React, { type JSX } from "react";
import { HashLink } from "react-router-hash-link";

export default React.memo(function HeaderContent(): JSX.Element {
  return (
    <div className="relative z-10 flex h-full flex-col items-start justify-center px-4 text-white text-left">
      <div className="px-4 py-1 bg-[#DC2626] rounded-full text-sm font-semibold animate-pulse">
        LA NOSTRA LEADER
      </div>

      <h1
        id="president-heading"
        className="mt-4 text-5xl font-bold sm:text-5xl lg:text-6xl flex-col  flex gap-y-2"
      >
        <span>Maestro</span>

        <span className="relative text-[#F87171] text-glow animate-textGlow">
          Veronica Placido
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg sm:text-xl lg:text-2xl">
        Scopri il percorso straordinario di una donna che ha dedicato la sua
        vita alle arti marziali e alla formazione di nuove generazioni di
        atleti.
      </p>

      <HashLink
        to="#timeline"
        smooth
        tabIndex={0}
        aria-label="Scopri la sua storia"
        className="mt-6 text-md font-semibold inline-flex items-center justify-center gap-x-2 p-4 rounded-full bg-[#DC2626] cursor-pointer animate-personalBounce group"
      >
        Scopri la Sua Storia
        <MoveDown className="inline-block w-4 h-4 group-hover:animate-bounce" />
      </HashLink>
    </div>
  );
});
