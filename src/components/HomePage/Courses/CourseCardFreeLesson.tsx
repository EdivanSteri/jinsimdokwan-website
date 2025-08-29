import { GiftIcon } from "@heroicons/react/24/outline";
import type { JSX } from "react";

export default function CourseCardFreeLesson(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row gap-2 bg-linear-to-r from-[#FEF2F2] to-[#FFF7ED] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md my-20 ">
      <span className="w-10 h-10 bg-[#FEE2E2] rounded-full p-1 flex items-center justify-center">
        <GiftIcon className="w-6 h-6 text-[#DD3226]" />
      </span>

      <span className="flex flex-col text-center sm:text-left">
        <h4 className="tetx-[#111827] font-bold">Prima Lezione Gratuita</h4>
        <p className="text-gray-600 font-medium leading-tight">
          Scopri la nostra qualità senza impegno
        </p>
      </span>
    </div>
  );
}
