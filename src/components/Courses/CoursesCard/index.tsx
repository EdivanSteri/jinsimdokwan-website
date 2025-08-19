import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import CTAButton from "../../ui/CTAButton";
import type { CourseView } from "../CoursesList";
import CourseCardBenefits from "./CourseCardBenefits";
import CourseCardHeader from "./CourseCardHeader";
import CourseCardLearningOutcomes from "./CourseCardLearningOutcomes";
import CourseCardTeaser from "./CourseCardTeaser";
import CourseCardTimeTable from "./CourseCardTimetables";
import CourseCardPrimaryTag from "./CourseCardPrimaryTag";

type CourseCardProps = {
  course: CourseView;
};

export default function CourseCard({ course }: CourseCardProps) {
  const maxWidth: string = course.isPrimary ? "lg:max-w-5xl" : "lg:max-w-md";
  const flexDirection: string = course.isPrimary
    ? "lg:flex items-center justify-center"
    : "";

  return (
    <li
      key={course.id}
      className={`mb-6 flex flex-col items-center justify-center w-full ${maxWidth}`}
    >
      <div className={`relative shadow-lg rounded-3xl w-full ${flexDirection} lg:aspect-[16/9]`}>
        <CourseCardHeader course={course} /> 
        <div className="p-6">
          <CourseCardTeaser course={course} />
          <CourseCardTimeTable course={course} />
          <CourseCardBenefits course={course} />
          <CourseCardLearningOutcomes course={course} />
          <div className="mt-6 flex items-center justify-center">
            <CTAButton
              text="Prenota Lezione Gratuita"
              bgColor={`${
                course.isPrimary ? "bg-[#D92525]" : "bg-black"
              }   hover:bg-[#E63636]`}
              textSize="text-sm"
              width="w-full"
              padding="px-6 py-3"
              animation="transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-[2px]"
              icon={<CalendarDaysIcon className="size-5" />}
            />
          </div>
        </div>
        {course.isPrimary && <CourseCardPrimaryTag />}
      </div>
    </li>
  );
}
