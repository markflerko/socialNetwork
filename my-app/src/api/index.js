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
  setUsers(userId) {
    return instance.get(`profile/${userId}`)
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
  }
}


export default usersAPI;