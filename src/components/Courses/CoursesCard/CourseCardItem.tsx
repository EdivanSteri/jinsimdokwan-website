import type { JSX } from "react";
import React from "react";

type CourseCardItemProps = {
  value: string;
  icon?: React.ReactNode;
};

export default React.memo(function CourseCardItem({
  value,
  icon,
}: CourseCardItemProps): JSX.Element {
  return (
    <li className="text-xs text-gray-700 flex items-center gap-x-2 mb-1 ">
      <span className="bg-[#FEE2E2] rounded-full p-1">{icon}</span> {value}
    </li>
  );
});
