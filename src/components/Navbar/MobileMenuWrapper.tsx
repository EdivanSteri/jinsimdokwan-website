import CTAButton from "../ui/CTAButton";
import NavLinks from "./NavLinks";

export default function MobileMenuWrapper() {
  return (
    <div className="lg:hidden px-4 py-6 w-full space-y-4 bg-black">
      {/* navbar links */}
      <NavLinks />
      {/* CTA */}
      <CTAButton />
    </div>
  );
}
