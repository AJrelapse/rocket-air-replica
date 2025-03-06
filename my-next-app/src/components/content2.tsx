import localFont from "next/font/local";
import React, { useEffect, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aeonikPro = localFont({
  src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf",
});

interface ScrollRevealProps {
  children?: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const Content2: React.FC<ScrollRevealProps> = ({
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  blurStrength = 4,
}) => {
  const orbitalRef = useRef<HTMLSpanElement>(null);
  const designRef = useRef<HTMLSpanElement>(null);

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
    const scroller = scrollContainerRef?.current || window;

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
    <div
      className={`w-full min-h-[70vh] sm:min-h-[120vh] md:min-h-[130vh] lg:min-h-[150vh] bg-black relative flex flex-col justify-center ${aeonikPro.className}`}
    >
      <h1 className="absolute text-white font-light text-[clamp(10px,2vw,36px)] left-[5%] top-[9vh] lg:top-[7vh]">
        We call it
      </h1>

      <div className="absolute top-[10vh] left-[25%] w-[60%] sm:w-[70%] md:w-[70%] lg:w-[78%] h-[2px] lg:left-[15%] bg-white"></div>

      <h2 className="absolute text-white font-light text-[clamp(50px,24vw,350px)] leading-[0.85] top-[15vh] left-[5vw] w-[92%] tracking-tight flex flex-col">
        <span ref={orbitalRef} className="inline-block">{splitText("ORBITAL")}</span>
        <span ref={designRef} className="inline-block">{splitText("DESIGN")}</span>
      </h2>

      <button className="absolute left-[50%] translate-x-[-50%] bottom-[5vh] sm:bottom-[8vh] lg:bottom-[10vh] px-6 py-2 border border-white/50 rounded-full text-white font-medium text-[clamp(14px,1.2vw,18px)] transition duration-200 ease-in-out hover:bg-white hover:text-black">
        Get to know us
      </button>
    </div>
  );
};

export default Content2;
