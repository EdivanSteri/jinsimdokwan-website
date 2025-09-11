import React, { type JSX } from "react";

export default React.memo(function MediaCard(): JSX.Element {
  return (
    <aside className="flex flex-col items-start gap-6 bg-[#482025] rounded-3xl px-6 py-6">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo A.S.D. JinSimDoKwan"
          className="w-12 h-12 rounded-full"
          loading="lazy"
          decoding="async"
        />
        <div className="text-left">
          <span className="text-xl sm:text-2xl font-bold">JinSimDoKwan</span>
          <p className="text-gray-400 text-sm">Traduzione dal coreano</p>
        </div>
      </div>

      <blockquote
        className="text-[#ED6B6B] italic text-base sm:text-lg md:text-xl lg:text-2xl"
        aria-labelledby="sincerity-heading"
      >
        "La scuola/via della sincerità"
      </blockquote>
    </aside>
  );
});
