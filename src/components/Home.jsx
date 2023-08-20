"use client";

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
  function scrollToLearnMore() {
    const element = document.getElementById("learnMoreSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

    return (
        <div className="items-center align-middle justify-center text-center lg:text-left">
            {/* Hero section */}
            <div className="px-6 pt-12 mobile:px-12 lg:flex xl:gap-8 mx-auto justify-center items-center mb-24">
                    <div className="lg:w-1/2 2xl:w-2/5">
                        <h1 className={`${styles.headingOne} pb-4`}>Serials Calculations. Simplified.</h1>
                        <p className={`${styles.paraTwo}`}>A free browser based solution that computes summary holdings of books for you.</p>
                    
                        <div className="lg:flex lg:gap-4 mt-6 mb-12 lg:mt-8 lg:mb-0 w-fit lg:w-full mx-auto">
                            <Link 
                                href={prototype_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center">
                                Explore the Prototype
                            </Link>
                            <br className="lg:hidden"/>
                            <button onClick={() => scrollToLearnMore()} className="mt-3 lg:mt-0 p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <Image 
                        src="/landing_illustration.png"
                        alt="Landing page illustration"
                        width={500}
                        height={480}
                        className="hidden lg:block"
                    />
                    <Image 
                        src="/landing_illustration.png"
                        alt="Landing page illustration"
                        width={500}
                        height={480}
                        className="mx-auto lg:hidden"
                    />
                </div> 

            {/* Learn More */}
            <div id="learnMoreSection">
                {/* Goodbye to taxing calculations section */}
                <div className="p-12 mx-auto justify-center items-center bg-[#1E2027] pt-28 pb-28">
                    <div className="flex mx-auto justify-center">
                        <img
                        src="/text_highlight.png"
                        alt="Text highlight icon"
                        className="w-[15px] h-[30px] rotate-[55deg] -mt-5"
                        />
                        <h2 className={`text-center ${styles.headingTwo}`}>
                        Say Goodbye to Taxing <br /> Calculations
                        </h2>
                    </div>

                    <div className="flex mx-auto justify-center space-x-20 mt-10">
                        <div className="w-1/3 hover:bg-[#292D3A] hover:shadow-2xl space-y-10 border border-[#1E2027]  rounded-2xl p-4">
                        <div className="flex mx-auto justify-center">
                            <img
                            src="/puzzle_image.png"
                            className="w-[180px] h-[150px] -mr-5 mt-5"
                            />
                        </div>
                        <div className="text-center  mx-auto justify-center w-[300px]">
                            <h3 className={`${styles.paraOne} mb-5 `}>
                            Stuck calculating which edition belongs to which year? We got
                            you.
                            </h3>
                            <p className="-mb-5">
                            Get a detailed view of editions, issues, and years with a
                            single click.
                            </p>
                        </div>
                        </div>

                        <div className="w-1/3 hover:bg-[#292D3A]  hover:shadow-2xl space-y-10 border border-[#1E2027] rounded-2xl p-12">
                        <div className="flex mx-auto justify-center mt-8">
                            <img
                            src="/checkboxes_image.png"
                            className="w-[190px] h-[80px] mb-6"
                            />
                        </div>
                        <div className="text-center  mx-auto justify-center w-[300px]">
                            <h3 className={`${styles.paraOne} mb-5 `}>
                            Need a quick overview of what's available or missing in a
                            serial? Leave it to us.
                            </h3>
                            <p>
                            Mark the available editions to get a summary of holdings data
                            with formatted enumeration and chronology fields.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Work faster section */}
                <div className="px-6 mobile:px-12 pt-28 pb-28 mx-auto justify-center items-center">
                    <div className="flex mx-auto justify-center">
                        <h2 className={`text-center ${styles.headingTwo}`}>Work Faster by Getting Started</h2>
                        <img 
                            src="/text_highlight.png"
                            alt="Text highlight icon"
                            className="hidden sm:block w-[15px] h-[30px] rotate-[140deg] -mt-5"
                        />
                    </div>
                    <div className="lg:flex gap-16 align-middle items-center mx-auto justify-center mt-28">
                        <Image 
                            src="/tool_inputs.png"
                            alt="App Snapshot - fill out serial details"
                            width={500}
                            height={200}
                            className="mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] h-auto"
                        />
                        <div className="lg:w-2/5 align-middle">
                            <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>Fill out the details of the serial</h3>
                            <p className={`${styles.paraTwo}`}>Fill in details like the range of years of the book, the number of editions it has per year, etc. to get a detailed list of editions, issues, and years.</p>
                        </div>
                    </div>
                    <div className="lg:flex gap-16 w-fit align-middle items-center mx-auto justify-center my-32">
                        <Image 
                            src="/tool_issue_selection.png"
                            alt="App Snapshot - select issues"
                            width={500}
                            height={200}
                            className="lg:hidden mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] drop-shadow-lg h-auto"
                        />
                        <div className="lg:w-2/5">
                            <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>Select the available issues</h3>
                            <p className={`${styles.paraTwo}`}>Check the available issues of the serial and mark them in the generated edition details.</p>
                        </div>
                        <Image 
                            src="/tool_issue_selection.png"
                            alt="App Snapshot - select issues"
                            width={500}
                            height={200}
                            className="hidden lg:block rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] drop-shadow-lg h-auto"
                        />
                    </div>
                    <div className="lg:flex gap-16 align-middle items-center mx-auto justify-center">
                        <Image 
                            src="/tool_generate_summary.png"
                            alt="App Snapshot - get summary holdings"
                            width={500}
                            height={200}
                            className="mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] h-auto"
                        />
                        <div className="lg:w-2/5 align-middle">
                            <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>Get summary holdings data</h3>
                            <p className={`${styles.paraTwo}`}>Switch between <span className="inline font-medium">basic</span> and <span className="inline font-medium">detailed</span> views based on your need.</p>
                        </div>
                    </div>
                </div>

                {/* Features section */}
                <div className="px-6 pt-28 pb-28 mobile:px-12 mx-auto justify-center items-center bg-[#1E2027] ">
                    <div className="w-fit mx-auto justify-center">
                        <h2 className={`${styles.headingTwo} pl-[15px]`}>Explore Additional Features</h2>
                        <img 
                            src="/text_highlight.png"
                            alt="Text highlight icon"
                            className="hidden sm:block w-[15px] h-[30px] -rotate-[50deg] -mt-2"
                        />
                    </div>
                    <div className="pt-12 sm:pt-28">
                        <FeaturesCarousel itemsData={features_list} />
                    </div>
                </div>

                {/* Check out the product prototype section*/}
                <div className="p-12 gap-24 mx-auto flex justify-center text-center items-center h-[400px] pt-28 pb-28">
                    <div>
                        <div className="flex mx-auto justify-center w-[1200px]">
                        <h1 className={`${styles.headingTwo}`}>
                            Check Out the Product Prototype
                        </h1>
                        <img
                            src="/text_highlight.png"
                            alt="Text highlight icon"
                            className="w-[15px] h-[30px] -rotate-[130deg] mt-10"
                        />
                        </div>
                        <p
                        className={`${styles.paraTwo} flex mx-auto justify-center w-[50%]`}
                        >
                        We've built an interactive prototype in Figma for the product.
                        Open it up to experience the product yourself.
                        </p>

                        <div className="flex gap-4 mt-5 justify-center">
                        <Link
                            href={prototype_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center"
                        >
                            Explore the Prototype
                        </Link>
                        <button
                            onClick={() => scrollToLearnMore()}
                            className="p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center"
                        ></button>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <div className="p-12 gap-24 mx-auto flex justify-center text-center bg-[#1E2027] items-center h-[400px]">
                    <div>
                        <h1
                        className={`${styles.headingFour} flex mx-auto justify-center w-[90%]`}
                        >
                        Have suggestions, feature requests, or noticed an issue?
                        </h1>
                        <p className={`${styles.paraTwo} mt-3`}>
                        Drop us a note! We'll be happy to take a look at it.
                        </p>

                        <div className="flex gap-4 mt-5 justify-center">
                        <Link
                            href="mailto:support@getsummaryholdings.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="p-2 px-10 h-fit text-white text-sm hover:text-[#2A2C32] border-[1px] font-light rounded  hover:bg-white hover:font-light items-center"
                        >
                            Contact Us
                        </Link>
                        <button
                            onClick={() => scrollToLearnMore()}
                            className="p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center"
                        ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
