import Header from "./Header";
import Timeline from "./Timeline";
import LifePathCard from "./Timeline/LifePathCard";

export default function TimelineStory() {
  return (
    <div className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-15">
      <Header />
      <Timeline />
      <LifePathCard />
    </div>
  );
}
