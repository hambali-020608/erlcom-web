'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
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
    
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status === 200) {
      setMessage("Pendaftaran berhasil! Mengarahkan ke halaman login...");
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setError("Terjadi kesalahan, silakan coba lagi.");
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-500 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-lg bg-white p-12 rounded-3xl shadow-2xl space-y-6 border border-gray-300">
        <h1 className="text-center text-5xl font-extrabold text-blue-700">Buat Akun</h1>
        <p className="text-center text-gray-500 text-lg">Gabung sekarang dan nikmati pengalaman terbaik!</p>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        {message && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-lg"
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-gray-600 font-medium">Nama Lengkap</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="w-full rounded-lg border border-gray-300 p-4 mt-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="w-full rounded-lg border border-gray-300 p-4 mt-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan email Anda"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-600 font-medium">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="w-full rounded-lg border border-gray-300 p-4 mt-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan password Anda"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-4 rounded-lg text-lg shadow-md"
          >
            Daftar Sekarang
          </button>

          <p className="text-center text-gray-500 text-sm">
            Sudah punya akun? <a className="text-blue-600 font-semibold" href="/login">Masuk di sini</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}
