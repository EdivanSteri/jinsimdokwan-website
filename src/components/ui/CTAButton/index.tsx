import { PhoneIcon } from "@heroicons/react/16/solid"

export default function CTAButton() {
  return (
    <button className="w-full h-12 flex items-center justify-center gap-x-2 rounded-4xl bg-gradient-to-r from-[#D92525] to-[#B91C1C] text-white font-bold cursor-pointer
                       lg:w-55 lg:h-10
                       lg:transition lg:delay-200 lg:ease-in lg:hover:-translate-y-[2px] lg:hover:from-[#c32121] lg:hover:to-[#a71919]">
      <PhoneIcon className="size-6 font-bold"/>

      <span>Prenota Lezione</span>
    </button>
  );
}
