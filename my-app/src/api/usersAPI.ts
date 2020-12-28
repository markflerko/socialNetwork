import { GetItemsType, instance, APIResponseType } from "./index";

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 5, term: string = '', friend: null | boolean = null) {
    return instance
      .get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}&term=${term}` + (friend===null ? '' : `&friend=${friend}`))
      .then((res) => res.data);
  },
  auth() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((res) => res.data) as Promise<APIResponseType>;
  },
  followUser(id: number) {
    return instance.post<APIResponseType>(`follow/${id}`).then((res) => res.data);
  },
};
