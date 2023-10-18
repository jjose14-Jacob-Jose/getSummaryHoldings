'use client';

import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MESSAGE_EMPTY_FIELD, MESSAGE_INVALID_INTEGER_INPUT_SUFFIX, MESSAGE_YEAR_RANGE_INVALID } from "@/constants/common_js_constants";
import { initializeArrays, populateRows } from "../../public/public";

/**
 * User inputs component for generating the editions table.
 * 
 * @author pdoddi
 */
export default function UserInputs({ setDisplayResults, setEditionRows, displayResults, scrollToEditionsTable }) {
    const [values, setValues] = useState({
        editionType: "vol",
        earliestYear: 2000,
        latestYear: 2020,
        issues: 12,
        startingVol: 1
    });
    
    const [editionErrorMessage, setEditionErrorMessage] = useState("");
    const [earliestYearErrorMessage, setEarliestYearErrorMessage] = useState("");
    const [latestYearErrorMessage, setLatestYearErrorMessage] = useState("");
    const [startingVolErrorMessage, setStartingVolErrorMessage] = useState("");
    const [issuesErrorMessage, setIssuesErrorMessage] = useState("");

    //Checks for inputs validity in real-time. 
    useEffect(() => {
        validateInputs();
    }, [values]);

    //Validates user inputs.
    function validateInputs(){
        //Resetting the states
        setEarliestYearErrorMessage("");
        setIssuesErrorMessage("");
        setEditionErrorMessage("");
        setLatestYearErrorMessage("");
        setStartingVolErrorMessage("");

        let trimmedEditionTypeValue = values.editionType.trim();

        if(!trimmedEditionTypeValue){
            setEditionErrorMessage(MESSAGE_EMPTY_FIELD);
        }
        if (isNaN(values.earliestYear) || values.earliestYear < 1) {
            setEarliestYearErrorMessage(MESSAGE_INVALID_INTEGER_INPUT_SUFFIX);
        }
        if (isNaN(values.latestYear) || values.latestYear < 1) {
            setLatestYearErrorMessage(MESSAGE_INVALID_INTEGER_INPUT_SUFFIX);
        }
        if (isNaN(values.startingVol) || values.startingVol < 1) {
            setStartingVolErrorMessage(MESSAGE_INVALID_INTEGER_INPUT_SUFFIX);
        }
        if (isNaN(values.issues) || values.issues < 1) {
            setIssuesErrorMessage(MESSAGE_INVALID_INTEGER_INPUT_SUFFIX);
        }

        //Check for the correct year range - earliest edition should be before latest edition.
        if(values.earliestYear > values.latestYear){
            setLatestYearErrorMessage(MESSAGE_YEAR_RANGE_INVALID);
        }
    }

    //Checks to see if any of the user inputs have an error.
    function hasAnError(){
        return (issuesErrorMessage || startingVolErrorMessage || earliestYearErrorMessage || latestYearErrorMessage || editionErrorMessage) ? true : false;
    }

    function handleCalculateEditionsClick(e) {
        validateInputs();
        if(!hasAnError()){
            initializeArrays();
            let rows = populateRows();
            if(rows.length > 0){
                setEditionRows(null);
                setEditionRows(rows);
                if(displayResults){
                    setTimeout(() => {
                        scrollToEditionsTable();
                   }, 400);
                }
                setDisplayResults(true);
            }
        }
    }

    function handleReset(){
        setEditionRows(null);
        setDisplayResults(false);
    }

    return (
        <motion.div layout 
            id="tableUserInput" 
            className="child bg-white p-6 pt-[22px] px-12 rounded-lg m-auto w-fit">
            <div className="flex gap-4 justify-center items-center align-bottom text-[#515151]">
                <div className="flex gap-6 pr-4">
                    <div className="max-w-[100px]">
                        <label id="lblTxtTextEditionsType" htmlFor="txtTextEditionsType" className="font-medium text-[13px]">Edition type</label>
                        <TextField
                            error={editionErrorMessage ? true: false}
                            id="txtTextEditionsType"
                            helperText={editionErrorMessage}
                            FormHelperTextProps={{
                                className: "m-0"
                              }}
                            inputProps={{
                                style: {
                                  padding: 5,
                                  paddingLeft: 10,
                                  fontSize: 14
                                }
                            }}
                            autoComplete="true"
                            onChange={(e) => setValues((prevState) => 
                                ({...prevState, editionType: e.target.value}))}
                            value={values.editionType}
                        />
                    </div>

                    <div className="max-w-[131px]">
                        <label id="lblTxtNumberYearStarting" htmlFor ="txtNumberYearStarting" className="font-medium text-[13px]">Earliest year</label>
                        <TextField
                            error={earliestYearErrorMessage ? true: false}
                            id="txtNumberYearStarting"
                            FormHelperTextProps={{
                                className: "m-0"
                            }}
                            inputProps={{
                                min: 1,
                                style: {
                                  padding: 5,
                                  paddingLeft: 10,
                                  fontSize: 14,
                                }
                             }}
                            helperText={earliestYearErrorMessage}
                            autoComplete="true"
                            onChange={(e) => setValues((prevState) => 
                                ({...prevState, earliestYear: parseInt(e.target.value)}))}
                            value={values.earliestYear}
                            type="number"
                        />
                    </div>

                    <div className="max-w-[130px]">
                        <label id="lblTxtNumberYearEnding" htmlFor ="txtNumberYearEnding" className="font-medium text-[13px]">Latest year</label>
                        <TextField
                            error={latestYearErrorMessage ? true: false}
                            id="txtNumberYearEnding"
                            FormHelperTextProps={{
                                className: "m-0"
                            }}
                            inputProps={{
                                min: 1,
                                style: {
                                  padding: 5,
                                  paddingLeft: 10,
                                  fontSize: 14,
                                }
                             }}
                            helperText={latestYearErrorMessage}
                            autoComplete="true"
                            onChange={(e) => setValues((prevState) => 
                                ({...prevState, latestYear: parseInt(e.target.value)}))}
                            value={values.latestYear}
                            type="number"
                        />
                    </div>

                    <div className="max-w-[133px] w-fit">
                        <label id="lblTxtNumberEditionsPerYear" htmlFor ="txtNumberEditionsPerYear" className="font-medium text-[13px]">Issues in a year</label>
                        <TextField
                            error={issuesErrorMessage ? true: false}
                            id="txtNumberEditionsPerYear"
                            FormHelperTextProps={{
                                className: "m-0"
                            }}
                            inputProps={{
                                min: 1,
                                style: {
                                  padding: 5,
                                  paddingLeft: 10,
                                  fontSize: 14,
                                }
                             }}
                            helperText={issuesErrorMessage}
                            autoComplete="true"
                            onChange={(e) => setValues((prevState) => 
                                ({...prevState, issues: parseInt(e.target.value)}))}
                            value={values.issues}
                            type="number"
                        />
                    </div>
                    <div className="max-w-[130px]">
                        <label id="lblTxtNumberVolumeStartingYear" htmlFor ="txtNumberVolumeStartingYear" className="font-medium text-[13px]">Starting volume</label>
                        <TextField
                            error={startingVolErrorMessage ? true: false}
                            id="txtNumberVolumeStartingYear"
                            FormHelperTextProps={{
                                className: "m-0"
                            }}
                            inputProps={{
                                min: 1,
                                style: {
                                  padding: 5,
                                  paddingLeft: 10,
                                  fontSize: 14,
                                }
                             }}
                            helperText={startingVolErrorMessage}
                            autoComplete="true"
                            onChange={(e) => setValues((prevState) => 
                                ({...prevState, startingVol: parseInt(e.target.value)}))}
                            value={values.startingVol}
                            type="number"
                        />
                    </div>
                </div>

                <button onClick={handleCalculateEditionsClick} disabled={hasAnError()} id="btnCreateTable" className="p-2 px-6 h-fit text-sm font-light bg-[#89634A] disabled:bg-[#89634A] disabled:opacity-75 text-white rounded align-bottom hover:bg-[#83593D] hover:font-light items-center">Calculate Editions</button>

                { 
                    displayResults &&
                    <button onClick={handleReset} id="btnClearAll" className="p-2 px-8 h-fit font-light text-[#2A2C32] text-sm hover:text-white border border-[#2A2C32] rounded hover:bg-[#2A2C32] hover:font-light items-center">Reset</button>
                }
            </div>
        </motion.div>
    )
}