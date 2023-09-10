'use client';

// import { main, setUserMode } from "../../public/main";
import SummaryHoldingsResults from "./SummaryHoldingsResults";
import EditionsTable from "./EditionsTable";

/**
 * Complete results table component. Includes the editions table and summary holdings response.
 * 
 * @author pdoddi
 */
export default function ResultsSection({editionRows}) {

    //todo: Convert all event listeners to normal onclick functions
    //todo: Use state to check if results are populated or not and disable/enable buttons on that basis.

    return (
        <div className="items-center align-middle justify-center pt-4">
            <SummaryHoldingsResults />
            <EditionsTable editionRows={editionRows} />
         
        </div>
    )
}