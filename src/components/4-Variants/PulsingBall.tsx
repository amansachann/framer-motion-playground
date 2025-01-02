"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const PulsingBall = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.div
        className="size-80 bg-indigo-400 rounded-full cursor:pointer"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.3 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        onClick={() => setIsVisible((prev) => !prev)}
      />
    </>
  );
};

export default PulsingBall;
