import Card from './card'

export default function Information(){
    return(
        <section className='mt-20 mb-20 '>
            <h1 className="text-2xl text-blue-600 text-center mb-10">Biaya Pendaftaran Kursus</h1>
            <div className="flex gap-10 justify-center ">
           
<Card title="Brosur Pendaftaran" textButton="Tampilkan" aos="flip-up"/>
<Card title="Biaya Pendaftaran" textButton="Lihat Biaya" aos="flip-up" />
<Card title="Hubungi Support" textButton="Hubungi" aos="flip-up"/>

</div>
        </section>
    )
}