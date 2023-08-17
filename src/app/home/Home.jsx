'use client';

import Link from "next/link";
import Image from "next/image";
import InputsCard from "../../components/InputsCard";
import GeneratedResults from "../../components/GeneratedResultsTable";
import GeneratedResultsTable from "../../components/GeneratedResultsTable";
import { useEffect } from "react";
import { main } from "../../../public/main";
import Script from "next/script";
import SummaryHoldings from "../../components/SummaryHoldings";

export default function Home() {

    return (
        <main className="items-center align-middle justify-center">
  
        <div className="p-12  flex gap-4 mx-auto justify-center items-center mb-24">
                <div className="w-1/2">
                    <h1 className="font-bold text-6xl pb-4 leading-tight">Get Summary Holdings</h1>
                    <p>A tool to compute summary holdings of books easily for you.</p>
                  
                    <div className="flex gap-4 mt-8">
                        <Link href="/" className="p-2 px-10 h-fit font-light bg-[#907360] text-white  rounded-xl hover:bg-[#89634A] hover:font-light items-center">
                            Get Started
                        </Link>
                        <Link href="mailto:support@getsummaryholdings.com" className="p-2 px-8 h-fit font-light text-white hover:text-[#2A2C32] border rounded-xl hover:bg-white hover:font-light items-center">
                            Read the User Guide
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
            {/* <div className="bg-[#907360] py-12">
                <InputsCard />
            </div> */}
            {/* <div id="divMatrix"></div>
            <GeneratedResultsTable />
            <SummaryHoldings />

            <script>
                main();
            </script>  */}
        </main>
    )
}