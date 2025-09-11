import React, { type JSX } from "react";

export default React.memo(function HeaderSubHeading(): JSX.Element {
  return (
    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl mb-10 leading-relaxed text-white/90">
      25 anni di dedizione, sacrifici e trionfi che hanno portato la Maestra Kim
      dai primi passi al vertice del Taekwondo mondiale
    </p>
  );
});
