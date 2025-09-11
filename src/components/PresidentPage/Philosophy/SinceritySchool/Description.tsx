import React from "react";
import type { JSX } from "react";

export default React.memo(function Description(): JSX.Element {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
        La <strong className="text-[#F26F6F]">Jin Sim Do Kwan</strong> nasce
        come un luogo in cui rifugiarsi dalla vita frenetica, dai problemi
        quotidiani e da tutto ciò che essi comportano.
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
        A suon di{" "}
        <strong className="text-white">sudore, fatica e impegno</strong>, è una
        dimensione che ci permette di toglierci di dosso le maschere e i ruoli
        imposti per essere noi stessi senza giudizio.
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
        Qui <strong className="text-[#F26F6F]">miglioriamo e scopriamo</strong>{" "}
        nuove cose di noi stessi con leggerezza, in un ambiente che accoglie e
        sostiene la crescita personale di ognuno.
      </p>
    </div>
  );
});
