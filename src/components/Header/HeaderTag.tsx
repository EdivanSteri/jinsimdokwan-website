import { TrophyIcon } from "@heroicons/react/16/solid";

export default function HeaderTag() {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-[#D66161] rounded-full"
      aria-hidden={false}
      role="note"
    >
      <TrophyIcon className="w-4 h-4 text-[#D66161]" aria-hidden="true" />
      <p className="text-xs md:text-sm font-bold text-[#D66161] leading-none">
        A.S.D. JinSimDoKwan - Eccellenza nelle Arti Marziali
      </p>
    </div>
  );
}
