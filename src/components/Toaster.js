import React from 'react';
import { Toast } from 'react-bootstrap';


const Toaster = ({msg, showFailMsg, onToastClose}) => {
    return (
        <div aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '100px',
        }}>
            <Toast style={{
            position: 'absolute',
            top: -400,
            right: 0,
            }} onClose={() => {
                onToastClose(false)
            }} show={showFailMsg} delay={2000} autohide> 
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Error Message</strong>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
            </Toast>
        </div>
    )};


export default Toaster;