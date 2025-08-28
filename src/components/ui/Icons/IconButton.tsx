import type { ComponentPropsWithoutRef, JSX } from "react";
import React from "react";
import { HashLink } from "react-router-hash-link";

type IconButtonProps = {
  icon: React.ElementType;
  href: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"a">; // Estende le props di button

export default React.memo(function IconButton({
  icon,
  href,
  children,
  className,
  ...rest
}: IconButtonProps): JSX.Element {
  const Icon = icon;

  const base =
    "flex items-center justify-center gap-x-2 rounded-4xl text-white font-bold cursor-pointer";
  const combined = base + " " + className;

  return (
    <HashLink
      to={href}
      smooth
      className={combined}
      {...rest}
    >
      <Icon className="w-6 h-6" aria-hidden="true" />
      {children}
    </HashLink>
  );
});
