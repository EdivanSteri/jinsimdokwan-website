import { PhoneIcon } from "@heroicons/react/24/outline";
import AboutBenefitsWrapper from "./AboutBenefitsWrapper";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";
import AboutPartnersWrapper from "./AboutPartnersWrapper";
import AboutSubHeading from "./AboutSubHeading";
import IconButton from "../../ui/Icons/IconButton";

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-10  h-full  flex flex-col items-start justify-start gap-y-6 "
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
      <IconButton
        className={`
                w-/2
                px-6 py-3
                bg-black hover:bg-[#E63636] 
                text-sm
                transition duration-300 ease-in-out hover:-translate-y-[2px]
              `}
        icon={PhoneIcon}
        href="/#contact-info"
      >
        Contattaci Ora
      </IconButton>
    </section>
  );
}
