import About from "../../components/About";
import Courses from "../../components/Courses";
import Header from "../../components/Header";
import President from "../../components/President";
import Results from "../../components/Results";

export default function HomePage() {


  return (
    <div className="bg-[#FEFEFE]">
      <Header />
      <About />
      <Results />
      <Courses />
      <President />
    </div>
  );
}
