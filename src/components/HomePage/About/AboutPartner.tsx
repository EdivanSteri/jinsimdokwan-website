export type Partner = {
  id: string;
  title: string;
  description: string;
  site: string;
  textCTASite: string;
  image: string;
};

type AboutPartnerProps = {
  partner: Partner;
};

export default function AboutPartner({
  partner,
}: AboutPartnerProps) {
  const { title, description, site, textCTASite, image } = partner;

  return (
    <article
      className="flex w-full flex-col lg:flex-row items-center gap-y-2 p-4 bg-[#DEEBFE] border border-[#7dcfff] rounded-2xl"
      aria-labelledby={`partner-${partner.id}-title`}
    >
      <div className="lg:flex-1 flex flex-col items-start justify-start gap-y-2">
        <h3
          id={`partner-${partner.id}-title`}
          className="text-md text-[#1E3A8A] font-bold"
        >
          {title}
        </h3>
        <p className="text-sm text-[#502C0C]">{description}</p>
        <a
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2440AF] font-semibold hover:underline mt-2 inline-block"
          aria-label={`${textCTASite} (si apre in una nuova scheda)`}
        >
          {textCTASite}
        </a>
      </div>

      <figure className="mt-4 lg:mt-0 lg:w-40 lg:flex-shrink-0 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 rounded-full border border-[#71bae6] shadow-lg object-cover"
          width={64}
          height={64}
        />
      </figure>
    </article>
  );
}
