"use client";
import localFont from "next/font/local";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const aeonikPro = localFont({ src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf" });

const Frame = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ width: "100%", transition: { duration: 1.2 } });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className="w-full h-[72vh] flex justify-around items-center text-center relative overflow-hidden bg-black"
            initial={{ width: 0 }}
            animate={controls}
        >
            {["Brand", "Product", "Motion"].map((title, index) => (
                <div
                    key={index}
                    className="relative w-1/4 h-[72vh] border border-white/50 cursor-pointer group overflow-hidden transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-black group-hover:bg-white transition-all duration-300"></div>

                    <h1
                        className={`absolute text-white group-hover:text-black text-[40px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${aeonikPro.className}`}
                    >
                        {title}
                    </h1>

                    <div className="absolute bottom-6 right-6 w-6 h-6 flex justify-center items-center text-white group-hover:text-black transition-all duration-300 z-10">
                        {index === 0 ? "↗" : "→"}
                    </div>
                </div>
            ))}

            <div className="relative w-1/4 h-[72vh] border border-white/50 cursor-pointer overflow-hidden">
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
