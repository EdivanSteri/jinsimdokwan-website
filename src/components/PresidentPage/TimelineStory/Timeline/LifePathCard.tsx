import React, { useMemo, type JSX } from "react";
import {
  Clock,
  Heart,
  HeartPulse,
  InfinityIcon,
  Timer,
  Trophy,
} from "lucide-react";

export default React.memo(function LifePathCard(): JSX.Element {
  // dati immutabili memoizzati — evita ricreazione ad ogni render
  const stats = useMemo(
    () => [
      {
        id: "days-1",
        icon: Timer,
        value: "9.125",
        label: "Giorni di Allenamento",
      },
      {
        id: "days-2",
        icon: Clock,
        value: "18.250",
        label: "Giorni di Allenamento",
      },
      {
        id: "sacrifici",
        icon: Heart,
        valueMarkup: <InfinityIcon size={20} aria-hidden="true" />,
        valueText: "∞",
        label: "Sacrifici Fatti",
      },
      {
        id: "dream",
        icon: Trophy,
        value: "1",
        label: "Sogno Realizzato",
      },
    ],
    []
  );

  return (
    <section
      aria-labelledby="lifepath-heading"
      className="bg-gradient-to-r from-[#B11F1F] to-[#7F1C1E] rounded-2xl lg:rounded-4xl max-w-4xl mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16 text-white text-center mt-10"
      role="region"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#A53233] rounded-full border border-white/10 text-white text-sm sm:text-base md:text-lg font-semibold"
          aria-hidden="true"
        >
          <HeartPulse className="w-4 h-4" aria-hidden="true" />
          IL PERCORSO DI UNA VITA
        </div>

        <h3
          id="lifepath-heading"
          className="p-4 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight"
        >
          Ogni goccia di <span className="text-[#FDE047]">sudore</span>
        </h3>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-md sm:max-w-lg leading-relaxed text-white/90">
          25 anni di allenamenti quotidiani, rinunce e determinazione. Dietro
          ogni vittoria ci sono migliaia di ore di preparazione silenziosa.
        </p>
      </div>

      <div className="flex flex-col items-stretch justify-center gap-6 w-full max-w-4xl">
        <ul
          role="list"
          aria-label="Statistiche del percorso"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.id}
                className="flex flex-col items-center justify-center gap-1 border border-white/15 bg-[#B23535] hover:bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-lg"
                role="listitem"
                aria-labelledby={`${s.id}-label`}
              >
                <span
                  className="self-center w-8 h-8 bg-[#BC5D5E] rounded-lg flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon size={20} aria-hidden="true" focusable={false} />
                </span>

                {/* numero principale: responsivo e semanticamente marcato */}
                <span
                  className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  aria-hidden={s.valueMarkup ? "true" : "false"}
                >
                  {s.value ?? s.valueText}
                  {s.valueMarkup ? s.valueMarkup : null}
                </span>

                <span
                  id={`${s.id}-label`}
                  className="text-center text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  {s.label}
                </span>
              </li>
            );
          })}
        </ul>

        <figure className="px-4 py-2 w-full flex flex-col items-center justify-center gap-2 bg-[#A53233] rounded-2xl border border-white/10 text-white text-sm sm:text-base md:text-lg text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold">
            "Il successo non è mai casuale"
          </blockquote>
          <figcaption className="text-sm md:text-base italic font-normal">
            È il risultato di preparazione, duro lavoro e apprendimento dai
            fallimenti.
          </figcaption>
        </figure>
      </div>
    </section>
  );
});
