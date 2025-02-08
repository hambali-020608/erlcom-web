import Card from "./card";
export default function Information() {
    return (
      <section className="mt-20 mb-20 bg-gray-100 py-16 px-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-blue-600 text-center font-bold mb-12">Biaya Pendaftaran Kursus</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <Card title="Brosur Pendaftaran" textButton="Tampilkan" aos="flip-up" />
          <Card title="Biaya Pendaftaran" textButton="Lihat Biaya" aos="flip-up" />
          <Card title="Hubungi Support" textButton="Hubungi" aos="flip-up" />
        </div>
      </section>
    );
  }