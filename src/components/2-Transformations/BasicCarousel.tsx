"use client";
import React from "react";
import { motion } from "framer-motion";

const carouselItems = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Top innovations in AI for 2023",
    description:
      "A look into the most groundbreaking AI innovations that will shape industries in 2023.",
  },
  {
    title: "The rise of renewable energy sources",
    description:
      "An overview of how renewable energy is changing the global energy landscape.",
  },
  {
    title: "Blockchain's impact on finance",
    description:
      "How blockchain technology is revolutionizing the finance and banking sectors.",
  },
  {
    title: "The future of remote work",
    description:
      "Exploring the long-term effects of remote work on businesses and employees.",
  },
  {
    title: "Advancements in quantum computing",
    description:
      "What’s next for quantum computing and its potential to solve complex problems.",
  },
  {
    title: "Space exploration milestones in 2022",
    description:
      "The most significant achievements in space exploration over the past year.",
  },
  {
    title: "Data privacy laws across the globe",
    description:
      "A deep dive into data privacy regulations and how they vary worldwide.",
  },
  {
    title: "The evolution of social media marketing",
    description:
      "How businesses are leveraging social media platforms to engage with customers.",
  },
  {
    title: "Exploring the Metaverse",
    description:
      "What is the Metaverse, and how are companies positioning themselves in this new digital frontier?",
  },
  {
    title: "Artificial intelligence in healthcare",
    description:
      "How AI is transforming the healthcare industry, from diagnostics to patient care.",
  },
  {
    title: "Cybersecurity challenges in 2023",
    description:
      "An analysis of the most pressing cybersecurity issues facing companies today.",
  },
  {
    title: "The growth of e-commerce in emerging markets",
    description:
      "How e-commerce is thriving in developing economies and changing retail landscapes.",
  },
  {
    title: "Virtual reality in education",
    description:
      "How virtual reality is enhancing educational experiences and online learning.",
  },
  {
    title: "5G and its global impact",
    description:
      "Understanding the global rollout of 5G technology and its implications on various industries.",
  },
  {
    title: "The future of sustainable agriculture",
    description:
      "Exploring new methods in agriculture that prioritize sustainability and environmental protection.",
  },
  {
    title: "Electric vehicles revolutionizing transport",
    description:
      "The transformation of the transportation industry through the widespread adoption of electric vehicles.",
  },
  {
    title: "Digital currencies and the economy",
    description:
      "How digital currencies are reshaping the global economy and financial systems.",
  },
  {
    title: "The evolution of wearable technology",
    description:
      "A look at the latest innovations in wearable tech and its role in health and lifestyle.",
  },
  {
    title: "Augmented reality in retail",
    description:
      "How retailers are incorporating augmented reality to enhance the shopping experience.",
  },
];

const BasicCarousel = () => {
  return (
    <>
      <section className="w-screen">
        <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-8 flex-none"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            {[...carouselItems, ...carouselItems].map((item, index) => (
              <div key={`${item.title}-${index}`}>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-60 flex flex-col justify-center items-start">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BasicCarousel;
