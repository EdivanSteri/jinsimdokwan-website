import React, { type JSX } from "react";
import { HeartIcon, HeartPulse, House, MapPinned } from "lucide-react";

export default React.memo(function HousePillars(): JSX.Element {
  return (
    <section
      role="region"
      aria-labelledby="house-pillars-heading"
      className="flex flex-col items-center justify-center text-center gap-10 mt-16"
    >
      <h3
        id="house-pillars-heading"
        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
      >
        I Quattro Pilastri della Nostra Casa
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white w-full">
        {/* Pillar 1 */}
        <li
          tabIndex={0}
          role="article"
          aria-labelledby="pillar-jin-title"
          className="flex flex-col items-center justify-center gap-4 bg-[#52404B] border border-white/15 hover:border-red-600/30 transition duration-300 ease-in group/pilastri rounded-2xl p-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600/30"
        >
          <span
            className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tl from-[#D54042] to-[#DF2B2B] group-hover/pilastri:scale-110 transform transition duration-300 ease-in"
            aria-hidden="true"
          >
            <HeartPulse size={20} aria-hidden="true" focusable={false} />
          </span>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4
              id="pillar-jin-title"
              className="text-2xl sm:text-2xl md:text-3xl font-bold"
            >
              진 (Jin)
            </h4>
            <span className="text-lg sm:text-xl text-[#F36F70] font-semibold">
              Sincerità
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs">
            Essere autentici con noi stessi e con gli altri, togliendo le
            maschere imposte dalla società
          </p>
        </li>

        {/* Pillar 2 */}
        <li
          tabIndex={0}
          role="article"
          aria-labelledby="pillar-sim-title"
          className="flex flex-col items-center justify-center gap-4 bg-[#52404B] border border-white/15 hover:border-red-600/30 transition duration-300 ease-in group/pilastri rounded-2xl p-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600/30"
        >
          <span
            className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tl from-[#EC478B] to-[#EF4553] group-hover/pilastri:scale-110 transform transition duration-300 ease-in"
            aria-hidden="true"
          >
            <HeartIcon
              className="w-6 h-6"
              aria-hidden="true"
              focusable={false}
            />
          </span>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4
              id="pillar-sim-title"
              className="text-2xl sm:text-2xl md:text-3xl font-bold"
            >
              심 (Sim)
            </h4>
            <span className="text-lg sm:text-xl text-[#F36F70] font-semibold">
              Cuore
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs">
            Mettere passione e dedizione in ogni gesto, vivendo con il cuore
            aperto
          </p>
        </li>

        {/* Pillar 3 */}
        <li
          tabIndex={0}
          role="article"
          aria-labelledby="pillar-do-title"
          className="flex flex-col items-center justify-center gap-4 bg-[#52404B] border border-white/15 hover:border-red-600/30 transition duration-300 ease-in group/pilastri rounded-2xl p-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600/30"
        >
          <span
            className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tl from-[#377DF4] to-[#2968ED] group-hover/pilastri:scale-110 transform transition duration-300 ease-in"
            aria-hidden="true"
          >
            <MapPinned size={20} aria-hidden="true" focusable={false} />
          </span>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4
              id="pillar-do-title"
              className="text-2xl sm:text-2xl md:text-3xl font-bold"
            >
              도 (Do)
            </h4>
            <span className="text-lg sm:text-xl text-[#F36F70] font-semibold">
              Via
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs">
            Il percorso di crescita personale che ci porta a scoprire nuove
            parti di noi
          </p>
        </li>

        {/* Pillar 4 */}
        <li
          tabIndex={0}
          role="article"
          aria-labelledby="pillar-kwan-title"
          className="flex flex-col items-center justify-center gap-4 bg-[#52404B] border border-white/15 hover:border-red-600/30 transition duration-300 ease-in group/pilastri rounded-2xl p-8 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-600/30"
        >
          <span
            className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tl from-[#20C05B] to-[#18A94E] group-hover/pilastri:scale-110 transform transition duration-300 ease-in"
            aria-hidden="true"
          >
            <House size={20} aria-hidden="true" focusable={false} />
          </span>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4
              id="pillar-kwan-title"
              className="text-2xl sm:text-2xl md:text-3xl font-bold"
            >
              관 (Kwan)
            </h4>
            <span className="text-lg sm:text-xl text-[#F36F70] font-semibold">
              Casa
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs">
            Un luogo sicuro dove rifugiarsi dalla vita frenetica e crescere
            insieme
          </p>
        </li>
      </ul>
    </section>
  );
});
