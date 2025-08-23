import React, { useMemo, type JSX } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import IconButton from "../ui/IconButton";

export default React.memo(function PresidentCTA(): JSX.Element {
  const baseClass = useMemo(() => "w-full px-4 py-2 text-sm", []);

  const primaryClass = useMemo(
    () =>
      `${baseClass} sm:w-50 bg-[#DC2626] transition duration-300 ease-in-out hover:-translate-y-[2px]`,
    [baseClass]
  );

  const secondaryClass = useMemo(
    () =>
      `${baseClass} sm:w-40 bg-white/5 hover:bg-white/10 border border-white/10`,
    [baseClass]
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 sm:justify-start items-start justify-center gap-y-2">
      <IconButton
        className={primaryClass}
        icon={UserPlusIcon}
        aria-label="Scopri la sua storia"
      >
        Scopri la sua Storia
      </IconButton>

      <IconButton
        className={secondaryClass}
        icon={ChatBubbleBottomCenterTextIcon}
        aria-label="Avvia una conversazione con la presidente"
      >
        Parla con Lei
      </IconButton>
    </div>
  );
});
