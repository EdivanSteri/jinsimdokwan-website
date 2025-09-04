import React, { type JSX } from "react";

export default React.memo(function SinceritySchool(): JSX.Element {
  return (
    <section
      role="region"
      aria-labelledby="sincerity-heading"
      className="bg-[#55303A] border border-[#C55E62]/40 rounded-4xl flex flex-col gap-8 text-left text-gray-300 p-8"
    >
      <h3
        id="sincerity-heading"
        className="text-white text-3xl lg:text-4xl font-bold"
      >
        La Scuola della Sincerità
      </h3>

      <div className="prose prose-invert max-w-none">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          La <strong className="text-[#F26F6F]">Jin Sim Do Kwan</strong> nasce
          come un luogo in cui rifugiarsi dalla vita frenetica, dai problemi
          quotidiani e da tutto ciò che essi comportano.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          A suon di{" "}
          <strong className="text-white">sudore, fatica e impegno</strong>, è
          una dimensione che ci permette di toglierci di dosso le maschere e i
          ruoli imposti per essere noi stessi senza giudizio.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Qui{" "}
          <strong className="text-[#F26F6F]">miglioriamo e scopriamo</strong>{" "}
          nuove cose di noi stessi con leggerezza, in un ambiente che accoglie e
          sostiene la crescita personale di ognuno.
        </p>
      </div>

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
    </section>
  );
});
