import React, { type JSX } from "react";
import { Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default React.memo(function StartJourney(): JSX.Element {
  return (
    <section
      role="region"
      aria-labelledby="start-journey-heading"
      className="relative px-4 sm:px-6 md:px-12 lg:px-4 xl:px-16 2xl:px-30 py-20 flex flex-col items-center justify-center gap-6 text-center text-white bg-[#2D2F3B] overflow-hidden"
    >
      {/* decorative overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"
        aria-hidden="true"
      />

      {/* content (above overlay) */}
      <div className="relative z-10 max-w-4xl">
        <h2
          id="start-journey-heading"
          className="text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight"
        >
          Inizia il Tuo Percorso con Noi
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed font-semibold">
          Unisciti alla famiglia JinSimDoKwan e scopri il potere delle arti
          marziali sotto la guida del Maestro Veronica Placido.
        </p>

        <div className="mt-8 flex justify-center">
          <HashLink
            to="/#contact-info"
            smooth
            title="Prenota una Lezione - Apri la sezione Contatti"
            aria-label="Prenota una Lezione — scorrimento alla sezione contatti"
            className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] rounded-full px-6 py-3 text-md font-semibold text-white
                       motion-safe:transform motion-safe:hover:-translate-y-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in
                       focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-red-500"
          >
            <Phone className="w-4 h-4" aria-hidden="true" focusable={false} />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              Prenota una Lezione
            </span>
          </HashLink>
        </div>
      </div>
    </section>
  );
});
