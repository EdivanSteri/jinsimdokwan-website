import {
  FireIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import GymStat from "./GymStat";

export default function HeaderGymStats() {
  return (
    <div className="grid grid-cols-2 gap-y-2">
      <GymStat
        icon={<UserPlusIcon className="size-6 text-red-400" />}
        value={15}
        text="Anni di Esperienza"
      />
      <GymStat
        icon={<UserGroupIcon className="size-6 text-red-400" />}
        value={200}
        text="Studenti Attivi"
      />
      <GymStat
        icon={<FireIcon className="size-6 text-red-400" />}
        value={50}
        text="Cinture Nere"
        grid="col-span-2"
      />
    </div>
  );
}
