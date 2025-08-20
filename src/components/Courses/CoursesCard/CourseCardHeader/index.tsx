import { useMemo } from "react";
import type { CourseView } from "../../CoursesList";
import CourseCardHeaderBackground from "./CourseCardHeaderBackground";
import CourseCardHeaderIcon from "./CourseCardHeaderIcon";
import CourseCardHeaderPrice from "./CourseCardHeaderPrice";
import CourseCardHeaderTag from "./CourseCardHeaderTag";
import React from "react";

type CourseCardHeaderProps = {
  course: CourseView;
};

export default React.memo(function CourseCardHeader({
  course,
}: CourseCardHeaderProps) {
  const heightClass = useMemo(
    () => (course.isPrimary ? " h-70 lg:h-full" : "h-50"),
    [course.isPrimary]
  );

  return (
    <div
      className={`relative w-full ${heightClass} overflow-hidden rounded-t-3xl`}
    >
      <CourseCardHeaderBackground course={course} />
      <div className="absolute top-1 left-0 right-0 flex items-center justify-between p-4">
        <CourseCardHeaderIcon course={course} />
        <CourseCardHeaderPrice course={course} />
      </div>
      <CourseCardHeaderTag course={course} />
    </div>
  );
});
