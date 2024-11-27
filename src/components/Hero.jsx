import { bwmap, daniel, worldmap } from "../assets";
import { github1, linkedin } from "../assets";

import { AnimatedText } from "./canvas";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex flex-col sm:flex-row w-full h-screen mx-auto 
      sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
        lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
        max-w-7xl mx-auto flex sm:flex-row flex-col items-start 
        justify-between gap-8`}
        >
          {/* Text Section */}
          <div className="inline-flex p-20 -m-20 rounded-full items-center bg-flashWhite aspect-square">
            <div className="inline-flex flex-col items-center">
              <h1 className={`${styles.heroHeadText} text-eerieBlack`}>
                Hi, I'm Daniel.
              </h1>
              <h1 className={`${styles.heroTextLight} text-[#2975A7]`}>
                Full Stack Developer
              </h1>
              <div className="flex flex-row gap-5 items-center mt-8">
                <a href="#about">
                  <button
                    className="live-demo flex justify-center 
        sm:text-[16px] text-[14px] bg-eerieBlack text-timberWolf 
        font-bold font-poppins items-center py-5 pl-2 pr-3 
        whitespace-nowrap gap-1 sm:w-[150px] sm:h-[50px] 
        w-[120px] h-[46px] rounded-[10px] 
        hover:bg-battleGray 
        hover:text-white transition duration-[0.2s] 
        ease-in-out"
                  >
                    About Me
                  </button>
                </a>
                <button
                  className="live-demo flex justify-center 
        sm:text-[16px] text-[14px] bg-eerieBlack text-timberWolf 
        font-bold font-poppins items-center py-5 pl-2 pr-3 
        whitespace-nowrap gap-1 sm:w-[150px] sm:h-[50px] 
        w-[120px] h-[46px] rounded-[10px] 
        hover:bg-battleGray 
        hover:text-white transition duration-[0.2s] 
        ease-in-out"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1JD0RLWiISyaE7sGFvLShCx_oWLXw7Pfo/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  My Resume
                </button>
                <button
                  className="flex w-[50px] h-[50px]"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/daniel-au0/")
                  }
                >
                  <img src={linkedin} />
                </button>
                <button
                  className="flex w-[50px] h-[50px]"
                  onClick={() => window.open("https://github.com/DanielAu0")}
                >
                  <img src={github1} />
                </button>
              </div>
              <AnimatedText
                text={[
                  "Experience in Enterprise Application Development.",
                  "Experience in Full-Stack Web Development.",
                  "Experience in DevOps.",
                ]}
                el="p"
                className={`${styles.heroSubText} mt-8`}
                once
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
    flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
        border-flashWhite border-dim flex
        justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-flashWhite mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
