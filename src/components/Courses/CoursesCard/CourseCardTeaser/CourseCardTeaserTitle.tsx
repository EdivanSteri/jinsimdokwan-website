import type { CourseView } from "../../CoursesList";

type CourseCardTeaserTitleProps = {
  course: CourseView;
};

export default function CourseCardTeaserTitle({
  course,
}: CourseCardTeaserTitleProps) {
  return <h3 className="text-2xl font-bold">{course.title}</h3>;
}
