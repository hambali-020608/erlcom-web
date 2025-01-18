"use client";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, EffectCards, EffectCoverflow, EffectCreative} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative"
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";

export default function Banner() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay,EffectCoverflow,EffectCreative]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -500],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      spaceBetween={20}
      slidesPerView={1}
      className="w-full h-[600px]"
      effect="creative"
     
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
          
      <SwiperSlide className="">
        <Image alt="erl com banner1" src="/images/banner/banner2.jpg" className="w-full object-fill" width={500}  height={700}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="erl com banner1" src="/images/banner/banner4.jpg" className="w-full" width={500}  height={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="erl com banner1" src="/images/banner/banner3.jpg" className="w-full" width={500}  height={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="erl com banner1" src="/images/banner/banner5.jpg" className="w-full" width={500}  height={500} />

      </SwiperSlide>
      ...
    </Swiper>
  );
}
