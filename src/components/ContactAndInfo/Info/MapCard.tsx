// MapCard.tsx
import React, { type JSX } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { mapCard } from "./Data/InfoCardsData";
import type { MapCard } from "./Data/InfoCardsTypes";

// If you need the env variable, assign it to a constant:
const PLACE_ID_FROM_ENV = import.meta.env.VITE_JSDK_GOOGLE_MAPS_PLACE_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Definisci le librerie come costante fuori dal componente
const LIBRARIES: "places"[] = ["places"];

export default React.memo(function MapCard(): JSX.Element {
  const data: MapCard = mapCard;
  const { title, address } = data;
  const TitleIcon = title.icon as React.ElementType;

  const [coords] = React.useState<google.maps.LatLngLiteral | null>({
    lat: address.lat,
    lng: address.lng,
  });

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: LIBRARIES,
  });

  // Costruisci l'URL per Google Maps - usa il place ID verificato
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords?.lat},${coords?.lng}&query_place_id=${PLACE_ID_FROM_ENV}`;

  // opzioni mappa
  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    clickableIcons: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  return (
    <div
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

      <div className="flex flex-col gap-2" role="list" aria-label={title.text}>
        {!API_KEY ? (
          <div className="text-sm text-yellow-300">
            Chiave Google Maps non impostata — aggiungi
            <code> VITE_GOOGLE_MAPS_API_KEY </code> nel file .env
          </div>
        ) : loadError ? (
          <div className="text-sm text-red-400">
            Errore nel caricamento della mappa.
          </div>
        ) : isLoaded && coords ? (
          <>
            <GoogleMap
              mapContainerClassName="w-full h-40 sm:h-80 md:h-96 rounded-lg overflow-hidden"
              center={coords}
              zoom={15}
              options={mapOptions}
            >
              <Marker
                position={coords}
                onClick={() => {
                  window.open(googleMapsUrl, "_blank");
                }}
              />
            </GoogleMap>

            {/* link sotto la mappa */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-400 hover:underline text-sm"
            >
              Visualizza mappa più grande
            </a>

            <div className="text-xs text-gray-500 mt-1">
              Luogo verificato: {address.placeName}
            </div>
          </>
        ) : (
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800/40 animate-pulse rounded-lg" />
        )}
      </div>
    </div>
  );
});
