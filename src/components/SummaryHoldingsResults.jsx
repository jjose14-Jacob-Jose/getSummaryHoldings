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
export default function SummaryHoldingsResults() {
    const [summaryGenerated, setSummaryGenerated] = useState(false);
    const [summaryData, setSummaryData] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const [userMode, setUserMode] = useState(HTML_ELEMENT_CLASS_VALUE_MODE_BASIC);

    // Adds new lines after each ";".
    function formatResponse(responseData) {
        // Format response data here
    }

    // Makes the backend API call to fetch holdings summary details.
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
                    
            // Setting a delay of 1s as the loader loads a little too fast to see. 
            // This might confuse users.
            setTimeout(() => {
                setShowLoader(false);
                setSummaryGenerated(true);
            }, 1000);
        } catch (error) {
            setShowLoader(false);
            console.log(error);
        }
    };

    // Displays a loader, fetches the request object for the backend API call and makes the request.
    function handleGenerateSummaryClick() {
        setShowLoader(true);
        setSummaryGenerated(false);
        setSummaryData(null);
        const request = getGenerateSummaryRequest();
        fetchData(request);
    }

    return (
        <motion.div
            variants={animateText(0.1)}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"  
            className="bg-white text-black font-light rounded-lg m-auto w-[1070px]"
        >
            <div className="flex justify-between px-8 p-3 items-center">
                <h2 className="font-medium text-lg">Summary Holdings Details</h2>
                <div className="flex gap-4 items-center">
        
                <button
                    className={`relative cursor-pointer w-48 h-8 border border-[#2A2C32] rounded-full ${
                        userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC
                        ? 'bg-[#2A2C32] text-white'
                        : 'bg-white text-[#2A2C32]'
                    }`}
                    onClick={() =>
                        setUserMode(
                        userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC
                            ? HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED
                            : HTML_ELEMENT_CLASS_VALUE_MODE_BASIC
                        )
                    }
                    >
                    <div
                        className={`w-6 h-6 rounded-full absolute top-1/2 transform -translate-y-1/2 ${
                        userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? 'bg-white left-1' : 'bg-[#2A2C32] right-1'
                        } transition-left duration-300`}
                    ></div>
                    <span className={`absolute top-1/2 transform -translate-y-1/2  left-2 text-xs ${
                        userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? 'translate-x-8' : 'translate-x-5'
                        }`}>
                        {userMode === HTML_ELEMENT_CLASS_VALUE_MODE_BASIC ? "View detailed summary" : "View basic summary"}
                    </span>
                    </button>
                    
                    <button onClick={handleGenerateSummaryClick} className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Generate Summary Holdings</button>
                </div>
            </div>
            <hr />
            <div className="px-8 p-3 align-middle justify-center items-center">
                {summaryGenerated ? 
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
