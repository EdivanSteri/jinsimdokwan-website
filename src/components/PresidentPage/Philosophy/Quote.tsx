import React, { type JSX } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default React.memo(function Quote(): JSX.Element {
  return (
    <aside
      role="complementary"
      aria-labelledby="quote-heading"
      className="flex flex-col items-center justify-center gap-6 mt-16 text-center bg-[#4C2E38] border border-[#C55E62]/40 rounded-4xl p-12"
    >
      <span aria-hidden="true" className="text-[#C55E62]">
        <FaQuoteLeft size={30} aria-hidden="true" focusable={false} />
      </span>

      <blockquote id="quote-heading" className="text-2xl lg:text-3xl text-white italic font-light max-w-3xl leading-relaxed">
        Questo è l'intento della nostra palestra: creare uno spazio dove ognuno
        può essere se stesso, crescere e scoprire il proprio potenziale in un
        ambiente di rispetto e autenticità.
      </blockquote>

      <footer className="text-[#b84e52] text-lg sm:text-xl font-bold italic" aria-label="Autore citazione">
        - Maestro Veronica Placido
      </footer>
    </aside>
  );
});
