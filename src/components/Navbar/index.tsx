import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "/logo.png";
import NavLinks from "./NavLinks";
import CTAButton from "../ui/CTAButton";

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
      <div className="p-4 md:px-10 lg:px-15 xl:px-40 w-full flex items-center justify-between bg-black border-b-[0.1px]">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} width={70} height={70} alt="Logo JinSimDoKwan" />
          <div className="flex flex-col-reverse text-white">
            <p className="text-[#D66161] text-sm">A.S.D.</p>
            <p className="font-pacifico text-lg font-extrabold">JinSimDoKwan</p>
          </div>
        </div>

        {/* Menu desktop */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Area destra */}
        <div className="flex items-center">
          {/* Toggle mobile */}
          <div className="lg:hidden">
            <MenuIcon
              onClick={handleOpenMenu}
              className="size-7 text-white cursor-pointer hover:text-[#D66161] transition-colors duration-150"
            />
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block ml-4">
            <CTAButton />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#D66161] transform scale-y-50 origin-bottom"></div>
    </nav>
  );
}
