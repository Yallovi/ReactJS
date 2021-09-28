let initialState = {
    menuItems: [
        {link:"/profile", item: "Profile"},
        {link:"/dialogs", item: "Message"},
        {link:"/music", item: "Music"},
        {link:"/news", item: "News"},
        {link:"/settings", item: "Settings"},

    ]
}

const navbarReducer = (state = initialState, action) => {
    
    return state;
};


export default navbarReducer;