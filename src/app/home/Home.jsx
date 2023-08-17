'use client';

import Link from "next/link";
import Image from "next/image";

/**
 * Home page component of the site. Describes the tool's purpose, features, etc.
 * 
 * @author pdoddi
 */
export default function Home() {

    return (
        <div className="items-center align-middle justify-center">
  
        <div className="p-12  flex gap-24 mx-auto justify-center items-center mb-24">
                <div className="w-2/5">
                    <h1 className="font-bold text-6xl pb-4 leading-tight">Get Summary Holdings</h1>
                    <p>A free browser based solution that computes summary holdings of books for you.</p>
                  
                    <div className="flex gap-4 mt-8">
                        <Link href="/" className="p-2 px-10 h-fit font-light bg-[#907360] text-white  rounded hover:bg-[#89634A] hover:font-light items-center">
                            Start Using It
                        </Link>
                        <Link href="mailto:support@getsummaryholdings.com" className="p-2 h-fit font-light text-white hover:underline underline-offset-4  items-center">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="">
                <Image 
                     src="/Logo draft 1.png"
                     alt="Portfolio Logo"
                     width={460}
                     height={380}
                     className="rounded-lg"
                />
                </div>
            </div> 
            {/* user guide */}
        </div>
    )
}