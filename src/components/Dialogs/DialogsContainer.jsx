import React from 'react';
import { addMessageActionCreater} from '../../redux/DialogsReducer';
import Classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from "react-router";



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage, 

    };
};

let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: (newMessageBody) =>{
            dispatch(addMessageActionCreater(newMessageBody));
        },
    };
};

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)    
)(Dialogs);
