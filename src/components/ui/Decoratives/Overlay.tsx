type OverlayProps = {
  color: string;
};

export default function Overlay({ color }: OverlayProps) {
  return <div className={`absolute inset-0 ${color}`}></div>;
}
