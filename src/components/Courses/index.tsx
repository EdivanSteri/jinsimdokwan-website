import CoursesHeader from "./CoursesHeader";
import CoursesList from "./CoursesList";
import CoursesTag from "./CoursesTag";

export default function Courses() {
  return (
    <section className="px-4 sm:px-15 md:px-30 pb-10 flex flex-col items-center justify-center lg:mx-auto">
      <CoursesTag />
      <CoursesHeader />
      <CoursesList />
    </section>
  );
}
