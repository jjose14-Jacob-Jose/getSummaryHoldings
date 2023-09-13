'use client';

import { validateUserInputs } from "../../public/public";

/**
 * User inputs component for generating the editions table.
 * 
 * @author pdoddi
 */
export default function UserInputs({setDisplayResults, setEditionRows, displayResults}) {

    function handleCalculateEditionsClick(e) {
        setEditionRows(null);
        let rows = validateUserInputs();
        setEditionRows(rows);
        setDisplayResults(true);
    }

    function handleClear(){
        setEditionRows(null);
        setDisplayResults(false);
    }

    return (
        <div id="tableUserInput" className="bg-white p-6 px-12  rounded-lg m-auto w-fit">
        {/* action={`${ENV_LOCAL}/postData`} method="POST" */}
            <div className="flex gap-4 justify-center items-center align-bottom text-black">
                <div className="flex gap-6 pr-4">
                    <div className="max-w-[100px]">
                        <label id="lblTxtNumberYearStarting" htmlFor ="txtNumberYearStarting" className="font-semibold text-sm">Start Year</label>
                        <input type="text" id="txtNumberYearStarting" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px]" name="yearStarting" required placeholder="Earliest edition in Alma" value="2000"  />
                    </div>
                    <div className="max-w-[100px]">
                        <label id="lblTxtNumberYearEnding" htmlFor ="txtNumberYearEnding" className="font-semibold text-sm">End Year</label>
                        <input type="text" id="txtNumberYearEnding" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px]" name="yearEnding" required placeholder="Latest edition in Alma or 2020" value="2003" />
                    </div>
                    <div className="max-w-[100px]">
                        <label id="lblTxtTextEditionsType" htmlFor="txtTextEditionsType" className="font-semibold text-sm">Edition type</label>
                        <input type="text" id="txtTextEditionsType" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px]" name="editionsType" required placeholder="vol/ser/no" value="vol" />
                    </div>
                    <div className="max-w-[133px] w-fit">
                        <label id="lblTxtNumberEditionsPerYear" htmlFor ="txtNumberEditionsPerYear" className="font-semibold text-sm">Editions in a Year</label>
                        <input type="text" id="txtNumberEditionsPerYear" className="text-black mt-1 font-light p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[133px]" name="editionsPerYear" required placeholder="Number of issues in a year" value="7" />
                    </div>
                    <div className="max-w-[130px]">
                        <label id="lblTxtNumberVolumeStartingYear" htmlFor ="txtNumberVolumeStartingYear" className="font-semibold text-sm">Starting Volume</label>
                        <input type="text" className="text-black font-light p-1 pl-[10px] rounded mt-1 max-w-[124px] border-black/[0.4] text-sm border" id="txtNumberVolumeStartingYear" name="volumeStartingYear" required placeholder="Volume of starting year" value="1"  />
                    </div>
                </div>

                <button onClick={handleCalculateEditionsClick} id="btnCreateTable" className="p-2 px-6 h-fit text-sm font-light bg-[#89634A] text-white rounded hover:bg-[#83593D] hover:font-light items-center">Calculate Editions</button>

                { 
                    displayResults &&
                    <button onClick={handleClear} id="btnClearAll" className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Clear</button>
                }
                <div className="cols-span-2">
                    <input type="hidden" id="arrayEditionDescription" name="arrayEditionDescription" />
                    <input type="hidden" id="arrayEditionNumber" name="arrayEditionNumber" />
                    <input type="hidden" id="arrayYear" name="arrayYear" />
                    <input type="hidden" id="arrayAvailabilityStatusYear" name="arrayAvailabilityStatusYear" />
                    <input type="hidden" id="arrayAvailabilityStatusIssuesOfEachYear" name="arrayAvailabilityStatusIssuesOfEachYear" />
                    <input type="hidden" id="arrayIssuesInTheYear" name="arrayIssuesInTheYear" />
                </div>
            </div>
        </div>
    )
}