import PresidentCard from "./PresidentCard";
import PresidentCTA from "./PresidentCTA";
import PresidentFeatures from "./PresidentFeatures";
import PresidentHeader from "./PresidentHeader";
import PresidentQuote from "./PresidentQuote";
import PresidentTeaser from "./PresidentTeaser";

export default function President() {
  return (
    <section
      id="presidente"
      aria-labelledby="president-section"
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 flex flex-col gap-y-10  w-full bg-gradient-to-r from-black to-[#111827] text-white"
    >
      <PresidentHeader />
      <div className="flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-12">
        <PresidentCard />
        <div className="flex flex-col justify-center gap-y-6 lg:w-1/2">
          <PresidentTeaser />
          <PresidentFeatures featureType="highlight" />
          <PresidentCTA />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-6 mb-16">
        <PresidentFeatures featureType="speciality" />
        <PresidentQuote />
      </div>
    </section>
  );
}
