import React ,{PureComponent} from 'react';
import { Field, reduxForm } from 'redux-form';
import Classes from './MyPosts.module.css';
import Post from './Post/Post';
import {required , maxLengthCreater} from '../../utils/validators/validator';
import { Textarea } from '../../../common/FormsControll/FormsControls';

const maxLength30 =  maxLengthCreater(30);

const addNewPost = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className = {Classes.formPosts}>
          <div>
        <Field name={"newPost"} component={Textarea} validate ={[required, maxLength30]}  placeholder={"Enter your message"} />
          </div>
          <button>Add Post</button>
      </form>
  )
} 
const AddNewPostRedux = reduxForm({form: addNewPost})(addNewPost) 

const MyPosts =  React.memo(props => {


  // componentDidMount() {
  //   setTimeout(() =>{
  //     this.setState({a:12})
  //   }, 3000)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state
  // }

    console.log("Render YO")
  const posts = props.posts.map( mess => <Post message={mess.message}  likeCounts={mess.likesCount}/>);
  const onSubmit = (values) => {
   props.addPost(values.newPost);
  }


  return (
    <div className = {Classes.title }>my posts
      <AddNewPostRedux onSubmit= {onSubmit} />
      <div className={Classes.post}>
          {posts}
      </div>
    </div>
)

  
}) 
export default MyPosts;