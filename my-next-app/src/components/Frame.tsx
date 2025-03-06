"use client";
import localFont from "next/font/local";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const aeonikPro = localFont({
  src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf",
});

const Frame = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%", transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full min-h-[72vh] flex flex-col md:flex-row justify-around items-center text-center relative overflow-hidden bg-black"
      initial={{ width: 0 }}
      animate={controls}
    >
      {[
        { title: "Brand", text: "Unique brand identities that make a mark." },
        { title: "Product", text: "Intuitive digital products that people get." },
        { title: "Motion", text: "Compelling animation that inspires action." },
      ].map((item, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/4 h-[30vh] md:h-[72vh] border border-white/50 cursor-pointer group overflow-hidden transition-all duration-300 flex flex-col justify-center items-start px-6 md:px-12 text-left"
        >
          <div className="absolute inset-0 bg-black group-hover:bg-white transition-all duration-300"></div>

          <h1
            className={`text-white group-hover:text-black text-[clamp(24px,5vw,40px)] font-semibold transition-all duration-300 z-10 ${aeonikPro.className}`}
          >
            {item.title}
          </h1>

          <p className="text-white/70 text-sm md:hidden mt-2">
            {item.text}
          </p>

          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-10 h-10 border border-white rounded-full flex justify-center items-center text-white group-hover:text-black transition-all duration-300 z-10">
            →
          </div>
        </div>
      ))}

      <div className="hidden md:flex relative w-1/4 h-[72vh] border border-white/50 cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-black flex justify-center items-center">
          <div className="absolute w-24 h-24 border border-white/50 rounded-full flex justify-center items-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <video
          className="absolute top-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="https://assets.website-files.com/6205ecdcec584c56193d6121/625049f25321603541f849ab_Brand_Work_noWindow_540x1080-transcode.mp4"
        ></video>
      </div>
    </motion.div>
  );
};

export default Frame;
