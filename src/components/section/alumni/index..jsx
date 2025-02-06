import Banner from './banner';

export default function AlumniReview() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/banner/banner2.jpg)",
      }}
    >
      {/* Gradient Overlay */}
      <div className="hero-overlay bg-gradient-to-r from-black to-transparent opacity-70"></div>

      <div className="hero-content text-white">
        <div className="max-w-6xl px-6 sm:px-12">
          {/* Animated Title */}
          <h1
            className="text-5xl font-extrabold text-center mb-20"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            Review Para Alumni
          </h1>

          {/* Banner */}
          <Banner />
        </div>
      </div>
    </div>
  );
}
