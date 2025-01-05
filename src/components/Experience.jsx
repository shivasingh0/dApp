import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    const exp = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience",
          start: "top top",
          end: "+=5000",
          scrub: true,
          markers: true,
          pin: ".experience"
        }
      });
      
      exp.to(".experience-middle", {
        "--progress1": 1,
        ease: "none",
        smoothOrigin: true
      });
      exp.from(
        ".extraBox",
        {
          scaleX: 0,
          ease: "none"
        },
        "-=0.4"
      );
  }, []);

  return (
    <div className="experience relative w-full h-screen overflow-hidden z-10">
      <div className="extraBox absolute top-0 left-0 w-full h-full bg-orange-500 opacity-70 pointer-events-none z-10"></div>
      <div className="experience-show relative w-full h-full">
        <h1 className="experience-top absolute top-[1%] left-[2%] text-3xl font-bold">
          Let Me show you
        </h1>
        <div className="experience-middle-container flex justify-center items-center w-full h-full">
          <h1
            className="experience-middle text-[15rem] font-bold whitespace-nowrap"
            style={{
              transform: "scale(var(--progress1, 1))",
              transformOrigin: "48.2%",
            }}
          >
            Enter My World
          </h1>
        </div>
        <h1 className="experience-bottom absolute bottom-[1%] right-[2%] text-3xl font-bold">
          My Magic Trick
        </h1>
        <div className="spacer-end"></div>
      </div>
      <section className="w-full h-screen mt-4 text-5xl">another section</section>
    </div>
  );
};

export default Experience;
