"use client";
import { motion } from "framer-motion";
import FooterHeading from "./FooterHeading";
import FooterNavigation from "./FooterNavigation";
import FooterTouch from "./FooterTouch";
import FooterProject from "./FooterProject";
import CopyRight from "./CopyRight";
import Line from "./Line";

// Parent container variants for staggered children
const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Each column variant
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Hover animation for links
const linkHover = {
  scale: 1.05,
  color: "#DEB142",
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0F172A] text-white"
    >
      <motion.div
        variants={container}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 p-10"
      >
        {/* Footer Heading */}
        <motion.div variants={item}>
          <FooterHeading />
        </motion.div>

        {/* Navigation */}
        <motion.div variants={item}>
          <h2 className="text-white text-md font-bold mb-2">Navigation</h2>
          <Line />
          <FooterNavigation>
            {({ links }) =>
              links.map((link, idx) => (
                <motion.a
                  key={idx}
                  whileHover={linkHover}
                  className="block mt-2 text-white/80 transition-colors duration-200"
                  href={link.href}
                >
                  {link.name}
                </motion.a>
              ))
            }
          </FooterNavigation>
        </motion.div>

        {/* Get in Touch */}
        <motion.div variants={item}>
          <h2 className="text-white text-md font-bold mb-2">Get In Touch</h2>
          <Line />
          <FooterTouch />
        </motion.div>

        {/* Projects */}
        <motion.div variants={item}>
          <h2 className="text-white text-md font-bold mb-2">Our Projects</h2>
          <Line />
          <FooterProject />
        </motion.div>
      </motion.div>

      {/* CopyRight Section */}
      <CopyRight />
    </motion.footer>
  );
}
