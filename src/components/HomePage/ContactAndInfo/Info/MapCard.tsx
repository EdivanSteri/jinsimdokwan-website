// MapCard.tsx
import React, { useMemo, type JSX } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { mapCard } from "./Data/InfoCardsData";
import type { MapCard } from "./Data/InfoCardsTypes";

const PLACE_ID_FROM_ENV =
  (import.meta.env as ImportMetaEnv).VITE_JSDK_GOOGLE_MAPS_PLACE_ID ?? "";
const G_MAPS_API_KEY = (import.meta.env as ImportMetaEnv).VITE_GOOGLE_MAPS_API_KEY ?? "";

const LIBRARIES = ["places"] as const;

export default React.memo(function MapCard(): JSX.Element {
  const data: MapCard = mapCard;
  const { title, address } = data;
  const TitleIcon = title.icon as React.ElementType;

  // center derivato dai dati: evita useState per valori statici
  const center: google.maps.LatLngLiteral | undefined = useMemo(() => {
    return typeof address?.lat === "number" && typeof address?.lng === "number"
      ? { lat: address.lat, lng: address.lng }
      : undefined;
  }, [address]);

  // API loader
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: G_MAPS_API_KEY,
    libraries: Array.from(LIBRARIES),
  });

  // map options memoized (stabile)
  const mapOptions: google.maps.MapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
    }),
    []
  );

  // google maps url (safe encoding), omette place_id se non presente
  const googleMapsUrl = useMemo(() => {
    if (center) {
      const q = encodeURIComponent(`${center.lat},${center.lng}`);
      const placePart = PLACE_ID_FROM_ENV
        ? `&query_place_id=${encodeURIComponent(PLACE_ID_FROM_ENV)}`
        : "";
      return `https://www.google.com/maps/search/?api=1&query=${q}${placePart}`;
    }

    // fallback: build from textual address if no coords
    const textual = encodeURIComponent(
      [address?.street, address?.streetNumber, address?.city, address?.province]
        .filter(Boolean)
        .join(", ")
    );
    return `https://www.google.com/maps/search/?api=1&query=${textual}`;
  }, [center, address]);

  return (
    <section
      aria-labelledby="info-card-title"
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
      role="region"
    >
      <div className="flex items-center justify-start gap-x-2">
        <TitleIcon className="w-5 h-5 text-[#EF4440]" aria-hidden="true" />
        <span id="info-card-title" className="font-bold text-sm sm:text-base">
          {title.text}
        </span>
      </div>

      <div className="flex flex-col gap-2" aria-label={title.text}>
        {!G_MAPS_API_KEY ? (
          <div className="text-sm text-yellow-300">
            Chiave Google Maps non impostata — aggiungi{" "}
            <code>VITE_GOOGLE_MAPS_API_KEY</code> nel file <code>.env</code>
          </div>
        ) : loadError ? (
          <div className="text-sm text-red-400">
            Errore nel caricamento della mappa.
          </div>
        ) : isLoaded && center ? (
          <figure>
            {/* screen-reader description */}
            <span className="sr-only">
              Mappa della sede: {address?.street} {address?.streetNumber},{" "}
              {address?.city} ({address?.province})
            </span>

            <GoogleMap
              mapContainerClassName="w-full h-40 md:h-48 rounded-lg overflow-hidden"
              center={center}
              zoom={15}
              options={mapOptions}
              // onLoad/onUnmount gestiti internamente se serve in futuro
            >
              <Marker
                position={center}
                onClick={() => {
                  // apri Google Maps in nuova finestra
                  window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
                }}
                // title aiuta l'accessibilità quando il marker è focalizzato dai tools
                title={address?.placeName ?? title.text}
              />
            </GoogleMap>

            <figcaption className="mt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
                aria-label="Apri la posizione su Google Maps in una nuova finestra"
              >
                Visualizza mappa più grande
              </a>

              <div className="text-xs text-gray-500 mt-1">
                Luogo verificato: {address.placeName ?? title.text}
              </div>
            </figcaption>

            {/* noscript fallback utile per SEO / utenti con JS disabilitato */}
            <noscript>
              <div className="mt-2 text-sm">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Apri la posizione su Google Maps
                </a>
              </div>
            </noscript>
          </figure>
        ) : (
          // skeleton while loading or if coords missing
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800/40 animate-pulse rounded-lg" />
        )}
      </div>
    </section>
  );
});
