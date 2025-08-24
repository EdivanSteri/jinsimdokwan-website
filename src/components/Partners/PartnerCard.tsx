import React, { memo } from "react";
import type { JSX } from "react";
import type { Partner } from "./data/PartnerTypes";

/**
 * Ottimizzazioni principali:
 * - Reso semantico: il componente restituisce <li> così può essere usato direttamente in una <ul>.
 * - Lazy-loading dell'immagine, decoding async.
 * - Gestione condizionale del background dell'immagine (usa partner.darkBackground o un id speciale).
 * - Evitato rendering di label vuote.
 * - `memo` per evitare re-render quando le props non cambiano.
 */

type PartnerCardProps = {
  partner: Partner;
};

export default memo(function PartnerCard({
  partner,
}: PartnerCardProps): JSX.Element {
  return (
    <li className="w-full">
      <article className="p-6 md:p-8 flex flex-col items-center justify-center gap-2 bg-white shadow-lg rounded-xl transition-shadow duration-300 border border-gray-100 hover:shadow-xl hover:border-red-200 text-center h-full">
        <figure
          className={`w-20 h-20 rounded-full overflow-hidden flex items-center justify-center`}
        >
          <img
            src={partner.src}
            alt={partner.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </figure>

        <h3 className="text-md font-bold mt-2">{partner.name}</h3>
        {partner.label ? (
          <p className="text-sm text-gray-700">{partner.label}</p>
        ) : null}
      </article>
    </li>
  );
});
