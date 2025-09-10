import {
  FireIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import GymStat from "../../ui/GymStat";

export default function HeaderGymStats() {
  const stats = [
    {
      id: "anni",
      icon: <UserPlusIcon className="size-6 sm:size-8 text-red-400" />,
      value: 24,
      text: "Anni di Esperienza",
    },
    {
      id: "studenti",
      icon: <UserGroupIcon className="size-6 sm:size-8 text-red-400" />,
      value: 30,
      text: "Studenti Attivi",
    },
    {
      id: "cinture",
      icon: <FireIcon className="size-6 sm:size-8 text-red-400" />,
      value: 10,
      text: "Cinture Nere",
      grid: "col-span-2 xs:col-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-2 xs:grid-cols-3">
      {stats.map(({ id, icon, value, text, grid }) => (
        <GymStat
          key={id}
          icon={icon}
          value={value}
          valueColor="text-white"
          text={text}
          textColor="text-gray-400"
          grid={grid}
          bgColor="bg-red-800/20"
          iconWraperSize="h-10 w-10"
        />
      ))}
    </div>
  );
}
