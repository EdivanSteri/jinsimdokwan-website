import { MoveRightIcon, UsersRound } from "lucide-react";

export default function HistoryStudentsCTA() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div
        className="mt-4 max-w-sm flex items-center justify-center text-center gap-3 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-white 
                        bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C]
                        rounded-xl px-4 py-2 cursor-pointer 
                        transform hover:-translate-y-1
                        transition-all duration-300 ease-in-out
                        group"
      >
        <span className="rounded-full bg-[#EF6565] p-3 group-hover:rotate-8 transition-all duration-300 ease-in-out">
          <UsersRound />
        </span>
        <span>Leggi Tutte le Storie</span>
        <MoveRightIcon className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
}
