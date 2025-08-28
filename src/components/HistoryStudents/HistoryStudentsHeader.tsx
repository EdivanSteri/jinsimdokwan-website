import React, { type JSX } from "react";

export default React.memo(function HistoryStudentsHeader(): JSX.Element {
  return (
    <header className="max-w-3xl mx-auto my-6 px-2 sm:px-0 text-center">
      <h2 
        id="history-students-title"
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#111827]"
      >
        Gli Allievi{" "}
        <span className="bg-gradient-to-r from-[#EE4242] to-[#BB1D1D] bg-clip-text text-transparent">
          Storici
        </span>{" "}
        Raccontano
      </h2>
      <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
        Scopri le storie di chi ha fatto del Taekwondo ITF una parte fondamentale
        della propria vita. Ogni testimonianza rappresenta anni di dedizione, crescita
        e passione per questa antica arte marziale.
      </p>
    </header>
  );
});
