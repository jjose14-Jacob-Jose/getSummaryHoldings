'use client';

import { useState } from "react";
import { getGenerateSummaryRequest } from "../../public/public";
import axios from "axios";
import Loader from "./static/Loader";
import { ENV_LOCAL } from "@/constants/common_js_constants";

/**
 * Summary holdings results component.
 * 
 * @author pdoddi
 */
export default function SummaryHoldingsResults() {

    const [summaryGenerated, setSummaryGenerated] = useState(false);
    const [summaryData, setSummaryData] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    //Makes the backend API call to fetch holdings summary details.
    const fetchData = async (request) => {
        const response = await axios({
            url: `${ENV_LOCAL}/postData`,
            method: "post",
            data: request,
            headers: {
              "Content-type": "multipart/form-data",
            },
        });
      
        setSummaryData(response.data);
 
        //Setting a delay of 1s as the loader loads a little too fast to see. 
        //This might confuse users.
        setTimeout(() => {
            setShowLoader(false);
            setSummaryGenerated(true);
        }, 1000);
    };

    //Displays a lodaer, fetches the request object for the backend API call and makes the request.
    function handleGenerateSummaryClick(){
        setShowLoader(true);
        const request = getGenerateSummaryRequest();
        fetchData(request);
    }

    return(
        <div className="bg-white  text-black font-light rounded-lg m-auto w-[1070px]">
            <div className="flex justify-between px-8 p-3 items-center">
                <h2 className="font-bold">Summary Holdings Details</h2>
                <div className="flex gap-4 items-center">
                    <p>(slider)</p>
                    <button onClick={handleGenerateSummaryClick} id="btnGenerateSummary" className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Generate Summary Holdings</button>
                </div>
            </div>
            <hr />
            <div className="px-8 p-3 align-middle justify-center items-center">
                {
                    summaryGenerated ? 
                        <>
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
                            <div id="tableSummaryHoldingBasic" className="modeBasic">
                                <label htmlFor ="textAreaUnavailableEditionsWithoutYearAdvanced">Missing Editions</label>
                                <label htmlFor ="textAreaAvailableSummaryHoldingBasic">Summary Holdings (available)</label>
                            
                                <textarea id="textAreaUnavailableEditionsWithoutYearBasic" name="textAreaUnavailableEditionsWithoutYear">{summaryData.textAreaUnavailableEditionsWithoutYear}</textarea>
                                <textarea id="textAreaAvailableSummaryHoldingBasic" name="textAreaAvailableSummaryHolding">{summaryData.textAreaAvailableSummaryHolding}</textarea>
                            </div>

                            <div id="tableSummaryHoldingAdvanced" className="modeAdvanced" >
                            
                                <div colSpan="2" className="align-middle items-center">
                                    Missing Editions
                                </div>
                                <div colSpan="2" className="align-middle items-center" >
                                    Available Editions
                                </div>
                                <div rowSpan="2" className="align-middle items-center" >
                                    Standard Summary Holdings
                                </div>
                                
                                <label htmlFor ="textAreaUnavailableEditionsWithoutYearAdvanced">Without Year</label>
                                <label htmlFor ="textAreaUnavailableEditionsWithYear">With Year</label>
                                <label htmlFor ="textAreaAvailableEditionsWithYear" className="modeAdvanced" >With Year</label>
                                <label htmlFor ="textAreaAvailableEditionsWithoutYear" className="modeAdvanced" >Without Year</label>
                            
                                <textarea id="textAreaUnavailableEditionsWithoutYearAdvanced" name="textAreaUnavailableEditionsWithoutYear">{summaryData.textAreaUnavailableEditionsWithoutYear}</textarea>
                                <textarea id="textAreaUnavailableEditionsWithYear" name="textAreaUnavailableEditionsWithYear" className="modeAdvanced">{summaryData.textAreaUnavailableEditionsWithYear}</textarea>
                                <textarea id="textAreaAvailableEditionsWithYear" name="textAreaAvailableEditionsWithYear" className="modeAdvanced">{summaryData.textAreaAvailableEditionsWithYear}</textarea>
                                <textarea id="textAreaAvailableEditionsWithoutYear" name="textAreaAvailableEditionsWithoutYear" className="modeAdvanced">{summaryData.textAreaAvailableEditionsWithoutYear}</textarea>
                                <textarea id="textAreaAvailableSummaryHoldingAdvanced" name="textAreaAvailableSummaryHolding">{summaryData.textAreaAvailableSummaryHolding}</textarea>
                        
                            </div>
                        </>
                    : <div className="text-sm py-2 text-center text-gray opacity-70">No summary holdings generated yet.</div>
                }
            </div>
          
            <Loader 
                open={showLoader} 
            />
        </div>
    )
};