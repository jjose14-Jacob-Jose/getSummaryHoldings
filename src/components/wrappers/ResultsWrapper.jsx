'use client';

import { useState } from "react";
import ResultsTable from "../ResultsTable";

/**
 * A wrapper component for results to be used for displaying results table conditionally.
 * 
 * @author pdoddi
 */
export default function ResultsWrapper() {
    
	const [displayResults, setDisplayResults] = useState(false);

    return (
        <div className="items-center align-middle justify-center">
  	{
					displayResults && <ResultsTable />
				}
       
        </div>
    )
}