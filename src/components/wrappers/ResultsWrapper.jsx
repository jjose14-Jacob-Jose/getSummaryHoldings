'use client';

import { useState } from "react";
import UserInputs from "../UserInputs";
import ResultsSection from "../ResultsSection";
import Footer from "../static/Footer";
import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";
import ToastMessage from "../ToastMessage";
import { MESSAGE_ERROR_API_RESPONSE } from "@/constants/common_js_constants";

/**
 * A wrapper component for results to be used for displaying results table conditionally.
 * 
 * @author pdoddi
 */
export default function ResultsWrapper() {
    
	const [displayResults, setDisplayResults] = useState(false);
    const [apiCallSuccess, setApiCallSuccess] = useState(null);
    const [editionRows, setEditionRows] = useState(null);

    function closeToastMessage() {
        setApiCallSuccess(null);
    }

    function scrollToEditionsTable(){
        const element = document.getElementById('editionsTable');
        if(element){
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <>
            <motion.div
                variants={animateText(0.3)}
                layout
                initial="hidden"
                animate="show"
                className="parent m-auto flex flex-col">
                <div className={`items-center align-middle justify-center ${displayResults ? "mb-4" : "mb-16" }`}>
                    {
                        !displayResults && (
                            <motion.div layout className="child text-center mx-auto p-6 px-12 pb-4">
                                <h1 className="font-semibold text-3xl pb-1">Calculate Editions</h1>
                                <p className="font-light text-[#ECECEC]">Fill out the details of the title you wish to generate summary holdings for.</p>
                            </motion.div>
                        )
                    }
                    <UserInputs 
                        displayResults={displayResults} 
                        setDisplayResults={setDisplayResults} 
                        setEditionRows={setEditionRows} 
                        scrollToEditionsTable={scrollToEditionsTable}
                    />
                    {
                        displayResults && <ResultsSection apiCallSuccess={apiCallSuccess} editionRows={editionRows} setApiCallSuccess={setApiCallSuccess} />
                    }
                </div>
            </motion.div>
            
            {
                displayResults && <Footer />
            }

            {
                apiCallSuccess === false ? 
                <ToastMessage 
                    open={apiCallSuccess === false} 
                    toastMessage={MESSAGE_ERROR_API_RESPONSE}
                    closeToastMessage={() => closeToastMessage()}
                /> 
                : null
            }
        </>
    )
}