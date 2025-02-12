'use client'
import { motion } from "framer-motion";


export default function Programs({programs}) {
  
  return (
    <motion.section 
      className="mt-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="text-center text-5xl font-bold text-gray-900"
        data-aos="zoom-out-down"
      >
        Program Kami
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {programs.map((program, index) => (
          <motion.div 
            key={index}
            className="relative w-96 rounded-lg overflow-hidden shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-60 object-cover brightness-75 hover:brightness-100 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-2xl font-bold">{program.title}</h2>
              <p className="mt-2 text-sm">{program.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition">
                Detail Kelas
              </button>
              <a href={`/payment/${program.id}`} className="mt-4 ms-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition">
                Daftar Kelas
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}