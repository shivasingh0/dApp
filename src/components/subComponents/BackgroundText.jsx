import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BackgroundText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 45%', // Trigger when the top of the element hits 75% of the viewport
          end: 'bottom 15%', // End when the bottom of the element reaches 15% of the viewport
          scrub: 1, // Sync animation with scroll position
          toggleActions: 'restart pause reverse pause', // Pause and reverse the animation when scrolling back
        //   markers: true // Optional: Shows scrollTrigger markers for debugging (remove for production)
        }
      });
  
      tl.fromTo(element, {
        opacity: 0,
        y: -100, // Initial position above the screen
        scale: 0.1, // Initial small scale
      }, {
        opacity: 1,
        y: 0, // Move to normal position
        scale: 1.2, // Slightly larger scale
        duration: 1,
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute  top-40 w-full flex justify-center items-center z-10 overflow-hidden">
      <h1
        ref={textRef}
        className="text-[#3D3D3D] font-sans text-[12rem] font-black tracking-tighter select-none"
      >
        DAPP STUDIO
      </h1>
    </div>
  );
};
