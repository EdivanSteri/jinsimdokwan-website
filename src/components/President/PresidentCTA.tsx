import {
  ChatBubbleBottomCenterTextIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import IconButton from "../ui/IconButton";

export default function PresidentCTA() {
  const baseClass = "w-full px-4 py-2 text-sm";
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 sm:justify-start items-start justify-center gap-y-2">
      <IconButton
        className={`${baseClass} sm:w-50 bg-[#DC2626] transition duration-300 ease-in-out hover:-translate-y-[2px]`}
        icon={UserPlusIcon}
      >
        Scopri la sua Storia
      </IconButton>
      <IconButton
        className={`${baseClass} sm:w-40 bg-white/5 hover:bg-white/10 border border-white/10`}
        icon={ChatBubbleBottomCenterTextIcon}
      >
        Parla con Lei
      </IconButton>
    </div>
  );
}
