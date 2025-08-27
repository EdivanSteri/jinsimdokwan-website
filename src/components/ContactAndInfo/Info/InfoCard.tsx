import React, { useMemo, type JSX } from "react";
import { formatOpeningHoursDays } from "../../helper/functions";
import { dojoInfoCard } from "./Data/InfoCardsData";
import type {
  InfoCardItem,
  InfoCard,
  AddressCard,
  OpeningHoursCard,
  OpeningHoursEntry,
  SimpleInfo,
} from "./Data/InfoCardsTypes";

export default React.memo(function InfoCard(): JSX.Element {
  const data: InfoCard = dojoInfoCard;
  const { title, infoItems } = data;
  const TitleIcon = title.icon as React.ElementType;

  const renderedItems = useMemo(() => {
    const items: ReadonlyArray<InfoCardItem> = infoItems ?? [];

    return items.map((item, idx) => {
      const baseKey =
        (item.type === "simple" && item.text) ||
        (item.type === "address" && item.address?.street) ||
        (item.type === "openingHours" && item.text) ||
        idx;
      const key = `${String(baseKey)}-${item.type}-${idx}`;

      const Icon = item.icon as React.ElementType | undefined;

      // ogni elemento è un listitem per migliorare la semantica
      switch (item.type) {
        case "address": {
          const addressItem = item as AddressCard;
          const addr = addressItem.address;
          return (
            <li
              key={key}
              role="listitem"
              className="flex items-center justify-start gap-x-2 text-sm sm:text-base"
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-[#EF4440]" aria-hidden="true" />
              ) : null}
              <div className="flex flex-col">
                <span className="font-medium">{addressItem.text}</span>
                <address className="not-italic text-xs text-white/50">
                  {addr?.street ?? ""} {addr?.streetNumber ?? ""} —{" "}
                  {addr?.postalCode ?? ""} {addr?.city ? `, ${addr.city}` : ""}{" "}
                  {addr?.province ? `(${addr.province})` : ""}
                </address>
              </div>
            </li>
          );
        }

        case "openingHours": {
          const oh = item as OpeningHoursCard;
          const ohItems: ReadonlyArray<OpeningHoursEntry> = oh.items ?? [];
          return (
            <li
              key={key}
              role="listitem"
              className="flex items-start justify-start gap-x-2 text-sm sm:text-base"
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-[#EF4440]" aria-hidden="true" />
              ) : null}
              <div className="flex flex-col">
                <span className="font-medium">{oh.text}</span>
                <div className="text-xs text-white/50 flex flex-col mt-1">
                  {ohItems.map((entry, eIdx) => {
                    const eKey = `${entry.days.join("-")}-${
                      entry.open ?? "closed"
                    }-${eIdx}`;
                    if (entry.closed) {
                      return (
                        <div key={eKey}>
                          <strong>{formatOpeningHoursDays(entry.days)}:</strong>{" "}
                          <time>Chiuso</time>
                        </div>
                      );
                    }
                    return (
                      <div key={eKey}>
                        <strong>{formatOpeningHoursDays(entry.days)}:</strong>{" "}
                        {entry.open && entry.close ? (
                          <>
                            <time dateTime={entry.open}>{entry.open}</time> -{" "}
                            <time dateTime={entry.close}>{entry.close}</time>
                          </>
                        ) : (
                          <span>{entry.note ?? "Orario non disponibile"}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        }

        case "simple": {
          const simple = item as SimpleInfo;
          const content = simple.content ?? simple.text ?? "";
          return (
            <li
              key={key}
              role="listitem"
              className="flex items-center justify-start gap-x-2 text-sm sm:text-base"
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-[#EF4440]" aria-hidden="true" />
              ) : null}
              {simple.href ? (
                <a
                  href={simple.href}
                  className="font-medium text-sm sm:text-base"
                  aria-label={content}
                >
                  {content}
                </a>
              ) : (
                <span className="font-medium">{content}</span>
              )}
            </li>
          );
        }

        default: {
          const text = "text" in item ? (item as InfoCardItem).text ?? "" : "";
          return (
            <li
              key={key}
              role="listitem"
              className="flex items-center justify-start gap-x-2 text-sm sm:text-base"
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-[#EF4440]" aria-hidden="true" />
              ) : null}
              <span className="font-medium">{text}</span>
            </li>
          );
        }
      }
    });
  }, [infoItems]);

  return (
    <section
      aria-labelledby="info-card-title"
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
      role="region"
    >
      <div className="flex items-center justify-start gap-x-2">
        <TitleIcon className="w-5 h-5 text-[#EF4440]" aria-hidden="true" />
        <h3 id="info-card-title" className="font-bold text-base sm:text-lg">
          {title.text}
        </h3>
      </div>

      <ul className="flex flex-col gap-2" role="list" aria-label={title.text}>
        {renderedItems}
      </ul>
    </section>
  );
});
