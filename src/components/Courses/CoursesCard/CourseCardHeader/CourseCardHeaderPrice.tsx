import { formatPriceEUR } from "../../../helper/functions";
import type { CourseView } from "../../CoursesList";

type CourseCardHeaderPriceProps = { course: CourseView };

export default function CourseCardHeaderPrice({
  course,
}: CourseCardHeaderPriceProps) {
  return (
    <p className="font-bold flex items-center justify-center bg-black/80 rounded-4xl px-4 py-1 text-white">
      <span className="text-lg">€{formatPriceEUR(course.priceCents)}</span>
      <span className="text-xs opacity-90">/mese</span>
    </p>
  );
}
