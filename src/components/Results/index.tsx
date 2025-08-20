import ResultsHeading from "./ResultsHeading";
import ResultsSubHeading from "./ResultsSubHeading";
import ResultsStats from "./ResultsStats";

export default function Results() {
  return (
    <section className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 pb-10">
      <div className="w-full p-8 flex flex-col items-center justify-center gap-y-4 bg-gradient-to-r from-black to-[#111827] text-white text-center rounded-3xl">
        <ResultsHeading />
        <ResultsSubHeading />
        <ResultsStats />
      </div>
    </section>
  );
}
