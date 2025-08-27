import React, { type JSX } from "react";
import ContactAndInfoHeader from "./ContactAndInfoHeader";
import ContactForm from "./Form/ContactForm";
import GymImagesCard from "./Info/GymImagesCard";
import InfoCard from "./Info/InfoCard";
import MapCard from "./Info/MapCard";

export default React.memo(function ContactAndInfo(): JSX.Element {
  return (
    <section
      id="contact-and-info"
      aria-labelledby="contact-info-heading"
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-10 bg-black text-white"
      role="region"
    >
      <ContactAndInfoHeader />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* left column: form */}
          <article aria-label="Modulo di contatto" className="w-full">
            <ContactForm />
          </article>

          {/* right column: info cards */}
          <aside
            aria-label="Informazioni palestra e mappa"
            className="flex flex-col gap-6"
          >
            <InfoCard />
            <GymImagesCard />
            <MapCard />
          </aside>
        </div>
      </div>
    </section>
  );
});
