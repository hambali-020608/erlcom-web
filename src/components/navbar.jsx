import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo/Erl.png"
            alt="Logo 1"
            width={30}
            height={30}
          />
          <Image
            src="/images/logo/lkp.png"
            alt="Logo 2"
            className=""
            width={30}
            height={30}
          />
        </div>
        <ul className=" text-gray-700 menu menu-horizontal px-1">
          <li>
            <a href="#" className="text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li className="z-50">
            <details className="">
              <summary>Program</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Microsoft Office</a>
                </li>
                <li>
                  <a>Design Grafis</a>
                </li>
              </ul>
            </details>
          </li>
         
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Testimoni</a>
          </li>
          <li>
            <a href="#">Alumni</a>
          </li>
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">Karir</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
