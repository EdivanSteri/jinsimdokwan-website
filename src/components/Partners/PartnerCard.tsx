import type { JSX } from "react";
import type { Partner } from "./data/PartnerTypes";
import React from "react";

type PartnerCardProps = {
  partner: Partner;
};

export default React.memo(function PartnerCard({
  partner,
}: PartnerCardProps): JSX.Element {
  const imgBackground =
    partner.id === "nostra-associaizone" ? "bg-black" : "bg-[#F9FAFB]";

  return (
    <div className="w-full p-6 md:p-8 flex flex-col items-center justify-center gap-2 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 text-center">
      <div
        className={`h-15 w-15 ${imgBackground} rounded-full overflow-hidden`}
      >
        <img
          src={partner.src}
          alt={partner.name}
          className="w-full h-full object-center object-contain"
        />
      </div>
      <h3 className="text-md font-bold">{partner.name}</h3>
      <p className="text-sm text-gray-700">{partner.label}</p>
    </div>
  );
});
