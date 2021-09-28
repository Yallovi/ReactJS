import {usersAPI} from '../api/api';
import {profileAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id:1 ,message: "Hello1" , likesCount: 15},
        {id:2 ,message: "Hi, how are you?",likesCount: 100 },
        {id:3 ,message: "It's my first post!", likesCount: 0}
      ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
                let newPost = {
                id: 4,
                message: action.newPost,
                likesCount:200,
            };

            return{
                ...state, 
                postsData: [...state.postsData, (newPost)],
            };
            case SET_USER_PROFILE:{
                return{ ...state, profile: action.profile};
            }
            case SET_STATUS:{
                return{ ...state, status: action.status};
            }
            case DELETE_POST:
                return{...state, post: state.postsData.filter(p => p.id !== action.postId)}
        default:
            return state;      
    

    }
};

export const addPostActionCreater = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile});
export const deletePost = (idPost) => ({type: DELETE_POST , idPost});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
                    dispatch(setUserProfile(response.data));
};

export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(response.data));
};
export const uppdateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.uppdateStatus(status);
        if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
};


export default profileReducer;
