import Image from "next/image"
import Menu from "./menu"
import Banner from "./banner"
export default function Hero(){
    return (
        <section className="relative min-h-[60vh]">
            <Banner/>
                            <div className=" bg-white  gap-1 flex justify-center content-center items-center">
                                
                               <Menu title="ACHIEVEMENT"/>
                               <Menu title="OVERSEAS"/>
                               <Menu title="LEADERSHIP"/>
                                
                             
                            </div>
                        </section>
    )
}