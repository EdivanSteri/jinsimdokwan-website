export default function PresidentQuote() {
  return (
    <div className="p-4  lg:p-8 flex flex-col items-center justify-center gap-y-4 text-center bg-red-600/15 rounded-3xl border border-red-600/20">
      <blockquote className="text-xl italic">
        "Il Taekwondo non è solo uno sport, è una filosofia di vita. Ogni
        calcio, ogni forma, ogni respiro ci insegna a essere migliori."
      </blockquote>
      <cite className="text-sm text-[#F77171]">
        - Maestro Placido, Presidente ASD JinSimDoKwan
      </cite>
    </div>
  );
}
