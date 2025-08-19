import type { CourseView } from "../../CoursesList";

type CourseCardHeaderTagProps = {
  course: CourseView;
};

export default function CourseCardHeaderTag({
  course,
}: CourseCardHeaderTagProps) {
  return (
    <div className="absolute bottom-1 left-4 bg-white text-black  text-xs font-medium rounded-2xl px-4 py-1">
      {course.tag}
    </div>
  );
}
