"use client";
import React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

// Motion variants
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

function Header() {
  return (
    <section>
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 sm:order-2 flex justify-center"
          >
            <img
              className="w-80 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              src="https://i.pinimg.com/736x/f2/b6/2f/f2b62fff563fcf6dc38c58cb9175bbfc.jpg"
              alt="about-image"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 sm:order-1 text-left sm:text-center"
          >
            <motion.h3
              className="text-lg text-yellow-500 font-semibold tracking-wider"
              variants={textVariant}
              custom={0.2}
            >
              ABOUT HOME DECOR IDEAS
            </motion.h3>

            <motion.h1
              className="text-5xl font-extrabold mt-4 mb-6 leading-snug sm:text-4xl"
              variants={textVariant}
              custom={0.4}
            >
              Story of Our Creation
            </motion.h1>

            <motion.p
              className="text-gray-300 mb-8 text-lg sm:text-base font-medium sm:text-justify"
              variants={textVariant}
              custom={0.6}
            >
              We’re passionate about transforming houses into beautiful,
              personalized homes. From the latest design trends to timeless
              decorating tips, we provide inspiration and practical advice to
              help you style every room with confidence. Whether you're updating
              a cozy corner or doing a full makeover, we’re here to spark your
              creativity and make your space truly yours.
            </motion.p>

            {/* Counter Section */}
            <motion.div
              variants={textVariant}
              custom={0.8}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
            >
              <Counter />
            </motion.div>

            {/* Learn More Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="text-center sm:mx-0 px-10 py-3 bg-[#034C53] hover:bg-yellow-500 transition-colors duration-300 text-white font-semibold rounded-xl shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Header;
