export default function Card({title}) {
    return(
        <a href="#" className="block" data-aos="fade-up">
  <img
    alt=""
    src="/images/banner/banner2.jpg"
    className="h-64 w-full object-cover sm:h-80 lg:h-96"
  />

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">{title} </h3>

</a>
    )
    
}