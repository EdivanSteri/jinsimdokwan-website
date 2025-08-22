import PresidentCard from "./PresidentCard";
import PresidentCTA from "./PresidentCTA";
import PresidentHeader from "./PresidentHeader";
import PresidentInstructorHighlights from "./PresidentInstructorHighlights";
import PresidentQuote from "./PresidentQuote";
import PresidentSpecialities from "./PresidentSpecialities";
import PresidentTeaser from "./PresidentTeaser";

export default function President() {
  return (
    <section className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 flex flex-col gap-y-10  w-full bg-gradient-to-r from-black to-[#111827] text-white">
      <PresidentHeader />
      <div className="flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-12">
        <PresidentCard />
        <div className="flex flex-col items-star justify-center gap-y-6 lg:w-1/2">
          <PresidentTeaser />
          <PresidentInstructorHighlights />
          <PresidentCTA />
        </div>
      </div>
      <div className="flex flex-col items-star justify-center gap-y-6 mb-16">
        <PresidentSpecialities />
        <PresidentQuote />
      </div>
    </section>
  );
}
