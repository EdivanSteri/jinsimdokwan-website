import React, { type JSX } from "react";
import type { Credential } from "./Data/credentialsTypes";

type ItmeProps = {
  credential: Credential;
};

export default React.memo(function Item({
  credential,
}: ItmeProps): JSX.Element {
  const ICON = credential.icon;

  return (
    <li role="listitem">
      <article
        role="article"
        aria-labelledby="cred-vdan-title"
        className={`bg-[#1A2030] text-white flex flex-col justify-center items-center gap-4 p-10 rounded-2xl text-center shadow-lg ${credential.cardHoverBgColor}  hover:-translate-y-2  transition-all duration-500 ease-in`}
      >
        <span
          className={`bg-gradient-to-tl ${credential.iconBgColor} p-6 rounded-2xl`}
          aria-hidden="true"
        >
          <ICON size={30} color="white" aria-hidden="true" />
        </span>
        <h3 id="cred-vdan-title" className="text-2xl lg:text-3xl font-bold">
          {credential.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          {credential.subTitle}
        </p>
      </article>
    </li>
  );
});
