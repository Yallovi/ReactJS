import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Classes  from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
      <div className= {Classes.content}>
        <ProfileInfo profile={props.profile} status={props.status} uppdateUserStatus={props.uppdateUserStatus}/>
        <MyPostsContainer />
      </div>  
    )
}
export default Profile;