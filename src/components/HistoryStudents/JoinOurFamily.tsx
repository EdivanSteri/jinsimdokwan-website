import { HiOutlineRocketLaunch, HiOutlineSparkles } from "react-icons/hi2";
import { MoveRightIcon } from "lucide-react";

export default function JoinOurFamily() {
  return (
    <div
      className="relative my-20 flex w-full items-center justify-center 
                         bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden"
    >
      {/* Background Gradient Overlay il gradiente colore rossastro ai lati del contenitore */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
      {/* Aura in alto a sinitra rossastra */}
      <div className="absolute top-0 left-0 w-16  h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-red-500/20 rounded-full blur-2xl"></div>
      {/* Aura in basso a destra rossastra */}
      <div className="absolute bottom-0 right-0 w-16  h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-red-500/20 rounded-full blur-2xl"></div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div
          className="flex items-center py-2 px-4 gap-3 text-[#F6A0A0] text-sm font-semibold 
                        bg-gradient-to-r from-[#581C22] via-[#300A0C] to-[#581C22]  
                        border border-red-600 rounded-full"
        >
          <HiOutlineSparkles color="#EB6A6A" />
          <span>UNISCITI ALLA FAMIGLIA</span>
        </div>
        <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <h3>
            Vuoi Diventare Parte della{" "}
            <span className="bg-gradient-to-r from-[#F76D6D] to-[#DD2929] bg-clip-text text-transparent">
              Nostra Storia?
            </span>
          </h3>
          <p className="mt-4 text-lg text-gray-300 font-semibold max-w-3xl leading-relaxed">
            Ogni grande praticante ha iniziato con il primo passo. Unisciti alla
            famiglia JinSimDoKwan e inizia il tuo percorso nel Taekwondo ITF.
          </p>
        </div>
        <div
          className="mt-4 flex items-center gap-3 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-white 
                        bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C]
                        rounded-xl px-3 py-2 cursor-pointer 
                        transform hover:-translate-y-1
                        transition-all duration-300 ease-in-out
                        group"
        >
          <span className="rounded-full bg-[#EF6565] p-3 group-hover:rotate-8 transition-all duration-300 ease-in-out">
            <HiOutlineRocketLaunch />
          </span>
          <span> Iniza il Tuo Viaggio</span>
          <MoveRightIcon className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
