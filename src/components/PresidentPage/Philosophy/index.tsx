import Card from "./Card";
import HousePillars from "./HousePillars";
import Quote from "./Quote";
import Header from "./Header";
import SinceritySchool from "./SinceritySchool";

export default function Philosophy() {
  return (
    <section
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-15
                bg-[#2A3341]"
    >
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
        <Card />
        <SinceritySchool />
      </div>
      <HousePillars />
      <Quote />
    </section>
  );
}
