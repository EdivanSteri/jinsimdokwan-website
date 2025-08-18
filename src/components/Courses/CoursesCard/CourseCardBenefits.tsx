import { GiftIcon } from "@heroicons/react/16/solid";
import type { CourseView } from "../CoursesList";

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
          <ul>
            {course.familyBenefits.map((benefit, index) => (
              <li
                key={index}
                className="text-xs text-gray-700 flex items-center gap-x-2 mb-1 "
              >
                <span className="bg-[#FEE2E2] rounded-full p-1">
                  <GiftIcon className="size-3 text-[#DC2626]" />
                </span>{" "}
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
