import Overlay from "../ui/Images/Overlay";
import HeaderCTA from "./HeaderCTA";
import HeaderDescription from "./HeaderDescription";
import HeaderGymStats from "./HeaderGymStats";
import HeaderHeading from "./HeaderHeading";
import HeaderTag from "./HeaderTag";

export default function Header() {
  return (
    <header className="relative h-screen bg-[url('/gym-image-header-background.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <Overlay color="bg-black/80" />

      {/* Contenuto */}
      <div
        className="relative z-10 h-full 
                      pt-18 flex flex-col items-center justify-center gap-y-8 text-center lg:items-start lg:text-start lg:px-15 xl:px-40"
      >
        <HeaderTag />
        <HeaderHeading />
        <HeaderDescription />
        <HeaderCTA />
        <HeaderGymStats />
      </div>
    </header>
  );
}
