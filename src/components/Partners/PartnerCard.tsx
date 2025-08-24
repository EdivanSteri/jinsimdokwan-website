import React from "react";
import type { JSX } from "react";
import type { Partner } from "./data/PartnerTypes";

type PartnerCardProps = {
  partner: Partner;
};

export default React.memo(function PartnerCard({
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
