import React, { type JSX } from "react";

export default React.memo(function Header(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h2
        id="credentials-heading"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold"
      >
        Qualifiche & Certificazioni
      </h2>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
        Competenze tecniche e riconoscimenti che testimoniano l'eccellenza
        professionale
      </p>
    </div>
  );
});
