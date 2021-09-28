import React from 'react';
import { addPostActionCreater} from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
    return {
      newPostText: state.dialogsPage.newPostText,
      posts: state.dialogsPage.postsData
    };
};

let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreater(newPost));
    }

  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;