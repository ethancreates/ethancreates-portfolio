"use client";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { AnimatedText } from "./ui/animated-text";

const HeroSection = () => {
  return (
    <section className="flex w-full h-screen lg:flex-row flex-col justify-between">
      {/* left side */}
      <div className="lg:basis-2/3 flex flex-col items-center lg:justify-center text-3xl lg:text-7xl font-semibold mt-[100px]  lg:mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-tighter max-lg:mb-4 mb-2"
        >
          Let me turn your
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="blur-sm hover:blur-none tracking-tighter lg:text-7xl text-5xl max-lg:mb-6 mb-3"
        >
          blurry ideas
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="tracking-tighter max-lg:mb-2"
        >
          into a
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-5xl lg:text-9xl max-lg:mb-5 mb-3"
        >
          <AnimatedText
            phrases={[
              "innovative",

              "responsive",
              "modern",
              "scalable",
              "user-friendly",
              "secure",
            ]}
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
      <div className="lg:basis-1/3 flex flex-col items-center  lg:items-end lg:justify-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mb-3 text-4xl lg:text-7xl font-bold text-white tracking-tighter"
        >
          ethancreates.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <Separator className="mt-1 mb-3 w-[200px]  lg:w-[250px]" />
        </motion.div>
        {rightHeroData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 + index * 0.5 }}
            key={index}
            className="lg:text-2xl my-1 font-extralight max-lg:text-center"
          >
            <h3 className="">{data.title}</h3>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6.5 }}
        >
          <Separator className="mt-3 mb-3 w-[200px]  lg:w-[250px]" />
        </motion.div>
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
    title: "ui/ux designer & enthusiast.",
  },
  {
    title: "seo content writer.",
  },
  {
    title: "full-time nerd.",
  },
];
