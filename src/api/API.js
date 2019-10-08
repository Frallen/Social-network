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
  me() {
    return instance.get(`auth/me/`);
  }
};

export const profileAPI = {
  myProfile(userId) {                             //в response суем data
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`).then(response=>response.data)
  },
  updateStatus(status){                  //статус это серверная пременная в нее кладем наш статус
    return instance.put(`profile/status`, {status:status})
  }
};
