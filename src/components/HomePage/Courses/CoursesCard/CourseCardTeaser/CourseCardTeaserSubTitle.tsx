import React, { type JSX } from "react";
import type { CourseView } from "../../CoursesList";

type CourseCardTeaserSubTitleProps = {
  course: CourseView;
};

export default React.memo(function CourseCardTeaserSubTitle({
  course,
}: CourseCardTeaserSubTitleProps): JSX.Element {
  return (
    <p className="text-[#E32626] text-md font-medium leading-tight" aria-hidden={false}>
      {course.subtitle}
    </p>
  );
});
