'use client';

import { useState } from "react";
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
        <>
            <div className="items-center align-middle justify-center my-auto">
                {
                    !displayResults && (
                        <div className="text-center mx-auto p-6 px-12 pb-4">
                            <h1 className="font-semibold text-3xl pb-1">Calculate Editions</h1>
                            <p className="font-light text-[#ECECEC]">Fill out the details of the title you wish to generate summary holdings for.</p>
                        </div>
                    )
                }
                <UserInputs 
                    displayResults={displayResults} 
                    setDisplayResults={setDisplayResults} 
                    setEditionRows={setEditionRows} 
                />
                {
                    displayResults && <ResultsSection editionRows={editionRows} />
                }
            </div>
            {
                displayResults && <Footer />
            }
        </>
    )
}