// components/Banner.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const Banner = ({ title, subtitle, textColor, imageUrl, prev }) => {
  return (
    <section className="relative w-full h-64 md:h-80 flex flex-col justify-center items-center bg-cover bg-center overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || "Banner image"}
          fill
          priority
          className="absolute inset-0 object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* টেক্সট */}
      <div
        className="relative z-10 text-center px-4"
        style={{ color: textColor || "#fff" }}
      >
        {/* হেডিং অ্যানিমেশন */}
        <motion.h1
          className="text-2xl md:text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* সাবটাইটেল অ্যানিমেশন */}
        {subtitle && (
          <motion.p
            className="mt-2 text-sm md:text-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* প্রিভিয়াস লিংক */}
        {prev && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 px-6 py-2 rounded-xl 
                 bg-white/10 backdrop-blur-md 
                 text-[#DEB142] font-semibold 
                 hover:bg-[#DEB142] hover:text-white 
                 hover:shadow-[#DEB142]/40 hover:shadow-lg
                 transition-all duration-500 ease-out"
            >
              {/* Arrow Icon */}

              {prev}
              <motion.span
                initial={{ x: -9 }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.2,
                }}
              >
              <SlArrowRight size={15} />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Banner;
