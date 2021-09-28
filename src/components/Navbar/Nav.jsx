import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = (props) => {
  // let menuItem = props.state.map(item => <NavItem link ={item.link} name = {item.item}/>)
    return (
        <div className= {Classes.nav}>
        <ul>
          {/* {menuItem} */}
          <li className = {Classes.item}><NavLink to = "/profile" className ={Classes.link}>Profile</NavLink></li>
          <li className = {Classes.item}><NavLink to = "/dialogs" className ={Classes.link}>Message</NavLink></li>
          <li className = {Classes.item}><NavLink to = "/music" className ={Classes.link}>Music</NavLink></li>
          <li className = {Classes.item}><NavLink to = "/news" className ={Classes.link}>News</NavLink></li>
          <li className = {Classes.item}><NavLink to = "/settings" className ={Classes.link}>Settings</NavLink></li>
          <li className = {Classes.item}><NavLink to = "/users" className ={Classes.link}>Find users</NavLink></li>
        </ul>
      </div>
    )
};

export default Nav;