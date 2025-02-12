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
import {getPrograms} from '@/lib/getPrograms'

export default async function Home() {
  const user =await AuthUser()
  const programs =await getPrograms()

  return (
    <div>
                {/* <Header/> */}
                <Navbar user={user}/>
                    <main>
                        <Hero/>
                        <Benefits/>
                {console.log(programs)}
                        <Programs programs={programs} />
                        <Blog/>
                        <Profit/>
                        <Information/>
                        <AlumniReview/>
                    </main>
                    <Footer/>
                </div>

  );
}
