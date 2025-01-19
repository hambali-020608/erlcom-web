import Image from "next/image"
import Menu from "./menu"
import Banner from "./banner"
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Hero(){
    return (
        <section className="hero bg-blue-600 min-h-[90vh]" >
            
        
            <div className="hero-content  flex-col lg:flex-row-reverse ">
    <img
      src="/images/banner/computer.png"
      className="max-w-sm z-40"
      data-aos = "fade-left"
      />
    <div data-aos= "fade-right">
      <h1 className="text-5xl font-bold max-w-lg text-white ">Belajar komputer dengan mudah dan menyenangkan</h1>
      <p className="py-6 max-w-lg text-white">
       Jadi ahli di bidang teknologi dengan kursus yang dirancang untuk pemula hingga profesional
      </p>
      <button className="btn bg-sky-500 border-none  ">Daftar Online</button>
    </div>
  </div>

  

  
  
                        </section>
    )
}