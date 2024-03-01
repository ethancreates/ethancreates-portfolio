"use client";

import { motion } from "framer-motion";
import { SkillsData } from "@/app/about/page";

const SkillsSection = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <ul className="flex flex-wrap justify-end max-sm:justify-center  gap-2 text-sm font-bold text-slate-300 mt-4">
      {SkillsData.map((skill, index) => (
        <motion.li
          className="bg-slate-800  rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
};

export default SkillsSection;
