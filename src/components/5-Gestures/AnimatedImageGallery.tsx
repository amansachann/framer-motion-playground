"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const images = [
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
  {
    id: 5,
    title: "Golden Desert",
    description: "Dunes glowing under a setting sun",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "Starry Night",
    description: "A galaxy of stars in the night sky",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 7,
    title: "Snowy Peaks",
    description: "Mountains covered in fresh snow",
    image:
      "https://plus.unsplash.com/premium_photo-1673283780222-8a7b3366e0ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3klMjBwZWFrc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    title: "Wildflower Meadow",
    description: "A field of colorful flowers",
    image:
      "https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVsaXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    title: "Crystal Clear Lake",
    description: "A pristine lake reflecting the sky",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 10,
    title: "Misty Hills",
    description: "Clouds rolling over lush green hills",
    image:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 11,
    title: "Canyon Majesty",
    description: "A grand canyon with striking views",
    image:
      "https://images.unsplash.com/photo-1458777455172-e3f6e7805b80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbnlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    title: "Autumn Vibes",
    description: "Golden leaves under a clear blue sky",
    image:
      "https://images.unsplash.com/photo-1453959022778-cfda85dbe0f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXV0dW1ufGVufDB8fDB8fHww",
  },
  {
    id: 13,
    title: "Tropical Paradise",
    description: "A beach with turquoise waters",
    image:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJvcGljYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    title: "Foggy Morning",
    description: "A mystical forest shrouded in fog",
    image:
      "https://images.unsplash.com/photo-1536851770770-93bc6b39ebb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9nJTIwbW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    title: "Sunny Vineyard",
    description: "Rows of grapevines under a sunny sky",
    image:
      "https://plus.unsplash.com/premium_photo-1664299261089-567b80552399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VubnklMjB2aW5leWFyZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    title: "Frozen River",
    description: "A river frozen solid in winter",
    image:
      "https://images.unsplash.com/photo-1520777172464-657bc9c663a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvemVuJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    title: "Urban Jungle",
    description: "Skyscrapers surrounded by greenery",
    image:
      "https://images.unsplash.com/photo-1666489022561-fbed9186153a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVyYmFuJTIwc2t5c2NyYXBlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 18,
    title: "Waterfall Wonder",
    description: "A majestic waterfall in a forest",
    image:
      "https://images.unsplash.com/photo-1508690471604-cafd081190a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFqZXN0aWMlMjB3YXRlcmZhbGwlMjBpbiUyMGElMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 19,
    title: "Golden Horizon",
    description: "The sun setting over calm waters",
    image:
      "https://images.unsplash.com/photo-1484766280341-87861644c80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGhlJTIwc3VuJTIwc2V0dGluZyUyMG92ZXIlMjBjYWxtJTIwd2F0ZXJzfGVufDB8fDB8fHww",
  },
  {
    id: 20,
    title: "Cloudy Peaks",
    description: "Mountains piercing through the clouds",
    image:
      "https://images.unsplash.com/photo-1598601065215-751bf8798a2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW5zJTIwcGllcmNpbmclMjB0aHJvdWdoJTIwdGhlJTIwY2xvdWRzfGVufDB8fDB8fHww",
  },
];

const AnimatedImageGallery = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] w-full">
        {/* <motion.div
          className="flex flex-none gap-10 -translate-x-1/2 py-10"
          initial={{ x: "-50%" }}
          animate={{ x: "0" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="relative max-w-96 rounded-xl cursor-pointer h-60 flex-none"
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="rounded-xl object-cover h-full"
              />
              <motion.div
                className="absolute bg-gradient-to-tr from-indigo-500 via-transparent to-black/50 text-white inset-0 flex items-start justify-end flex-col opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                whileHover={{ opacity: 1 }}
              >
                <h1 className="text-2xl font-semibold text-white ml-5 drop-shadow-lg">
                  {`${item.id}-${item.title}`}
                </h1>
                <p className="text-base text-white/80 ml-5 mb-3 mt-1 drop-shadow-md">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div> */}
        <motion.div
          className="flex flex-none gap-10 py-10"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="relative max-w-96 rounded-xl cursor-pointer h-60 flex-none"
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="rounded-xl object-cover h-full"
              />
              <motion.div
                className="absolute bg-gradient-to-tr from-indigo-500 via-transparent to-black/50 text-white inset-0 flex items-start justify-end flex-col opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                whileHover={{ opacity: 1 }}
              >
                <h1 className="text-2xl font-semibold text-white ml-5 drop-shadow-lg">
                  {`${item.id}-${item.title}`}
                </h1>
                <p className="text-base text-white/80 ml-5 mb-3 mt-1 drop-shadow-md">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedImageGallery;
