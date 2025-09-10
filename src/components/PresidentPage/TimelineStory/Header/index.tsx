import React, { type JSX } from "react";
import HeaderTag from "./HeaderTag";
import HeaderHeading from "./HeaderHeading";
import HeaderSubHeading from "./HeaderSubHeading";

export default React.memo(function Header(): JSX.Element {
  return (
    <header
      role="region"
      aria-labelledby="timeline-heading"
      className="w-full flex flex-col items-center justify-center text-center text-white mt-24"
    >
      <HeaderTag />
      <HeaderHeading />
      <HeaderSubHeading />
    </header>
  );
});
