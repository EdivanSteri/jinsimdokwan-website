import NavItem from "./NavItem";

export default function NavLinks() {
  const menuItems = [
    "Chi Siamo",
    "Corsi",
    "Presidente",
    "Le Nostre Storie",
    "Contatti",
  ];

  return (
    <ul className="flex flex-col gap-y-4
                   lg:flex-row lg:justify-between lg:items-center lg:gap-x-6 xl:gap-x-8">
      {menuItems.map((item, index) => (
        <NavItem key={index} textItem={item} />
      ))}
    </ul>
  );
}
