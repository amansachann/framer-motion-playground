"use client";
import React from "react";
import { motion } from "framer-motion";

const BouncingBall = () => {


  return (
    <>
      <section className="relative flex justify-center">
        <motion.div
          className="size-40 bg-emerald-400 rounded-full"
          initial={{ y: -5 }}
          animate={{ y: [0, -400, 0, -300, 0, -150, 0] }} // Decreasing bounce height
          transition={{
            duration: 6, // Adjust for slower bounces
            repeat: Infinity,
            ease: "easeOut", // Gravity effect
          }}
        />
        <div className="absolute w-96 bottom-0 border-b border-white/10 shadow-2xl shadow-white h-4 bg-yellow-400 translate-y-1/2 rounded-full"></div>
      </section>
    </>
  );
};

export default BouncingBall;
