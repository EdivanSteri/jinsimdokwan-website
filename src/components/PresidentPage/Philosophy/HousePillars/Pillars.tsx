import React, { type JSX } from "react";
import Pillar from "./Pillar";
import { pillars } from "./Data/HousePillarsData";

export default React.memo(function Pillars(): JSX.Element {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white w-full">
      {pillars.map((pillar) => (
        <Pillar key={pillar.id} pillar={pillar} />
      ))}
    </ul>
  );
});
