import type { InstructorHighlight } from "./PresidentInstructorHighlights";

type PresidentInstructorHilightItemProps = {
  hilight: InstructorHighlight;
};

export default function PresidentInstructorHilightItem({
  hilight,
}: PresidentInstructorHilightItemProps) {
  const ICON = hilight.icon;

  return (
    <div className="p-4 rounded-xl flex flex-col items-start justify-center gap-y-2 bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition duration-300 ease-in-out">
      <div
        className={`flex items-center justify-center w-10 h-10 ${hilight.iconBgColor} rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out`}
      >
        <ICON className="w-4 h-4" />
      </div>
      <div>
        <span className="text-sm font-bold">{hilight.title}</span>
        <p className="text-xs leading-tight text-gray-400">
          {hilight.subTitle}
        </p>
      </div>
    </div>
  );
}
