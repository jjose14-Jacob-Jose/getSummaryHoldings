'use client';

import Link from "next/link";
import Image from "next/image";

/**
 * Home page component of the site. Describes the tool's purpose, features, etc.
 * 
 * @author pdoddi
 */
export default function Home() {

    function scrollToLearnMore(){
        const element = document.getElementById('learnMoreSection');
        if(element){
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="items-center align-middle justify-center">
  
        <div className="p-12  flex gap-24 mx-auto justify-center items-center mb-24">
                <div className="w-1/2">
                    <h1 className="font-normal text-6xl pb-4 leading-tight">Serials Calculations. Simplified.</h1>
                    <p className="text-lg">A free browser based solution that computes summary holdings of books for you.</p>
                  
                    <div className="flex gap-4 mt-8">
                        <Link href="/" className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center">
                            Explore the Prototype
                        </Link>
                        <button onClick={() => scrollToLearnMore()} className="p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center">
                            Learn More
                        </button>
                    </div>
                </div>
                <Image 
                     src="/Logo draft 1.png"
                     alt="Portfolio Logo"
                     width={460}
                     height={380}
                     className="rounded-lg"
                />
            </div> 
            {/* Learn More */}
            <div id="learnMoreSection">
            </div>
        </div>
    )
}