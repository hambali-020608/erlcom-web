'use client'
import { motion } from "framer-motion";

export default function Card({ title, textButton, aos }) {
  return (
    <motion.div
      className="card w-96 shadow-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl "
    
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-body ">
        <h2 className=" text-2xl font-bold mb-3 text-center">{title}</h2>
        <div className="card-actions justify-center">
          <button className="px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition flex items-center gap-2">
            {textButton}
            <span className="material-icons"></span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}