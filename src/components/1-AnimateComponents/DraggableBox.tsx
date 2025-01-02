"use client";
import React from "react";
import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <>
      <motion.div
        className="size-24 bg-amber-300 rounded-xl"
        drag
        dragConstraints={{ left: -100, right: 100 }}
      />
    </>
  );
};

export default DraggableBox;
