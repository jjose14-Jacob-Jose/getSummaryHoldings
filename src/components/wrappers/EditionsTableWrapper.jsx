import React, { useState, useEffect } from 'react';
import {
    FLAG_ISSUES_NOT_AVAILABLE,
    TEXT_BUTTON_ISSUE_COUNT_INCREASE,
    TEXT_LABEL_HEADER_ALL_ISSUES,
    TEXT_LABEL_HEADER_EDITION_CHECKBOX,
    TEXT_LABEL_HEADER_EDITION_NUMBER,
    TEXT_LABEL_HEADER_EDITION_TYPE,
    TEXT_LABEL_HEADER_ISSUES,
    TEXT_LABEL_HEADER_YEAR,
} from "@/constants/common_js_constants";
import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";
import { changeIssueCountOfCurrentAndSubsequentYear, setCheckBoxSelected, setCheckboxesInARowSelectedValue } from '../../../public/public';
import EditionsTable from '../EditionsTable';

/**
 * A wrapper component for the editions table.
 * 
 * @author pdoddi
 */
export default function EditionsTableWrapper({ editionRows, setEditionRows }) {

    const columns = [
        { field: "editionType", title: TEXT_LABEL_HEADER_EDITION_TYPE, numeric: false, align: "left" },
        { field: "editionNo", title: TEXT_LABEL_HEADER_EDITION_NUMBER, numeric: true, align: "left" },
        { field: "year", title: TEXT_LABEL_HEADER_YEAR, numeric: true, align: "left" },
        { field: "selectAllBox", title: TEXT_LABEL_HEADER_EDITION_CHECKBOX, numeric: false, align: "left" },
        { field: "issues", title: TEXT_LABEL_HEADER_ISSUES, numeric: false, align: "left" },
        { field: "selectAll", title: TEXT_LABEL_HEADER_ALL_ISSUES, numeric: false, align: "left" }, // Empty column for "Select All"
    ];

    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
    const [selectedRows, setSelectedRows] = useState({});
    const [masterSwitch, setMasterSwitch] = useState(false);
    // const [showRowActions, setShowRowActions] = useState(-1);

    useEffect(() => {
        // Initialize selectedCheckboxes and selectedRows here
        const initialSelectedCheckboxes = {};
        const initialSelectedRows = {};

        // Set all checkboxes to false initially for each row
        editionRows.forEach((row) => {
            initialSelectedCheckboxes[row.rowId] = {};
            row.listOfIssues.forEach((issue) => {
                if(issue.checked){
                    initialSelectedCheckboxes[row.rowId][issue.text] = true;
                } else {
                    initialSelectedCheckboxes[row.rowId][issue.text] = false;
                }
             
            });
            
            initialSelectedRows[row.rowId] = false;
            
        });

        setSelectedCheckboxes(initialSelectedCheckboxes);
        setSelectedRows(initialSelectedRows);

    }, [editionRows]);

    useEffect(() => {
        // Check if all checkboxes in a row are selected and update the row's switch accordingly
        editionRows.forEach((row) => {
            let selectedCount = 0;
            let allCheckboxesSelected = false;
            
            row.listOfIssues.forEach((issue) => {
                let selected = selectedCheckboxes[row.rowId]?.[issue.text];
                //Count to figure out how many issues are selected for form data request object.
                if(selected){
                    selectedCount++;
                }
            });

            if(selectedCount === row.listOfIssues.length){
                allCheckboxesSelected = true;
            }

            //Set array values for updating form data request object for the backend API.
            //Duplicate code. Code in this file needs to be refactored to consider array
            //objects in public.js.
            setCheckboxesInARowSelectedValue(row.rowId, allCheckboxesSelected, selectedCount);
            
            setSelectedRows((prevState) => ({
                ...prevState,
                [row.rowId]: allCheckboxesSelected,
            }));
        });
    }, [selectedCheckboxes, editionRows]);

    // Monitor the state of all custom-switches and update the master switch state accordingly
    useEffect(() => {
        const anyCustomSwitchUntoggled = editionRows.some((row) => !selectedRows[row.rowId]);
        setMasterSwitch(!anyCustomSwitchUntoggled);
    }, [selectedRows, editionRows]);

    const toggleRowSelection = (rowId) => {
        const isSelected = !selectedRows[rowId];
        setSelectedRows((prevState) => ({
            ...prevState,
            [rowId]: isSelected,
        }));
    
        // Update checkboxes within the row
        setCheckboxesAsRow(rowId, isSelected);
    };

    const setCheckboxesAsRow = (rowId, isSelected) => {
        setSelectedCheckboxes((prevCheckboxes) => {
            const updatedRowCheckboxes = { ...prevCheckboxes[rowId] };
            for (const issueText in updatedRowCheckboxes) {
                updatedRowCheckboxes[issueText] = isSelected;
            }
            return {
                ...prevCheckboxes,
                [rowId]: updatedRowCheckboxes,
            };
        });
    };

    const setRowsAsMaster = (isSelected) => {
        setSelectedRows((prevRows) => {
            const updatedRows = {};
            editionRows.forEach((row) => {
                updatedRows[row.rowId] = isSelected;
            });
            return {
                ...prevRows,
                ...updatedRows,
            };
        });
    
        // Update checkboxes for all rows
        editionRows.forEach((row) => {
            setCheckboxesAsRow(row.rowId, isSelected);
        });
    };

    const toggleCheckboxSelection = (rowId, issueText) => {
        setSelectedCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [rowId]: {
                ...prevCheckboxes[rowId],
                [issueText]: !prevCheckboxes[rowId]?.[issueText],
            },
        }));
    };

    const toggleMasterSwitch = () => {
        // Toggle the master switch state
        const newMasterSwitchState = !masterSwitch;
        setMasterSwitch(newMasterSwitchState);
    
        // Set the selection state of all rows based on the new master switch state
        setRowsAsMaster(newMasterSwitchState);
    };
    
    const isCheckboxSelected = (rowId, issueText, id) => {
        let isSelected = selectedCheckboxes[rowId]?.[issueText];
        setCheckBoxSelected(rowId, id, isSelected);
        return isSelected;
    }

    const isRowSelected = (rowId) => selectedRows[rowId];

    function handleIssueUpdate(rowID, changeMode) {
        const rows = changeIssueCountOfCurrentAndSubsequentYear(rowID, changeMode);
        setEditionRows(rows);
    }

    return(
        <motion.div
            variants={animateText(0.15)}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show" >
            <EditionsTable 
                editionRows={editionRows}
                columns={columns}
                handleIssueUpdate={handleIssueUpdate}
                isRowSelected={isRowSelected}
                isCheckboxSelected={isCheckboxSelected}
                toggleMasterSwitch={toggleMasterSwitch}
                toggleCheckboxSelection={toggleCheckboxSelection}
                toggleRowSelection={toggleRowSelection}
                masterSwitch={masterSwitch}
            />
        </motion.div>
    )
};