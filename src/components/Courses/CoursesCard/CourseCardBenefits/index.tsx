import { GiftIcon } from "@heroicons/react/24/outline";
import type { CourseView } from "../../CoursesList";
import CourseCardItem from "../CourseCardItem";
import { useMemo, type JSX } from "react";
import React from "react";

type CourseCardBenefitsProps = {
  course: CourseView;
};

function makeKey(value: string, idx: number) {
  return `${value.slice(0, 40).replace(/\s+/g, "-").toLowerCase()}-${idx}`;
}

export default React.memo(function CourseCardBenefits({
  course,
}: CourseCardBenefitsProps): JSX.Element | null {
  const benefits = course.familyBenefits ?? [];

  const items = useMemo(
    () =>
      benefits.map((benefit, i) => (
        <CourseCardItem
          key={makeKey(benefit, i)}
          value={benefit}
          icon={<GiftIcon className="size-3 text-[#DC2626]" />}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [benefits.length, benefits.join("||")] // depend on content-ish to update when values change
  );

  if (benefits.length === 0) return null;

  return (
    <div>
      {course.familyBenefits && course.familyBenefits.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">VANTAGGI FAMIGLIA:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
            {items}
          </ul>
        </div>
      )}
    </div>
  );
});
