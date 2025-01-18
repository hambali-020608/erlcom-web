import Card from "./card";


export default function Benefits() {
  const FeatureCard = ({ icon, title, description, highlighted,aos }) => (
    <div
      data-aos={aos}
      className={`p-6 rounded-lg ${
        highlighted ? "bg-lime-300" : "bg-white"
      } shadow-md flex flex-col items-center text-center `}
    >
      <div className="text-4xl mb-4">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <section className=" min-h-[50vh] flex justify-center content-center align-middle  ">
      <div className="bg-white  -mt-10 rounded-lg shadow-lg p-8 flex-none lg:flex  justify-center gap-5 w-[90%] content-center item align-middle">
        <FeatureCard
          aos="fade-up"
          icon="fa-chalkboard-teacher"
          title="Guru Berpengalaman"
          description="Our top mentors bring valuable knowledge and experience to help you succeed."
        />
        <FeatureCard
          aos="fade-down"
          icon="fa-tags"
          title="Jadwal Fleksibel"
          description="We offer competitive pricing on all our courses, ensuring you receive the best value."
          highlighted
        />
        <FeatureCard
          aos="fade-down"
          icon="fa-lightbulb"
          title="Bersertifikat Resmi"
          description="With user-friendly navigation and engaging materials, you can dive into learning with ease."
        />
        <FeatureCard
        aos="fade-up"
          icon="fa-comments"
          title="Gratis percobaan"
          description="Our 1-to-1 mentoring connects you with dedicated professionals for personalized guidance."
        />
      </div>
    </section>
  );
}
