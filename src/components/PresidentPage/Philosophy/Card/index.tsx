import React, { type JSX } from "react";
import CaptionedImage from "./CaptionedImage";

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

      <CaptionedImage />
    </article>
  );
});
