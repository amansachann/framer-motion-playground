"use client";
import React from "react";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggerAnimation = () => {
  return (
    <>
      <motion.div
        className="flex flex-col gap-4"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            className="w-24 h-24 bg-amber-300 rounded-full"
            key={index}
            variants={childVariants}
          />
        ))}
      </motion.div>
    </>
  );
};

export default StaggerAnimation;
