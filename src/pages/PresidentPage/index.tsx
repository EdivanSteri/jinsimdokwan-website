import Header from "../../components/PresidentPage/Header";
import Palmeras from "../../components/PresidentPage/Palmeras";
import StartJourney from "../../components/PresidentPage/StartJourney";
import TimelineStory from "../../components/PresidentPage/TimelineStory";

export default function PresidentPage() {
  return (
    <div className="bg-gradient-to-r from-[#111826] to-[#000]">
      <Header />
      <TimelineStory />
      <Palmeras />
      <StartJourney />
    </div>
  );
}
