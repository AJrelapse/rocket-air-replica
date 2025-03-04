import localFont from "next/font/local";
import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Load Aeonik Pro font
const aeonikPro = localFont({
  src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf",
});

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const Content2: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitalRef = useRef<HTMLSpanElement>(null);
  const designRef = useRef<HTMLSpanElement>(null);

  // Function to split text into individual letters
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="block">
        {word.split("").map((char, charIndex) => (
          <span className="inline-block opacity-0" key={charIndex}>
            {char}
          </span>
        ))}
      </span>
    ));
  };

  useEffect(() => {
    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const animateText = (ref: React.RefObject<HTMLSpanElement>) => {
      if (!ref.current) return;
      const chars = ref.current.querySelectorAll(".inline-block");

      gsap.fromTo(
        chars,
        {
          opacity: baseOpacity,
          y: 100,
          filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            scroller,
            start: "top bottom-=20%",
            end: "center center",
            scrub: true,
          },
        }
      );
    };

    animateText(orbitalRef);
    animateText(designRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef, baseOpacity, enableBlur, blurStrength]);

  return (
    <div className={`w-full min-h-[150vh] bg-black relative ${aeonikPro.className}`}>
      {/* Heading */}
      <h1 className="absolute text-white font-light text-[36px] ml-[5vw] mt-[5vh]">
        We call it
      </h1>

      {/* Line */}
      <div className="absolute top-[8vh] left-[20vw] w-[74vw] h-[0.3vh] bg-white"></div>

      {/* ORBITAL DESIGN Text */}
      <h2
  className="absolute text-white font-light text-[clamp(350px,12vw,230px)] leading-[0.85] top-[15vh] left-[5vw] w-[92%] tracking-tight flex flex-col"
>
  <span ref={orbitalRef} className="inline-block">{splitText("ORBITAL")}</span>
  <span ref={designRef} className="inline-block">{splitText("DESIGN")}</span>
</h2>

{/* Move the button directly under the "L" */}
<button className="absolute left-[82vw] top-[78vh] cursor-pointer px-6 py-2 border border-white/50 rounded-full text-white font-medium text-[18px] transition duration-200 ease-in-out hover:bg-white hover:text-black">
  Get to know us
</button>

    </div>
  );
};

export default Content2;
