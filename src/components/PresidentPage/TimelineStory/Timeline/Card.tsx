type TimelineCardProps = {
  data: {
    icon: React.ElementType;
    title: string;
    year: number;
    age: number;
    description: string;
  };
};

export default function Card({ data }: TimelineCardProps) {
  const Icon = data.icon;
  return (
    <article className="relative lg:max-w-xs">
      <div className="text-white font-bold p-6 bg-[#1B2432] rounded-2xl border border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out group">
        <div className="flex items-center justify-between">
          <span className="p-4 bg-[#bf3636] rounded-2xl group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <Icon />
          </span>
        </div>
        <h3 className="text-xl mt-10 text-left font-bold group-hover:text-[#FCA5A5] transition duration-300 ease-in-out">{data.title}</h3>
        <p className="text-left text-sm text-gray-200 font-normal leading-relaxed mt-2">{data.description}</p>
      </div>
    </article>
  );
}
