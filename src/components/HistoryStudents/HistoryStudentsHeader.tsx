import React, { type JSX } from "react";

export default React.memo(function HistoryStudentsHeader(): JSX.Element {
  return (
    <header className="max-w-3xl mx-auto my-6">
      <h2 className="text-4xl text-center text-[#111827] font-bold leading-tight">
        Gli Allievi{" "}
        <span className="bg-gradient-to-r from-[#EE4242] to-[#BB1D1D] bg-clip-text text-transparent">
          Storici
        </span>{" "}
        Raccontano
      </h2>
      <p className="mt-4 text-center text-lg text-[#6B7280] leading-relaxed">
        Scopri le storie di chi ha fatto del Taekwondo ITF una parte
        fondamentale della propria vita. Ogni testimonianza rappresenta anni di
        dedizione, crescita e passione per questa antica arte marziale.
      </p>
    </header>
  );
});
