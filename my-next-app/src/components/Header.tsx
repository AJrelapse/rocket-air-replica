import { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import localFont from 'next/font/local';

const aeonikPro = localFont({ src: '../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf' });
const aeonikMono = localFont({ src: '../../public/fonts/6232160eeef427e45a261dff_AeonikMono-Regular.ttf' });

const Header = () => {
    const [opacity, setOpacity] = useState(1);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                const fadeStart = 0; 
                const fadeEnd = window.innerHeight * 0.8; 
                let newOpacity = 1 - (window.scrollY - fadeStart) / (fadeEnd - fadeStart);
                newOpacity = Math.max(newOpacity, 0);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            ref={headerRef} 
            className="bg-black text-white h-[70vh] flex flex-col justify-center items-center relative z-10"
            style={{ opacity }}
        >
            <div className="relative flex items-center justify-between w-[90%]">
                <div className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-left pb-10`}>
                    <span>Digital <br /> <span className="inline-block align-middle">experiences</span></span>
                </div>

                <div className="absolute left-[35%] top-[calc(50%+30px)] w-[50%] h-[2px] bg-white"></div>

                <div className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-right pt-32`}>
                    <span><span className="inline-block align-middle">that</span> <br /> Win by Design</span>
                </div>
            </div>

            <div className="absolute bottom-5 right-10 text-xs tracking-widest opacity-70">
                <p className={`${aeonikMono.className}`}>CHECK OUT THE HYPE ↓</p>
            </div>
        </div>
    );
};

export default Header;
