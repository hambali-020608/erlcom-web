import Hero from '@/components/section/hero/index'
import Navbar from '@/components/section/navbar/index'
import Blog from "@/components/section/blog";
import AlumniReview from '@/components/section/alumni/index.'
import Information from '@/components/section/information/index'
import Benefits from "@/components/section/benefits";
import Footer from '@/components/footer'
import Profit from '@/components/section/profit/index'
import Programs from '@/components/section/programs/index'
import AuthUser from '@/lib/authUser'

export default async function Home() {
  const user =await AuthUser()
  return (
    <div>
                {/* <Header/> */}
                <Navbar user={user}/>
                    <main>
                        <Hero/>
                        <Benefits/>
                        <Programs/>
                        <Blog/>
                        <Profit/>
                        <Information/>
                        <AlumniReview/>
                    </main>
                    <Footer/>
                </div>

  );
}
