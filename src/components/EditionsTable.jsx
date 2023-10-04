import React, { useState, useEffect } from 'react';
import {
    TEXT_LABEL_HEADER_ALL_ISSUES,
    TEXT_LABEL_HEADER_EDITION_CHECKBOX,
    TEXT_LABEL_HEADER_EDITION_NUMBER,
    TEXT_LABEL_HEADER_EDITION_TYPE,
    TEXT_LABEL_HEADER_ISSUES,
    TEXT_LABEL_HEADER_YEAR,
} from "@/constants/common_js_constants";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";
import { setCheckBoxSelected, setCheckboxesInARowSelectedValue } from '../../public/public';

/**
 * Table component with issue details and checkboxes.
 * 
 * @author pdoddi
 */
export default function EditionsTable({ editionRows }) {

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

    useEffect(() => {
        // Initialize selectedCheckboxes and selectedRows here
        const initialSelectedCheckboxes = {};
        const initialSelectedRows = {};

        // Set all checkboxes to false initially for each row
        editionRows.forEach((row) => {
            initialSelectedCheckboxes[row.rowId] = {};
            row.listOfIssues.forEach((issue) => {
                initialSelectedCheckboxes[row.rowId][issue.text] = false;
            });
            initialSelectedRows[row.rowId] = false; // Deselect all rows initially
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

    const HeaderTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
        fontWeight: 520,
        fontSize: 12,
        color: "#515151",
        paddingBottom: 9,
        paddingTop: 10,
        paddingLeft: 26
        }
    }));

    const PaddedTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.body}`]: {
            paddingLeft: 26
        }
        }));

    const AlternateTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(odd)': {
            backgroundColor: "#FBFBFB",
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return(<motion.div
        variants={animateText(0.15)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show" >
        <TableContainer id="editionsTable" className="bg-white rounded-lg mx-auto w-fit max-w-[1131px]">
            <Table sx={{ minWidth: 650, maxWidth: 1131 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                            {columns.map((col) => (
                                <HeaderTableCell key={col.field} align={col.align}>
                                    {col.field === "selectAll" ? (
                                        // Render the text label "Select All" and the master switch
                                        <div 
                                        className='flex gap-2'>
                                            <div className='font-light text-xs text-[#515151]'>{col.title}</div>
                                        <div
                                        className={`relative cursor-pointer w-10 h-4 ${
                                            masterSwitch ? 'bg-[#2A2C32] border border-[#2A2C32] rounded-2xl' : 'bg-white border border-[#2A2C32] rounded-2xl'
                                          }`}
                                          onClick={toggleMasterSwitch}
                                    >
                                        <div
                                            className={`absolute w-3 h-3 rounded-full transform top-1/2 -translate-y-1/2
                                             ${
                                                masterSwitch ? 'checked bg-white left-6':'bg-[#2A2C32] left-0.5'
                                              } `}
                                        ></div>
                                    </div>
                                        </div>
                                        
                                    ) : (
                                        // Render other column headers
                                        col.title
                                    )}
                                </HeaderTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {editionRows.map((row) => (
                            <AlternateTableRow hover key={row.rowId}>
                                 <PaddedTableCell component="th" scope="row" align="left" width="5%">{row.editionType}</PaddedTableCell>
                                 <PaddedTableCell align="left" width="5%">{row.editionNumber}</PaddedTableCell>
                                <PaddedTableCell align="left" width="5%">{row.year}</PaddedTableCell>
                                <PaddedTableCell align="justify" width="11%">
                                    <div
                                        className={`ml-[24px] relative cursor-pointer w-10 h-4 ${
                                            isRowSelected(row.rowId) ? 'bg-[#2A2C32] border border-[#2A2C32] rounded-2xl' : 'bg-white border border-[#2A2C32] rounded-2xl'
                                          }`}
                                        onClick={() => toggleRowSelection(row.rowId)} 
                                    >
                                        <div
                                            className={`absolute w-3 h-3 rounded-full transform top-1/2 -translate-y-1/2
                                             ${
                                                isRowSelected(row.rowId) ? 'checked bg-white left-6':'bg-[#2A2C32] left-0.5'
                                              } `}
                                        ></div>
                                    </div>
                                </PaddedTableCell>
                                <PaddedTableCell align="left" width="36%">
                                    <div className="flex gap-2 flex-wrap justify-left">
                                        {row.listOfIssues.map((issue) => (
                                            <li className="list-none my-1" key={issue.text}>
                                                <input
                                                    type="checkbox"
                                                    id={issue.text + '_' + row.rowId}
                                                    name="checkbox"
                                                    value="value"
                                                    className="hidden peer"
                                                    checked={isCheckboxSelected(row.rowId, issue.text, issue.id)}
                                                    onChange={() => toggleCheckboxSelection(row.rowId, issue.text)}
                                                />
                                                <label
                                                    htmlFor={issue.text + '_' + row.rowId}
                                                    className="px-2 py-1 cursor-pointer items-center justify-between border-[1px] border-black/[0.3] bg-white hover:bg-[#e7e7e738] peer-checked:bg-[#2A2C32] peer-checked:text-white rounded-md"
                                                >
                                                    {issue.text}
                                                </label>
                                            </li>
                                        ))}
                                    </div>
                                </PaddedTableCell>
                                <PaddedTableCell align="left" width="15%">{row.selectAll}</PaddedTableCell>
                            </AlternateTableRow>
                        ))
                    }
                </TableBody>
            </Table> 
        </TableContainer>
    </motion.div>)
};