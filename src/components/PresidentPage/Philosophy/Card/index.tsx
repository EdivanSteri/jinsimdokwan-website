import React, { type JSX } from "react";
import CaptionedImage from "./CaptionedImage";
import Halo from "../../../ui/Decoratives/Halo";

export default React.memo(function Card(): JSX.Element {
  return (
    <article
      role="article"
      aria-labelledby="president-quote"
      className="self-center relative w-full h-80 md:h-96 mx-auto"
    >
      {/* HALO decorativo, non interattivo */}
      <Halo
        bgColor="bg-gradient-to-r from-red-500 via-red-600 to-red-700"
        rounded="rounded-3xl"
        blur="blur-xl"
        opacity="opacity-30"
      />

      <CaptionedImage />
    </article>
  );
});
