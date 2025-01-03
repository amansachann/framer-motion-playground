"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { BsFillLightningFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const BasicAnimatedButton = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <>
      <motion.button
        className={twMerge(
          "box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ease focus:outline-none",
          className
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => console.log("Mouse on Button 🧨")}
        onHoverEnd={() => console.log("Mouse away from button 🚀")}
        onClick={onClick}
      >
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:-translate-x-1"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-1"></span>
        <span className="relative z-20 flex items-center text-sm gap-2">
          <BsFillLightningFill className="size-4" />
          {children}
        </span>
      </motion.button>
    </>
  );
};

export default BasicAnimatedButton;
