const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = action.newMessageBody;
            return  {
                ...state,
                massagesData:[...state.massagesData ,{id: 4, message: newMessage} ]
            };
        default: 
            return state;
    }
};

export const addMessageActionCreater = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;