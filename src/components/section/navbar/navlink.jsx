import Link from "next/link";

export default function NavLink({title, pathName,currentPath}){

    return (
    <li>
            <Link href={currentPath} className={` ${pathName ===  currentPath ? 'text-yellow-500' : '' } `}>
              {title}
            </Link>
          </li>    
    )
}