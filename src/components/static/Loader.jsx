'use client';

import { Backdrop, CircularProgress } from "@mui/material";

/**
 * Loader component to be used when generating summary.
 * 
 * @author pdoddi
 */
export default function Loader({open}) {
    return(
        <Backdrop
        open={open} 
        style={{  
            zIndex: 2000
        }}
    >
        <CircularProgress style={{  color: 'white' }}/>   
    </Backdrop> 
)};