import React from 'react';
import Preloader from '../../Preloader/Preloader';
import Classes  from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status,uppdateUserStatus}) => {
  if(!profile){
    return <Preloader />
  }

    return (
      <div>
        <div>
          <img className={Classes.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>
        <div className={Classes.info}>
          <img src={profile.photos.large}/>
        </div>

        <div> <ProfileStatusWithHooks status={status} uppdateUserStatus={uppdateUserStatus} /> </div>
      </div>
    )
}
export default ProfileInfo;