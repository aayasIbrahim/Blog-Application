"use client";
import React from "react";
import { motion } from "framer-motion";

// Motion variant for opacity fade
const fadeInOpacity = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const ChoiceDesign = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 sm:grid-cols-1 gap-10 items-center">
        
        {/* Left Section: Titles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInOpacity}
          className="lg:ml-8 sm:text-center"
        >
          <h3 className="text-lg text-yellow-500 font-medium tracking-wide">
            WHY CHOOSE US
          </h3>
          <h2 className="text-5xl font-extrabold mt-3 mb-6 sm:text-4xl">
            Dream. Create. Live.
          </h2>
        </motion.div>

        {/* Right Section: Paragraphs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInOpacity}
          className="sm:text-center"
        >
          <p className="text-gray-300 text-lg font-medium mb-4 leading-relaxed">
            At Home Decor Ideas, we blend style with practicality to bring you
            the best in home inspiration. Our carefully curated ideas are easy
            to follow, budget-friendly, and tailored to suit every taste.
          </p>
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
            Whether you're a DIY enthusiast or just looking for a fresh look,
            we make decorating simple, enjoyable, and uniquely you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChoiceDesign;
