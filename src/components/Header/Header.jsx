import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes  from './Header.module.css';

const Header = (props) =>{
    return (
        <header className={Classes.header}>
          <img className= {Classes.img} src="https://upload.wikimedia.org/wikipedia/commons/3/36/Vkontakte.png"></img>
        <div className= {Classes.loginBlock}>
          { props.isAuth 
              ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div> 
              : <NavLink to={'/login'}>Login</NavLink>
          }
        </div>

      </header>
    )
};

export default Header;