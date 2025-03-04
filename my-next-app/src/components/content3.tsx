import React, { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

gsap.registerPlugin(ScrollTrigger);
const aeonikPro = localFont({ src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf" });

interface ScrollFloatProps {
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  children: React.ReactNode;

}

const Content2: React.FC<ScrollFloatProps> = ({
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <>
    <div
      ref={containerRef}
      className={`w-full min-h-screen flex items-start justify-start bg-white text-black px-10 pt-64 ${aeonikPro.className} ${containerClassName}`}
    >
      <p className={`text-left text-[clamp(1.6rem,4vw,3rem)] leading-[1.3] ${textClassName}`}>
        <span className="inline-block">We partner with</span> <br />
        <span className="inline-block">forward - thinking</span> <br />
        <span className="inline-block">enterprises and </span> <br />
        <span className="inline-block">startups</span>
      </p>

    </div>
          </>

  );
};

export default Content2;
