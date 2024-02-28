"use client";

import { motion } from "framer-motion";

export const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-white/20 lg:border-white border-dotted absolute z-0 -left-[250px] -top-[200px]"
    />
  );
};

export const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-white/20 lg:border-white border-dotted absolute z-0 -right-[250px] -bottom-[200px] "
    />
  );
};
