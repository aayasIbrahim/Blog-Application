"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { GiModernCity, GiClassicalKnowledge } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";

// Motion variants for cards
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  { icon: <AiFillCodeSandboxCircle />, title: "European Design", color: "#F75A5A" },
  { icon: <GiModernCity />, title: "Modern City", color: "#FFA955" },
  { icon: <HiHomeModern />, title: "Modern Design", color: "#FFD63A" },
  { icon: <GiClassicalKnowledge />, title: "Classic Design", color: "#48A6A7" },
];

const ServiceSection = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-center">{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
