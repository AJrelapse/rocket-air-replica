"use client";

import React, { useEffect, useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const NavbarWithEffects = () => {
    const [isNavHidden, setIsNavHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsNavHidden(currentScrollY > lastScrollY);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            {/* Navbar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isNavHidden ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 bg-black z-50"
            >
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="w-8 h-8">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g style={{ mixBlendMode: "difference" }}>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.352 3.4619C30.5966 7.70635 30.5964 14.5879 26.352 18.8324C26.1694 19.0151 25.9818 19.1899 25.7898 19.3569L15.3833 29.7633L13.5683 27.9483L19.5356 21.9812C16.874 22.1933 14.1493 21.4289 11.9435 19.6881L6.03637 25.5951L4.22141 23.7802L10.1282 17.8733C8.40562 15.6922 7.63819 13.0034 7.82588 10.3698L1.90822 16.2874L0.0932617 14.4724L10.0687 4.49707C10.3473 4.13773 10.6516 3.79185 10.9816 3.4619C15.226 -0.782547 22.1076 -0.782547 26.352 3.4619ZM24.297 17.2196C21.0494 20.2349 15.9712 20.1625 12.8114 17.0027C9.82799 14.0193 9.59691 9.32582 12.1182 6.07753L13.4219 4.77374L13.3951 4.76045C16.6482 2.06887 21.4765 2.24599 24.5223 5.29179C27.6821 8.45164 27.7544 13.5299 24.7392 16.7775L24.297 17.2196Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </div>

                    {/* Right Section (Get in Touch + Menu Toggle) */}
                    <div className="flex items-center space-x-4">
                        {/* Get in Touch Button */}
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                            Get in Touch
                        </button>

                        {/* Menu Toggle Button */}
                        <button onClick={() => setIsMenuVisible(true)} className="text-white text-2xl">
                            <RiMenu2Line />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Full-Screen Menu */}
            <AnimatePresence>
                {isMenuVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 flex bg-black text-white z-50"
                    >
                        {/* Left Scrollable Content */}
                        <div className="w-1/2 overflow-y-auto p-10 scrollbar-hide">
                        <img src="/gw_hura_hero_02_m.webp" alt="Background" className="w-full h-auto" />
                        <p className="mt-4">New Limit</p>
                        </div>

                        {/* Right Navigation Section */}
                        <div className="w-1/2 bg-black p-10 relative">
                            {/* Close Button */}
                            <button onClick={() => setIsMenuVisible(false)} className="absolute top-4 right-4 bg-yellow-400 text-black rounded-full p-2">
                                <RiCloseLine size={24} />
                            </button>

                            {/* Menu Items */}
                            <ul className="space-y-4 mt-10">
                                {["Work", "About", "Services", "Verticals", "Careers", "Ideas", "News"].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavbarWithEffects;
