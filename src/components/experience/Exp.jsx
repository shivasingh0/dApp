import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./exp.css";

gsap.registerPlugin(ScrollTrigger);

const Exp = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const exp = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience",
          start: "top top",
          end: "+=5000",
          scrub: true,
          markers: true,
          pin: ".experience",
        },
      });

      exp.to(".experience-middle", {
        "--progress1": 1,
        ease: "none",
        smoothOrigin: true,
      });

      exp.from(
        ".extraBox",
        {
          scaleX: 0,
          transformOrigin: "left center", // Scale from left-center point
          ease: "none",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert(); // Clean up the animations
  }, []);

  return (
    <div className="experience">
      <div className="extraBox" />
      <div className="experience-show">
        {/* <h1 className="experience-top">Let Me show you</h1> */}
        <div className="experience-middle-container">
          <h1 className="experience-middle">dApp Studio</h1>
          <img src="/assets/polarBeer/feature.gif" alt="" />
        </div>
        {/* <h1 className="experience-bottom">My Magic Trick</h1> */}
        <div className="spacer-end" />
      </div>
    </div>
  );
};

export default Exp;
