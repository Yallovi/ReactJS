'use strict';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';

let  store = {
    _state: {
        dialogsPage:{
            postsData: [
                {id:1 ,message: "Hello1" , likesCount: 15},
                {id:2 ,message: "Hi, how are you?",likesCount: 100 },
                {id:3 ,message: "It's my first post!", likesCount: 0}
              ],
            newPostText: 'it-kamasutra.com'
        },
    
        messagesPage: {
            dialogsData: [
            
                {id: 1, name: "Vlad", img: "https://s0.rbk.ru/v6_top_pics/media/img/5/96/755039177971965.jpg"},
                {id: 2, name: "Viktor", img: "https://m.buro247.ru/images/mo/1000x600-180520-02.png"},
                {id: 3, name: "Andrey", img: "https://bel.biz/wp-content/uploads/2020/01/vipy.tv_-e1578133224386.jpg"},
                {id: 4, name: "Elizabeth", img: "https://static.ngs.ru/news/2021/99/preview/d95592bc55dfd3a4baaae9babc4864d10bcdfa6c_824.jpeg"},
                {id: 5, name: "Dan", img: "https://pobedarf.ru/wp-content/uploads/2020/12/gejdelbergskij-chelovek-1-scaled.jpg"},     
              
              ],
              
              massagesData: [
                {id : 1, message: "Hello!"}, 
                {id : 2, message: "How are you?"}, 
                {id : 3, message: "Yo!!"}
              ],
              newMessageText: ''
        },
    
        sitebar:{
            menuItems: [
                {link:"/profile", item: "Profile"},
                {link:"/dialogs", item: "Message"},
                {link:"/music", item: "Music"},
                {link:"/news", item: "News"},
                {link:"/settings", item: "Settings"},
    
            ]
        }
    },
    // Перересовывает данные rerebderEntireTree
    _callSubscriber () {
        console.log('State is change');
    },
    // Его задача возвращать нам state
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch (action) {
        this._state.dialogsPage = profileReducer(this._state.dialogsPage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        
        this._callSubscriber(this._state);
        
    }
    
};





export default store;

window.store = store;