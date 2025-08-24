import React, { type JSX } from "react";

type SocialIconProps = {
  Icon: React.ElementType;
  href: string;
  label: string;
};

export default React.memo(function SocialIcon({
  Icon,
  href,
  label,
}: SocialIconProps): JSX.Element {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-[#1F2937] rounded-full flex items-center justify-center transition hover:scale-110 duration-300 ease-in-out"
    >
      <Icon size={18} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </a>
  );
});
