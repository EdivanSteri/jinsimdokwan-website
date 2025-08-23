import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { footerData } from "./data/footerData";

export default function Footer() {
  const [linkRapidi, corsi, contatti] = footerData;

  return (
    <footer
      id="corsi"
      className="w-full bg-[#111827] text-white py-16 px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 flex flex-col gap-y-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:items-start justify-center gap-4 md:gap-16 text-center md:text-left">
        <div className="flex flex-col gap-4 items-center justify-center md:items-start md:text-left">
          <h2 className="text-xl font-bold">A.S.D. JinSimDoKwan</h2>
          <p className="text-sm leading-relaxed">
            La tua palestra di fiducia per Taekwondo, difesa personale e
            Pilates. Cresci con noi in un ambiente professionale e accogliente.
          </p>
          <div className="flex items-center justify-center gap-4 md:items-start md:text-left">
            <span className="w-10 h-10 bg-[#1F2937] rounded-full flex items-center justify-center">
              <FaFacebookF size={18} />
            </span>
            <span className="w-10 h-10 bg-[#1F2937] rounded-full flex items-center justify-center">
              <FaInstagram size={18} />
            </span>
          </div>
        </div>

        {/* Link Rapidi */}
        <div>
          <h3 className="text-md font-medium mb-4">{linkRapidi.title}</h3>
          <ul
            className="flex flex-col gap-y-1 items-center md:items-start justify-center"
            role="list"
            aria-label={linkRapidi.ariaLabel}
          >
            {linkRapidi.items.map((item) => {
              if (item.kind === "link") {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-300"
                      aria-label={item.ariaLabel}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              }
              // fallback: text
              if (item.kind === "text") {
                return (
                  <li key={item.id}>
                    <span
                      className="text-sm text-gray-300"
                      aria-label={item.ariaLabel}
                    >
                      {item.text}
                    </span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        {/* I Nostri Corsi */}
        <div>
          <h3 className="text-md font-medium mb-4">{corsi.title}</h3>
          <ul
            className="flex flex-col gap-y-1 items-center md:items-start justify-center"
            role="list"
            aria-label={corsi.ariaLabel}
          >
            {corsi.items.map((item) => {
              if (item.kind === "link") {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-300"
                      aria-label={item.ariaLabel}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              }
              // eventuale text/icon fallback
              if (item.kind === "text") {
                return (
                  <li key={item.id}>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-md font-medium mb-4">{contatti.title}</h3>
          <ul
            className="flex flex-col gap-y-1 items-center md:items-start justify-center"
            role="list"
            aria-label={contatti.ariaLabel}
          >
            {contatti.items.map((item) => {
              if (item.kind === "icon") {
                const Icon = item.icon as React.ElementType;
                return (
                  <li
                    key={item.id}
                    className="text-sm text-gray-300 flex items-center justify-center gap-x-2"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-x-2"
                        aria-label={item.ariaLabel}
                      >
                        <Icon
                          className="w-4 h-4 text-[#E84042]"
                          aria-hidden="true"
                        />
                        <span>{item.text}</span>
                      </a>
                    ) : (
                      <div
                        className="flex items-center gap-x-2"
                        aria-label={item.ariaLabel}
                      >
                        <Icon
                          className="w-4 h-4 text-[#E84042]"
                          aria-hidden="true"
                        />
                        <span>{item.text}</span>
                      </div>
                    )}
                  </li>
                );
              }

              // handle other kinds as fallback
              if (item.kind === "link") {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-300"
                      aria-label={item.ariaLabel}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              }

              if (item.kind === "text") {
                return (
                  <li key={item.id}>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-2 text-xs">
        <p>2025 A.S.D. JinSimDoKwan. Tutti i diritti riservati.</p>
        <p className="flex items-center justify-between gap-x-4">
          <a href="">Privacy Policy</a> <a href="">Termini di Servizio</a>
        </p>
      </div>
    </footer>
  );
}
