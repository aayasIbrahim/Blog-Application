"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const facilitiesData = [
  "Affordable Price",
  "Professional Team",
  "Best Design Priority",
  "Easy For Consultation",
  "Guaranteed Quality",
];

// Motion Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Facilities = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center">
        {/* Left Image with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="w-80 mx-auto rounded-2xl ]"
            src="https://i.pinimg.com/736x/f4/87/7e/f4877e8b393f516a4b0f0f77d776344c.jpg"
            alt="facilities-img"
          />
        </motion.div>

        {/* Right Side - Facilities List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="space-y-6"
        >
          <h2 className="text-3xl font-extrabold text-gray-100 mb-6 text-center lg:text-left">
            Our Facilities
          </h2>

          <ul className="space-y-4">
            {facilitiesData.map((facility, index) => (
              <motion.li
                key={index}
                custom={index * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="flex items-center gap-4 bg-gray-800 border border-gray-700 shadow-md p-4 rounded-2xl hover:shadow-[0_0_20px_rgba(233,163,25,0.6)] transition-all duration-300"
              >
                <IoMdCheckmarkCircleOutline className="text-4xl text-[#E9A319]" />
                <span className="text-lg font-semibold text-gray-200">
                  {facility}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
