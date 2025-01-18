'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Profit = () => {
  const svgRef = useRef(null)
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    AOS.init()
    const sections = gsap.utils.toArray(sectionsRef.current);

    // Animasi GSAP
   const scrollTween =  gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
      
        end: () => `+=${sections.length * window.innerWidth}`,
      },
    });

    gsap.fromTo(svgRef.current,{y:500,opacity:0},{y:0,opacity:1, duration:2,ease:'none'})
    sections.forEach((section, index) => {
         // Menyembunyikan section saat scroll pertama kali
  
        gsap.to(section, {
          opacity: 1,
          duration: 1, // Durasi transisi opacity
          scrollTrigger: {
            scrub:1,
            trigger: section,
            start: 'top center', // Mulai saat bagian atas section mencapai center dari viewport
            end: 'bottom center', // Akhir saat bagian bawah section mencapai center
            toggleActions: 'play none none none', // Aksi animasi (play saat memasuki viewport)
          },
        });
  
        // Jika ada gambar SVG dalam section
        const svg = svgRef.current;
          // Menyembunyikan gambar SVG pada awal
  
          gsap.to(svg, {
            
            y: 100,
            duration:1,
            ease:'none',
            scrollTrigger: {
              trigger: section,
              start: 'top center ', // Menggunakan trigger pada section yang sama
              end: 'bottom center',
              containerAnimation:scrollTween,
              scrub:1,
              toggleActions: 'play none none reset',
              onUpdate: (self) => {
                // Perubahan posisi gambar berdasarkan arah scroll
                if (self.direction === 1) {
                  // Scroll ke kanan (atau bawah pada Y)
                  gsap.to(svgRef.current, { y: 400 * self.progress });
                } else {
                  // Scroll ke kiri (atau atas pada Y)
                  gsap.to(svgRef.current, { y: -100 * (1 - self.progress) });
                }
              
            },
            },
          });
        
      });
  

  

    // Bersihkan ScrollTrigger saat unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container"
      style={{
        display: 'flex',
        width: ``, // Lebar berdasarkan jumlah panel
        height: '100vh',
        overflow: 'hidden',
      }}
    >

        
      <div
        className="panel flex justify-center content-center bg-blue-600"
        ref={el => (sectionsRef.current[0] = el)}
        style={{
          width: '100vw',
          height: '120vh',
     
          
          
        }}
        
      >
        <div>
        <h1 className='text-4xl mt-5 mb-12 text-white pt-10 font-extrabold'>Apa Keuntungan Yang Anda Dapatkan?</h1>
        <img src="/images/banner/computer2.svg"  className='static' ref={svgRef} alt="" />        

        </div>
      </div>

      <div
        className="panel bg-yellow-500  flex justify-center text-center content-center "
        ref={el => (sectionsRef.current[1] = el)}
        style={{
          width: '100vw',
          height: '120vh',
          display: 'flex',
          
          
        }}
      >
        <div>
        <h1 style={{ color: 'white' }} className='text-4xl pt-10 mb-10 mt-5 font-bold'>Bisa Menggunakan microsoft office dengan baik</h1>
        <center>
        <img src="/images/banner/computer2.svg" width="300px" className='mb-10' alt=""   />
        <p className='max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores consequatur placeat, perferendis soluta aliquam quaerat autem animi et ducimus minus, nesciunt sunt voluptatibus ipsum officia debitis dolorum blanditiis voluptates?</p>
        </center>
        </div>
      </div>

      <div
        className="panel bg-blue-600"
        ref={el => (sectionsRef.current[2] = el)}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
        <h1 style={{ color: 'white' }} className='text-4xl pt-10 mb-10 mt-5 font-bold'>Bisa membuat design dengan baik</h1>
        <center>
        <img src="/images/banner/computer2.svg" width="300px" className='mb-10' alt=""   />
        <p className='max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores consequatur placeat, perferendis soluta aliquam quaerat autem animi et ducimus minus, nesciunt sunt voluptatibus ipsum officia debitis dolorum blanditiis voluptates?</p>
        </center>
        </div>
      </div>


    </div>
  );
};

export default Profit;
