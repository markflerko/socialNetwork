import { PhotosType, ProfileType } from "../types/types";
import { instance, APIResponseType } from "./index";

type SavePhotoResponseDataType = {
  photos: PhotosType;
};

export const profileAPI = {
  setUsers(userId: number) {
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance
      .get<string>(`profile/status/${userId}`)
      .then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<APIResponseType>(`profile/status`, { status: status })
      .then((res) => res.data);
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<APIResponseType<SavePhotoResponseDataType>>(
      `profile/photo`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, { ...profile });
  },
};
