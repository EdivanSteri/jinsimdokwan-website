import type { JSX } from "react";
import { BiMedal } from "react-icons/bi";
import type { HistoryStudent } from "../HistoryStudents/Data/HistoryStudentsTypes";
import { Circle, Clock, MoveRight } from "lucide-react";

type HistoricStudentProps = {
  student: HistoryStudent;
};
export default function HistoricStudentCard({
  student,
}: HistoricStudentProps): JSX.Element {
  const bgSyleDynamic =
    student.beltGrade.colors.length > 1
      ? {
          backgroundImage: `linear-gradient(90deg, ${student.beltGrade.colors[0]}, ${student.beltGrade.colors[1]})`,
        }
      : { backgroundColor: student.beltGrade.colors[0] };

  const spanRows =
    student.id === "3"
      ? "md:col-span-full md:justify-self-center lg:col-auto lg:justify-self-auto"
      : "";

  return (
    <div
      className={`${spanRows} relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group`}
    >
      {/* Card Container */}
      <div
        className="relative flex flex-col gap-8 items-center justify-center bg-white  rounded-3xl overflow-visible py-10 border border-black/5 max-w-md
                      "
      >
        {/* Image Section */}
        <div className="relative w-50 h-50 flex items-center justify-center">
          <div
            className="relative w-full h-full rounded-full overflow-hidden  m-4 md:m-6 flex-shrink-0 
                      border-4"
            style={{ borderColor: student.beltGrade.colors[0] }}
          >
            <img
              src={student.personalInfo.persomalImage.url}
              alt={
                student.personalInfo.persomalImage.altText ||
                `${student.personalInfo.name} ${student.personalInfo.surname}`
              }
              className="w-full h-full object-cover object-right"
            />
          </div>
          <div
            className="z-10 absolute bottom-2 right-3 w-10 h-10 rounded-full border-none bg-yellow-200
                      flex items-center justify-center border-2 border-white shadow-md
                      group-hover:animate-bounce transition-all duration-100 ease-in-out"
            style={bgSyleDynamic}
          >
            <BiMedal color="#fff" />
          </div>
        </div>
        {/* Info Section */}
        <div className="w-full  text-center">
          <div className="flex flex-col items-center gap-y-4">
            {/* Student Name */}
            <h2 className="text-2xl font-bold">
              {student.personalInfo.name} {student.personalInfo.surname}
            </h2>
            {/* Cintura Tag */}
            <div
              className="flex items-center justify-center gap-x-2 text-sm font-bold 
                    bg-gradient-to-r from-[#F6F7F9]  to-[#F3F4F6] 
                    border border-gray-300 rounded-full w-fit px-4 h-10 mx-auto"
            >
              <Circle
                className="w-3 h-3 rounded-full"
                style={{ ...bgSyleDynamic, color: student.beltGrade.colors[0] }}
              />
              <span
                className="text-[#B91C1C]"
                style={{ color: student.beltGrade.colors[0] }}
              >
                {student.beltGrade.degree} {student.beltGrade.name}
              </span>
            </div>

            {/* Years of Practice */}
            <div className="text-gray-600 text-xs flex items-center justify-center gap-2 mb-4">
              <Clock size={15} color="#000" />
              <span className="flex items-center justify-center gap-1">
                {student.yearsOfPractice}{" "}
                <span className="font-semibold">anni di pratica</span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full px-6 flex flex-col gap-4">
          {/* Description */}
          <p className="text-sm text-gray-700 line-clamp-4">
            {student.description}
          </p>

          {/*  Bottom  */}
          <button className="w-full flex items-center justify-start text-left gap-2 text-red-500 font-semibold text-sm cursor-pointer group/readmore">
            <span>Continua a leggere</span>{" "}
            <MoveRight className="transition-transform duration-300 ease-in-out group-hover/readmore:translate-x-2" />
          </button>
        </div>
      </div>
      {/* Progressive Bar Top Line */}
      <div
        className="absolute  left-0 top-0 h-2 w-0
               transition-all duration-1000 ease-in-out
               group-hover:w-full"
        style={bgSyleDynamic}
      ></div>
    </div>
  );
}
