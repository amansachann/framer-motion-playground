"use client";
import React from "react";
import { motion } from "framer-motion";

const BasicFadeInAnimation = () => {
  return (
    <>
      <motion.div
        className="text-5xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        👋{" "}
        <span className="font-extrabold text-transparent bg-gradient-to-b from-gray-200 to-slate-500 bg-clip-text">
          Hey, I&apos;m Aman Sachan!
        </span>{" "}
        😄🚀
      </motion.div>
    </>
  );
};

export default BasicFadeInAnimation;
