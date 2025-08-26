import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import type { InfoCard, GymImagesCard, MapCard } from "./InfoCardsTypes";

/** indirizzo strutturato (senza getter) */
const address = {
  street: "Via E. Torricelli",
  streetNumber: 9,
  postalCode: "09047",
  city: "Selargius",
  province: "CA",
  country: "Italia",
  lat: 39.2661967,
  lng: 9.1695305,
  placeId: "ChIJV-cObN01RhMRCwcz0dcZKko",
} as const;

/** card principale con indirizzo, telefono, email e orari */
export const dojoInfoCard: InfoCard = {
  title: {
    icon: MapPin,
    text: "La Nostra Sede",
  },
  infoItems: [
    // AddressCard
    {
      type: "address",
      icon: MapPin,
      text: "Indirizzo",
      address: address,
    },
    // Phone
    {
      type: "simple",
      icon: Phone,
      text: "Telefono",
      content: "+39 06 1234567",
      href: "tel:+39061234567",
    },
    // Email
    {
      type: "simple",
      icon: Mail,
      text: "Email",
      content: "info@jinsimdokwan.it",
      href: "mailto:info@jinsimdokwan.it",
    },
    // Opening hours
    {
      type: "openingHours",
      icon: Clock,
      text: "Orari di Apertura",
      items: [
        {
          days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          open: "17:00",
          close: "22:00",
        },
        {
          days: ["Sat"],
          open: "09:00",
          close: "13:00",
        },
        {
          days: ["Sun"],
          closed: true,
          note: "Chiuso",
        },
      ],
    },
  ],
} as const;

/** card immagini palestra (ids + src vuoti da riempire) */
export const gymImagesCard: GymImagesCard = {
  title: {
    icon: MapPin,
    text: "La Nostra Palestra",
  },
  images: [
    {
      id: "background-01",
      src: "/dojo1.webp",
      alt: "image of dojo 1",
    },
    {
      id: "inside-01",
      src: "/dojo2.webp",
      alt: "Simage of dojo 2",
    },
    {
      id: "inside-02",
      src: "/dojo3.jpeg",
      alt: "image of dojo 3",
    },
  ],
} as const;

/** card mappa (usa la stessa address) */
export const mapCard: MapCard = {
  title: {
    icon: Map,
    text: "Come Raggiungerci",
  },
  address: address,
} as const;
