// getPlaceIdFromCoordinates.ts
/**
 * Script per ottenere il Place ID dalle coordinate utilizzando l'API di Google Maps
 * 
 * Questo script utilizza le Google Maps APIs per convertire le coordinate latitudine/longitudine
 * in un Place ID ufficiale di Google.
 */

// La tua chiave API di Google Maps
const API_KEY = "AIzaSyDNxJ1s2DL6pRTX54kxsqEaGoGXVHmaP0o";

// Coordinate della palestra
const GYM_COORDINATES = {
  lat: 39.2661967,
  lng: 9.1695305
};

// Nome della palestra (per verificare la corrispondenza)
// const GYM_NAME = "Jin Sim Do Kwan Taekwon-Do ITF";

/**
 * Funzione per ottenere il place ID dalle coordinate
 */
async function getPlaceIdFromCoordinates(
  lat: number, 
  lng: number, 
  apiKey: string
): Promise<string | null> {
  try {
    console.log("Ricerca del place ID per le coordinate:", lat, lng);
    
    // Effettua una richiesta all'API Geocoding di Google Maps
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== "OK") {
      console.error("Stato della risposta non OK:", data.status);
      return null;
    }
    
    // Definisci il tipo per il risultato della geocodifica
    type GeocodeResult = {
      types: string[];
      place_id: string;
      formatted_address: string;
      [key: string]: unknown;
    };

    // Cerca il risultato che corrisponde a un luogo (place)
    const placeResult = (data.results as GeocodeResult[]).find((result) => 
      result.types.includes("premise") || 
      result.types.includes("establishment") ||
      result.types.includes("point_of_interest")
    );
    
    if (placeResult) {
      console.log("Place ID trovato:", placeResult.place_id);
      console.log("Indirizzo:", placeResult.formatted_address);
      return placeResult.place_id;
    } else {
      console.warn("Nessun place ID trovato nei risultati. Mostro tutti i risultati:");
      console.log(JSON.stringify(data.results, null, 2));
      return null;
    }
  } catch (error) {
    console.error("Errore durante il recupero del place ID:", error);
    return null;
  }
}

/**
 * Funzione principale per eseguire lo script
 */
async function main() {
  console.log("🔄 Avvio ricerca Place ID per la palestra...");
  
  const placeId = await getPlaceIdFromCoordinates(
    GYM_COORDINATES.lat, 
    GYM_COORDINATES.lng, 
    API_KEY
  );
  
  if (placeId) {
    console.log("✅ Place ID ottenuto con successo!");
    console.log("Place ID:", placeId);
    
    // Mostra come utilizzare il place ID nel componente React
    console.log("\n💡 Come utilizzarlo nel tuo componente MapCard:");
    console.log(`1. Aggiorna il tuo oggetto address con: placeId: "${placeId}"`);
    console.log(`2. URL per Google Maps: https://www.google.com/maps/place/?q=place_id:${placeId}`);
  } else {
    console.log("❌ Impossibile ottenere il place ID dalle coordinate.");
    console.log("Verifica la tua API key e le coordinate.");
  }
}

// Esegui lo script
main().catch(console.error);

// Esporta le funzioni per utilizzi futuri
export { getPlaceIdFromCoordinates };