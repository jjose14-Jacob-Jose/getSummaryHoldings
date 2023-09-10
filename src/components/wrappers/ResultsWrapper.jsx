'use client';

import { useEffect, useState } from "react";
import UserInputs from "../UserInputs";
import ResultsSection from "../ResultsSection";

/**
 * A wrapper component for results to be used for displaying results table conditionally.
 * 
 * @author pdoddi
 */
export default function ResultsWrapper() {
    
	const [displayResults, setDisplayResults] = useState(false);
    const [editionRows, setEditionRows] = useState(null);
    
    return (
        <div className="items-center align-middle justify-center p-6 px-12 m-auto w-fit">
            <UserInputs setDisplayResults={setDisplayResults} setEditionRows={setEditionRows} />
            {
                displayResults && <ResultsSection editionRows={editionRows} />
            }
        </div>
    )
}