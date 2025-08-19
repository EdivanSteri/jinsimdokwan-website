import CoursesHeading from "./CoursesHeading";
import CoursesSubHeading from "./CoursesSubHeading";

export default function CoursesHeader() {
  return (
    <div className="flex flex-col items-center justify-center mb-6 max-w-3xl">
      <CoursesHeading />
      <CoursesSubHeading />
    </div>
  );
}
