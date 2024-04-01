"use client";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { AnimatedText } from "./ui/animated-text";
import DottedButton from "./ui/dotted-button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

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
              "accessible",
              "responsive",
              "modern",
              "scalable",
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
      <div className="lg:basis-1/3 flex flex-col items-center  lg:items-end lg:justify-center max-sm:mt-10 mb-10 max-sm:scale-90 max-md:scale-90">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mb-3 text-4xl lg:text-6xl font-bold text-white tracking-tighter"
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
            className="lg:text-xl my-1 font-extralight max-lg:text-center"
          >
            <h3 className="">{data.title}</h3>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6 }}
        >
          <Separator className="mt-3 mb-3 w-[200px]  lg:w-[250px]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6.5 }}
          className="flex items-center space-x-3"
        >
          <DottedButton className="mt-2 z-0">
            <Link href="/about">View Resume/CV</Link>
          </DottedButton>
          <DottedButton className="mt-2 z-0">
            <Link href="https://github.com/ethancreates" target="_blank">
              <SiGithub className="text-2xl" />
            </Link>
          </DottedButton>
          <DottedButton className="mt-2 z-0">
            <Link
              href="https://www.linkedin.com/in/ethancreates/"
              target="_blank"
            >
              <SiLinkedin className="text-2xl" />
            </Link>
          </DottedButton>
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
