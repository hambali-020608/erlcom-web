'use client';
import React from 'react';
import { motion } from 'motion/react';

const sections = [
  {
    title: 'Apa Keuntungan Yang Anda Dapatkan?',
    image: '/images/banner/computer2.svg',
    bg: 'bg-blue-600',
    description: '',
  },
  {
    title: 'Bisa Menggunakan Microsoft Office dengan Baik',
    image: '/images/banner/computer2.svg',
    bg: 'bg-yellow-500',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores consequatur placeat, perferendis soluta aliquam quaerat autem animi et ducimus minus, nesciunt sunt voluptatibus ipsum officia debitis dolorum blanditiis voluptates?',
  },
  {
    title: 'Bisa Membuat Desain dengan Baik',
    image: '/images/banner/computer2.svg',
    bg: 'bg-blue-600',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores consequatur placeat, perferendis soluta aliquam quaerat autem animi et ducimus minus, nesciunt sunt voluptatibus ipsum officia debitis dolorum blanditiis voluptates?',
  },
];

const Profit = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`w-full h-screen flex flex-col justify-center items-center text-center p-10 ${section.bg}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl text-white font-extrabold mb-5"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {section.title}
          </motion.h1>
          <motion.img
            src={section.image}
            className="w-72 mb-5"
            alt=""
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          />
          {section.description && (
            <motion.p
              className="text-white max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
              {section.description}
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Profit;
