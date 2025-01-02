"use client";
import React, {  useState } from "react";
import { motion } from "framer-motion";

const BouncingBall = () => {

  const randomHeight = () => Math.floor(Math.random() * (400 - 150 + 1) + 150);
  const [bounceHeight, setBounceHeight] = useState(randomHeight());

  return (
    <>
      <section className="relative flex justify-center">
        <motion.div
          className="size-40 bg-emerald-400 rounded-full"
          initial={{ y: -8 }}
          animate={{ y: [-5, -bounceHeight, -5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            onRepeat: () => setBounceHeight(randomHeight()),
          }}
        />
        <div className="absolute w-96 bottom-0 border-b border-white/10 shadow-2xl shadow-white h-4 bg-yellow-400 translate-y-1/2 rounded-full"></div>
      </section>
    </>
  );
};

export default BouncingBall;
