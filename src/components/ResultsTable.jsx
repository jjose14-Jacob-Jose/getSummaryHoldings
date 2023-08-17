'use client';

import { main, setUserMode } from "../../public/main";
import SummaryHoldings from "./SummaryHoldings";
import EditionsTable from "./EditionsTable";

/**
 * Complete results table component. Includes the editions table and summary holdings response.
 * 
 * @author pdoddi
 */
export default function ResultsTable() {

    //todo: Convert all event listeners to normal onclick functions
    //todo: Use state to check if results are populated or not and disable/enable buttons on that basis.

    return (
        <div className="items-center align-middle justify-center pt-24">
           
            <div id="tableUserInput">
                
                <label htmlFor ="divRBMode" className="text-right">Output:</label>
                <div id="divRBMode">
                    <label>
                        <input type="radio" name="rbMode" id="rbModeBasic" value="modeBasic" onClick={(e) => setUserMode(e)} checked />
                        Basic
                    </label>
                    <label>
                        <input type="radio" name="rbMode" id="rbModeAdvanced" value="modeAdvanced" onClick={(e) => setUserMode(e)} />
                        Detailed
                    </label>
                </div>
            </div>
     
            <EditionsTable />
            <SummaryHoldings />

            {/* <Script src="./main.js" /> */}
            {/* <script>
                main();
            </script> */}
        </div>
    )
}