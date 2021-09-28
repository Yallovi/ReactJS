import React from 'react';
import Classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    // debugger;
    let path = "/dialogs/" + props.id;
    
    return (        
        <li  className = {Classes.Dialog}>
            <img src={props.img} alt="avatar" />
            <NavLink to= {path} className ={Classes.link}>{props.name}</NavLink> 
        </li>
    )
};


export default DialogItem;