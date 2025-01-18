"use client";
import Image from "next/image";
import NavLink from "./navlink";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="navbar bg-blue-600 " >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="flex-none">
   <img src="/images/logo/Erl.png" width="50" alt="" />
  </div>

    <a className="btn btn-ghost text-xl text-white">ErlCom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink title="Home" pathName={pathName} currentPath="/"/>
      <li className="z-50">
        <details>
          <summary className="text-white">Programs</summary>
          <ul className="p-2">
      <NavLink title="Microsoft Office" pathName={pathName} currentPath="/design"/>
      <NavLink title="Desain Grafis" pathName={pathName} currentPath="/ms-office"/>
            
          </ul>
        </details>
      </li>
      <li className="z-50">
        <details>
          <summary className="text-white">Gallery</summary>
          <ul className="p-2">
      <NavLink title="Foto" pathName={pathName} currentPath="/gallery/foto"/>
      <NavLink title="Video" pathName={pathName} currentPath="/gallery/video"/>
            
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    {/* Base */}


{/* Pill */}

<a
  className="group inline-block rounded-full bg-black p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="/login"
>
  <span
    className="block rounded-full bg-black text-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
  >
    Login
  </span>
</a>
  </div>
</div>
  );
}
