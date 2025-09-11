import React, { type JSX } from "react";
import List from "./List";
import Header from "./Header";
import Quote from "./Quote";

export default React.memo(function LegendaryNumbers(): JSX.Element {
  return (
    <div
      aria-labelledby="legendary-heading"
      className="bg-gradient-to-r from-[#B11F1F] to-[#7F1C1E] rounded-2xl lg:rounded-4xl mx-auto flex flex-col items-center justify-center gap-10 px-4 py-12 text-white text-center"
    >
      <Header />
      <div className="w-full flex flex-col items-stretch justify-center gap-6">
        <List />
        <Quote />
      </div>
    </div>
  );
});
