import type React from "react";

/** icona + testo breve (label) */
export type IconTitle = {
  readonly icon: React.ElementType;
  readonly text?: string; // etichetta/titolo breve (opzionale)
};

/** indirizzo strutturato */
export type Address = {
  readonly street: string;
  readonly streetNumber?: number | string;
  readonly postalCode?: string; // CAP
  readonly city?: string;
  readonly province?: string; // es. "CA"
  readonly country?: string;
  readonly lat: number;
  readonly lng: number;
  readonly placeId?: string;
  readonly placeName?: string;
};

/** item che rappresenta un indirizzo */
export type AddressCard = IconTitle & {
  readonly type: "address";
  readonly address: Address;
};

/** giorni della settimana (letterali) */
export type OpeningHoursDay =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

/** singola riga di orario: se closed=true => giorno chiuso */
export type OpeningHoursEntry = {
  readonly days: ReadonlyArray<OpeningHoursDay>;
  readonly open?: string; // "09:00"
  readonly close?: string; // "18:00"
  readonly closed?: boolean; // true se chiuso (alta qualità semantica)
  readonly note?: string; // es: "Solo su prenotazione"
};

/** card orari */
export type OpeningHoursCard = IconTitle & {
  readonly type: "openingHours";
  readonly items: ReadonlyArray<OpeningHoursEntry>;
};

/** semplice informazione (telefono, email, ecc.) */
export type SimpleInfo = IconTitle & {
  readonly type: "simple";
  readonly content?: string;
  readonly href?: string; // opzionale (tel:, mailto:, url)
};

/** union per i possibili item contenuti in una InfoCard */
export type InfoCardItem = AddressCard | OpeningHoursCard | SimpleInfo;

/** InfoCard: titolo + lista di item (es. indirizzo + telefono + orari) */
export type InfoCard = {
  readonly title: IconTitle;
  readonly infoItems: ReadonlyArray<InfoCardItem>;
};

/** immagini della palestra */
export type GymImage = {
  readonly id: string;
  readonly src: string;
  readonly alt?: string;
};

/** card immagini */
export type GymImagesCard = {
  readonly title: IconTitle;
  readonly images: ReadonlyArray<GymImage>;
};

/** card mappa (usa Address) */
export type MapCard = {
  readonly title: IconTitle;
  readonly address: Address;
};
