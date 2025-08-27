import React, { type JSX } from "react";

export default React.memo(function ContactAndInfoHeader(): JSX.Element {
  return (
    <header
      className="flex flex-col items-center justify-center gap-2 pb-10 text-center"
      aria-hidden={false}
    >
      <h2
        id="contact-info-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
      >
        Inizia il Tuo Percorso
      </h2>

      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
        Prenota la tua lezione di prova gratuita e scopri quale corso fa per te.
      </p>
    </header>
  );
});
