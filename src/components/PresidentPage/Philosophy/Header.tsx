import React, { type JSX } from "react";
import { Lightbulb } from "lucide-react";

export default React.memo(function Header(): JSX.Element {
  return (
    <header
      aria-labelledby="philosophy-heading"
      className="flex flex-col items-center justify-center gap-6 text-white text-center"
    >
      <span
        className="flex items-center justify-center gap-1 font-bold bg-gradient-to-r from-[#EE4343] to-[#C22829] rounded-full px-4 py-2"
        aria-hidden="true"
      >
        <Lightbulb size={18} aria-hidden="true" />
        FILOSOFIA
      </span>

      <h2
        id="philosophy-heading"
        className="text-4xl  md:text-5xl font-bold"
      >
        Il Cuore della JinSimDoKwan
      </h2>

      <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl">
        <span>La nostra filosofia si riassume in una semplice parola:</span>{" "}
        <span className="text-[#F66E6E]">casa</span>
      </p>
    </header>
  );
});
