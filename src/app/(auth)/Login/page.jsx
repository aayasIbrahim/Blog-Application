"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FormLogo from "../../components/FormLogo";

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(login),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const token = data.payload?.accessToken;
        if (!token) {
          setErrorMessage("Login failed: No token received.");
          return;
        }

        if (typeof window !== "undefined") {
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("token", token);
        }

        router.push("/");
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-[#012f34] to-gray-800">
      {/* Motion container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <FormLogo />
        </motion.div>

       
        {/* Inputs */}
        <div>
          <input
            className="w-full px-4 py-3 mt-2 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] transition"
            onChange={onValueChange}
            name="email"
            type="email"
            placeholder="Enter your email address..."
            required
          />

          <input
            className="w-full px-4 py-3 mt-4 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] transition"
            onChange={onValueChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          {errorMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-2"
            >
              {errorMessage}
            </motion.p>
          )}
        </div>

        {/* Login Button */}
        <motion.div whileTap={{ scale: 0.97 }} className="mt-6">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#034C53] to-[#E9A319] text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center my-6 text-gray-400">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="px-3 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        {/* Signup Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/SingUp")}
          className="w-full py-3 rounded-xl border border-[#E9A319] text-[#E9A319] hover:bg-[#E9A319] hover:text-white font-semibold transition duration-300"
        >
          Create An Account
        </motion.button>
      </motion.div>
    </div>
  );
}
