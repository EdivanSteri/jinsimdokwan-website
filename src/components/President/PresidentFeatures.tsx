import { useMemo } from "react";
import { hilightsItems, specialitiesItems } from "./data/PresidentData";
import PresidentInstructorSpeciality from "./PresidentInstructorSpeciality";
import PresidentInstructorHilight from "./PresidentInstructorHilight";

type PresidentFeaturesProps = {
  featureType: "highlight" | "speciality";
};

export default function PresidentFeatures({
  featureType,
}: PresidentFeaturesProps) {
  const data = featureType === "highlight" ? hilightsItems : specialitiesItems;

  // memoizziamo gli elementi per non ricrearli ad ogni render del genitore
  const items = useMemo(
    () =>
      data.map((item) =>
        featureType === "highlight" ? (
          <PresidentInstructorHilight key={item.id} highlight={item} />
        ) : (
          <PresidentInstructorSpeciality key={item.id} highlight={item} />
        )
      ),
    [data, featureType]
  );

  const ariaLabelGrid =
    featureType === "highlight"
      ? "Qualifiche dell'istruttrice"
      : "Specialità dell'istruttrice";

  const featuresGrid = (
    <div
      className={`grid grid-cols-1 ${
        featureType === "highlight" ? "sm:grid-cols-2" : "md:grid-cols-2"
      }  gap-4 items-stretch`}
      role="list"
      aria-label={ariaLabelGrid}
    >
      {items}
    </div>
  );

  if (featureType === "highlight") return featuresGrid;

  return (
    <div
      aria-labelledby="president-specialities-title"
      className="p-8 lg:p-16 bg-red-600/15 rounded-3xl border border-red-600/20"
    >
      <div className="text-center mb-8 flex flex-col items-center justify-center gap-y-2">
        <h3 id="president-specialities-title" className="text-2xl font-bold">
          Le Sue Specialità
        </h3>
        <p className="text-sm font-medium text-gray-300">
          Expertise e competenze che la rendono unica
        </p>
      </div>
      {featuresGrid}
    </div>
  );
}
