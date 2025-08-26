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
    // sposto l'inizializzazione di `items` dentro il callback per evitare dipendenze instabili
    const items: ReadonlyArray<InfoCardItem> = infoItems ?? [];

    return items.map((item, idx) => {
      // chiave stabile: testo/indirizzo/orario o fallback su idx
      const baseKey =
        (item.type === "simple" && item.text) ||
        (item.type === "address" && item.address?.street) ||
        (item.type === "openingHours" && item.text) ||
        idx;
      const key = `${String(baseKey)}-${item.type}-${idx}`;

      // tutte le variant estendono IconTitle => hanno `icon`
      const Icon = item.icon as React.ElementType | undefined;

      switch (item.type) {
        case "address": {
          const addressItem = item as AddressCard;
          const addr = addressItem.address;
          return (
            <div
              key={key}
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
            </div>
          );
        }

        case "openingHours": {
          const oh = item as OpeningHoursCard;
          const ohItems: ReadonlyArray<OpeningHoursEntry> = oh.items ?? [];
          return (
            <div
              key={key}
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
            </div>
          );
        }

        case "simple": {
          const simple = item as SimpleInfo;
          const content = simple.content ?? simple.text ?? "";
          return (
            <div
              key={key}
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
            </div>
          );
        }

        default: {
          // fallback sicuro: se arriva un tipo non gestito, prova a leggere "text" in modo sicuro
          const text = "text" in item ? (item as InfoCardItem).text ?? "" : "";
          return (
            <div
              key={key}
              className="flex items-center justify-start gap-x-2 text-sm sm:text-base"
            >
              {Icon ? (
                <Icon className="w-4 h-4 text-[#EF4440]" aria-hidden="true" />
              ) : null}
              <span className="font-medium">{text}</span>
            </div>
          );
        }
      }
    });
    // dipendenza: infoItems (se infoItems è una costante importata, è stabile)
  }, [infoItems]);

  return (
    <div
      aria-labelledby="info-card-title"
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
      role="region"
    >
      <div className="flex items-center justify-start gap-x-2">
        <TitleIcon className="w-5 h-5 text-[#EF4440]" aria-hidden="true" />
        <span id="info-card-title" className="font-bold text-md sm:text-base">
          {title.text}
        </span>
      </div>

      <div className="flex flex-col gap-2" role="list" aria-label={title.text}>
        {renderedItems}
      </div>
    </div>
  );
});
