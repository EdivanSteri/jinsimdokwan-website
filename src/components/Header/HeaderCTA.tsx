import { EyeIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
import CTAButton from "../ui/CTAButton";

export default function HeaderCTA() {
  return (
    <span className="px-4 w-full flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:w-sm sm:gap-x-4 lg:px-0">
      <CTAButton
        text="Inizia Oggi"
        textSize="sm:text-base"
        height="h-11.5"
        weight="w-full sm:w-lg"
        padding="px-4 py-8"
        bgColor="bg-gradient-to-r from-[#D92525] to-[#B91C1C] hover:from-[#c32121] hover:to-[#a71919]"
        animation="transition-transform transition-colors delay-200 ease-in-out hover:-translate-y-[4px]"
        icon={<PlayCircleIcon className="size-5 font-bold" />}
      />
      <CTAButton
        text="Scopri i Corsi"
        textSize="sm:text-base"
        height="h-11.5"
        weight="w-full sm:w-lg"
        padding="px-4 py-8"
        bgColor="bg-white/5 hover:bg-white/10"
        border="border"
        animation="transition-transform transition-colors delay-200 ease-in-out hover:-translate-y-[4px]"
        icon={<EyeIcon className="size-5 font-bold" />}
      />
    </span>
  );
}
