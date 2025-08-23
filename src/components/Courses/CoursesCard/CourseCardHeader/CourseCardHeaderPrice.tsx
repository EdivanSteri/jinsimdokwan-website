import React, { useMemo, type JSX } from "react";
import { formatPriceEUR } from "../../../helper/functions";
import type { CourseView } from "../../CoursesList";

type CourseCardHeaderPriceProps = { course: CourseView };

export default React.memo(function CourseCardHeaderPrice({
  course,
}: CourseCardHeaderPriceProps): JSX.Element {
  const formatted = useMemo(
    () => formatPriceEUR(course.priceCents),
    [course.priceCents]
  );

  return (
    <p
      className="font-bold flex items-center justify-center bg-black/80 rounded-4xl px-4 py-1 text-white"
      aria-label={`Prezzo ${formatted} al mese`}
    >
      <span className="text-lg">€{formatted}</span>
      <span className="text-xs opacity-90">/mese</span>
    </p>
  );
});
