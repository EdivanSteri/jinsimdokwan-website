import type { JSX } from "react";
import { partners } from "./data/PartnerData";
import PartnerCard from "./PartnerCard";
import React from "react";

export default React.memo(function Partners(): JSX.Element {
  return (
    <section
      id="partners"
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 my-16"
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-xl font-bold">I Nostri Partner</h2>
        <p className="text-sm text-gray-800">
          Insieme per promuovere l'eccellenza nel Taekwondo e nelle arti
          marziali
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  items-stretch justify-center gap-8 mt-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
});
