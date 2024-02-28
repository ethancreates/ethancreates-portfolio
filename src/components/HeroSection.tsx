"use client";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { AnimatedText } from "./ui/animated-text";

const HeroSection = () => {
  return (
    <section className="flex w-full h-screen md:flex-row flex-col justify-between">
      {/* left side */}
      <div className="md:basis-2/3 flex flex-col items-start md:justify-center text-4xl md:text-7xl font-semibold mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-tighter max-md:mb-4 mb-2"
        >
          Let me turn your
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="blur-sm hover:blur-none tracking-tighter md:text-7xl text-6xl max-md:mb-6 mb-3"
        >
          blurry ideas
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="tracking-tighter max-md:mb-2"
        >
          into a
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-7xl lg:text-9xl max-md:mb-5 mb-3"
        >
          <AnimatedText
            phrases={["beautiful", "functional", "responsive", "modern"]}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="tracking-tighter"
        >
          website.
        </motion.h1>
      </div>
      {/* right side */}
      <div className="md:basis-1/3 flex flex-col items-center  md:items-end md:justify-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6 mb-3 text-6xl md:text-8xl font-bold text-white tracking-tighter"
        >
          ethancreates.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Separator className="mt-2 mb-3 md:h-2 w-[350px]" />
        </motion.div>
        {rightHeroData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 + index * 0.5 }}
            key={index}
            className="text-2xl my-1 font-extralight"
          >
            <h3 className="">{data.title}</h3>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

const rightHeroData = [
  {
    title: "full-stack/front-end web developer.",
  },
  {
    title: "ux/ui designer.",
  },
  {
    title: "seo consultant.",
  },
  {
    title: "full-time nerd.",
  },
];
