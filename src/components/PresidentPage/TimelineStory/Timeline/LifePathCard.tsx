// eslint-disable-next-line no-shadow-restricted-names
import { Clock, Heart, HeartPulse, Infinity, Timer, Trophy } from "lucide-react";

export default function LifePathCard() {
  return (
    <div
      className="bg-gradient-to-r from-[#B11F1F] to-[#7F1C1E] rounded-2xl lg:rounded-4xl max-w-4xl
                  mx-auto
                  flex flex-col items-center justify-center gap-12
                  px-4 py-16
                  text-white text-center
                  mt-10"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#A53233] rounded-full border border-white/10 text-white text-sm sm:text-base md:text-lg font-semibold">
          <HeartPulse className="w-4 h-4" aria-hidden="true" />
          IL PERCORSO DI UNA VITA
        </div>

        <h3
          id="timeline-heading"
          className="p-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-tight"
        >
          Ogni goccia di <span className="text-[#FDE047]">sudore</span>
        </h3>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-2xl leading-relaxed text-white/90">
          25 anni di allenamenti quotidiani, rinunce e determinazione. Dietro
          ogni vittoria ci sono migliaia di ore di preparazione silenziosa.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-lg">
            <span className="w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center">
              <Timer size={20} />
            </span>
            <span className="font-bold">9.125</span>
            <span className="text-center">Giorni di Allenamento</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-lg">
            <span className="w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center">
              <Clock size={20} />
            </span>
            <span className="font-bold">18.250</span>
            <span className="text-center">Giorni di Allenamento</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-lg">
            <span className="w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center">
              <Heart size={20} />
            </span>
            <span className="font-bold">
              <Infinity size={20} />
            </span>
            <span className="text-center">Sacrifici Fatti</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-lg">
            <span className="w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center">
              <Trophy size={20} />
            </span>
            <span className="font-bold">1</span>
            <span className="text-center">Sogno Realizzato</span>
          </div>
        </div>

        <figure className="px-4 py-2 w-fit flex flex-col items-center justify-center gap-2 bg-[#A53233] rounded-2xl border border-white/10 text-white text-sm sm:text-base md:text-lg  text-center">
          <blockquote className="text-xl font-bold">
            "Il successo non è mai casuale"
          </blockquote>
          <figcaption className="text-sm italic font-normal">
            È il risultato di preparazione, duro lavoro e apprendimento dai
            fallimenti.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
