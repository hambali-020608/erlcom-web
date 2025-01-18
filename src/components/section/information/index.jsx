import Card from './card'

export default function Information(){
    return(
        <section className='mt-20 mb-20 '>
            <h1 className="text-2xl text-blue-600 text-center mb-10">Biaya Pendaftaran Kursus</h1>
            <div className="flex gap-10 justify-center ">
           
<Card title="Brosur Pendaftaran" textButton="Tampilkan"/>
<Card title="Biaya Pendaftaran" textButton="Lihat Biaya"/>
<Card title="Hubungi Support" textButton="Hubungi"/>

</div>
        </section>
    )
}