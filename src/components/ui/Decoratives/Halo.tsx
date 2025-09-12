type HaloProps = {
  bgColor: string;
  blur: string;
  rounded: string;
  opacity: string;
};

export default function Halo({ bgColor, blur, rounded, opacity }: HaloProps) {
  return (
    <>
      <div
        className={`absolute -inset-5 ${bgColor} ${rounded} ${blur} ${opacity} pointer-events-none z-0`}
        aria-hidden="true"
      />
    </>
  );
}
