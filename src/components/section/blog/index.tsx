'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Blog() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section className="mt-32 mx-auto max-w-7xl px-6 mb-28 min-h-[80vh]">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">News Update</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className="relative block overflow-hidden rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Image
              src="/images/banner/banner1.jpg"
              alt="Blog Image"
              width={400}
              height={250}
              className="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity hover:bg-opacity-60 flex flex-col justify-end p-6">
              <p className="text-white text-lg font-semibold">Blog {item}</p>
              <motion.p
                className="text-white text-sm opacity-0 group-hover:opacity-100 mt-2 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
              </motion.p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
