'use client';

import { TEXT_LABEL_HEADER_EDITION_CHECKBOX, TEXT_LABEL_HEADER_EDITION_NUMBER, TEXT_LABEL_HEADER_EDITION_TYPE, TEXT_LABEL_HEADER_ISSUES, TEXT_LABEL_HEADER_YEAR } from "@/constants/common_js_constants";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

/**
 * Table component with issue details and checkboxes.
 * 
 * @author pdoddi
 */
export default function EditionsTable({editionRows}) {

    const columns = [
        { field: "editionType", title: TEXT_LABEL_HEADER_EDITION_TYPE, numeric: false, align: "left" },
        { field: "editionNo", title: TEXT_LABEL_HEADER_EDITION_NUMBER, numeric: true, align: "left" },
        { field: "year", title: TEXT_LABEL_HEADER_YEAR, numeric: true, align: "left" },
        { field: "selectAllBox", title: TEXT_LABEL_HEADER_EDITION_CHECKBOX, numeric: false, align: "left" },
        { field: "issues", title: TEXT_LABEL_HEADER_ISSUES, numeric: false, align: "left" },
    ];

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
        //alternate rows have different colors
        '&:nth-of-type(odd)': {
            backgroundColor: "#FBFBFB",
          },
          // hide last border
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        }));

    return(<>
        <TableContainer id="editionsTable" className="bg-white rounded-lg mx-auto w-fit max-w-[1070px]">
            <Table sx={{ minWidth: 650, maxWidth: 1085 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((col) => (
                                <HeaderTableCell key={col.field} align={col.align}>{col.title}</HeaderTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        editionRows.map((row) => (
                            <AlternateTableRow hover key={row.rowId}>
                                <PaddedTableCell component="th" scope="row" align="left" width="5%">{row.editionType}</PaddedTableCell>
                                <PaddedTableCell align="left" width="5%">{row.editionNumber}</PaddedTableCell>
                                <PaddedTableCell align="left" width="5%">{row.year}</PaddedTableCell>
                                <PaddedTableCell width="10%">Select all</PaddedTableCell>
                                <PaddedTableCell align="left" width="40%">
                                    <div className="flex gap-2">
                                    {row.listOfIssues.map((issue) => (
                                    <li className="list-none">
                                        <input type="checkbox" id={issue.text + "_" + row.rowId} name="checkbox" value="value" className="hidden peer" />
                                        <label for={issue.text + "_" + row.rowId} className="px-2 py-1 items-center justify-between border-[1px] border-black/[0.3] bg-white hover:bg-[#e7e7e738] peer-checked:bg-[#2A2C32] peer-checked:text-white rounded-md">{issue.text}</label>
                                    </li>
                                    ))}
                                    </div>
                                </PaddedTableCell>
                            </AlternateTableRow>
                        ))
                    }
                </TableBody>
            </Table> 
        </TableContainer>
    </>)
};