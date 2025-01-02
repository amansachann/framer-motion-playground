"use client";
import React from "react";
import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <>
      <div className="flex gap-3">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="size-8 bg-rose-500 rounded-full"
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BouncingLoader;
