'use client';

import { useState } from "react";
import { getGenerateSummaryRequest } from "../../public/public";
import axios from "axios";
import Loader from "./static/Loader";
import { ENV_LOCAL, ENV_PROD, HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED, HTML_ELEMENT_CLASS_VALUE_MODE_BASIC } from "@/constants/common_js_constants";
import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";

/**
 * Summary holdings results component.
 * 
 * @author pdoddi
 */
export default function SummaryHoldingsResults() {

    const [summaryGenerated, setSummaryGenerated] = useState(false);
    const [summaryData, setSummaryData] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const [userMode, setUserMode] = useState(HTML_ELEMENT_CLASS_VALUE_MODE_BASIC);

    //Makes the backend API call to fetch holdings summary details.
    const fetchData = async (request) => {
        let response;
        try {
            response = await axios({
                url: `${ENV_PROD}/postData`,
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
        } catch (error) {
            setShowLoader(false);
            console.log(error);
        }
    };

    //Displays a loader, fetches the request object for the backend API call and makes the request.
    function handleGenerateSummaryClick() {
        setShowLoader(true);
        setSummaryGenerated(false);
        setSummaryData(null);
        const request = getGenerateSummaryRequest();
        fetchData(request);
    }

    return(
        <motion.div
            variants={animateText(0.1)}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"  
            className="bg-white text-black font-light rounded-lg m-auto w-[1070px]">
            <div className="flex justify-between px-8 p-3 items-center">
                <h2 className="font-medium text-lg">Summary Holdings Details</h2>
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
                            <div className="flex">
                                
                                <label htmlFor ="divRBMode" className="text-right">View: </label>
                                <div id="divRBMode">
                                    <label>
                                        <input type="radio" name="rbMode" id="rbModeBasic" defaultValue="modeBasic" onClick={() => setUserMode(HTML_ELEMENT_CLASS_VALUE_MODE_BASIC)} 
                                            checked={ userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? true : false} />
                                        Basic
                                    </label>
                                    <label>
                                        <input type="radio" name="rbMode" id="rbModeAdvanced" defaultValue="modeAdvanced" onClick={() => setUserMode(HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED)} 
                                            checked={ userMode === HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED ? true : false} />
                                        Detailed
                                    </label>
                                </div>
                            </div>

                            <div id="tableSummaryHoldingBasic" className={`${userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? "block" : "hidden"}`}>
                                <label htmlFor ="textAreaUnavailableEditionsWithoutYearAdvanced">Missing Editions</label>
                                <label htmlFor ="textAreaAvailableSummaryHoldingBasic">Summary Holdings (available)</label>
                            
                                <textarea id="textAreaUnavailableEditionsWithoutYearBasic" name="textAreaUnavailableEditionsWithoutYear">{summaryData.textAreaUnavailableEditionsWithoutYear}</textarea>
                                <textarea id="textAreaAvailableSummaryHoldingBasic" name="textAreaAvailableSummaryHolding">{summaryData.textAreaAvailableSummaryHolding}</textarea>
                            </div>

                            <div id="tableSummaryHoldingAdvanced" className={`${userMode === HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED ? "block" : "hidden"}`} >
                            
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
        </motion.div>
    )
};