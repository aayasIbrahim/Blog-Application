"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FormLogo from "../../components/FormLogo";

export default function SignUp() {
  const router = useRouter();
  const [signup, setSignUp] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!signup.name.trim()) newErrors.name = "Username is required";
    if (!signup.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!signup.password.trim()) {
      newErrors.password = "Password is required";
    } else if (signup.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/proses_register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signup),
        }
      );

      const data = await response.json();
      if (response.ok) setShowConfirmMessage(true);
      else setErrors({ general: data.message || "Registration failed" });
    } catch (error) {
      setErrors({ general: "Network or server error" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (showConfirmMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#012f34] to-gray-800 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 text-center"
        >
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            Registration Successful!
          </h2>
          <p className="text-white/80 mb-6">
            Please check your email and{" "}
            <span className="text-yellow-400 italic">confirm your registration</span>.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/login")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#034C53] to-[#E9A319] text-white font-semibold shadow-lg transition duration-300"
          >
            Go to Login
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#012f34] to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8"
      >
        <FormLogo />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white text-center mb-6"
        >
          Create Your Account
        </motion.h2>

        <form className="space-y-4" onSubmit={handleSignUp} noValidate>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] transition"
            type="text"
            name="name"
            placeholder="Username"
            value={signup.name}
            onChange={onInputChange}
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] transition"
            type="email"
            name="email"
            placeholder="Email"
            value={signup.email}
            onChange={onInputChange}
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] transition"
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={onInputChange}
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}

          {errors.general && <p className="text-red-400 text-sm">{errors.general}</p>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#034C53] to-[#E9A319] text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <motion.p
          whileHover={{ scale: 1.02 }}
          className="text-white text-center mt-4"
        >
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-yellow-400 cursor-pointer font-semibold hover:underline"
          >
            Login
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
