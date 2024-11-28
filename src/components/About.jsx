import { fadeIn, textVariant } from "../utils/motion";

import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-battleGray text-[18px] leading-[30px]"
      >
        Hi, I'm Daniel, a graduate of the University of British Columbia
        with a Bachelor of Science in Computer Science. Throughout my academic
        and professional journey, I have cultivated a passion for
        problem-solving, innovation, and delivering high-quality solutions.
        Professionally, I've had the opportunity to wear many hats, taking on
        roles as a Full Stack Web Developer, Enterprise Application Developer,
        and Maintainer of a widely-used open-source project with over 600
        million downloads on NuGet. My work has ranged from supporting small,
        focused internal teams to building scalable applications for globally
        recognized companies, demonstrating my versatility and adaptability
        across diverse environments. I thrive on challenges and bring a strong
        commitment to excellence and continuous learning to every project I
        undertake. Whether collaborating within agile teams or independently
        driving initiatives, I strive to create impactful, efficient, and
        lasting solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
