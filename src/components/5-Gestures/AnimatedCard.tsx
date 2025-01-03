"use client";
import Image from "next/image";
import React from "react";
import BasicAnimatedButton from "../1-AnimateComponents/BasicAnimatedButton";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotateY: 30, rotateX: 10 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{
          left: -50,
          top: -50,
          right: 50,
          bottom: 50,
        }}
        // dragElastic={0.2}
        transition={{type:'spring'}}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Crad-Image"
          width={1470}
          height={980}
          className="w-full h-54 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Card Title
          </h2>
          <p className="text-gray-500 font-medium">
            This is a simple card with framer motion animations and tailwind css
            for styling
          </p>
          <BasicAnimatedButton className="mt-3">Learn More</BasicAnimatedButton>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
