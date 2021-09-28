import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile,getUserStatus,uppdateUserStatus} from '../../redux/ProfileReducer';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { withRouter } from "react-router";
import { compose } from 'redux';

class ProfileContainer extends React.Component {

componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){userId = this.props.authorizedUserId;}
       this.props.getUserProfile(userId);
       this.props.getUserStatus(userId);
  }
  
  render(){
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} uppdateUserStatus={this.props.uppdateUserStatus} />
    )
    
  }
}

let mapStateToProps = (state) => {
  return {
      profile: state.dialogsPage.profile,
      status: state.dialogsPage.status,
      authorizedUserId: state.auth.id,
      isAuth: state.auth.isAuth,

  };
};


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {getUserProfile, getUserStatus, uppdateUserStatus})
)(ProfileContainer);
