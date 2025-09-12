import React, { type JSX } from "react";
import Overlay from "../../ui/Decoratives/Overlay";
import HeaderContent from "./HeaderContent";

export default React.memo(function Header(): JSX.Element {
  return (
    <header
      role="banner"
      aria-labelledby="president-heading"
      className="px-4 sm:px-15 md:px-30 relative h-screen bg-[url('/president/president.jpg')] bg-cover bg-top bg-no-repeat"
    >
      {/* Overlay semantico (visivo) */}
      <Overlay color="bg-gradient-to-r from-black/80" aria-hidden="true" />

      {/* Contenuto (z-index sopra l'overlay) */}
      <HeaderContent />
    </header>
  );
});
