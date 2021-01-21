export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
};
export type NewsType = {
  title: string,
  date: string,
  img: string,  
  text: string,
  id: number
};