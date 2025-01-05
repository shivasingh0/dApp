import { OrbitCircle } from "./magicui/OrbitCircle";
import { RippleComp } from "./RippleCopm";

export function OrbitingCircle() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#8c1eff] via-[#ff2975] to-[#ffd319] bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        <img width={150} src="/assets/logo.png" alt="logo" />
      </span>

      <OrbitCircle iconSize={70}>
        <img src="./assets/icons/etherium.webp" alt="icon" />
        <img src="./assets/icons/solana1.webp" alt="icon" />
        <img src="./assets/icons/solana3.webp" alt="icon" />
      </OrbitCircle>
      <OrbitCircle iconSize={50} radius={100} reverse speed={2}>
      <img src="./assets/icons/blockchain2.webp" alt="icon" />
      <img src="./assets/icons/etherium2.webp" alt="icon" />
      <img src="./assets/icons/solana2.webp" alt="icon" />
      </OrbitCircle>
    </div>
  );
}
