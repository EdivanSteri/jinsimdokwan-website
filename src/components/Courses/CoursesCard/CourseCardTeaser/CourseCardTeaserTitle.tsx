import React, { type JSX } from "react";
import type { CourseView } from "../../CoursesList";

type CourseCardTeaserTitleProps = {
  course: CourseView;
};

export default React.memo(function CourseCardTeaserTitle({
  course,
}: CourseCardTeaserTitleProps): JSX.Element {
  return <h3 className="text-2xl font-bold">{course.title}</h3>;
});
