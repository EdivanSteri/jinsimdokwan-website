import React, { useMemo, type JSX } from "react";
import { Clock, Heart, InfinityIcon, Timer, Trophy } from "lucide-react";

export default React.memo(function Stats(): JSX.Element {
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
  );
});
