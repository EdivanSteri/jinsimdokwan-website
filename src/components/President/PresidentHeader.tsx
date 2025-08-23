import React, { type JSX } from "react";

export default React.memo(function PresidentHeader(): JSX.Element {
  return (
    <header
      aria-labelledby="president-section-title"
      className="p-8 flex flex-col items-center justify-center gap-y-6"
    >
      <span className="text-base sm:text-lg flex items-center justify-center px-4 py-1 bg-gradient-to-r from-[#EF4444] to-[#CE2525] rounded-full font-medium">
        IL NOSTRO LEADER
      </span>

      <h2 id="president-section-title" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        IL PRESIDENTE
      </h2>

      <span className="text-base sm:text-lg flex items-center justify-center bg-[#DA2525] px-4 py-1 rounded-full font-bold">
        IL BOSS
      </span>
    </header>
  );
});
