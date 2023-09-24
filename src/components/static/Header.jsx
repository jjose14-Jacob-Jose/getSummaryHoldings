'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { animateHeader } from "@/constants/framer_motion_utils";

 /**
 * Header component of the site.
 * 
 * @author pdoddi
 */ 
export default function Header() {
    return(
        <motion.div
            variants={animateHeader} initial="hidden" whileInView="show" 
            viewport={{once: true}} 
            className="p-4 mx-2 mobile:mx-4 mt-2 mb-2 flex gap-2 items-center justify-between text-sm align-middle">
            <Link href="/" rel="noopener noreferrer" >
                <img 
                     src="/Logo.png"
                     alt="Logo"
                     className="w-[47px] h-[50px] rounded-lg bg-white p-[2px]"
                />
            </Link>
            <div className="flex gap-8 items-center align-middle">
            {/* <Link  href="/home" rel="noopener noreferrer">Home</Link> */}
            {/* <Link  href="/">About</Link> */}
            {/* Light/dark mode button */}
            {/* Help modal button */}

            {/*Added Lite page here.    */}
            <Link href="/lite" rel="noopener noreferrer" target="_blank" className="p-2 px-4 h-fit text-white hover:text-[#2A2C32] border-[1px] font-light rounded  hover:bg-white hover:font-light items-center">
                Lite Version
            </Link>
            
            <Link href="mailto:support@getsummaryholdings.com" rel="noopener noreferrer" target="_blank" className="p-2 px-4 h-fit text-white hover:text-[#2A2C32] border-[1px] font-light rounded  hover:bg-white hover:font-light items-center">
                Contact Support
            </Link></div>
        </motion.div>
    )
};