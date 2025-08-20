import { CheckIcon } from "@heroicons/react/16/solid";
import type { CourseView } from "../../CoursesList";
import CourseCardItem from "../CourseCardItem";
import { useMemo, type JSX } from "react";
import React from "react";

type CourseCardLearningOutcomesProps = {
  course: CourseView;
};

function makeKey(value: string, idx: number) {
  return `${value.slice(0, 40).replace(/\s+/g, "-").toLowerCase()}-${idx}`;
}

export default React.memo(function CourseCardLearningOutcomes({
  course,
}: CourseCardLearningOutcomesProps): JSX.Element | null {
  const outcomes = course.learningOutcomes ?? [];

  const items = useMemo(
    () =>
      outcomes.map((lesson, i) => (
        <CourseCardItem
          key={makeKey(lesson, i)}
          value={lesson}
          icon={<CheckIcon className="size-3 text-[#DC2626]" />}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [outcomes.length, outcomes.join("||")]
  );

  if (outcomes.length === 0) return null;

  return (
    <div>
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">COSA IMPARERAI:</h4>
          <ul role="list">{items}</ul>
        </div>
      )}
    </div>
  );
});
