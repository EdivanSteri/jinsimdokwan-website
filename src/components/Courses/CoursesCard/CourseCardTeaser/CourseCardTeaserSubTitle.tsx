import type { CourseView } from "../../CoursesList";

type CourseCardTeaserSubTitleProps = {
  course: CourseView;
};

export default function CourseCardTeaserSubTitle({
  course,
}: CourseCardTeaserSubTitleProps) {
  return (
    <p className="text-[#E32626] text-md font-medium leading-tight">
      {course.subtitle}
    </p>
  );
}
