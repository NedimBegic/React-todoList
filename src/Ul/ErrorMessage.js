import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = props => {
    return (
        <>
        <div onClick={props.disableError} className='backdrop'></div>
        <div className='container'>
            <header>
                <h3>Error</h3>
            </header>
            <div>
                <p>Write something in input</p>
            </div>
            <footer>
                <button onClick={props.disableError}>Okay</button>
            </footer>
        </div>

        </>
        
    )
};

export default ErrorMessage;