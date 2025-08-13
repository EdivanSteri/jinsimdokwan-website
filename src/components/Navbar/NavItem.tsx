type NavItemProps = {
  label: string;
  to?: string;
};

export default function NavItem({ label, to = "#" }: NavItemProps) {
  return (
    <li role="none">
      <a
        href={to}
        role="menuitem"
        className="text-white font-bold hover:text-[#D66161] transition-colors duration-150 ease-in cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D66161] rounded"
      >
        {label}
      </a>
    </li>
  );
}
