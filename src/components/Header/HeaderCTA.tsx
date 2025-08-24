import { EyeIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
import IconButton from "../ui/Icons/IconButton";

export default function HeaderCTA() {
  const baseClass =
    "w-full sm:w-lg h-11.5 px-4 py-8 sm:text-base transition duration-300 ease-in-out hover:-translate-y-[2px]";

  return (
    <span className="px-4 w-full flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:w-sm sm:gap-x-4 lg:px-0">
      <IconButton
        className={`
          ${baseClass}
          bg-gradient-to-r from-[#D92525] to-[#B91C1C] hover:from-[#c32121] hover:to-[#a71919]
        `}
        icon={PlayCircleIcon}
      >
        Inizia Oggi
      </IconButton>
      <IconButton
        className={`
          ${baseClass}
          bg-white/5 hover:bg-white/10                
          border
        `}
        icon={EyeIcon}
      >
        Scopri i Corsi
      </IconButton>
    </span>
  );
}
