import React, { type JSX } from "react";
import { footerData } from "./data/footerData";
import FooterColumn from "./FooterColumn";
import FooterSocials from "./FooterSocials";

const CONTAINER =
  "w-full bg-[#111827] text-white py-16 px-4 sm:px-6 lg:px-16 flex flex-col gap-y-10";
const GRID =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:items-start justify-center gap-4 md:gap-16 text-center md:text-left";

export default React.memo(function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={CONTAINER}>
      <div className={GRID}>
        <div className="flex flex-col gap-4 items-center justify-center md:items-start">
          <p className="text-xl font-bold">A.S.D. JinSimDoKwan</p>
          <p className="text-sm leading-relaxed max-w-md">
            La tua palestra di fiducia per Taekwondo, difesa personale e
            Pilates. Cresci con noi in un ambiente professionale e accogliente.
          </p>

          <FooterSocials />
        </div>

        {footerData.map((footerColumn) => (
          <FooterColumn key={footerColumn.id} footerColumn={footerColumn} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-2 text-xs">
        <p>© {year} A.S.D. JinSimDoKwan. Tutti i diritti riservati.</p>

        <p className="flex items-center gap-x-4">
          {/* Sostituisci gli href con le rotte reali del tuo sito */}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Termini di Servizio
          </a>
        </p>
      </div>
    </footer>
  );
});
