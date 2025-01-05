"use client";
import React from "react";
import { motion } from "framer-motion";

const parentVariants = {
  initial: { y: 0 },
  animate: { transition: { staggerChildren: 0.4 } },
};

const childVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
  },
};

const InstaTyping = () => {
  return (
    <>
      <motion.section
        className="flex gap-4 bg-gray-800 p-8 rounded-full"
        variants={parentVariants}
        initial="initial"
        animate="animate"
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
            variants={childVariants}
          />
        ))}
      </motion.section>
    </>
  );
};

export default InstaTyping;
