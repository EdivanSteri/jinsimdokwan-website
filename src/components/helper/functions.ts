import type { OpeningHoursDay } from "../ContactAndInfo/Info/Data/InfoCardsTypes";

/** formato prezzo in euro (es. 4000 -> "40,00 €") */
export function formatPriceEUR(priceCents: number): string {
  return (priceCents / 100).toLocaleString("it-IT");
}

/** tronco giorni della settimana (es. Luned' -> "Lun") */
export function formatDaysOfWeek(day: string): string {
  return day.slice(0, 3);
}

export const DAYS_MAP: Record<string, string> = {
  Mon: "Lun",
  Tue: "Mar",
  Wed: "Mer",
  Thu: "Gio",
  Fri: "Ven",
  Sat: "Sab",
  Sun: "Dom",
};

export function formatOpeningHoursDays(
  days: readonly OpeningHoursDay[]
): string {
  if (days.length === 0) return "";

  // Caso 1: un solo giorno
  if (days.length === 1) {
    return DAYS_MAP[days[0]] ?? days[0];
  }

  // Ordine ufficiale della settimana
  const orderedKeys = Object.keys(DAYS_MAP);

  // Trova gli indici dei giorni nell'ordine della settimana
  const indices = days.map((d) => orderedKeys.indexOf(d)).sort((a, b) => a - b);

  // Controlla se sono consecutivi
  let consecutivi = true;
  for (let i = 1; i < indices.length; i++) {
    if (indices[i] !== indices[i - 1] + 1) {
      consecutivi = false;
      break;
    }
  }

  // Caso 2: giorni consecutivi → "Lun-Ven"
  if (consecutivi) {
    const firstDay = DAYS_MAP[orderedKeys[indices[0]]];
    const lastDay = DAYS_MAP[orderedKeys[indices[indices.length - 1]]];
    return `${firstDay}-${lastDay}`;
  }

  // Caso 3: non consecutivi → "Lun, Gio, Dom"
  return indices.map((i) => DAYS_MAP[orderedKeys[i]]).join(", ");
}
