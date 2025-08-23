import React, { type JSX } from "react";
import type { CourseView } from "../../CoursesList";

type CourseCardHeaderTagProps = {
  course: CourseView;
};

export default React.memo(function CourseCardHeaderTag({
  course,
}: CourseCardHeaderTagProps): JSX.Element | null {
  if (!course.tag) return null;

  return (
    <div
      className="absolute bottom-1 left-4 bg-white text-black  text-xs font-medium rounded-2xl px-4 py-1"
      role="note"
      aria-label={`Tag corso: ${course.tag}`}
    >
      {course.tag}
    </div>
  );
});
