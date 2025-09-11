import { useMemo } from "react";
import { timelineCardData } from "./data/timelineData";
import type { JSX } from "react";
import TimelineEvent from "./TimelineEvent";
import TimelineAxis from "./TimelineAxis";

export default function Timeline(): JSX.Element {
  const timelineItems = useMemo(
    () =>
      timelineCardData.map((card, index) => {
        return <TimelineEvent card={card} index={index} />;
      }),
    []
  );

  return (
    <main role="main" aria-labelledby="timeline-title" className="text-center">
      <p id="timeline-title" className="sr-only">
        Cronologia: dalla nascita dell'associazione ai giorni nostri
      </p>

      <TimelineAxis />

      <ul
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-32 border-gradient lg:border-l-0 pl-8 lg:pl-0 mt-10"
        role="list"
        aria-label="Timeline storica"
      >
        <div
          className="hidden absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full w-[8px] bg-gradient-to-b from-[#9CA2AE] to-[#DC2626] lg:block"
          aria-hidden="true"
        />
        {timelineItems}
      </ul>
    </main>
  );
}
