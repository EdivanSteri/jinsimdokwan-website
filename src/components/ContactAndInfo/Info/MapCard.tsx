// MapCard.tsx
import React, { type JSX, useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { mapCard } from "./Data/InfoCardsData";
import type { MapCard } from "./Data/InfoCardsTypes";

// Definisci le librerie come costante fuori dal componente
const LIBRARIES: "places"[] = ["places"];

// Dettagli attesi della palestra per la verifica
const EXPECTED_GYM_DETAILS = {
  name: "Jin Sim Do Kwan Taekwon-Do ITF",
  address: "Via E. Torricelli, 9, 09047 Selargius CA, Italia",
  placeId: "ChIJV-cObN01RhMRCwcz0dcZKko", // Place ID che hai già
};

export default React.memo(function MapCard(): JSX.Element {
  const data: MapCard = mapCard;
  const { title, address } = data;
  const TitleIcon = title.icon as React.ElementType;

  const [coords] = React.useState<google.maps.LatLngLiteral | null>({
    lat: address.lat,
    lng: address.lng,
  });

  const [placeId, setPlaceId] = useState<string | null>(null);
  const [isGettingPlaceId, setIsGettingPlaceId] = useState(false);
  const [placeDetails, setPlaceDetails] =
    useState<google.maps.places.PlaceResult | null>(null);

  const apiKey = "AIzaSyDNxJ1s2DL6pRTX54kxsqEaGoGXVHmaP0o";

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  });

  // Funzione per verificare se i dettagli del luogo corrispondono alla palestra
  const verifyPlaceDetails = (
    place: google.maps.places.PlaceResult
  ): boolean => {
    if (!place.name || !place.formatted_address) return false;

    const nameMatch =
      place.name.includes("Jin Sim Do Kwan") ||
      place.name.includes("Taekwon-Do") ||
      place.name.includes("ITF");

    const addressMatch =
      place.formatted_address.includes("Torricelli") &&
      place.formatted_address.includes("Selargius");

    return nameMatch && addressMatch;
  };

  // Effetto per ottenere e verificare il place ID
  useEffect(() => {
    if (isLoaded && coords && !placeId && !isGettingPlaceId) {
      setIsGettingPlaceId(true);

      const getPlaceId = async () => {
        try {
          // Usa il PlacesService per trovare luoghi vicini alle coordinate
          const mapDiv = document.createElement("div");
          const map = new google.maps.Map(mapDiv);
          const service = new google.maps.places.PlacesService(map);

          const request: google.maps.places.PlaceSearchRequest = {
            location: coords,
            radius: 50, // Piccolo raggio per trovare solo luoghi molto vicini
            keyword: "Jin Sim Do Kwan Taekwon-Do ITF",
          };

          service.nearbySearch(request, (results, status) => {
            if (
              status === google.maps.places.PlacesServiceStatus.OK &&
              results &&
              results.length > 0
            ) {
              // Verifica ogni risultato per trovare la corrispondenza esatta
              for (const place of results) {
                if (verifyPlaceDetails(place)) {
                  setPlaceId(place.place_id || null);
                  setPlaceDetails(place);
                  console.log("Place ID verificato:", place.place_id);
                  break;
                }
              }

              // Se non troviamo corrispondenza, usa il primo risultato
              if (!placeId && results[0].place_id) {
                setPlaceId(results[0].place_id);
                setPlaceDetails(results[0]);
                console.log(
                  "Usato place ID non verificato:",
                  results[0].place_id
                );
              }
            } else {
              // Fallback: usa il geocoder se nearbySearch non funziona
              const geocoder = new google.maps.Geocoder();
              geocoder.geocode({ location: coords }, (results, status) => {
                if (status === "OK" && results && results.length > 0) {
                  setPlaceId(results[0].place_id || null);
                  console.log("Place ID da geocoding:", results[0].place_id);
                } else {
                  console.error("Geocoder failed due to: " + status);
                }
                setIsGettingPlaceId(false);
              });
              return;
            }
            setIsGettingPlaceId(false);
          });
        } catch (error) {
          console.error("Errore nel recupero del place ID:", error);
          setIsGettingPlaceId(false);
        }
      };

      getPlaceId();
    }
  }, [isLoaded, coords, placeId, isGettingPlaceId]);

  // Costruisci l'URL per Google Maps - usa il place ID verificato o quello hardcoded come fallback
  const verifiedPlaceId = placeId || EXPECTED_GYM_DETAILS.placeId;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords?.lat},${coords?.lng}&query_place_id=${verifiedPlaceId}`;

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
        {!apiKey ? (
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

            {/* informazioni di debug (puoi rimuoverle in produzione) */}
            {isGettingPlaceId && (
              <div className="text-sm text-gray-400 mt-1">
                Verifica del luogo in corso...
              </div>
            )}

            {placeDetails && (
              <div className="text-xs text-gray-500 mt-1">
                Luogo verificato: {placeDetails.name}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800/40 animate-pulse rounded-lg" />
        )}
      </div>
    </div>
  );
});
