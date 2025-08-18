import { CalendarIcon } from "@heroicons/react/16/solid";
import type { CourseView } from "../CoursesList";
import { formatDaysOfWeek } from "../../helper/functions";

type CourseCardTimeTableProps = {
  course: CourseView;
};

export default function CourseCardTimeTable({
  course,
}: CourseCardTimeTableProps) {
  return (
    <div>
      {course.isPrimary ? (
        <>
          <div className="flex items-center gap-x-2 mt-4">
            <CalendarIcon className="size-4 text-[#E23726]" />
            <span className="text-sm font-medium">ORARI DELLE LEZIONI:</span>
          </div>
          {course.courseTimetable.map((timetable, index) => (
            <div
              key={index}
              className={`bg-[#FEF2F2] rounded-xl border border-[#E32626]  py-2 flex flex-col items-center justify-center gap-x-2 ${
                course.courseTimetable.length > 1 ? "mt-2" : "mt-4"
              } `}
            >
              <p className="text-sm font-medium">
                {timetable.targetAudience} ({timetable.agesRange?.min}
                {timetable.agesRange?.max === undefined ? "+" : "-"}
                {timetable.agesRange?.max} anni)
              </p>
              <p className="text-md font-bold text-[#E32626]">
                {timetable.startTime} - {timetable.endTime}
              </p>
              <span className="text-sm font-medium">
                {timetable.days.map((day) => formatDaysOfWeek(day)).join("-")}
              </span>
            </div>
          ))}
        </>
      ) : (
        <div>
          {course.courseTimetable.map((timetable, index) => (
            <div
              key={index}
              className="bg-[#FEF2F2] rounded-xl border border-[#E32626] py-2 flex flex-col items-center justify-center gap-x-2 mt-2"
            >
              <div className="flex items-center justify-center gap-x-2 text-sm  text-[#E23726]">
                <CalendarIcon className="size-4" />
                <span className="font-medium">ORARIO</span>
              </div>
              <div className="flex items-center justify-center gap-x-2 font-bold">
                {timetable.days.join("")}
                <span className="text-sm">
                  {timetable.startTime}-{timetable.endTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
