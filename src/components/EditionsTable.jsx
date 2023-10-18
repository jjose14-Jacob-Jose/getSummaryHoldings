import {
    TEXT_BUTTON_ISSUE_COUNT_DECREASE,
    TEXT_BUTTON_ISSUE_COUNT_INCREASE,
} from "@/constants/common_js_constants";
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
export default function EditionsTable(props) {

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

    return(
        <TableContainer id="editionsTable" className="bg-white rounded-lg mx-auto w-[1131px]">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.columns.map((col) => (
                            <HeaderTableCell key={col.field} align={col.align}>
                                {col.field === "selectAll" ? (
                                    // Render the text label "Select All" and the master switch
                                    <div 
                                    className='flex gap-2'>
                                        <div className='font-light text-xs text-[#515151]'>{col.title}</div>
                                    <div
                                    className={`relative cursor-pointer w-10 h-4 ${
                                        props.masterSwitch ? 'bg-[#2A2C32] border border-[#2A2C32] rounded-2xl' : 'bg-white border border-[#2A2C32] rounded-2xl'
                                        }`}
                                        onClick={props.toggleMasterSwitch}
                                >
                                    <div
                                        className={`absolute w-3 h-3 rounded-full transform top-1/2 -translate-y-1/2
                                            ${
                                                props.masterSwitch ? 'checked bg-white left-6':'bg-[#2A2C32] left-0.5'
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
                    {props.editionRows.map((row) => (
                        <AlternateTableRow hover key={row.rowId} 
                        // onMouseEnter={() => {
                            // setShowRowActions(row.rowId);    
                        //   }}
                        //   onMouseLeave={() => setShowRowActions(-1)}
                            >
                            <PaddedTableCell component="th" scope="row" align="left" width="5%">{row.editionType}</PaddedTableCell>
                            <PaddedTableCell align="left" width="5%">{row.editionNumber}</PaddedTableCell>
                            <PaddedTableCell align="left" width="5%">{row.year}</PaddedTableCell>
                            <PaddedTableCell align="justify" width="11%">
                                <div
                                    className={`ml-[24px] relative cursor-pointer w-10 h-4 ${
                                        props.isRowSelected(row.rowId) ? 'bg-[#2A2C32] border border-[#2A2C32] rounded-2xl' : 'bg-white border border-[#2A2C32] rounded-2xl'
                                        }`}
                                    onClick={() => props.toggleRowSelection(row.rowId)} 
                                >
                                    <div
                                        className={`absolute w-3 h-3 rounded-full transform top-1/2 -translate-y-1/2
                                            ${
                                                props.isRowSelected(row.rowId) ? 'checked bg-white left-6':'bg-[#2A2C32] left-0.5'
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
                                                checked={props.isCheckboxSelected(row.rowId, issue.text, issue.id)}
                                                onChange={() => props.toggleCheckboxSelection(row.rowId, issue.text)}
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
                            <PaddedTableCell align="left" width="15%">
                                {/*  className={`gap-2 ${row.rowId === showRowActions ? 'flex': 'hidden'}`} */}
                                <div className={`gap-2 flex`}>
                                    <button onClick={() => props.handleIssueUpdate(row.rowId, TEXT_BUTTON_ISSUE_COUNT_INCREASE)} 
                                        className="p-1 px-4 h-fit text-[#2B720A] hover:text-white border-[1px] border-[#2B720A] font-normal rounded  hover:bg-[#2B720A] hover:font-light items-center">+ Issue</button>
                                    <button onClick={() => props.handleIssueUpdate(row.rowId, TEXT_BUTTON_ISSUE_COUNT_DECREASE)} 
                                        className="p-1 px-4 h-fit text-[#B0322A] hover:text-white border-[1px] border-[#B0322A] font-normal rounded  hover:bg-[#B0322A] hover:font-light items-center">- Issue</button>
                                </div>
                            </PaddedTableCell>
                        </AlternateTableRow>
                    ))}
                </TableBody>
            </Table> 
        </TableContainer>
    )
};