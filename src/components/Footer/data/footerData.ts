import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import type { FooterColumn } from "./footerTypes";

export const footerData: ReadonlyArray<FooterColumn> = [
  {
    id: "link-rapidi",
    title: "Link Rapidi",
    ariaLabel: "Link rapidi del sito",
    items: [
      {
        kind: "link",
        id: "home",
        text: "Home",
        href: "/#",
        ariaLabel: "Vai alla home",
      },
      {
        kind: "link",
        id: "corsi",
        text: "Corsi",
        href: "/#corsi",
        ariaLabel: "Vai alla sezione corsi",
      },
      {
        kind: "link",
        id: "chi-siamo",
        text: "Chi Siamo",
        href: "/#chi-siamo",
        ariaLabel: "Scopri chi siamo",
      },
      {
        kind: "link",
        id: "contatti",
        text: "Contatti",
        href: "/#contact-info",
        ariaLabel: "Contattaci",
      },
    ],
  },
  {
    id: "i-nostri-corsi",
    title: "I Nostri Corsi",
    ariaLabel: "Elenco dei corsi",
    items: [
      {
        kind: "text",
        id: "tkd",
        text: "Taekwondo",
        ariaLabel: "Corso Taekwondo",
      },
      {
        kind: "text",
        id: "difesa-personale",
        text: "Difesa Personale",
        ariaLabel: "Corso Difesa Personale",
      },
      {
        kind: "text",
        id: "pilates",
        text: "Pilates",
        ariaLabel: "Corso Pilates",
      },
    ],
  },
  {
    id: "contatti",
    title: "Contatti",
    ariaLabel: "Informazioni di contatto",
    items: [
      {
        kind: "icon",
        id: "address",
        icon: MapPinIcon,
        text: "Via Evangelista Torricelli n. 9 – Selargius (CA)",
        ariaLabel: "Indirizzo: Via Evangelista Torricelli 9, Selargius",
        href: "https://maps.google.com/?q=Via+Evangelista+Torricelli+9+Selargius",
      },
      {
        kind: "icon",
        id: "phone",
        icon: PhoneIcon,
        text: "+39 3333333333",
        href: "tel:+393333333333",
        ariaLabel: "Chiama +39 333 333 3333",
      },
      {
        kind: "icon",
        id: "email",
        icon: EnvelopeIcon,
        text: "jinsimdowan@gmail.com",
        href: "mailto:jinsimdowan@gmail.com",
        ariaLabel: "Invia email a jinsimdowan@gmail.com",
      },
    ],
  },
] as const;
