"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContractForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.form
      className="bg-gradient-to-br from-white/95 to-white/90 p-10 rounded-3xl shadow-2xl space-y-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Name fields */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {["firstName", "lastName"].map((name, idx) => (
          <motion.input
            key={name}
            type="text"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={name === "firstName" ? "First Name" : "Last Name"}
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none shadow-sm transition-all duration-300 placeholder-gray-500"
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            required
          />
        ))}
      </motion.div>

      {/* Email & Subject */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {["email", "subject"].map((name, idx) => (
          <motion.input
            key={name}
            type={name === "email" ? "email" : "text"}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none shadow-sm transition-all duration-300 placeholder-gray-500"
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: (idx + 2) * 0.1 }}
            required
          />
        ))}
      </motion.div>

      {/* Message */}
      <motion.textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message..."
        rows="6"
        className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none shadow-sm transition-all duration-300 placeholder-gray-500 resize-none"
        variants={inputVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 4 * 0.1 }}
        required
      ></motion.textarea>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-[#1B4D3E] to-[#E9A319] text-white font-semibold text-lg py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContractForm;
