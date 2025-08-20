import React, { type JSX } from "react";
import type { CourseView } from "../../CoursesList";

type CourseCardTeaserDescriptionProps = {
  course: CourseView;
};

export default React.memo(function CourseCardTeaserDescription({
  course,
}: CourseCardTeaserDescriptionProps): JSX.Element {
  return (
    <p
      className="text-sm text-gray-700 leading-relaxed"
      aria-label={`Descrizione corso: ${course.title}`}
    >
      {course.description}
    </p>
  );
});
