import React, { useState, useEffect } from 'react';
import {
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

export default function EditionsTable({ editionRows }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
    const [selectedRows, setSelectedRows] = useState({});
    
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
            const allCheckboxesSelected = row.listOfIssues.every((issue) =>
                selectedCheckboxes[row.rowId]?.[issue.text]
            );
            setSelectedRows((prevState) => ({
                ...prevState,
                [row.rowId]: allCheckboxesSelected,
            }));
        });
    }, [selectedCheckboxes, editionRows]);

    const toggleRowSelection = (rowId) => {
        setSelectedRows((prevState) => ({
            ...prevState,
            [rowId]: !prevState[rowId], // Toggle the row's selection state
        }));
        // Use the setCheckboxesAsRow function to update checkboxes in the row
        const isSelected = !selectedRows[rowId];
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

    const toggleCheckboxSelection = (rowId, issueText) => {
        setSelectedCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [rowId]: {
                ...prevCheckboxes[rowId],
                [issueText]: !prevCheckboxes[rowId]?.[issueText],
            },
        }));
    };

    const isCheckboxSelected = (rowId, issueText) =>
        selectedCheckboxes[rowId]?.[issueText];

    const isRowSelected = (rowId) => selectedRows[rowId];

    const columns = [
        { field: "editionType", title: TEXT_LABEL_HEADER_EDITION_TYPE, numeric: false, align: "left" },
        { field: "editionNo", title: TEXT_LABEL_HEADER_EDITION_NUMBER, numeric: true, align: "left" },
        { field: "year", title: TEXT_LABEL_HEADER_YEAR, numeric: true, align: "left" },
        { field: "selectAllBox", title: TEXT_LABEL_HEADER_EDITION_CHECKBOX, numeric: false, align: "left" },
        { field: "issues", title: TEXT_LABEL_HEADER_ISSUES, numeric: false, align: "left" },
    ];

    const HeaderTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            fontWeight: 600
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

    return (
        <>
            <TableContainer className="bg-white rounded-lg mx-auto w-fit max-w-[1085px]">
                <Table sx={{ minWidth: 650, maxWidth: 1085 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <HeaderTableCell key={col.field} align={col.align}>
                                    {col.title}
                                </HeaderTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {editionRows.map((row) => (
                            <AlternateTableRow hover key={row.rowId}>
                                <TableCell component="th" scope="row" align="left" width="5%">
                                    {row.editionType}
                                </TableCell>
                                <TableCell align="left" width="5%">
                                    {row.editionNumber}
                                </TableCell>
                                <TableCell align="left" width="5%">
                                    {row.year}
                                </TableCell>
                                <TableCell width="10%">
                                    <div className="ml-8">
                                    <div
                                        className={`relative cursor-pointer w-10 h-4 ${
                                            isRowSelected(row.rowId) ? 'bg-gray-900 border border-gray-900 rounded-2xl' : 'bg-white border border-gray-900 rounded-2xl'
                                          }`}
                                        onClick={() => toggleRowSelection(row.rowId)} 
                                    >
                                        <div
                                            className={`absolute w-3 h-3 rounded-full transform top-1/2 -translate-y-1/2
                                             ${
                                                isRowSelected(row.rowId) ? 'checked bg-white left-6':'bg-gray-900 left-0.5'
                                              } `}
                                        ></div>
                                    </div>
                                    </div>
                                </TableCell>
                                <TableCell align="left" width="40%">
                                    <div className="flex gap-2">
                                        {row.listOfIssues.map((issue) => (
                                            <li className="list-none" key={issue.text}>
                                                <input
                                                    type="checkbox"
                                                    id={issue.text + '_' + row.rowId}
                                                    name="checkbox"
                                                    value="value"
                                                    className="hidden peer"
                                                    checked={isCheckboxSelected(row.rowId, issue.text)}
                                                    onChange={() => toggleCheckboxSelection(row.rowId, issue.text)}
                                                />
                                                <label
                                                    htmlFor={issue.text + '_' + row.rowId}
                                                    className="px-2 py-1 items-center justify-between border-[1px] border-black/[0.3] bg-white hover:bg-[#e7e7e738] peer-checked:bg-[#2A2C32] peer-checked:text-white rounded-md"
                                                >
                                                    {issue.text}
                                                </label>
                                            </li>
                                        ))}
                                    </div>
                                </TableCell>
                            </AlternateTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button id="btnGenerateSummary"></button>
        </>
    );
}
