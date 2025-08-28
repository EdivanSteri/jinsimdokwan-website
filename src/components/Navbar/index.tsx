import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "/logo.png";
import NavLinks from "./NavLinks";
import IconButton from "../ui/Icons/IconButton";
import { HashLink } from "react-router-hash-link";

type NavbarProps = {
  menuMobileIsOpen: boolean;
  handleOpenMenu: () => void;
};

export default function Navbar({
  menuMobileIsOpen,
  handleOpenMenu,
}: NavbarProps) {
  const MenuIcon = menuMobileIsOpen ? XMarkIcon : Bars3Icon;

  return (
    <nav className="relative">
      <div className="px-4 py-2  sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 w-full flex items-center justify-between bg-black border-b-[0.1px]">
        {/* Logo */}
        <HashLink to='/#' smooth className="flex items-center gap-2 cursor-pointer">
          <img src={logo} width={45} height={45} alt="Logo JinSimDoKwan" />
          <div className="flex flex-col-reverse text-white">
            <p className="text-[#D66161] text-sm">A.S.D.</p>
            <p className="font-pacifico text-lg font-extrabold">JinSimDoKwan</p>
          </div>
        </HashLink>

        {/* Menu desktop */}
        <div className="hidden lg:flex justify-center">
          <NavLinks />
        </div>

        {/* Area destra */}
        <div className="flex items-center justify-center">
          {/* Toggle mobile */}
          <div className="lg:hidden">
            <MenuIcon
              onClick={handleOpenMenu}
              className="size-7 text-white cursor-pointer hover:text-[#D66161] transition-colors duration-150"
            />
          </div>

          {/* CTA desktop */}
          <div className="w-full hidden lg:flex lg:items-center lg:justify-center">
            <IconButton
              className={`
                lg:w-60 h-10
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
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#D66161] transform scale-y-45 origin-bottom"></div>
    </nav>
  );
}
