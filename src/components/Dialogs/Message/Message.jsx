import React from 'react';
import Classes from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className = {Classes.Message}>{props.message} </div> 
    )
};
export default Message;