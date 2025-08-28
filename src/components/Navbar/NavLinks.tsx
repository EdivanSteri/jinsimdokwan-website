import NavItem from "./NavItem";

type MenuItem = {
  label: string;
  to: string;
};

const menuItems: MenuItem[] = [
  { label: "Chi Siamo", to: "/#chi-siamo" },
  { label: "Corsi", to: "/#corsi" },
  { label: "Presidente", to: "/#presidente" },
  { label: "Le Nostre Storie", to: "/#storie" },
  { label: "Contatti", to: "/#contact-info" },
];

export default function NavLinks() {
  return (
    <ul
      className="flex flex-col gap-y-4
                 lg:flex-row lg:justify-between lg:items-center lg:gap-x-6 xl:gap-x-8"
      role="menubar"
      aria-label="Voci di navigazione"
    >
      {menuItems.map(({ label, to }) => (
        <NavItem key={to} label={label} to={to} />
      ))}
    </ul>
  );
}
