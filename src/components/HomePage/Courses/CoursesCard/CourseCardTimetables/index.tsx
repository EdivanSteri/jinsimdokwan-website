import React, { useMemo } from "react";
import { CalendarIcon } from "@heroicons/react/16/solid";
import type { CourseTimetable, CourseView } from "../../CoursesList";
import { formatDaysOfWeek } from "../../../../../helpers/functions";

type CourseCardTimeTableProps = {
  course: CourseView;
};

export default React.memo(function CourseCardTimeTable({
  course,
}: CourseCardTimeTableProps) {
  const timetableWrapperClass =
    "bg-[#fff0f0] rounded-xl border border-[#E32626]  py-2 flex flex-col items-center justify-center gap-x-2";

  /* helper per creare una key stabile per ogni timetable*/
  const makeKey = (t: CourseTimetable) =>
    `${t.days.join(",")}-${t.startTime}-${t.endTime}-${
      t.targetAudience ?? "all"
    }`;

  // format age range in a robust way
  const formatAgesRange = (ages?: CourseTimetable["agesRange"]) => {
    if (!ages) return "";
    return ages.max === undefined ? `${ages.min}+` : `${ages.min}-${ages.max}`;
  };

  const timetableElements = useMemo(() => {
    return course.courseTimetable.map((timetable) => {
      const key = makeKey(timetable);

      if (course.isPrimary) {
        const ageRangeText = formatAgesRange(timetable.agesRange);
        const daysText = timetable.days
          .map((d) => formatDaysOfWeek(d))
          .join("-");

        return (
          <div
            key={key}
            className={`${timetableWrapperClass} ${
              course.courseTimetable.length > 1 ? "mt-2" : "mt-4"
            } w-full`}
            role="group"
            aria-label={`Orario ${timetable.targetAudience ?? ""} ${
              ageRangeText ? `età ${ageRangeText} anni` : ""
            }`}
          >
            <p className="text-sm font-medium">
              {timetable.targetAudience}
              {ageRangeText ? ` (${ageRangeText} anni)` : ""}
            </p>

            <p className="text-md font-bold text-[#c00000]">
              {timetable.startTime} - {timetable.endTime}
            </p>

            <span className="text-sm font-medium">{daysText}</span>
          </div>
        );
      }

      // orari delle card dei corsi non principali
      return (
        <div
          key={key}
          className={`${timetableWrapperClass} mt-2`}
          role="group"
          aria-label="Orario lezione"
        >
          <div className="flex items-center justify-center gap-x-2 text-sm  text-[#c3221f]">
            <CalendarIcon className="w-4 h-4" />
            <span className="font-medium">ORARIO</span>
          </div>

          <div className="flex items-center justify-center gap-x-2 font-bold">
            {/* mantengo join senza separatore come nel tuo originale */}
            {timetable.days.length > 1
              ? timetable.days.map((d) => formatDaysOfWeek(d)).join("-")
              : timetable.days.join("-")}
            <span className="text-sm">
              {timetable.startTime}-{timetable.endTime}
            </span>
          </div>
        </div>
      );
    });
  }, [course.courseTimetable, course.isPrimary]);

  return (
    <div>
      {course.isPrimary ? (
        <div>
          <div
            className="flex items-center gap-x-2 mt-4"
            role="region"
            aria-label="Orari delle lezioni"
          >
            <CalendarIcon className="size-4 text-[#E23726]" />
            <span className="text-sm font-medium">ORARI DELLE LEZIONI:</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-2 mt-2 sm:flex-row sm:items-center sm:justify-between gap-x-2">
            {timetableElements}
          </div>
        </div>
      ) : (
        <div>{timetableElements}</div>
      )}
    </div>
  );
});
