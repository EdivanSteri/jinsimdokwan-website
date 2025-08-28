import React from "react";
import type { JSX } from "react";
import type { FooterElement } from "./data/footerTypes";
import { HashLink } from "react-router-hash-link";

type FooterColumnItemsProps = {
  item: FooterElement;
};

const TEXT_CLASSES = "text-sm text-gray-300";
const ICON_CLASSES = "w-4 h-4 text-[#E84042]";

/** semplice helper per determinare link esterno */
const isExternal = (href?: string) => !!href && /^https?:\/\//.test(href);

/** Wrapper che rende il contenuto cliccabile o statico */
function Clickable({
  href,
  ariaLabel,
  children,
}: {
  href?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  if (href) {
    const external = isExternal(href);
    return (
      <a
        href={href}
        className="flex items-center gap-x-2"
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-x-2" aria-label={ariaLabel}>
      {children}
    </div>
  );
}

/** Render dell'elemento icona + testo */
function IconContent({
  icon: Icon,
  text,
}: {
  icon?: React.ElementType;
  text: string;
}) {
  return (
    <>
      {Icon && <Icon className={ICON_CLASSES} aria-hidden="true" />}
      <span>{text}</span>
    </>
  );
}

/** Rende singolo item secondo il kind discriminatore */
export default React.memo(function FooterColumnItems({
  item,
}: FooterColumnItemsProps): JSX.Element | null {
  switch (item.kind) {
    case "icon":
      return (
        <li
          className={`${TEXT_CLASSES} flex items-center justify-center gap-x-2`}
        >
          <Clickable href={item.href} ariaLabel={item.ariaLabel ?? item.text}>
            <IconContent icon={item.icon} text={item.text ?? ""} />
          </Clickable>
        </li>
      );

    case "link":
      return (
        <li>
          <HashLink
            to={item.href}
            smooth
            className={`${TEXT_CLASSES} transition duration-300 ease-in-out hover:underline hover:text-red-700`}
            aria-label={item.ariaLabel ?? item.text}
            {...(isExternal(item.href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.text}
          </HashLink>
        </li>
      );

    case "text":
      return (
        <li>
          <span className={`${TEXT_CLASSES} transition duration-300 ease-in-out hover:text-red-700`}>{item.text}</span>
        </li>
      );

    default:
      return null;
  }
});
