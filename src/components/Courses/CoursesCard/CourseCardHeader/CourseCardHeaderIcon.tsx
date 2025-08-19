import type { CourseView } from "../../CoursesList";

type CourseCardHeaderIconProps = {
  course: CourseView;
};

export default function CourseCardHeaderIcon({
  course,
}: CourseCardHeaderIconProps) {
  return (
    <>
      {course.icon && (
        <div className="text-2xl flex items-center justify-center bg-white rounded-4xl p-1 ">
          {course.icon}
        </div>
      )}
    </>
  );
}
