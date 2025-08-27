import About from "../../components/About";
import ContactAndInfo from "../../components/ContactAndInfo";
import Courses from "../../components/Courses";
import Header from "../../components/Header";
import Partners from "../../components/Partners";
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
      <ContactAndInfo />
      <Partners />
    </div>
  );
}
