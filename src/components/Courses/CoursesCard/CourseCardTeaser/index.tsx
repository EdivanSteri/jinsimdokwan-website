import React, { type JSX } from "react";
import type { CourseView } from "../../CoursesList";
import CourseCardTeaserDescription from "./CourseCardTeaserDescription";
import CourseCardTeaserSubTitle from "./CourseCardTeaserSubTitle";
import CourseCardTeaserTitle from "./CourseCardTeaserTitle";

type CourseCardTeaserProps = {
  course: CourseView;
};

export default React.memo(function CourseCardTeaser({
  course,
}: CourseCardTeaserProps): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <CourseCardTeaserTitle course={course} />
      <CourseCardTeaserSubTitle course={course} />
      <CourseCardTeaserDescription course={course} />
    </div>
  );
});
