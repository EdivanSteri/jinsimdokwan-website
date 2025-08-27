import React, { type JSX } from "react";
import { gymImagesCard } from "./Data/InfoCardsData";
import type { GymImagesCard } from "./Data/InfoCardsTypes";

export default React.memo(function GymImagesCard(): JSX.Element {
  const data: GymImagesCard = gymImagesCard;
  const { title, images } = data;
  const TitleIcon = title.icon as React.ElementType;

  return (
    <section
      aria-labelledby="gym-images-title"
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
      role="region"
    >
      <div className="flex items-center justify-start gap-x-2">
        <TitleIcon className="w-5 h-5 text-[#EF4440]" aria-hidden="true" />
        <h3 id="gym-images-title" className="font-bold text-base sm:text-lg">
          {title.text}
        </h3>
      </div>

      <ul
        className="grid grid-cols-2 items-stretch gap-4"
        role="list"
        aria-label={title.text}
      >
        {images.map((image, index) => {
          const isHero = index === 0;
          const wrapperClasses = isHero
            ? "col-span-2 h-24 md:h-32"
            : "h-20 md:h-24";

          return (
            <li
              key={image.id}
              role="listitem"
              className={`${wrapperClasses} rounded-xl overflow-hidden group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
});
