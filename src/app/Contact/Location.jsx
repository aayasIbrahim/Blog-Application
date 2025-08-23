"use client";
import { AiFillEnvironment } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <AiFillEnvironment className="text-yellow-400 text-4xl sm:text-3xl" />,
    text: "99 Roving St., Big City, PKU 23456",
  },
  {
    icon: <BsTelephoneInbound className="text-yellow-400 text-3xl sm:text-2xl mt-1" />,
    text: "+123-456-789",
  },
  {
    icon: <MdOutlineMarkEmailRead className="text-yellow-400 text-3xl sm:text-2xl mt-1" />,
    text: "hello@awesomesite.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Location = () => {
  return (
    <motion.div
      className="lg:ml-16 px-4  sm:px- py-6 rounded-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-3xl mt-3 sm:text-2xl font-extrabold mb-12 text-yellow-400 text-center">
        Need a Consultation For Your Home?
      </h2>

      <motion.ul className="space-y-7">
        {contactInfo.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center bg-gradient-to-r from-white/90 to-white/70 p-6 sm:p-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
          >
            {item.icon}
            <span className="ml-5 text-lg sm:text-base font-medium text-gray-900">
              {item.text}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Location;
