import Image from "next/image";
import Header from '@/components/header'
import Hero from '@/components/section/hero/index'
import Navbar from '@/components/navbar'
import Blog from "@/components/section/blog";
import Benefits from "@/components/section/benefits";

export default function Home() {
  return (
    <div>
                <Header/>
                    <Navbar/>
                    <main>
                        <Hero/>
                        <Blog/>
                        <Benefits/>
                    </main>
                </div>

  );
}
