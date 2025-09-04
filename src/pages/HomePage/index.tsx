import About from "../../components/HomePage/About";
import ContactAndInfo from "../../components/HomePage/ContactAndInfo";
import Courses from "../../components/HomePage/Courses";
import Header from "../../components/HomePage/Header";
import HistoryStudents from "../../components/HistoryStudents";
import Partners from "../../components/HomePage/Partners";
import President from "../../components/HomePage/President";
import Results from "../../components/HomePage/Results";

export default function HomePage() {
  return (
    <div className="bg-[#FEFEFE]">
      <Header />
      <About />
      <Results />
      <Courses />
      <President />
      <HistoryStudents storiesNumber="preview" />
      <ContactAndInfo />
      <Partners />
    </div>
  );
}
