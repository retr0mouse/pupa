import React, { ReactElement, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Props {
    message: string;
}

export function ErrorMessage(props: Props): ReactElement {
    const notify = () => {
        toast.error(props.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    
    useEffect(() => {
        if (!props.message) return;
        notify();
    }, [props.message]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}