'use client';

import { validateUserInputs } from "../../public/public";

/**
 * User inputs component for generating the editions table.
 * 
 * @author pdoddi
 */
export default function UserInputs({setDisplayResults, setEditionRows, displayResults, scrollToEditionsTable}) {

    function handleCalculateEditionsClick(e) {
        setEditionRows(null);
        let rows = validateUserInputs();
        setEditionRows(rows);
        if(displayResults){
            setTimeout(() => {
                scrollToEditionsTable();
           }, 100);
        }
        setDisplayResults(true);
    }

    function handleClear(){
        setEditionRows(null);
        setDisplayResults(false);
    }

    return (
        <div id="tableUserInput" className="bg-white p-6 px-12 rounded-lg m-auto w-fit">
            <div className="flex gap-4 justify-center items-center align-bottom text-black">
                <div className="flex gap-6 pr-4">
                    <div className="max-w-[101px]">
                        <label id="lblTxtNumberYearStarting" htmlFor ="txtNumberYearStarting" className="font-semibold text-sm">Earliest edition</label>
                        <input type="text" id="txtNumberYearStarting" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px]" name="yearStarting" required defaultValue="2000"  />
                    </div>
                    <div className="max-w-[100px]">
                        <label id="lblTxtNumberYearEnding" htmlFor ="txtNumberYearEnding" className="font-semibold text-sm">Latest edition</label>
                        <input type="text" id="txtNumberYearEnding" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px] text-ellipsis hover:overflow-visible" name="yearEnding" required defaultValue="2020" />
                    </div>
                    <div className="max-w-[100px]">
                        <label id="lblTxtTextEditionsType" htmlFor="txtTextEditionsType" className="font-semibold text-sm">Edition type</label>
                        <input type="text" id="txtTextEditionsType" className="text-black font-light mt-1 p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[100px]" name="editionsType" required placeholder="vol/ser/no" defaultValue="vol" />
                    </div>
                    <div className="max-w-[133px] w-fit">
                        <label id="lblTxtNumberEditionsPerYear" htmlFor ="txtNumberEditionsPerYear" className="font-semibold text-sm">Issues in a year</label>
                        <input type="text" id="txtNumberEditionsPerYear" className="text-black mt-1 font-light p-1 pl-[10px] text-sm border-black/[0.4] border rounded max-w-[133px]" name="editionsPerYear" required defaultValue="7" />
                    </div>
                    <div className="max-w-[130px]">
                        <label id="lblTxtNumberVolumeStartingYear" htmlFor ="txtNumberVolumeStartingYear" className="font-semibold text-sm">Starting volume</label>
                        <input type="text" className="text-black font-light p-1 pl-[10px] rounded mt-1 max-w-[124px] border-black/[0.4] text-sm border" id="txtNumberVolumeStartingYear" name="volumeStartingYear" required defaultValue="1"  />
                    </div>
                </div>

                <button onClick={handleCalculateEditionsClick} id="btnCreateTable" className="p-2 px-6 h-fit text-sm font-light bg-[#89634A] text-white rounded hover:bg-[#83593D] hover:font-light items-center">Calculate Editions</button>

                { 
                    displayResults &&
                    <button onClick={handleClear} id="btnClearAll" className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Clear</button>
                }
            </div>
        </div>
    )
}