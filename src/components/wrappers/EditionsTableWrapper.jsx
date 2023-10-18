import React, { useState, useEffect } from 'react';
import {
    TEXT_BUTTON_ISSUE_COUNT_DECREASE,
    TEXT_BUTTON_ISSUE_COUNT_INCREASE,
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

    //set edition rows
    function handleIssueUpdate(rowID, changeMode){
        setEditionRows(null);
        const rows = changeIssueCountOfCurrentAndSubsequentYear(rowID, changeMode);
        console.log(rows[rowID]);
        setEditionRows(rows);
    }

    useEffect(() => {
        
       

    }, [editionRows]);

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
        />
        </motion.div>
    )
};