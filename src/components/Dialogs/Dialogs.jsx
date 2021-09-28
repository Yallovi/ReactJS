import React from 'react';
// import { addMessageActionCreater, uppdateNewMessageActionCreater } from '../../redux/DialogsReducer';
import Classes from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControll/FormsControls';
import {required , maxLengthCreater} from '../utils/validators/validator';


const Dialogs = (props) => {
    
    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name = {dialog.name} key={dialog.id} id = {dialog.id} img ={dialog.img}/>);
    let messageItem = state.massagesData.map( mess => <Message message = {mess.message} key ={mess.id} />);

    const onSubmit = (values) => {
        props.addMessage(values.newMessageBody);
    };


    // if(!props.isAuth) return <Redirect to={"/login"} />
    return (
        <div className = {Classes.Dialogs}>
            <div className = {Classes.DialogsItem}> 
                <ul>
                    {dialogsElements}
                </ul>
            </div> 
            <div className = {Classes.Messages}> 
                {messageItem}
                <AddMessageFormRedux  onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreater(10);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className = {Classes.formMessage}>
            <div>
                <Field name={"newMessageBody"} component={Textarea} validate={[required, maxLength10]} placeholder={"Enter your message"}></Field>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form:'dialogaddMessageForm'})(addMessageForm);

export default Dialogs;  