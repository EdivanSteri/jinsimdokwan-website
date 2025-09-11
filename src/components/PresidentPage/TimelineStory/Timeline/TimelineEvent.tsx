import React, { type JSX } from "react";
import type { TimelineCard } from "./data/timelineTypes";
import TimelineNode from "./TimelineNode";
import Card from "./Card";

type TimelineEventProps = {
  card: TimelineCard;
  index: number;
};

export default React.memo(function TimelineEvent({
  card,
  index,
}: TimelineEventProps): JSX.Element {
  return (
    <li
      key={card.id}
      role="listitem"
      aria-labelledby={`timeline-item-${card.id}-year`}
      className={`relative w-full lg:col-span-2 lg:flex lg:items-center lg:justify-center ${
        index % 2 === 0 ? "lg:pr-145" : "lg:pl-145"
      } `}
    >
      <TimelineNode card={card} />
      <Card data={card.data} />
    </li>
  );
});
