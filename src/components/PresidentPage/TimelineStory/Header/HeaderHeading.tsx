import React, { type JSX } from "react";

export default React.memo(function HeaderHeading(): JSX.Element {
  return (
    <h2
      id="timeline-heading"
      className="p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
    >
      TIMELINE DEL SUCCESSO
    </h2>
  );
});
