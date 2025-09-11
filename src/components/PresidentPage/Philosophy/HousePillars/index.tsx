import React, { type JSX } from "react";
import Pillars from "./Pillars";

export default React.memo(function HousePillars(): JSX.Element {
  return (
    <div
      role="region"
      aria-labelledby="house-pillars-heading"
      className="flex flex-col items-center justify-center text-center gap-10 mt-16"
    >
      <h3
        id="house-pillars-heading"
        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        I Quattro Pilastri della Nostra Casa
      </h3>

      <Pillars />
    </div>
  );
});
