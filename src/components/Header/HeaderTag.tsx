import { TrophyIcon } from "@heroicons/react/16/solid";

export default function HeaderTag() {
  return (
    <div
      className="flex items-center justify-center gap-x-2
                        px-4 py-2
                        bg-red-600/20
                        border border-[#D66161] rounded-4xl"
    >
      <TrophyIcon className="size-4 text-[#D66161]" />
      <p className="text-[12px] font-bold text-[#D66161]">
        A.S.D. JinSimDoKwan - Eccellenza nelle Arti Marziali
      </p>
    </div>
  );
}
