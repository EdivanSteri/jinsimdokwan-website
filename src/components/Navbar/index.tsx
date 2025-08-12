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
  return (
    <nav className="relative">
      <div className="p-4 w-full h-22 flex items-center justify-between bg-black border-b-[0.1px]
                      md:px-10 lg:px-15 xl:px-40">
        {/* Logo - sinistra */}
        <div className="flex items-center gap-x-2 cursor-pointer">
          <img src={logo} width="70" height="70" alt="" />
          <div className="flex flex-col-reverse text-white">
            <p className="text-[#D66161] text-sm">A.S.D.</p>
            <p className="font-pacifico text-lg font-extrabold">JinSimDoKwan</p>
          </div>
        </div>

        {/* Menu desktop - centro */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <NavLinks />
        </div>

        {/* Pulsanti - destra */}
        <div className="flex items-center">
          <div className="lg:hidden">
            {menuMobileIsOpen ? (
              <XMarkIcon
                onClick={handleOpenMenu}
                className="size-7 text-white cursor-pointer hover:text-[#D66161] transition delay-150 duration-100 ease-in"
              />
            ) : (
              <Bars3Icon
                onClick={handleOpenMenu}
                className="size-7 text-white cursor-pointer hover:text-[#D66161] transition delay-150 duration-100 ease-in"
              />
            )}
          </div>
          <div className="hidden w-full lg:block ml-4">
            <CTAButton />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#D66161] transform scale-y-35 origin-bottom"></div>
    </nav>
  );
}
