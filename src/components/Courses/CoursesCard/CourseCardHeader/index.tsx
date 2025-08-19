import type { CourseView } from "../../CoursesList";
import CourseCardHeaderBackground from "./CourseCardHeaderBackground";
import CourseCardHeaderIcon from "./CourseCardHeaderIcon";
import CourseCardHeaderPrice from "./CourseCardHeaderPrice";
import CourseCardHeaderTag from "./CourseCardHeaderTag";

type CourseCardHeaderProps = {
  course: CourseView;
};

export default function CourseCardHeader({ course }: CourseCardHeaderProps) {
  return (
    <div
      className={`relative w-full ${
        course.isPrimary ? " h-65" : "h-40"
      } overflow-hidden rounded-t-3xl`}
    >
      <CourseCardHeaderBackground course={course} />
      <div className="absolute top-1 left-0 right-0 flex items-center justify-between p-4">
        <CourseCardHeaderIcon course={course} />
        <CourseCardHeaderPrice course={course} />
      </div>
      <CourseCardHeaderTag course={course} />
    </div>
  );
}
