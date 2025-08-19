import { CalendarIcon } from "@heroicons/react/16/solid";
import type { CourseTimetable, CourseView } from "../../CoursesList";
import { formatDaysOfWeek } from "../../../helper/functions";

type CourseCardTimeTableProps = {
  course: CourseView;
};

export default function CourseCardTimeTable({
  course,
}: CourseCardTimeTableProps) {
  const timetableWrapperClass =
    "bg-[#FEF2F2] rounded-xl border border-[#E32626]  py-2 flex flex-col items-center justify-center gap-x-2";

  const timetableView = (timetable: CourseTimetable, index: number) =>
    course.isPrimary ? (
      <div
        key={index}
        className={`${timetableWrapperClass} ${
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
          {timetable.days.map((day: string) => formatDaysOfWeek(day)).join("-")}
        </span>
      </div>
    ) : (
      <div key={index} className={`${timetableWrapperClass} mt-2`}>
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
    );

  return (
    <div>
      {course.isPrimary ? (
        <>
          <div className="flex items-center gap-x-2 mt-4">
            <CalendarIcon className="size-4 text-[#E23726]" />
            <span className="text-sm font-medium">ORARI DELLE LEZIONI:</span>
          </div>
          {course.courseTimetable.map((timetable, index) =>
            timetableView(timetable, index)
          )}
        </>
      ) : (
        <div>
          {course.courseTimetable.map((timetable, index) =>
            timetableView(timetable, index)
          )}
        </div>
      )}
    </div>
  );
}
