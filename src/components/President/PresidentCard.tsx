export default function PresidentCard() {
  return (
    <article className="relative h-60 w-60 mx-auto">
      {/* HALO: elemento separato posizionato dietro */}
      <div className="absolute -inset-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl blur-xl opacity-30 pointer-events-none z-0" />

      <div className="w-full h-full relative flex items-end justify-center rounded-2xl overflow-hidden">
        <img
          width={60}
          height={60}
          className="w-full h-full object-cover object-center"
          src="/boss.jpg"
          alt="president image"
        />
        <div className="absolute bottom-4 bg-black/90 text-center py-2 px-10 rounded-xl">
          <h3 className="text-md font-bold">Maestro Placido</h3>
          <p className="text-sm font-medium">V Dan Taekwondo ITF</p>
        </div>
      </div>
    </article>
  );
}
