import type { JSX } from "react";
import type { CourseView } from "../../CoursesList";
import React from "react";

type CourseCardHeaderIconProps = {
  course: CourseView;
};

export default React.memo(function CourseCardHeaderIcon({
  course,
}: CourseCardHeaderIconProps): JSX.Element | null {
  if (!course.icon) return null;

  return (
    <div
      className="text-2xl flex items-center justify-center bg-white rounded-4xl p-1"
      aria-hidden="true"
    >
      {course.icon}
    </div>
  );
});
