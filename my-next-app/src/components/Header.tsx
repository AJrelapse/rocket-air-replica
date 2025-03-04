import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import localFont from 'next/font/local';

const aeonikPro = localFont({ src: '../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf' });
const aeonikMono = localFont({ src: '../../public/fonts/6232160eeef427e45a261dff_AeonikMono-Regular.ttf' });

const Header = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const fadeInLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
        config: { tension: 100, friction: 20 }
    });

    const fadeInRight = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(30px)',
        config: { tension: 100, friction: 20 }
    });

    return (
        <div ref={ref} className="bg-black text-white h-[70vh] flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-between w-[90%]">
                <animated.div 
                    style={fadeInLeft} 
                    className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-left pb-10`}
                >
                    <span>Digital <br /> <span className="inline-block align-middle">experiences</span></span>
                </animated.div>

                <div className="absolute left-[35%] top-[calc(50%+30px)] w-[50%] h-[2px] bg-white"></div>

                <animated.div 
                    style={fadeInRight} 
                    className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-right pt-32`}
                >
                    <span><span className="inline-block align-middle">that</span> <br /> Win by Design</span>
                </animated.div>
            </div>

            <div className="absolute bottom-5 right-10 text-xs tracking-widest opacity-70">
                <p className={`${aeonikMono.className}`}>CHECK OUT THE HYPE ↓</p>
            </div>
        </div>
    );
};

export default Header;
