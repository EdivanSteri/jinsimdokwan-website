import type { CourseView } from "../../CoursesList";

type CourseCardHeaderBackgroundProps = {
  course: CourseView;
};


export default function CourseCardHeaderBackground({
  course,
}: CourseCardHeaderBackgroundProps) {
  const roundedClass = course.isPrimary ? "lg:rounded-l-3xl lg:rounded-tr-none" : "";  

  return (
    <>
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.title}
          className={`w-full h-full object-cover object-center rounded-t-lg ${roundedClass}`}
        />
      )}
    </>
  );
}
