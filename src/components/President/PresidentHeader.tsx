export default function PresidentHeader() {
  return (
    <div className="p-8 flex flex-col items-center justify-center gap-y-6 ">
      <span className="text-lg flex items-center justify-center px-4 py-1 bg-linear-to-r from-[#EF4444] to-[#CE2525] rounded-full font-medium">
        IL NOSTRO LEADER
      </span>
      <h2 className="text-4xl font-bold">IL PRESIDENTE</h2>
      <span className="text-lg flex items-center justify-center bg-[#DA2525] px-4 py-1 rounded-full font-bold">
        IL BOSS
      </span>
    </div>
  );
}
