import { CheckIcon } from "@heroicons/react/16/solid";
import type { CourseView } from "../../CoursesList";
import CourseCardItem from "../CourseCardItem";

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
            {course.learningOutcomes.map((lesson, index) => (
              <CourseCardItem value={lesson} index={index} icon={<CheckIcon className="size-3 text-[#DC2626]" />}/>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
