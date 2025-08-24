"use client";

import React from "react";
import { saveMessage } from "../../utils/action/ContactAction.js";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  async function handleSubmit(formData) {
    const res = await saveMessage(formData);
    console.log(res)

    if (res.success) {
      toast.success("✅ মেসেজ পাঠানো হয়েছে!");
    } else {
      toast.error("❌ মেসেজ পাঠানো যায়নি");
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.form
      action={handleSubmit}   // 🔥 Server Action কে সরাসরি এখানে bind করো
      className="bg-gradient-to-br from-white/95 to-white/90 p-10 rounded-3xl shadow-2xl space-y-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Name fields */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg"
          required
        />
        <motion.input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg"
          required
        />
      </motion.div>

      {/* Email & Subject */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg"
          required
        />
        <motion.input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-5 py-4 border border-gray-300 rounded-lg"
          required
        />
      </motion.div>

      {/* Message */}
      <motion.textarea
        name="message"
        placeholder="Your Message..."
        rows="6"
        className="w-full px-5 py-4 border border-gray-300 rounded-lg resize-none"
        required
      ></motion.textarea>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-[#1B4D3E] to-[#E9A319] text-white font-semibold text-lg py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
