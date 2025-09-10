import GymStat from "../../ui/GymStat";
import {
  FireIcon,
  TrophyIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

export default function ResultsStats() {
  const results = [
    {
      id: "anni",
      icon: <UserPlusIcon className="size-6 sm:size-8 text-white" />,
      value: 24,
      text: "Anni di Esperienza",
    },
    {
      id: "studenti",
      icon: <UserGroupIcon className="size-6 sm:size-8 text-white" />,
      value: 30,
      text: "Studenti Attivi",
    },
    {
      id: "cinture",
      icon: <FireIcon className="size-6 sm:size-8 text-white" />,
      value: 15,
      text: "Cinture Nere",
    },
    {
      id: "discipline",
      icon: <TrophyIcon className="size-6 sm:size-8 text-white" />,
      value: 3,
      text: "Discipline offerte",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-30 xl:gap-40 2xl:gap-50 mt-4">
      {results.map(({ id, icon, value, text }) => (
        <GymStat
          key={id}
          icon={icon}
          iconAnimation="transform transition-transform duration-500 ease-in-out hover:scale-110"
          value={value}
          valueColor="text-[#F87171]"
          text={text}
          textColor="text-gray-300"
          flex="flex-col gap-y-4"
          bgColor="bg-[#DC2626]"
          iconWraperSize="h-12 w-12 md:w-15 md:h-15 lg:w-18 lg:h-18"
        />
      ))}
    </div>
  );
}
