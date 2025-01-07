interface cardProps{
    title: string


}

export default function Card({title}:cardProps) {
    return(
        <a href="#" className="  group relative block bg-black max-h-44 ">
  <img
    alt=""
    src="/images/banner/banner1.jpg"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
<p className="text-sm font-medium uppercase tracking-widest text-white">{title} </p>



    <div className="">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
    )
    
}