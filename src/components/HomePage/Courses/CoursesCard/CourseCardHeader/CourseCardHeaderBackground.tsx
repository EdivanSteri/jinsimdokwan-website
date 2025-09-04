import { useMemo } from "react";
import type { CourseView } from "../../CoursesList";
import React from "react";

type CourseCardHeaderBackgroundProps = {
  course: CourseView;
};

export default React.memo(function CourseCardHeaderBackground({
  course,
}: CourseCardHeaderBackgroundProps) {
  const roundedClass = useMemo(
    () =>
      course.isPrimary
        ? "lg:rounded-l-xl lg:rounded-tr-none"
        : "group-hover:scale-110 transition-scale duration-300 ease-in-out",
    [course.isPrimary]
  );

  if (!course.imageUrl) return null;

  return (
    <>
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover object-center rounded-t-lg ${roundedClass}`}
        />
      )}
    </>
  );
});
