type GymStatProps = {
  icon: React.ReactNode;
  iconAnimation?: string;
  value: number;
  valueColor?: string;
  text: string;
  textColor?: string;
  grid?: string;
  flex?: string;
  bgColor?: string;
  iconWraperSize?: string;
};

export default function GymStat({
  icon,
  iconAnimation = "",
  value,
  valueColor,
  text,
  textColor,
  grid = "",
  flex = "",
  bgColor,
  iconWraperSize,
}: GymStatProps) {
  return (
    <div
      className={`${grid} flex ${flex}  items-center justify-center gap-x-2`}
    >
      <div
        className={`p-2 ${iconWraperSize} flex items-center justify-center rounded-full ${bgColor} ${iconAnimation}`}
      >
        {/* icona decorativa */}
        <span aria-hidden="true">{icon}</span>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <p className={`text-xl sm:text-2xl font-bold ${valueColor}`}>
          {value}+
        </p>
        <p className={`text-xs sm:text-md ${textColor}`}>{text}</p>
      </div>
    </div>
  );
}
