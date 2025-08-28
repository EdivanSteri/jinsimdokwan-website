import React, { type JSX, useMemo } from "react";
import HistoricStudentCard from "./HistoricStudentCard";
import { historyStudents } from "./Data/HistoryStudentsData";
import HistoryStudentsHeader from "./HistoryStudentsHeader";
import HistoryStudentsTag from "./HistoryStudentsTag";
import JoinOurFamily from "./JoinOurFamily";
import HistoryStudentsCTA from "./HistoryStudentsCTA";

type HistoryStudentsProps = {
  storiesNumber?: "all" | "preview";
};

export default React.memo(function HistoryStudents({
  storiesNumber,
}: HistoryStudentsProps): JSX.Element {
  // Memoizziamo la preview dei primi 3 studenti per evitare slice ad ogni render
  const storiesToView = useMemo(
    () =>
      storiesNumber === "preview"
        ? historyStudents.slice(0, 3)
        : historyStudents,
    [storiesNumber]
  );

  const gridColsLg = storiesNumber === "preview" ? "lg:grid-cols-3" : "";
  const cTAIsVisible = storiesNumber === "preview";

  return (
    <section
      id="storie"
      className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-16 2xl:px-30 py-10"
      aria-labelledby="history-students-title"
    >
      <HistoryStudentsTag />

      {/* Titolo principale della sezione con id per SEO/accessibilità */}
      <HistoryStudentsHeader />

      {/* Grid responsiva con gap e allineamento centrato */}
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${gridColsLg} items-stretch my-10 place-items-center`}
      >
        {storiesToView.map((student) => (
          <HistoricStudentCard
            key={student.id}
            student={student}
            storiesNumber={storiesNumber}
          />
        ))}
      </div>

      {/* Call-to-action della sezione */}
      {cTAIsVisible && <HistoryStudentsCTA />}

      {/* Invito a unirsi alla famiglia della palestra */}
      <JoinOurFamily />
    </section>
  );
});
