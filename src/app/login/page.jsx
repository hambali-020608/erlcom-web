'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status === 200) {
      setMessage(data.message);
      router.push("/dashboard");
    } else {
      setError("Email atau password salah");
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-center text-3xl font-bold text-indigo-600">Login</h1>
        <p className="text-center text-gray-500">Masuk ke akun Anda untuk melanjutkan</p>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="w-full rounded-lg border border-gray-300 p-3 mt-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Masukkan email Anda"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 mt-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Masukkan password Anda"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-3 rounded-lg"
          >
            Masuk
          </button>

          <p className="text-center text-gray-500 text-sm">
            Belum punya akun? <a className="text-indigo-600 font-medium" href="/sign-up">Daftar sekarang</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}
