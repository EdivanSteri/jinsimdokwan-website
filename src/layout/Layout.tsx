import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import MobileMenuWrapper from "../components/Navbar/MobileMenuWrapper";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Layuot() {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState<boolean>(false);

  const handleOpenMenu = (): void => {
    setMenuMobileIsOpen((prev) => !prev);
    console.log(menuMobileIsOpen);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 z-50">
        <Navbar
          menuMobileIsOpen={menuMobileIsOpen}
          handleOpenMenu={handleOpenMenu}
        />
        {menuMobileIsOpen && <MobileMenuWrapper />}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
