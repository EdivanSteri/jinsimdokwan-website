import { PhoneIcon } from "@heroicons/react/16/solid";
import NavLinks from "./NavLinks";
import IconButton from "../ui/Icons/IconButton";

export default function MobileMenuWrapper({ menuMobileIsOpen, setMenuMobileIsOpen }: {menuMobileIsOpen: boolean, setMenuMobileIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  if (!menuMobileIsOpen) return;



  return (
    <nav
      className="lg:hidden px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 py-6 w-full space-y-4 bg-black"
      aria-label="Main mobile menu"
    >
      {/* Lista di navigazione */}
      <NavLinks setHideMenu={setMenuMobileIsOpen}/>
      {/* CTA */}
      <div>
        <IconButton
          className={`
            w-full h-12
            bg-gradient-to-r from-[#D92525] to-[#B91C1C] lg:hover:from-[#c32121] lg:hover:to-[#a71919]
            sm:text-base
            lg:transition lg:duration-300 lg:ease-in-out lg:hover:-translate-y-[2px]
          `}
          icon={PhoneIcon}
          href="/#contact-info"
        >
          Prenota Lezione Gratuita
        </IconButton>
      </div>
    </nav>
  );
}
