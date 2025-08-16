import AboutPartner from "./AboutPartner";

export type Partners = {
  title: string;
  description: string;
  site: string;
  textCTASite: string;
  image: string;
};

export default function AboutPartnersWrapper() {
  const partners: Partners[] = [
    {
      title: "Affiliati FITAE ITF",
      description:
        "Siamo ufficialmente affiliati alla FITAE ITF, la Federazione Italiana Taekwondo ITF, che garantisce la qualità e l'autenticità del nostro insegnamento secondo i più alti standard.",
      site: "https://www.fitae-itf.com/",
      textCTASite: "Visita FITAE ITF",
      image: "/fitae logo.png",
    },
    {
      title: "Partner del Team Taekwondo Sardegna",
      description:
        "Siamo orgogliosi di far parte del Team Taekwondo Sardegna, una rete di eccellenza che unisce le migliori palestre del territorio per promuovere i valori del Taekwondo.",
      site: "http://www.tkdsardegna.com/",
      textCTASite: "Visita il sito del Team",
      image: "/tkd sarsegna logo.png",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-y-6 ">
      {partners.map((partner, index) => (
        <AboutPartner partner={partner} index={index} />
      ))}
    </div>
  );
}
