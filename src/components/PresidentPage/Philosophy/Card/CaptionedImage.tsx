import React, { type JSX } from "react";

export default React.memo(function CaptionedImage(): JSX.Element {
  return (
    <figure className="w-full h-full relative flex items-end justify-center rounded-2xl overflow-hidden">
      <img
        className="w-full h-full object-cover object-top"
        src="filosofia.jpg"
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
  );
});
