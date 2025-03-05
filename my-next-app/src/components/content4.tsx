import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import localFont from 'next/font/local';

const aeonikPro = localFont({ src: '../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf' });

const Content4 = () => {
    const [inView, setInView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // Dynamic color change
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top, height } = ref.current.getBoundingClientRect();
                const halfPoint = window.innerHeight / 2;
                
                // If component's midpoint is above viewport's midpoint → Dark mode
                setIsDarkMode(top + height / 2 < halfPoint);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div
            ref={ref}
            className={`h-[170vh] flex flex-col justify-center items-center transition-colors duration-500 ${
                isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
        >
            <div className="relative flex items-center justify-between w-[90%]">
                <animated.div 
                    style={fadeInLeft} 
                    className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-left pb-10`}
                >
                    <span>Take a look <br /> <span className="inline-block align-middle">at what</span></span>
                </animated.div>

                <div className="absolute left-[21.5%] top-[calc(50%+30px)] w-[58%] h-[2px] bg-current"></div>

                <animated.div 
                    style={fadeInRight} 
                    className={`${aeonikPro.className} text-[5rem] font-medium leading-[1] text-right pt-32`}
                >
                    <span><span className="inline-block align-middle">we can</span> <br />do for you</span>
                </animated.div>
            </div>
        </div>
    );
};

export default Content4;
