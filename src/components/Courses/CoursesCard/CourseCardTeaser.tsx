import type { CourseView } from "../CoursesList";

type CourseCardTeaserProps = {
  course: CourseView;
};

export default function CourseCardTeaser({ course }: CourseCardTeaserProps) {
  return (
    <div className=" flex flex-col items-start gap-y-3">
      <h3 className="text-2xl font-bold">{course.title}</h3>
      <p className="text-[#E32626] text-md font-medium leading-tight">
        {course.subtitle}
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        {course.description}
      </p>
    </div>
  );
}
