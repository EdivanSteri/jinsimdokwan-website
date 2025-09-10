import { BookOpenIcon } from "@heroicons/react/16/solid";

export default function CoursesTag() {
  return (
    <div className="w-full p-8 flex flex-col items-center justify-center text-center">
      <div
        className="inline-flex items-center justify-center gap-2 bg-[#fff0f0] text-[#c00000] text-sm font-bold px-4 py-2 rounded-full border border-[#DC2626]"
        role="status"
        aria-label="Sezione: i nostri corsi"
      >
        <BookOpenIcon
          className="w-6 h-6"
          aria-hidden="true"
        />
        <span>I NOSTRI CORSI</span>
      </div>
    </div>
  );
}
