type NavItemProps = {
  textItem: string;
};

export default function NavItem({ textItem }: NavItemProps) {
  return (
    <li className="text-white font-bold hover:hover:text-[#D66161] transition delay-150 duration-100 ease-in cursor-pointer">
      {textItem}
    </li>
  );
}
