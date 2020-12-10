import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '86798368-ca86-4eaa-8c39-db3db0a87b46'
  }
})

const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 5) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  auth() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  setUsers(userId) {
    return profileAPI.setUsers(userId);
  },
}

export const profileAPI = {
  setUsers(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, { ...profile })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = true) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}


export default usersAPI;