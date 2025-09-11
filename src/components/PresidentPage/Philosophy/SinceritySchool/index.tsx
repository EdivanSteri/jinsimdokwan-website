import React, { type JSX } from "react";
import Description from "./Description";
import MediaCard from "./MediaCard";

export default React.memo(function SinceritySchool(): JSX.Element {
  return (
    <div
      aria-labelledby="sincerity-heading"
      className="bg-[#55303A] border border-[#C55E62]/40 rounded-4xl flex flex-col gap-8 text-left text-gray-300 p-8"
    >
      <h3
        id="sincerity-heading"
        className="text-white text-3xl lg:text-4xl font-bold"
      >
        La Scuola della Sincerità
      </h3>

      <Description />
      <MediaCard />
    </div>
  );
});
