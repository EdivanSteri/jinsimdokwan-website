import HistoricStudentCard from "../Header/HistoricStudentCard";
import { historyStudents } from "./Data/HistoryStudentsData";
import type { HistoryStudent } from "./Data/HistoryStudentsTypes";
import HistoryStudentsHeader from "./HistoryStudentsHeader";
import HistoryStudentsTag from "./HistoryStudentsTag";
import JoinOurFamily from "./JoinOurFamily";
import HistoryStudentsCTA from "./HistoryStudentsCTA";
import type { JSX } from "react";
import React from "react";

export default React.memo(function HistoryStudents(): JSX.Element {
  const studentsPreview: HistoryStudent[] = historyStudents.slice(0, 3);

  return (
    <section
      id="history students"
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-10"
    >
      <HistoryStudentsTag />
      <HistoryStudentsHeader />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-10 place-items-center">
        {studentsPreview.map((student) => (
          <HistoricStudentCard key={student.id} student={student} />
        ))}
      </div>
      <HistoryStudentsCTA />
      <JoinOurFamily />
    </section>
  );
});
