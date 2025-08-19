type CourseCardItemProps = {
  value: string;
  index: number;
  icon?: React.ReactNode;
};

export default function CourseCardItem({
  value,
  index,
  icon,
}: CourseCardItemProps) {
  return (
    <li
      key={index}
      className="text-xs text-gray-700 flex items-center gap-x-2 mb-1 "
    >
      <span className="bg-[#FEE2E2] rounded-full p-1">
        {icon}
        {/* <GiftIcon className="size-3 text-[#DC2626]" /> */}
      </span>{" "}
      {value}
    </li>
  );
}
