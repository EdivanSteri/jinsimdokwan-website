import { formatPriceEUR } from "../../helper/functions";
import type { CourseView } from "../CoursesList";

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
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover object-center rounded-t-lg"
        />
      )}
      <div className="absolute top-1 left-0 right-0 flex items-center justify-between p-4">
        {course.icon && (
          <div className="text-2xl flex items-center justify-center bg-white rounded-4xl p-1 ">
            {course.icon}
          </div>
        )}
        <p className="font-bold flex items-center justify-center bg-black/80 rounded-4xl px-4 py-1 text-white">
          <span className="text-lg">€{formatPriceEUR(course.priceCents)}</span>
          <span className="text-xs opacity-90">/mese</span>
        </p>
      </div>
      <div className="absolute bottom-1 left-4 bg-white text-black  text-xs font-medium rounded-2xl px-4 py-1">
        {course.tag}
      </div>
    </div>
  );
}
