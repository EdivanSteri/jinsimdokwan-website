import React, { type JSX } from "react";

export default React.memo(function Card(): JSX.Element {
  return (
    <article
      role="article"
      aria-labelledby="president-quote"
      className="self-center relative w-full h-80 md:h-96 mx-auto"
    >
      {/* HALO decorativo, non interattivo */}
      <div
        className="absolute -inset-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl blur-xl opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />

      <figure className="w-full h-full relative flex items-end justify-center rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="president/president.jpg"
          alt="Ritratto della presidente - Maestro Veronica Placido"
          loading="lazy"
          decoding="async"
        />

        <figcaption className="w-full absolute bottom-4 px-4 py-2">
          <div className="flex flex-col md:p-4 md:gap-y-4 bg-black/90 text-white text-center py-2 rounded-xl">
            <p
              id="president-quote"
              className="text-sm sm:text-base md:text-lg lg:text-xl"
            >
              "Un rifugio dalla vita frenetica"
            </p>
          </div>
        </figcaption>
      </figure>
    </article>
  );
});
