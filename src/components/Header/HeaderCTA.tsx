import { EyeIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
import CTAButton from "../ui/CTAButton";

export default function HeaderCTA() {
  return (
    <span className="px-4 w-full flex flex-col items-center justify-center gap-y-4">
      <CTAButton
        text="Inizia Oggi"
        height="h-11.5"
        bgColor="bg-gradient-to-r from-[#D92525] to-[#B91C1C] hover:from-[#c32121] hover:to-[#a71919]"
        animation="transition-all delay-200 ease-in-out hover:-translate-y-[4px]"
        icon={<PlayCircleIcon className="size-5 font-bold" />}
      />
      <CTAButton
        text="Scopri i Corsi"
        height="h-11.5"
        bgColor="bg-white/5 hover:bg-white/10"
        border="border"
        animation="transition delay-200 ease-in-out hover:-translate-y-[4px]"
        icon={<EyeIcon className="size-5 font-bold" />}
      />
    </span>
  );
}
 