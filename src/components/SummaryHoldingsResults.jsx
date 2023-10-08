'use client';

import { useState } from "react";
import { getGenerateSummaryRequest } from "../../public/public";
import axios from "axios";
import Loader from "./static/Loader";
import { ENV_LOCAL, ENV_PROD, HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED, HTML_ELEMENT_CLASS_VALUE_MODE_BASIC } from "@/constants/common_js_constants";
import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";
import SummaryHoldingsCards from "./static/SummaryHoldingsCards";

/**
 * Summary holdings results component.
 * 
 * @author pdoddi
 */
export default function SummaryHoldingsResults({setApiCallSuccess, apiCallSuccess}) {

    const [summaryData, setSummaryData] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const [userMode, setUserMode] = useState(HTML_ELEMENT_CLASS_VALUE_MODE_BASIC);

    //Adds new lines after each ";".
    function formatResponse(responseData) {
        responseData.textAreaUnavailableEditionsWithoutYear = responseData.textAreaUnavailableEditionsWithoutYear.split(";").join(";\n").replace(/\n$/, "");
        responseData.textAreaAvailableEditionsWithoutYear = responseData.textAreaAvailableEditionsWithoutYear.split(";").join(";\n").replace(/\n$/, "");
        responseData.textAreaUnavailableEditionsWithYear = responseData.textAreaUnavailableEditionsWithYear.split(";").join(";\n").replace(/\n$/, "");
        responseData.textAreaAvailableEditionsWithYear = responseData.textAreaAvailableEditionsWithYear.split(";").join(";\n").replace(/\n$/, "");
        return responseData;
    }

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

            setSummaryData(formatResponse(response.data));
                    
            //Setting a delay of 1s as the loader loads a little too fast to see. 
            //This might confuse users.
            setTimeout(() => {
                setShowLoader(false);
                setApiCallSuccess(true);
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setApiCallSuccess(false);
                setShowLoader(false);
                console.log(error);
            }, 1000);
        }
    };

    //Displays a loader, fetches the request object for the backend API call and makes the request.
    function handleGenerateSummaryClick() {
        setShowLoader(true);
        setApiCallSuccess(null);
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
                    <div className="flex">
                        <label htmlFor ="divRBMode" className="text-right">View: </label>
                        <div id="divRBMode">
                            <label>
                                <input type="radio" defaultValue="modeBasic" onClick={() => setUserMode(HTML_ELEMENT_CLASS_VALUE_MODE_BASIC)} 
                                    checked={ userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? true : false} />
                                Basic
                            </label>
                            <label>
                                <input type="radio"  defaultValue="modeAdvanced" onClick={() => setUserMode(HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED)} 
                                    checked={ userMode === HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED ? true : false} />
                                Detailed
                            </label>
                        </div>
                    </div>
                    <button onClick={handleGenerateSummaryClick} className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Generate Summary Holdings</button>
                </div>
            </div>
            <hr />
            <div className="px-8 p-3 align-middle justify-center items-center">
                {
                    apiCallSuccess ? 
                        <>
                            <div className={`${userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? "block" : "hidden"} flex gap-4 justify-center`}>
                                <SummaryHoldingsCards title="Summary Holdings" holdingsData={summaryData.textAreaAvailableSummaryHolding} />
                                <SummaryHoldingsCards title="Missing Editions" holdingsData={summaryData.textAreaUnavailableEditionsWithoutYear} />
                            </div>

                            <div className={`${userMode === HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED ? "block" : "hidden"} flex gap-4 justify-center`} >
                                <SummaryHoldingsCards title="Summary Holdings" holdingsData={summaryData.textAreaAvailableSummaryHolding} />
                                <SummaryHoldingsCards title="Missing Editions" holdingsData={summaryData.textAreaUnavailableEditionsWithoutYear} dataWithYear={summaryData.textAreaUnavailableEditionsWithYear} />
                                <SummaryHoldingsCards title="Available Editions" holdingsData={summaryData.textAreaAvailableEditionsWithoutYear} dataWithYear={summaryData.textAreaAvailableEditionsWithYear} />
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