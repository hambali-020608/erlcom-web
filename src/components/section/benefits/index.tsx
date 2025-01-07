import Card from "./card";

export default function Benefits(){
    return(
        <section className="mt-16 bg-neutral-300 min-h-[50vh]">
            <h1 className="text-3xl text-center pt-10">Keungulan Kami</h1>
            <div className="grid grid-cols-3  gap-4 container justify-center px-10 mt-10">
                <Card title="Guru Berpengalaman"/>
                <Card title="Jadwal Fleksibel"/>
                <Card title="Bersertifikat"/>
                
            </div>

        </section>
    )
}