import type { JSX } from "react";
import { BiMedal } from "react-icons/bi";
import type { HistoryStudent } from "../HistoryStudents/Data/HistoryStudentsTypes";
import { Circle, Clock, MoveRight } from "lucide-react";
import React from "react";

type HistoricStudentProps = {
  student: HistoryStudent;
};

export default React.memo(function HistoricStudentCard({
  student,
}: HistoricStudentProps): JSX.Element {
  const bgStyleDynamic =
    student.beltGrade.colors.length > 1
      ? {
          backgroundImage: `linear-gradient(90deg, ${student.beltGrade.colors[0]}, ${student.beltGrade.colors[1]})`,
        }
      : { backgroundColor: student.beltGrade.colors[0] };

  const spanRows =
    student.id === "3"
      ? "md:col-span-full md:justify-self-center lg:col-auto lg:justify-self-auto"
      : "";

  const medalColor =
    student.beltGrade.id !== "10-Kup" && student.beltGrade.id !== "9-Kup"
      ? "#fff"
      : "#000";
  const borderOutline =
    student.beltGrade.id === "10-Kup" || student.beltGrade.id === "9-Kup"
      ? "outline outline outline-black"
      : "";

  const tagBelBgColor =
    student.beltGrade.id === "10-Kup" || student.beltGrade.id === "9-Kup"
      ? {
          backgroundImage: `linear-gradient(90deg, #686868, #000)`,
        }
      : {
          backgroundImage: `linear-gradient(90deg, #F6F7F9, #F3F4F6)`,
        };

  return (
    <article
      className={`${spanRows} relative  overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group`}
      aria-label={`${student.personalInfo.name} ${student.personalInfo.surname} - ${student.beltGrade.degree} ${student.beltGrade.name}`}
    >
      {/* Card Container */}
      <div className="relative flex flex-col gap-8 items-center justify-center bg-white rounded-3xl overflow-visible py-10 border border-black/5 max-w-md">
        {/* Image Section */}
        <div className="relative w-50 h-50 flex items-center justify-center">
          <div
            className={`relative w-full h-full rounded-full overflow-hidden m-4 md:m-6 flex-shrink-0 border-4 ${borderOutline}`}
            style={{ borderColor: student.beltGrade.colors[0] }}
          >
            <img
              src={student.personalInfo.persomalImage.url}
              alt={
                student.personalInfo.persomalImage.altText ||
                `${student.personalInfo.name} ${student.personalInfo.surname}`
              }
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className="z-10 absolute bottom-2 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md
                       group-hover:animate-bounce transition-all duration-100 ease-in-out"
            style={bgStyleDynamic}
            aria-hidden="true"
          >
            <BiMedal color={medalColor} />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full text-center flex flex-col items-center gap-y-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
            {student.personalInfo.name} {student.personalInfo.surname}
          </h2>

          {/* Cintura Tag */}
          <div
            className="flex items-center justify-center gap-x-2 text-sm sm:text-base font-bold 
                       border border-gray-300 rounded-full w-fit px-4 h-10 mx-auto"
            style={tagBelBgColor}
          >
            <Circle
              className="w-3 h-3 rounded-full"
              style={{ ...bgStyleDynamic, color: student.beltGrade.colors[0] }}
              aria-hidden="true"
            />
            <span
              className="text-sm sm:text-base"
              style={{ color: student.beltGrade.colors[0] }}
            >
              {student.beltGrade.degree} {student.beltGrade.name}
            </span>
          </div>

          {/* Years of Practice */}
          <div className="flex items-center justify-center gap-2 text-gray-600 text-xs sm:text-sm mb-4">
            <Clock size={15} color="#000" aria-hidden="true" />
            <span className="flex items-center gap-1">
              {student.yearsOfPractice}{" "}
              <span className="font-semibold">anni di pratica</span>
            </span>
          </div>
        </div>

        <div className="w-full px-6 flex flex-col gap-4">
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 line-clamp-4">
            {student.description}
          </p>

          {/* Bottom Button */}
          <button
            type="button"
            className="w-full flex items-center justify-start text-left gap-2 text-red-500 font-semibold text-sm sm:text-base cursor-pointer group/readmore focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            aria-label={`Continua a leggere la storia di ${student.personalInfo.name}`}
          >
            <span>Continua a leggere</span>
            <MoveRight className="transition-transform duration-300 ease-in-out group-hover/readmore:translate-x-2" />
          </button>
        </div>
      </div>

      {/* Progressive Bar Top Line */}
      <div
        className="absolute left-0 top-0 h-2 w-0 transition-all duration-1000 ease-in-out group-hover:w-full"
        style={bgStyleDynamic}
        aria-hidden="true"
      ></div>
    </article>
  );
});
