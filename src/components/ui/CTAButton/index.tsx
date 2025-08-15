type CTAButtonProps = {
  text: string;
  textSize?: string;
  height: string;
  weight?: string;
  padding?: string;
  bgColor: string;
  border?: string;
  animation?: string;
  icon: React.ReactNode;
};

export default function CTAButton({
  text,
  textSize = "",
  height,
  weight = "",
  padding = "",
  bgColor,
  border = "",
  animation = "",
  icon,
}: CTAButtonProps) {
  return (
    <button
      className={`${weight} ${height} ${padding} flex items-center justify-center gap-x-2 rounded-4xl ${bgColor} ${border} text-white ${textSize} font-bold cursor-pointer 
                  ${animation}
                  `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
