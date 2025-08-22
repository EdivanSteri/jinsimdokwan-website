import PresidentCard from "./PresidentCard";
import PresidentCTA from "./PresidentCTA";
import PresidentHeader from "./PresidentHeader";
import PresidentInstructorHighlights from "./PresidentInstructorHighlights";
import PresidentQuote from "./PresidentQuote";
import PresidentSpecialities from "./PresidentSpecialities";
import PresidentTeaser from "./PresidentTeaser";

export default function President() {
  return (
    <section className="w-full bg-gradient-to-r from-black to-[#111827] text-white">
      <PresidentHeader />
      <div className="grid grid-cols-1 gap-y-10">
        <PresidentCard />
        <div className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 flex flex-col items-star justify-center gap-y-6 mb-6">
          <PresidentTeaser />
          <PresidentInstructorHighlights />
          <PresidentCTA />
          <PresidentSpecialities />
          <PresidentQuote />
        </div>
      </div>
    </section>
  );
}
