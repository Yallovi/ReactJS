import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "cd3cf6af-6b9a-462d-a36b-cb44aa025a9e",
    }

});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    getProfile(userId){
        console.warn('use are another method');
        return profileAPI.getProfile(userId);
    },
    follow(id){
        return instance.post(`follow/${id}`);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    }

};
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    uppdateStatus(status){
        return instance.put(`profile/status/`, {status});
    }
}

export const authAPI = {
    headerLogin(){
        return instance.get(`auth/me`)
    },
    login(email,password, rememberMe){
        return instance.post(`auth/login`, {email,password, rememberMe})
        .then(response =>{
            return response.data;
        })
    },
    logout(){
        return instance.delete(`auth/login`);
    }
};