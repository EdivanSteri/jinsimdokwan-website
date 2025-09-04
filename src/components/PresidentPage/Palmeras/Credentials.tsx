import React, { type JSX } from "react";
import { Crown, GraduationCap, Scale, ShieldPlus } from "lucide-react";

export default React.memo(function Credentials(): JSX.Element {
  return (
    <section
      role="region"
      aria-labelledby="credentials-heading"
      className="py-24"
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2
          id="credentials-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold"
        >
          Qualifiche & Certificazioni
        </h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Competenze tecniche e riconoscimenti che testimoniano l'eccellenza
          professionale
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        <article
          role="article"
          aria-labelledby="cred-vdan-title"
          className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#151924]  hover:-translate-y-2  transition-all duration-500 ease-in"
        >
          <span
            className="bg-gradient-to-tl from-[#080A0E] via-[#1D2633] to-[#080A0E] p-6 rounded-2xl"
            aria-hidden="true"
          >
            <Crown size={30} color="white" aria-hidden="true" />
          </span>
          <h3
            id="cred-vdan-title"
            className="text-2xl lg:text-3xl font-bold"
          >
            V Dan Taekwondo ITF
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Massimo grado tecnico raggiunto nel 2021
          </p>
        </article>

        <article
          role="article"
          aria-labelledby="cred-istr-naz-title"
          className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#4F212A]  hover:-translate-y-2  transition-all duration-500 ease-in"
        >
          <span
            className="bg-gradient-to-tl from-[#E83A3A] to-[#C82020]  p-6 rounded-2xl"
            aria-hidden="true"
          >
            <GraduationCap size={30} color="white" aria-hidden="true" />
          </span>
          <h3
            id="cred-istr-naz-title"
            className="text-2xl lg:text-3xl font-bold"
          >
            Istruttrice Nazionale
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Certificazione per la formazione di nuovi istruttori
          </p>
        </article>

        <article
          role="article"
          aria-labelledby="cred-judge-title"
          className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#1B3167]  hover:-translate-y-2  transition-all duration-500 ease-in"
        >
          <span
            className="bg-gradient-to-tl from-[#377DF4] to-[#1E51DB] p-6 rounded-2xl"
            aria-hidden="true"
          >
            <Scale size={30} color="white" aria-hidden="true" />
          </span>
          <h3
            id="cred-judge-title"
            className="text-2xl lg:text-3xl font-bold"
          >
            Giudice Internazionale
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Abilitata a giudicare competizioni mondiali ed europee
          </p>
        </article>

        <article
          role="article"
          aria-labelledby="cred-master-title"
          className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#392364]  hover:-translate-y-2  transition-all duration-500 ease-in"
        >
          <span
            className="bg-gradient-to-tr from-[#A450F5] to-[#8125D2] p-6 rounded-2xl"
            aria-hidden="true"
          >
            <ShieldPlus size={30} color="white" aria-hidden="true" />
          </span>
          <h3
            id="cred-master-title"
            className="text-2xl lg:text-3xl font-bold"
          >
            Master Trainer Difesa
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Certificazione avanzata per autodifesa e formazione istruttori
          </p>
        </article>
      </div>
    </section>
  );
});
