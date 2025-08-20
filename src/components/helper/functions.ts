/** formato prezzo in euro (es. 4000 -> "40,00 €") */
export function formatPriceEUR(priceCents: number): string {
  return (priceCents / 100).toLocaleString("it-IT");
}

/** tronco giorni della settimana (es. Luned' -> "Lun") */
export function formatDaysOfWeek(day: string): string {
  return day.slice(0, 3);
}
