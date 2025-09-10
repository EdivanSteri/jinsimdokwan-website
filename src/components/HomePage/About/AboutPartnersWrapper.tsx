import AboutPartner from "./AboutPartner";
import type { Partner } from "./AboutPartner";

export type Partners = Partner;

export default function AboutPartnersWrapper() {
  const partners: Partners[] = [
    {
      id: "fitae-itf",
      title: "Affiliati FITAE ITF",
      description:
        "Siamo ufficialmente affiliati alla FITAE ITF, la Federazione Italiana Taekwondo ITF, che garantisce la qualità e l'autenticità del nostro insegnamento secondo i più alti standard.",
      site: "https://www.fitae-itf.com/",
      textCTASite: "Visita FITAE ITF",
      image: "/fitae logo.png",
    },
    {
      id: "team-tkd-sardegna",
      title: "Partner del Team Taekwondo Sardegna",
      description:
        "Siamo orgogliosi di far parte del Team Taekwondo Sardegna, una rete di eccellenza che unisce le migliori palestre del territorio per promuovere i valori del Taekwondo.",
      site: "http://www.tkdsardegna.com/",
      textCTASite: "Visita il sito del Team",
      image: "/tkd sardegna logo.png",
    },
  ];

  return (
    <section
      aria-labelledby="partners-heading"
      className="w-full flex flex-col items-start justify-start gap-y-6"
    >
      <p id="partners-heading" className="sr-only">
        Partner e Affiliazioni
      </p>

      <div className="flex flex-col items-start justify-start gap-y-6 w-full">
        {partners.map((partner) => (
          <AboutPartner key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
}
