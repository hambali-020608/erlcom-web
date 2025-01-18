import Header from "@/components/header";
import Navbar from "@/components/section/navbar/index";
import Card from "@/components/gallery/cardphoto/card";

export default function Gallery() {
    return(
        <>
        
        <Navbar/>
        
        <main className="pb-10 mt-20">
            <h1 className="text-5xl mb-20 text-center font-bold " data-aos="fade-down">Gallery Photo</h1>
        <div className="grid grid-cols-3 gap-5 px-10">    
        
    <Card title="Lorem dolor sit amet isum"/>
    <Card title="Lorem dolor sit amet isum"/>
    <Card title="Lorem dolor sit amet isum"/>
    <Card title="Lorem dolor sit amet isum"/>
    <Card title="Lorem dolor sit amet isum"/>
    <Card title="Lorem dolor sit amet isum"/>
</div>
        </main>
        
        </>
    )
    
}