type CTAButtonProps = {
  text: string;
  textSize?: string;
  height?: string;
  width?: string;
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
  width = "",
  padding = "",
  bgColor,
  border = "",
  animation = "",
  icon,
}: CTAButtonProps) {
  return (
    <button
      className={`${width} ${height} ${padding} flex items-center justify-center gap-x-2 rounded-4xl ${bgColor} ${border} text-white ${textSize} font-bold cursor-pointer 
                  ${animation}
                  `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
