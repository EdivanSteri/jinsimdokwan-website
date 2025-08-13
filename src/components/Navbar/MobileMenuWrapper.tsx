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
        <CTAButton />
      </div>
    </nav>
  );
}
