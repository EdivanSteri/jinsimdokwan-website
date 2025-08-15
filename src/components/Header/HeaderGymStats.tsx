import {
  FireIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import GymStat from "./GymStat";

export default function HeaderGymStats() {
  return (
    <div className="grid grid-cols-2 gap-y-2 xs:grid-cols-3">
      <GymStat
        icon={<UserPlusIcon className="size-6 sm:size-8 text-red-400" />}
        value={15}
        text="Anni di Esperienza"
      />
      <GymStat
        icon={<UserGroupIcon className="size-6 sm:size-8 text-red-400" />}
        value={200}
        text="Studenti Attivi"
      />
      <GymStat
        icon={<FireIcon className="size-6 sm:size-8 text-red-400" />}
        value={50}
        text="Cinture Nere"
        grid="col-span-2 xs:col-span-1"
      />
    </div>
  );
}
