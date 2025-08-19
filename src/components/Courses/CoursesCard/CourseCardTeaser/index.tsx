import type { CourseView } from "../../CoursesList";
import CourseCardTeaserDescription from "./CourseCardTeaserDescription";
import CourseCardTeaserSubTitle from "./CourseCardTeaserSubTitle";
import CourseCardTeaserTitle from "./CourseCardTeaserTitle";

type CourseCardTeaserProps = {
  course: CourseView;
};

export default function CourseCardTeaser({ course }: CourseCardTeaserProps) {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <CourseCardTeaserTitle course={course} />
      <CourseCardTeaserSubTitle course={course} />
      <CourseCardTeaserDescription course={course} />
    </div>
  );
}
