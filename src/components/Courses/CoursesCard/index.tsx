import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import type { CourseView } from "../CoursesList";
import CourseCardBenefits from "./CourseCardBenefits";
import CourseCardHeader from "./CourseCardHeader";
import CourseCardLearningOutcomes from "./CourseCardLearningOutcomes";
import CourseCardTeaser from "./CourseCardTeaser";
import CourseCardTimeTable from "./CourseCardTimetables";
import CourseCardPrimaryTag from "./CourseCardPrimaryTag";
import { useMemo, type JSX } from "react";
import React from "react";
import IconButton from "../../ui/IconButton";

type CourseCardProps = {
  course: CourseView;
};

export default React.memo(function CourseCard({
  course,
}: CourseCardProps): JSX.Element {
  const containerMaxWidth = useMemo(
    () => (course.isPrimary ? "lg:max-w-6xl" : "lg:max-w-md"),
    [course.isPrimary]
  );
  const flexDirection = useMemo(
    () => (course.isPrimary ? "lg:flex lg:items-center lg:justify-center" : ""),
    [course.isPrimary]
  );

  const shadowClasses = useMemo(() => {
    return course.isPrimary
      ? "shadow-2xl shadow-[#FECACA] hover:shadow-3xl"
      : "shadow-lg hover:shadow-xl";
  }, [course.isPrimary]);

  const animationClasses = useMemo(() => {
    return !course.isPrimary
      ? "transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-[4px]"
      : "";
  }, [course.isPrimary]);

  const cardRootClasses = useMemo(
    () =>
      `relative ${shadowClasses} transition-shadow duration-300 ${animationClasses} rounded-2xl w-full ${flexDirection} lg:aspect-[16/9] group`,
    [animationClasses, flexDirection, shadowClasses]
  );

  return (
    <li
      className={`mb-6 flex flex-col items-center justify-center w-full ${containerMaxWidth}`}
    >
      <article
        className={cardRootClasses}
        aria-labelledby={`course-${course.id}-title`}
      >
        <CourseCardHeader course={course} />

        {/* Contenuto principale */}
        <main className="p-6">
          <CourseCardTeaser course={course} />
          <CourseCardTimeTable course={course} />
          <CourseCardBenefits course={course} />
          <CourseCardLearningOutcomes course={course} />

          <div className="mt-6 flex items-center justify-center">
            <IconButton
              className={`
                w-full
                px-6 py-3
                ${
                  course.isPrimary ? "bg-[#D92525]" : "bg-black"
                }   hover:bg-[#E63636] 
                text-sm
                transition duration-300 ease-in-out hover:-translate-y-[2px]
              `}
              icon={CalendarDaysIcon}
            >
              Prenota Lezione Gratuita
            </IconButton>
          </div>
        </main>

        {course.isPrimary && (
          <div className="absolute top-0 w-full">
            <CourseCardPrimaryTag />
          </div>
        )}
      </article>
    </li>
  );
});
