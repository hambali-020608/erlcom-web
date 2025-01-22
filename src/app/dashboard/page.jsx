
import Link from "next/link"
import AuthUser from "../../lib/authUser"
import Aside from "../../components/dashboard/Aside"
import Ecommerce from '@/components/dashboard/Dashboard/E-commerce'
import DefaultLayout from '../../components/dashboard/Layouts/DefaultLayout'
import prisma from "../../lib/prisma"


export default async function Dashboard(){


    return(
        
<>

<Ecommerce/>


</>
    )
}