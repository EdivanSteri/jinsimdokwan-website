import { Trophy } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center">
      <div className="flex items-center justify-center gap-2 text-[#F8715C] text-xs sm:text-sm font-semibold">
        <Trophy size={15} className="sm:w-4 md:w-5" />
        <span>RISULTATI INTERNAZIONALI</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Un Palmarès{" "}
          <span className="bg-gradient-to-r from-[#EF4343] to-[#A51C1E] bg-clip-text text-transparent">
            Eccezionale
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-md md:text-lg max-w-3xl leading-relaxed font-semibold">
          Dalla prima partecipazione internazionale nel 2010 alla conquista del
          titolo mondiale nel 2021. Un percorso straordinario fatto di
          dedizione, sacrifici e risultati che hanno scritto la storia del
          Taekwondo ITF italiano.
        </p>
      </div>
    </div>
  );
}
