"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Load Custom Font
const aeonikPro = localFont({ src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf" });

const projects = [
  { title: "Olive", image: "https://assets.website-files.com/620970e0fc117e313fe36ebd/62721a9fa38f7f4b7f6fa4d6_thumb_olive.jpg" },
  { title: "FocusVision", image: "https://assets.website-files.com/620970e0fc117e313fe36ebd/6268fab393803a81e2d7a89e_focus-V_thumbnail.jpg" },
  { title: "Stryx", image: "https://assets.website-files.com/620970e0fc117e313fe36ebd/624ce4cf4b896785b3f52286_stryx-case-study-thumbnail.jpg" },
];

const Work = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Parallax effect for images
  const translateY1 = useTransform(scrollYProgress, [1, 0], ["0%", "150%"]);
  const translateY2 = useTransform(scrollYProgress, [1, 0], ["0%", "450%"]);
  const translateY3 = useTransform(scrollYProgress, [1, 0], ["0%", "300%"]);

  return (
    <section className="relative w-full flex flex-col items-center py-20">
      {/* Fixed Background Text */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <h1
          className={`${aeonikPro.className} text-[500px] font-medium text-black leading-none tracking-tight -z-10`}
        >
          WORK
        </h1>
      </div>

      <div ref={containerRef} className="relative z-10 w-full h-[200vh] grid grid-cols-3 gap-10 px-20">
        {projects.map((project, index) => {
          // Assign different speeds to different columns
          const translateY = index === 0 ? translateY1 : index === 1 ? translateY2 : translateY3;

          return (
            <motion.div
              key={index}
              style={{ y: translateY }}
              className="relative w-full h-[70vh] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
