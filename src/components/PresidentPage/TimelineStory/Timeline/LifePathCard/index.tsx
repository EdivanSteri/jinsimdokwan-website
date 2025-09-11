import React, { type JSX } from "react";
import Header from "./Header";
import Quote from "./Quote";
import Stats from "./Stats";

export default React.memo(function LifePathCard(): JSX.Element {
  return (
    <section
      aria-labelledby="lifepath-heading"
      className="bg-gradient-to-r from-[#B11F1F] to-[#7F1C1E] rounded-2xl lg:rounded-4xl max-w-4xl mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16 text-white text-center mt-10"
      role="region"
    >
      <Header />
      <div className="flex flex-col items-stretch justify-center gap-6 w-full max-w-4xl">
        <Stats />
        <Quote />
      </div>
    </section>
  );
});
