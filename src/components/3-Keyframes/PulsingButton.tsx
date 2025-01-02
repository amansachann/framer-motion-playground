"use client";
import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <>
      <motion.a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base  text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 gap-2 font-semibold"
        animate={{
          scale: [1, 1.2, 1],
          backgroundImage: [
            "linear-gradient(to bottom right, #8B0AF6,#6F1FF1, #6366F1)",
            "linear-gradient(to bottom right, #8B2AF6,#6F2FF1, #6362F1)",
            "linear-gradient(to bottom right, #8F4AF6,#6F1FFF, #6362F1)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <BsFillLightningFill />
        <span className="relative">Button Text</span>
      </motion.a>
    </>
  );
};

export default PulsingButton;
