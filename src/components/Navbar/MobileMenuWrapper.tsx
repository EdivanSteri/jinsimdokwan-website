import { PhoneIcon } from "@heroicons/react/16/solid";
import CTAButton from "../ui/CTAButton";
import NavLinks from "./NavLinks";

export default function MobileMenuWrapper() {
  return (
    <nav
      className="lg:hidden px-4 py-6 w-full space-y-4 bg-black"
      aria-label="Main mobile menu"
    >
      {/* Lista di navigazione */}
      <NavLinks />
      {/* CTA */}
      <div>
        <CTAButton
          text="Prenota Lezione Gratuita"
          height="h-12"
          bgColor="bg-gradient-to-r from-[#D92525] to-[#B91C1C] lg:hover:from-[#c32121] lg:hover:to-[#a71919]"
          animation="lg:transition lg:delay-200 lg:ease-in-out lg:hover:-translate-y-[2px]"
          icon={<PhoneIcon className="size-6 font-bold" />}
        />
      </div>
    </nav>
  );
}
