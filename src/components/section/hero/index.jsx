'use client'
import { motion } from 'motion/react';
import 'aos/dist/aos.css';

export default function Hero() {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-[90vh] flex items-center">
      <div className="hero-content flex-col lg:flex-row-reverse lg:space-x-8 space-y-8 lg:space-y-0 px-6 gap">
        <img
          src="/images/banner/computer.png"
          className="max-w-sm z-40"
          data-aos="fade-left"
        />
        
        <div className="text-center lg:text-left text-white">
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            data-aos="fade-right"
          >
            Belajar Komputer dengan Mudah dan Menyenangkan
          </motion.h1>
          
          <motion.p
            className="py-6 max-w-lg mx-auto lg:mx-0 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            data-aos="fade-right"
          >
            Jadi ahli di bidang teknologi dengan kursus yang dirancang untuk pemula hingga profesional.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Daftar Online
          </motion.button>
        </div>
      </div>
    </section>
  );
}
