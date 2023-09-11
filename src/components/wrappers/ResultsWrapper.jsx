'use client';

import { useEffect, useState } from "react";
import UserInputs from "../UserInputs";
import ResultsSection from "../ResultsSection";
import Footer from "../static/Footer";


/**
 * A wrapper component for results to be used for displaying results table conditionally.
 * 
 * @author pdoddi
 */
export default function ResultsWrapper() {
    
	const [displayResults, setDisplayResults] = useState(false);
    const [editionRows, setEditionRows] = useState(null);
    
    return (
        <div >
            <div>
            {displayResults === false && (
            <div id="userInputs" className="m-auto items-center align-middle justify-center text-center">
            <div className="pb-4">
                <h1 className="font-semibold text-3xl pb-1 pl-2">Calculate Editions</h1>
                <p className="font-light pl-2 text-[#ECECEC]">Fill out the details of the title you wish to generate summary holdings for.</p>
            </div>
            </div>
          )}
            </div>
            <div className="items-center align-middle justify-center p-6 px-12 m-auto w-fit">
            <UserInputs setDisplayResults={setDisplayResults} setEditionRows={setEditionRows} />
            {
                displayResults && <ResultsSection editionRows={editionRows} />
            }
            </div>
            <div className="w-[100%]">
            {displayResults && (
            <Footer/>
          )}
            </div>
        </div>
        
    )
}