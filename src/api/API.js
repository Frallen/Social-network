import * as axios from "axios";

/* Сразу разработать интерфейс для работы с api */
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "c3168964-292a-4dbd-a604-1aeccb93a230" }
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 9) {
    return (
      instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        //              закидываю в data данные
        .then(response => response.data)
    );
  },
  followUsers(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollowUsers(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
};

export const authAPI = {
  auth(data) {
    
    return instance.post(`auth/me/${data}`).then(response => response.data);
  }
};

export const profileAPI = {
  myProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  }
};
