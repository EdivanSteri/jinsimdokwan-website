import { GiftIcon } from "@heroicons/react/24/outline";
import type { CourseView } from "../../CoursesList";
import CourseCardItem from "../CourseCardItem";

type CourseCardBenefitsProps = {
  course: CourseView;
};

export default function CourseCardBenefits({
  course,
}: CourseCardBenefitsProps) {
  return (
    <div>
      {course.familyBenefits && course.familyBenefits.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">VANTAGGI FAMIGLIA:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {course.familyBenefits.map((benefit, index) => (
              <CourseCardItem
                value={benefit}
                index={index}
                icon={<GiftIcon className="size-3 text-[#DC2626]" />}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
