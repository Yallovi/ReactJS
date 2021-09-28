
import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow,getUsers, setCurrentPage,toggleFollowingProgress} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import {getUser, getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingIsProgress} from '../../redux/Users-selector';

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }; 

    onPageChange = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
         <Users  totalUsersCount= {this.props.totalUsersCount} 
                    pageSize= {this.props.pageSize}
                    currentPage= {this.props.currentPage}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    onPageChange = {this.onPageChange}
                    users = {this.props.users}
                    toggleFollowingProgress = {this.props.toggleFollowingProgress}
                    followingIsProgress = {this.props.followingIsProgress}

        />;
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),

    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    })
)(UsersContainer)
