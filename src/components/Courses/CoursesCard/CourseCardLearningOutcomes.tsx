import { CheckIcon } from "@heroicons/react/16/solid";
import type { CourseView } from "../CoursesList";

type CourseCardLearningOutcomesProps = {
  course: CourseView;
};

export default function CourseCardLearningOutcomes({
  course,
}: CourseCardLearningOutcomesProps) {
  return (
    <div>
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">COSA IMPARERAI:</h4>
          <ul>
            {course.learningOutcomes.map((benefit, index) => (
              <li
                key={index}
                className="text-xs text-gray-700 flex items-center gap-x-2 mb-1 "
              >
                <span className="bg-[#FEE2E2] rounded-full p-1">
                  <CheckIcon className="size-3 text-[#DC2626]" />
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
