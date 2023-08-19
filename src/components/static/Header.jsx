'use client';

import Image from "next/image";
import Link from "next/link";

 /**
 * Header component of the site.
 * 
 * @author pdoddi
 */ 
export default function Header() {
    return(
        <div className="p-4 mx-4 mt-2 mb-2 flex gap-2 items-center justify-between text-sm align-middle">
            <Link href="/" rel="noopener noreferrer" >
                <img 
                     src="/Logo.png"
                     alt="Logo"
                     className="w-[50px] h-[50px] rounded-lg bg-white p-[2px]"
                />
            </Link>
            <div className="flex gap-8 items-center align-middle">
            {/* <Link  href="/home" rel="noopener noreferrer">Home</Link> */}
            {/* <Link  href="/">About</Link> */}
            {/* Light/dark mode button */}
            {/* Help modal button */}
            
            <Link href="mailto:support@getsummaryholdings.com" rel="noopener noreferrer" target="_blank" className="p-2 px-4 h-fit text-white hover:text-[#2A2C32] border-[1px] font-light rounded  hover:bg-white hover:font-light items-center">
                Contact Support
            </Link></div>
        </div>
    )
};