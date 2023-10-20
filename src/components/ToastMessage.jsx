"use client";

import { Alert, Slide, Snackbar } from "@mui/material";

/**
 * Component to show a toast/snackbar at the bottom of the screen on errors.
 * 
 * @author pdoddi
 */
export default function ToastMessage ({toastMessage, open, closeToastMessage}) {

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            TransitionComponent={TransitionUp}
            open={open}
            autoHideDuration={5000}
            onClose={() => closeToastMessage()}
        >
            <Alert severity="error" elevation={6} variant="filled" onClose={() => closeToastMessage()}>{toastMessage}</Alert>
        </Snackbar>
    )
};