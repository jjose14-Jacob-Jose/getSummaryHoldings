'use client';

import Link from "next/link";
import Image from "next/image";
import { styles } from "@/constants/styles";
import FeaturesCarousel from "./FeaturesCarousel";
import { features_list, prototype_link } from "@/constants/component_constants";

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
            <div className="p-12 flex mx-auto justify-center items-center mb-24">
                    <div className="w-1/2">
                        <h1 className={`${styles.headingOne} pb-4`}>Serials Calculations. Simplified.</h1>
                        <p className={`${styles.paraTwo}`}>A free browser based solution that computes summary holdings of books for you.</p>
                    
                        <div className="flex gap-4 mt-8">
                            <Link 
                                href={prototype_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center">
                                Explore the Prototype
                            </Link>
                            <button onClick={() => scrollToLearnMore()} className="p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <Image 
                        src="/landing_illustration.png"
                        alt="Landing page illustration"
                        width={560}
                        height={480}
                        className="rounded-lg"
                    />
                </div> 
            {/* Learn More */}
            <div id="learnMoreSection">
                {/* Goodbye to taxing calculations section */}

                {/* Work faster section */}
                <div className="p-12 mx-auto justify-center items-center pt-28 pb-28">
                    <div className="flex mx-auto justify-center">
                        <h2 className={`text-center ${styles.headingTwo}`}>Work Faster by Getting Started</h2>
                        <img 
                            src="/text_highlight.png"
                            alt="Text highlight icon"
                            className="w-[15px] h-[30px] rotate-[140deg] -mt-5"
                        />
                    </div>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center mb-24 mt-28">
                        <Image 
                            src="/Logo draft 1.png"
                            alt="App Snapshot - fill out serial details"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                        <div className="w-3/5 align-middle">
                            <h3 className={`${styles.headingThree}`}>Fill out the details of the serial</h3>
                            <p className={`${styles.paraTwo}`}>Fill in details like the range of years of the book, the number of editions it has per year, etc. to get a detailed list of editions, issues, and years.</p>
                        </div>
                    </div>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center mb-24">
                        <div className="w-3/5 align-middle">
                            <h3 className={`${styles.headingThree}`}>Select the available issues</h3>
                            <p className={`${styles.paraTwo}`}>Check the available issues of the serial and mark them in the generated edition details.</p>
                        </div>
                        <Image 
                            src="/Logo draft 1.png"
                            alt="App Snapshot - select issues"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                    </div>
                    <div className="flex gap-12 align-middle items-center mx-auto justify-center">
                        <Image 
                            src="/Logo draft 1.png"
                            alt="App Snapshot - get summary holdings"
                            width={260}
                            height={80}
                            className="rounded-lg drop-shadow-lg"
                        />
                        <div className="w-3/5 align-middle">
                            <h3 className={`${styles.headingThree}`}>Get summary holdings data</h3>
                            <p className={`${styles.paraTwo}`}>Switch between <span className="inline font-medium">basic</span> and <span className="inline font-medium">detailed</span> views based on your need.</p>
                        </div>
                    </div>
                </div>

                {/* Features section */}
                <div className="p-12 mx-auto justify-center items-center bg-[#1E2027] pt-28 pb-28">
                    <div className="w-fit mx-auto justify-center">
                        <h2 className={`${styles.headingTwo} pl-[15px]`}>Explore Additional Features</h2>
                        <img 
                            src="/text_highlight.png"
                            alt="Text highlight icon"
                            className="w-[15px] h-[30px] -rotate-[50deg] -mt-2"
                        />
                    </div>
                    <div className="pt-28">
                        <FeaturesCarousel itemsData={features_list} />
                    </div>
                </div>

                {/* Contact section */}
            </div>
        </div>
    )
}