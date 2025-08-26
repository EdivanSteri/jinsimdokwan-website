import ContactAndInfoHeader from "./ContactAndInfoHeader";
import ContactForm from "./Form/ContactForm";
import GymImagesCard from "./Info/GymImagesCard";
import InfoCard from "./Info/InfoCard";
import MapCard from "./Info/MapCard";

export default function ContactAndInfo() {
  return (
    <section className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-10 bg-black text-white ">
      <ContactAndInfoHeader />
      <div className="grid grid-cols-1 gap-6">
        <ContactForm />
        <div className="flex flex-col gap-6">
          <InfoCard />
          <GymImagesCard />
          <MapCard />
        </div>
      </div>
    </section>
  );
}
