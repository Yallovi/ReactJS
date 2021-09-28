import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './../Nav.module.css';

const NavItem = (props) => {

    return (

        <li className = {Classes.item}><NavLink to = {props.link} className ={Classes.link}>{props.name}</NavLink></li>
    )
}

export default NavItem;