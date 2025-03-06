"use client";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const aeonikPro = localFont({
  src: "../../public/fonts/620e5796f94823392179d875_AeonikPro-Regular.ttf",
});

const Footer = () => {
  return (
    <div className={`w-full bg-black flex flex-col items-center ${aeonikPro.className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 border-t  border-white/70 flex flex-col items-center md:items-start text-white p-6 md:p-10"
        >
          <h1 className="text-2xl md:text-3xl font-medium">Fuel for Thought</h1>
          <p className="text-sm md:text-base text-center md:text-left w-4/5 mt-2">
            A casual hello from the RocketAir Crew filled with insights, inspiration, and good vibes only.
          </p>
          
          <div
            className="w-24 h-24 md:w-80 md:h-80 min-h-[120px] bg-center bg-cover mt-6"
            style={{
              backgroundImage:
                "url(https://assets.website-files.com/6205ecdcec584c56193d6121/6246217a2a1efb208cb41ffa_badge-fueled_news.svg)",
            }}
          ></div>


          <div className="relative w-full max-w-xs mt-6">
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-white/60 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              placeholder=" "
              className="w-full bg-transparent border-b border-white/50 text-white/80 focus:outline-none px-3 py-3 mt-6"
            />
            <button className="mt-4 w-full md:w-auto px-4 py-2 border border-white/85 rounded-lg text-white hover:bg-white hover:text-black transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 border-l border-white/70 p-6 md:p-10 flex flex-col justify-between text-white border-t border-r"
        >
          <div className="grid grid-cols-2 md:flex md:flex-col space-y-2 gap-3">
            {[
              "Work",
              "About",
              "Services",
              "Verticals",
              "Careers",
              "Ideas",
              "News",
              "Contact",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-lg cursor-pointer border-b border-white/50 py-2 transition-all hover:font-semibold hover:bg-white hover:text-black px-2"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {[
              "ri-twitter-line",
              "ri-linkedin-fill",
              "ri-youtube-line",
              "ri-instagram-line",
            ].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 flex items-center justify-center text-2xl cursor-pointer transition-all hover:bg-white hover:text-black rounded-full "
              >
                <i className={icon}></i>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
