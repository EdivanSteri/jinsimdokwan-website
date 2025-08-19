import type { CourseView } from "../../CoursesList";

type CourseCardTeaserDescriptionProps = {
  course: CourseView;
};

export default function CourseCardTeaserDescription({
  course,
}: CourseCardTeaserDescriptionProps) {
  return (
    <p className="text-sm text-gray-700 leading-relaxed">
      {course.description}
    </p>
  );
}
