import React, { type JSX } from "react";
import { gymImagesCard } from "./Data/InfoCardsData";
import type { GymImagesCard } from "./Data/InfoCardsTypes";

export default React.memo(function GymImagesCard(): JSX.Element {
  const data: GymImagesCard = gymImagesCard;
  const { title, images } = data;
  const TitleIcon = title.icon as React.ElementType;

  return (
    <div
      aria-labelledby="info-card-title"
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
      role="region"
    >
      <div className="flex items-center justify-start gap-x-2">
        <TitleIcon className="w-5 h-5 text-[#EF4440]" aria-hidden="true" />
        <span id="info-card-title" className="font-bold text-md sm:text-base">
          {title.text}
        </span>
      </div>

      <div
        className="grid grid-cols-2 items-stretch gap-4 over"
        role="list"
        aria-label={title.text}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={`${
              image.id === "background-01" ? "col-span-2 h-24 md:h-32" : "h-20 md:h-24"
            } rounded-xl overflow-hidden group`}
          >
            <img
              className={`w-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110`}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
});
