import type React from "react";

/* Elementi che possono stare in una colonna/footer item */
export type FooterTextItem = {
  kind: "text";
  id: string;
  text: string;
  ariaLabel?: string;
};

export type FooterLinkItem = {
  kind: "link";
  id: string;
  text: string;
  href: string;
  target?: "_self" | "_blank";
  rel?: string;
  ariaLabel?: string;
};

export type FooterIconItem = {
  kind: "icon";
  id: string;
  icon: React.ElementType;
  text?: string;
  href?: string;
  ariaLabel?: string;
};

/* singolo elemento nella lista (union discriminata) */
export type FooterElement = FooterTextItem | FooterLinkItem | FooterIconItem;

/* colonna del footer (titolo opzionale) */
export type FooterColumn = {
  id: string;
  title?: string;
  items: ReadonlyArray<FooterElement>;
  ariaLabel?: string;
};

