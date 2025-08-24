import { FaFacebookF, FaInstagram } from "react-icons/fa";
import SocialIcon from "../ui/Icons/SocialIcon";
import React, { type JSX } from "react";

const socialLinks = [
  {
    id: "facebook",
    Icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook JinSimDoKwan",
  },
  {
    id: "instagram",
    Icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram JinSimDoKwan",
  },
];

export default React.memo(function FooterSocials(): JSX.Element {
  return (
    <div
      aria-label="Social links"
      role="navigation"
      className="flex items-center justify-center gap-4 md:items-start"
    >
      {socialLinks.map((s) => (
        <SocialIcon key={s.id} Icon={s.Icon} href={s.href} label={s.label} />
      ))}
    </div>
  );
});
