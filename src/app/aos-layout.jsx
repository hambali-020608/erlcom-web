'use client'
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from 'react';

export default function AOSLayout({children}){
    useEffect(()=>{
            AOS.init()
    })
    
    return(
        <>{children}</>
    )

}