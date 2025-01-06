import Image from "next/image";

export default function Home() {
  return (
    <div>
                    <header className="bg-sky-500 text-white py-2 flex justify-between items-center px-4">
                        <div className="flex items-center space-x-4">
                            <span>Info</span>
                            <span><i className="fas fa-phone-alt"></i> 081332428433</span>
                            <span><i className="fas fa-phone-alt"></i> 081333106528</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </header>
                    <nav className="bg-transparent">
                        <div className="container mx-auto flex justify-between items-center px-4">
                            <div className="flex items-center space-x-4">
                                <Image src="/images/logo/Erl.png" alt="Logo 1"  width={30} height={30}/>
                                <Image src="/images/logo/lkp.png" alt="Logo 2" className="" width={30} height={30}/>
                                
                            </div>
                            <ul className="flex space-x-6 text-gray-700">
                                <li><a href="#" className="text-yellow-500">Home</a></li>
                                <li><a href="#">Tentang Kami</a></li>
                                <li><a href="#">Program</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Testimoni</a></li>
                                <li><a href="#">Alumni</a></li>
                                <li><a href="#">Program Kampus</a></li>
                                <li><a href="#">Karir</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main>
                        <div className="relative">
                        <Image src='/images/banner/banner1.jpg' alt="erlcom banner 1" width={300} height={300} className="w-full"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 py-4 flex justify-around items-center">
                                <div className="text-center">
                                    <i className="fas fa-award text-3xl"></i>
                                    <p>ACHIEVEMENT</p>
                                </div>
                                <div className="text-center">
                                    <i className="fas fa-user-graduate text-3xl"></i>
                                    <p>CHARACTER</p>
                                </div>
                                <div className="text-center">
                                    <i className="fas fa-globe text-3xl"></i>
                                    <p>OVERSEAS</p>
                                </div>
                                <div className="text-center">
                                    <i className="fas fa-concierge-bell text-3xl"></i>
                                    <p>SERVICES</p>
                                </div>
                                <div className="text-center">
                                    <i className="fas fa-lightbulb text-3xl"></i>
                                    <p>LEADERSHIP</p>
                                </div>
                                <div className="text-center">
                                    <i className="fab fa-whatsapp text-3xl text-green-500"></i>
                                    <p>Hubungi Kami</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

  );
}
