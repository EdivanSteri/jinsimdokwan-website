import { Timer } from "lucide-react";
import React, { type JSX } from "react";

export default React.memo(function HeaderTag(): JSX.Element {
  return (
    <div className="px-4 py-2 w-fit flex items-center justify-center gap-x-2 bg-[#DC2626] rounded-full text-sm sm:text-base md:text-lg font-semibold">
      <Timer className="w-4 h-4" aria-hidden="true" />
      IL PERCORSO DI UNA VITA
      <Timer className="w-4 h-4" aria-hidden="true" />
    </div>
  );
});
