type GymStatProps = {
  icon: React.ReactNode;
  value: number;
  text: string;
  grid?: string;
};

export default function GymStat({
  icon,
  value,
  text,
  grid = "",
}: GymStatProps) {
  return (
    <div className={`${grid} flex items-center justify-center gap-x-2`}>
      <div className="p-2 h-10 w-10 flex items-center justify-center rounded-full bg-red-800/20">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-xl sm:text-2xl font-bold">{value}+</p>
        <p className="text-xs sm:text-md">{text}</p>
      </div>
    </div>
  );
}
