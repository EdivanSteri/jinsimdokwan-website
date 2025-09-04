import Overlay from "../../ui/Images/Overlay";
import HeaderCTA from "./HeaderCTA";
import HeaderDescription from "./HeaderDescription";
import HeaderGymStats from "./HeaderGymStats";
import HeaderHeading from "./HeaderHeading";
import HeaderTag from "./HeaderTag";

export default function Header() {
  return (
    <header
      role="banner"
      aria-label="Hero della palestra"
      className="relative min-h-[100dvh] bg-[url('/gym-image-header-background.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay semantico (visivo) */}
      <Overlay color="bg-black/80" aria-hidden="true" />

      {/* Contenuto (z-index sopra l'overlay) */}
      <div
        className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center gap-y-8 px-4 sm:px-15 md:px-30 lg:px-4 xl:px-16 2xl:px-30 pt-16 text-center
                   lg:items-start lg:text-left"
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
