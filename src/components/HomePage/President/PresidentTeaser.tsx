import React, { type JSX } from "react";

export default React.memo(function PresidentTeaser(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-start gap-y-6">
      <h3 className="text-xl sm:text-2xl font-bold">
        La Passione che Guida la Nostra Accademia
      </h3>

      <p className="text-sm sm:text-base leading-relaxed">
        Con oltre 20 anni di dedizione alle arti marziali, la nostra presidente
        è il cuore pulsante della JinSimDoKwan. La sua passione per il{" "}
        <span className="text-[#F87171] font-bold">Taekwondo</span> e la{" "}
        <span className="text-[#F87171] font-bold">Difesa Personale</span> si
        riflette in ogni aspetto del nostro insegnamento.
      </p>

      <p className="text-sm sm:text-base leading-relaxed">
        Non è solo un'istruttrice, ma una vera{" "}
        <span className="font-bold">leader</span> che ha formato generazioni di
        artisti marziali, trasmettendo non solo tecniche, ma valori di rispetto,
        disciplina e crescita personale.
      </p>
    </div>
  );
});
