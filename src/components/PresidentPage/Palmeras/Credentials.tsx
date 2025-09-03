import { Crown, GraduationCap, Scale, ShieldPlus } from "lucide-react";

export default function Credentials() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-2xl text-white font-bold">
          Qualifiche & Certificazioni
        </h2>
        <p className="text-md text-gray-300 leading-relaxed">
          Competenze tecniche e riconoscimenti che testimoniano l'eccellenza
          professionale
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#151924]  hover:-translate-y-2  transition-all duration-500 ease-in">
          <span className="bg-gradient-to-tl from-[#080A0E] via-[#1D2633] to-[#080A0E] p-6 rounded-2xl">
            <Crown size={30} color="white" />
          </span>
          <h3 className="text-2xl font-bold">V Dan Taekwondo ITF</h3>
          <p className="text-gray-300">
            Massimo grado tecnico raggiunto nel 2021
          </p>
        </div>
        <div className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#4F212A]  hover:-translate-y-2  transition-all duration-500 ease-in">
          <span className="bg-gradient-to-tl from-[#E83A3A] to-[#C82020]  p-6 rounded-2xl">
            <GraduationCap size={30} color="white" />
          </span>
          <h3 className="text-2xl font-bold">Istruttrice Nazionale</h3>
          <p className="text-gray-300">
            Certificazione per la formazione di nuovi istruttori
          </p>
        </div>
        <div className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#1B3167]  hover:-translate-y-2  transition-all duration-500 ease-in">
          <span className="bg-gradient-to-tl from-[#377DF4] to-[#1E51DB] p-6 rounded-2xl">
            <Scale size={30} color="white" />
          </span>
          <h3 className="text-2xl font-bold">Giudice Internazionale</h3>
          <p className="text-gray-300">
            Abilitata a giudicare competizioni mondiali ed europee
          </p>
        </div>
        <div className="bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg hover:bg-[#392364]  hover:-translate-y-2  transition-all duration-500 ease-in">
          <span className="bg-gradient-to-tr from-[#A450F5] to-[#8125D2] p-6 rounded-2xl">
            <ShieldPlus size={30} color="white" />
          </span>
          <h3 className="text-2xl font-bold">Master Trainer Difesa</h3>
          <p className="text-gray-300">
            Certificazione avanzata per autodifesa e formazione istruttori
          </p>
        </div>
      </div>
    </div>
  );
}
