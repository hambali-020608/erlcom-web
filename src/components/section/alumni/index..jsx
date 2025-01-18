import Banner from './banner'
export default function AlumniReview(){
    return(
    
            <div
  className="hero min-h-screen  "
  style={{
    backgroundImage: "url(/images/banner/banner2.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-white">
    <div className='max-w-6xl'>
      <h1 className="text-5xl font-bold text-center mb-20" data-aos="fade-down">Review Para Alumni</h1>

<Banner/>

   </div>
   </div>
 </div>

    )
}