import React, {useEffect, useState} from 'react';


export const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status);
    }, [props.status]);     

    const activedEditMode = () => {
        setEditMode(true);
    };

    const deactivedEditMode = () => {
        setEditMode(false);
        props.uppdateUserStatus(status);
    };

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return (
      <div>
        {!editMode &&
            <div> 
                <span onDoubleClick={activedEditMode} > {props.status || '----'} </span> 
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivedEditMode} autoFocus={true} value={status}/>
            </div>
        }
      </div>
    )
}
export default ProfileStatusWithHooks;