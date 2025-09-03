import LegendaryNumbers from "./LegendaryNumbers";
import Sliders from "./Sliders";
import Header from "./Header";
import Credentials from "./Credentials";

export default function Palmeras() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-12 bg-gradient-to-r from-[#181928] to-[#111827]">
      <Header />
      <Sliders />
      <Credentials />
      <LegendaryNumbers />
    </div>
  );
}
