import { StarIcon } from "@heroicons/react/16/solid";

export default function PresidentCard() {
  return (
    <article className="lg:w-1/2 relative h-60 w-60 md:w-full md:h-130 mx-auto">
      {/* HALO: elemento separato posizionato dietro */}
      <div className="absolute -inset-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl blur-xl opacity-30 pointer-events-none z-0" />

      <div className="w-full h-full relative flex items-end justify-center rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-center "
          src="/boss.jpg"
          alt="president image"
        />
        <div className="w-full absolute bottom-4 px-8 py-2">
          <div className="flex flex-col md:p-4 md:items-start md:gap-y-4 bg-black/90 text-center py-2 rounded-xl">
            <h3 className="text-md md:text-2xl font-bold">Maestro Placido</h3>
            <p className="hidden md:block text-[#DC6666] font-medium">
              Presidente ASD JinSimDoKwan
            </p>
            <p className="text-sm md:hidden">V Dan Taekwondo ITF</p>
            <span className="hidden text-sm md:flex items-center justify-center gap-x-1">
              <StarIcon className="w-6 h-6 text-[#FACC15]" />
              20+ anni di esperienza
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
