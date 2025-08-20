import type { ComponentPropsWithoutRef, JSX } from "react";
import React from "react";

type IconButtonProps = {
  icon: React.ElementType;
  onClick?: () => void;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">; // Estende le props di button 

export default React.memo(function IconButton({
  icon,
  onClick,
  children,
  className,
  ...rest
}: IconButtonProps): JSX.Element {
  const Icon = icon;

  const base =
    "flex items-center justify-center gap-x-2 rounded-4xl text-white font-bold cursor-pointer";
  const combined = base + " " + className;

  return (
    <button type="button" onClick={onClick} className={combined} {...rest}>
      <Icon className="w-6 h-6" aria-hidden="true" />
      {children}
    </button>
  );
});
