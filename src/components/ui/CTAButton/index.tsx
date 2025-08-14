type CTAButtonProps = {
  text: string;
  height: string;
  bgColor: string;
  border?: string;
  animation?: string;
  icon: React.ReactNode;
};

export default function CTAButton({
  text,
  height,
  bgColor,
  border = "",
  animation = "",
  icon,
}: CTAButtonProps) {
  return (
    <button
      className={`w-full ${height} flex items-center justify-center gap-x-2 rounded-4xl ${bgColor} ${border} text-white font-bold cursor-pointer 
                  ${animation}
                  lg:w-55 lg:h-10
                  `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
