import { HashLink } from "react-router-hash-link";

type NavItemProps = {
  label: string;
  to?: string;
  setHideMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavItem({
  label,
  to = "#",
  setHideMenu,
}: NavItemProps) {
  return (
    <li role="none">
      <HashLink
        onClick={() => setHideMenu?.(false)}
        to={to}
        smooth
        role="menuitem"
        className="text-white font-bold hover:text-[#D66161] transition-colors duration-150 ease-in cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D66161] rounded"
      >
        {label}
      </HashLink>
    </li>
  );
}
