"use client";

import React, { useState } from "react";
import BasicAnimatedButton from "../1-AnimateComponents/BasicAnimatedButton";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    title: "Lost in the Mountains",
    description: "A serene view of nature's beauty",
    image:
      "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "City at Dusk",
    description: "Glowing skyscrapers under a painted sky",
    image:
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Ocean Bliss",
    description: "Waves crashing under the golden sun",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Forest Trails",
    description: "A path through lush green trees",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedStaggeredGallery = () => {
  const [showImages, setShowImages] = useState(false);
  const handleShowImages = () => setShowImages((prev) => !prev);
  return (
    <section className="flex flex-col items-center gap-6">
      <motion.div
        className="flex gap-4 items-center justify-center"
        variants={parentVariants}
        animate={showImages ? "visible" : "hidden"}
      >
        {galleryImages.map(({ id, image, title }) => (
          <motion.img
            src={image}
            alt={title}
            key={id}
            width={1920}
            height={1080}
            className="max-w-72 max-h-48 object-cover rounded-xl"
            variants={childVariants}
          />
        ))}
      </motion.div>
      <BasicAnimatedButton onClick={handleShowImages}>
        {showImages ? "Hide Images" : "Show Images"}
      </BasicAnimatedButton>
    </section>
  );
};

export default AnimatedStaggeredGallery;
