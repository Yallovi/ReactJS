import { applyMiddleware, combineReducers, createStore ,compose} from "redux";
import dialogsReducer from "./DialogsReducer";
import navbarReducer from "./NavbarReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import appReducer from "./AppReducer";

import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers ({
    dialogsPage: profileReducer,
    messagesPage: dialogsReducer,
    sitebar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.__store__ = store;
export default store;