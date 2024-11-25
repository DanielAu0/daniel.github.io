import { bwmap, daniel, worldmap } from '../assets';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { styles } from '../styles';

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
      sm:bg-hero bg-hero-mobile overflow-hidden">
      <div
        className={`absolute inset-0 sm:top-[250px] top-[150px] 
        lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
        max-w-7xl mx-auto flex sm:flex-row flex-col items-start 
        justify-between gap-8`}>
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center mt-5 ml-3">
          <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
          <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
        </div>

    {/* Text Section */}
    <div className="flex-1">
      <h1
        className={`${styles.heroHeadText} text-eerieBlack uppercase`}>
        Hi, I'm Daniel
      </h1>
      <h1
        className={`${styles.heroTextLight} text-eerieBlack uppercase`}>
        Full-stack Developer
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
      Bachelor of Science in Computer Science from the University of British Columbia.
      </p>
      <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
      Experience in Enterprise Application Development.
      </p>
      <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
      Experience in Full-Stack Web Development.
      </p>
      <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
      Experience in DevOps.
      </p>
      <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
      Bringing commitment to excellence and continuous learning to every project.
      </p>
      <a href="#about">
      <button
        className="live-demo flex justify-center 
        sm:text-[16px] text-[14px] bg-eerieBlack text-timberWolf 
        font-bold font-beckman items-center py-5 pl-2 pr-3 
        whitespace-nowrap gap-1 sm:w-[150px] sm:h-[50px] 
        w-[120px] h-[46px] rounded-[10px] 
        sm:mt-[22px] mt-[16px] hover:bg-battleGray 
        hover:text-white transition duration-[0.2s] 
        ease-in-out">
        About Me
      </button>
      </a>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div
    className="absolute xs:bottom-10 bottom-32 w-full 
    flex justify-center items-center">
    <a href="#about">
      <div
        className="w-[35px] h-[64px] rounded-3xl border-4 
        border-taupe border-dim flex
        justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="w-3 h-3 rounded-full bg-taupe mb-1"
        />
      </div>
    </a>
  </div>
</section>
    </>
  );
};

export default Hero;
