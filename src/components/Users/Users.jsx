import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, pageSize,currentPage, onPageChange,users,...props}) => {
        return(     
        <div>
            < Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {         
                users.map(u => <User user={u} followingIsProgress={props.followingIsProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow}   
                                    key={u.id} /> )
            }
        </div>
    )
}

export default Users;