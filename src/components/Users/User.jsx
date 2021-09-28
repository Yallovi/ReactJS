import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/img/user.png';
import styles from '../Users/Users.module.css';

export const User = ({user,followingIsProgress,unfollow,follow}) => {
    let u = user;
        return(     
        <div> 
            <span>
                <div> <NavLink to={'profile/' + u.id}>
                        <img className= {styles.img} src={u.photos.small != null ? u.photos.small : userPhoto } /> 
                        </NavLink>
                        </div>
                <div>  
                    {
                        u.followed
                        ? <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id)}}>Unfollow</button>
                        : <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id);}} >Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>
            )
        }

export default User;