import { BookOpenIcon } from "@heroicons/react/16/solid";

export default function CoursesTag() {
  return (
    <div className="w-full p-8 flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-x-2 bg-[#FEF2F2] text-[#DC2626] text-sm font-bold px-4 py-2 rounded-4xl border border-[#DC2626]">
        <BookOpenIcon className="size-6" />
        <span>I NOSTRI CORSI</span>
      </div>
    </div>
  );
}
