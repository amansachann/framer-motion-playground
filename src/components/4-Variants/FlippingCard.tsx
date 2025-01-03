"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <section style={{ perspective: `1000px` }}>
        <motion.div
          className="relative h-96 w-64 bg-white rounded-2xl"
          style={{ transformStyle: "preserve-3d" }}
          variants={{
            front: { rotateY: 0 },
            back: { rotateY: 180 },
          }}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6 }}
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <div
            className="flex items-center justify-center text-black inset-0 absolute font-semibold text-3xl tracking-tighter rounded-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            Front Side
          </div>
          <div
            className="flex items-center justify-center text-black inset-0 absolute font-semibold text-3xl tracking-tighter bg-indigo-500 rounded-2xl "
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            Back Side
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default FlippingCard;
