"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedShape = () => {
  const boxVariants = {
    initial: { scale: 1, rotate: 0, skew: 0 },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
      transition: { duration: 0.3 },
    },
    click: { scale: 0.9, rotate: -15, transition: { duration: 0.3 } },
  };
  return (
    <>
      <motion.div
        variants={boxVariants}
        className="h-40 w-40 bg-rose-500 rounded-2xl"
        initial="initial"
        whileHover="hover"
        whileTap="click"
      />
    </>
  );
};

export default AnimatedShape;
