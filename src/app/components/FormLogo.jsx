"use client";
import { motion } from "framer-motion";

const imgUrl =
  "https://i.pinimg.com/736x/b6/1d/7b/b61d7b66b72f3921d9a7e1beb7ebe298.jpg";

const FormLogo = () => {
  return (
    <figure className="px-10 pt-10 flex justify-center">
      <motion.img
        className="w-20 rounded-full shadow-lg"
        src={imgUrl}
        alt="signUp"
        animate={{
          y: [0, -20, 0], // upar niche bounce
        }}
        transition={{
          duration: 1.8, // ekta full cycle
          repeat: Infinity, // always cholbe
          repeatType: "loop", 
          ease: "easeInOut",
        }}
      />
    </figure>
  );
};

export default FormLogo;
