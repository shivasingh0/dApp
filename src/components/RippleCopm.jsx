import Ripple from "./magicui/Ripple";

export function RippleComp() {
  return (
    <div className="relative -z-10 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <img
        src="/assets/polarBeer/footer.gif"
        alt="Snowy Landscape"
        className="w-full rounded-lg relative z-20"
      />
      <Ripple />
    </div>
  );
}
