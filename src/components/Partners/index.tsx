import React, { useId } from "react";
import type { JSX } from "react";
import { partners } from "./data/PartnerData";
import PartnerCard from "./PartnerCard";

export default React.memo(function Partners(): JSX.Element {
  const headingId = useId();

  return (
    <section
      id="partners"
      aria-labelledby={headingId}
      className="px-4 sm:px-6 lg:px-16 my-18 flex flex-col gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 id={headingId} className="text-xl font-bold">
          I Nostri Partner
        </h2>
        <p className="text-sm text-gray-800 max-w-prose">
          Insieme per promuovere l'eccellenza nel Taekwondo e nelle arti
          marziali
        </p>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center gap-8 mt-8 max-w-4xl mx-auto"
      >
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </ul>
    </section>
  );
});
