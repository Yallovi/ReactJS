import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControll/FormsControls';
import {required , maxLengthCreater} from '../utils/validators/validator';
import { connect } from 'react-redux';
import {login} from '../../redux/AuthReducer';
import { Redirect } from 'react-router';
import s from '../../common/FormsControll/FormsControls.module.css';

const maxLength50 = maxLengthCreater(50);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} component={Input} validate={[required, maxLength50]} placeholder={"email"}/>
            </div>
            <div>
            <Field name={"password"} component={Input} validate={[required, maxLength50]} type={"password"} placeholder={"password"}/>
            </div>
            <div>
            <Field name={"rememberMe"} component={Input} validate={[required]} type={"checkbox"} /> rememberMe
            </div>
            {
                error && <div className = {s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button type={"submit"}>submit</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = ({login, isAuth,}) =>{
    const onSubmit = (values) => {
        login(values.email, values.password, values.rememberMe);
    };

    if(isAuth){
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default  connect(mapStateToProps, {login})(Login);