import type { Partners } from "./AboutPartnersWrapper";

type AboutPartnerProps = {
  partner: Partners;
  index: number;
};

export default function AboutPartner({ partner, index }: AboutPartnerProps) {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-y-2 p-4 bg-[#DEEBFE] border border-[#7dcfff] rounded-2xl"
      key={index}
    >
      <div className="lg:w-3/4 flex flex-col items-start justify-start gap-y-2">
        <h3 className="text-md text-[#1E3A8A] font-bold">{partner.title}</h3>
        <p className="text-sm text-[#1D87EA]">{partner.description}</p>
        <a
          href={partner.site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2440AF] font-semibold hover:underline"
        >
          {partner.textCTASite}
        </a>
      </div>
      <div className="lg:w-1/4 flex items-center justify-center">
        <img
          src={partner.image}
          alt={partner.title}
          className="w-15 h-15 rounded-full border border-[#71bae6] shadow-lg bg-cover bg-center bg-no-repeat"
        />
      </div>
    </div>
  );
}
