import { PhoneIcon } from "@heroicons/react/24/outline";
import CTAButton from "../ui/CTAButton";
import AboutBenefitsWrapper from "./AboutBenefitsWrapper";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";
import AboutPartnersWrapper from "./AboutPartnersWrapper";
import AboutSubHeading from "./AboutSubHeading";

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="px-4 sm:px-15 md:px-30 py-10  h-full  flex flex-col items-start justify-start gap-y-6 "
    >
      <AboutHeading />
      <AboutSubHeading />
      <AboutDescription />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6">
        <div className="lg:col-start-2 lg:justify-self-center lg:self-center h-48 lg:h-96 w-full rounded-2xl lg:shadow-[#E63636] lg:shadow-xl overflow-hidden relative group">
          <img
            src="/team.jpg"
            alt="team"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-[1.05] will-change-transform"
          />
        </div>
        <div className="lg:row-end-2 w-full flex flex-col items-start justify-start gap-y-6">
          <AboutPartnersWrapper />
          <AboutBenefitsWrapper />
        </div>
      </div>
      <CTAButton
        text="Contattaci Ora"
        bgColor="bg-black hover:bg-[#E63636]"
        textSize="text-sm"
        width="w-/2"
        padding="px-6 py-3"
        animation="transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-[2px]"
        icon={<PhoneIcon className="size-5" />}
      />
    </section>
  );
}
