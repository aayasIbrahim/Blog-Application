// components/Banner.jsx
"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = ({ title, subtitle, textColor, imageUrl }) => {
  return (
    <section className="relative w-full h-64 md:h-80 flex flex-col justify-center items-center bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || "Banner image"}
          fill
          priority
          className="absolute inset-0 object-cover "
        />
      )}

      {/* Overlay */}
      <div className="absolute"></div>

      {/* Text */}
      <div
        className="relative z-10 text-center px-4"
        style={{ color: textColor || "#fff" }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-2 text-sm md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Banner;
