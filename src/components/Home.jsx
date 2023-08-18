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
            {/* Hero section */}
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

                {/* Work faster section */}
                <div className="p-12 mx-auto justify-center items-center">
                    <h2 className="text-center font-normal text-5xl pb-28">Work Faster by Getting Started</h2>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center mb-24">
                        <Image 
                            src="/Logo draft 1.png"
                            alt="Portfolio Logo"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                        <div className="w-3/5 align-middle">
                            <h3 className="font-medium text-3xl">Fill out the details of the serial</h3>
                            <p className="text-lg">Fill in details like the range of years of the book, the number of editions it has per year, etc. to get a detailed list of editions, issues, and years.</p>
                        </div>
                    </div>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center mb-24">
                        <div className="w-3/5 align-middle">
                            <h3 className="font-medium text-3xl">Select the available issues</h3>
                            <p className="text-lg">Check the available issues of the serial and mark them in the generated edition details.</p>
                        </div>
                        <Image 
                            src="/Logo draft 1.png"
                            alt="Portfolio Logo"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                    </div>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center mb-24">
                        <Image 
                            src="/Logo draft 1.png"
                            alt="Portfolio Logo"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                        <div className="w-3/5 align-middle">
                            <h3 className="font-medium text-3xl">Get summary holdings data</h3>
                            <p className="text-lg">Switch between <span className="inline font-medium">basic</span> and <span className="inline font-medium">detailed</span> views based on your need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}