import React from "react";
import type { JSX } from "react";
import type { FooterColumn as FooterColumnType } from "./data/footerTypes";
import FooterColumnItems from "./FooterColumnItems";

type FooterColumnProps = {
  footerColumn: FooterColumnType;
};

export default React.memo(function FooterColumn({
  footerColumn,
}: FooterColumnProps): JSX.Element {
  return (
    <div>
      <p className="text-md font-medium mb-4">{footerColumn.title}</p>
      <ul
        className="flex flex-col gap-y-1 items-center md:items-start justify-center"
        role="list"
        aria-label={footerColumn.ariaLabel ?? footerColumn.title}
      >
        {footerColumn.items.map((item) => (
          <FooterColumnItems key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
});
