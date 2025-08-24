"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Continuous subtle floating 3D effect
  const logoFloat = {
    animate: {
      rotateY: [0, 10, -10, 0], // Y-axis rotation
      rotateX: [0, 5, -5, 0],   // X-axis rotation
      scale: [1, 1.05, 1, 1.05], // slight scale
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <nav className="bg-[#0F172A] text-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 text-2xl font-bold tracking-wide text-[#38BDF8] flex items-center cursor-pointer"
              {...logoFloat}
            >
              <Image
                src="https://i.pinimg.com/236x/f0/01/ee/f001eeec40fded272fa8c7427f4a07ae.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="inline-block mr-2 rounded-full shadow-lg"
              />
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-[#38BDF8] transition">
                Home
              </Link>
              <Link href="About" className="hover:text-[#38BDF8] transition">
                About
              </Link>
              <Link href="Contact" className="hover:text-[#38BDF8] transition">
                Contact
              </Link>
              <Link href="Login" className="hover:text-[#38BDF8] transition">
                Log In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-200 hover:text-white focus:outline-none text-2xl"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-in Mobile Menu */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-full w-64 bg-[#0F172A] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <motion.div {...logoFloat} className="text-xl font-bold text-[#38BDF8] flex items-center">
            <Image
              src="https://i.pinimg.com/236x/f0/01/ee/f001eeec40fded272fa8c7427f4a07ae.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="inline-block mr-2 rounded-full shadow-lg"
            />
            MyBrand
          </motion.div>
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-white">
          <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
          <Link href="About" className="hover:text-[#38BDF8] transition">About</Link>
          <Link href="Contact" className="hover:text-[#38BDF8] transition">Contact</Link>
          <Link href="Login" className="hover:text-[#38BDF8] transition">Log In</Link>
        </nav>
      </div>
    </>
  );
}
