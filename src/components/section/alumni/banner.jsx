'use client'
import { motion } from 'framer-motion';  // Import motion
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner() {
  return (
    <Swiper
      spaceBetween={50}
      data-aos="fade-up"
      slidesPerView={2}
      className=" "
    >
      <SwiperSlide className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
        <div className="flex items-center gap-4">
          {/* Animasi gambar */}
          <motion.img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
            initial={{ opacity: 0 }}  // Mulai dengan transparansi
            animate={{ opacity: 1 }}  // Setelah animasi selesai, atur ke opacity 1
            transition={{ duration: 1 }}  // Durasi animasi 1 detik
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Ikon rating */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              {/* Lanjutkan ikon rating jika perlu */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
          </div>
        </div>

        {/* Animasi teks review */}
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}  // Teks muncul setelah setengah detik
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </motion.p>
      </SwiperSlide>
      
      <SwiperSlide className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
        <div className="flex items-center gap-4">
          {/* Animasi gambar */}
          <motion.img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
            initial={{ opacity: 0 }}  // Mulai dengan transparansi
            animate={{ opacity: 1 }}  // Setelah animasi selesai, atur ke opacity 1
            transition={{ duration: 1 }}  // Durasi animasi 1 detik
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Ikon rating */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              {/* Lanjutkan ikon rating jika perlu */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
          </div>
        </div>

        {/* Animasi teks review */}
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}  // Teks muncul setelah setengah detik
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </motion.p>
      </SwiperSlide>
      
      <SwiperSlide className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
        <div className="flex items-center gap-4">
          {/* Animasi gambar */}
          <motion.img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
            initial={{ opacity: 0 }}  // Mulai dengan transparansi
            animate={{ opacity: 1 }}  // Setelah animasi selesai, atur ke opacity 1
            transition={{ duration: 1 }}  // Durasi animasi 1 detik
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Ikon rating */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              {/* Lanjutkan ikon rating jika perlu */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
          </div>
        </div>

        {/* Animasi teks review */}
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}  // Teks muncul setelah setengah detik
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </motion.p>
      </SwiperSlide>
      
      {/* Swiper Slide lainnya */}
    </Swiper>
  );
}
