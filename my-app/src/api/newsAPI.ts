import { NewsType } from './../types/types';
import { instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum } from "./index";

// type MeResponseDataType = {
//   id: number;
//   email: string;
//   login: string;
// };

// type LoginResponseDataType = {
//   userId: number;
// };

export const newsAPI = {
  getNews() {
    return [
      {
        title: "Super important news",
        date: "29.12.2020 10:20",
        img: "https://lh3.googleusercontent.com/ogw/ADGmqu_qj62VZlFc9Q2GkpCYtohA399uVpPovkQnBGos6Q=s32-c-mo",
        text: "somemfdsfklsdfksdfklsdfmsdvdsljwqelqjleqwjewqejwqkl",
        id: 0
      },
      {
        title: "Super important news",
        date: "29.12.2020 10:20",
        img: "https://lh3.googleusercontent.com/ogw/ADGmqu_qj62VZlFc9Q2GkpCYtohA399uVpPovkQnBGos6Q=s32-c-mo",
        text: "somemfdsfklsdfksdfklsdfmsdvdsljwqelqjleqwjewqejwqkl",
        id: 1
      },
      {
        title: "Super important news",
        date: "29.12.2020 10:20",
        img: "https://lh3.googleusercontent.com/ogw/ADGmqu_qj62VZlFc9Q2GkpCYtohA399uVpPovkQnBGos6Q=s32-c-mo",
        text: "somemfdsfklsdfksdfklsdfmsdvdsljwqelqjleqwjewqejwqkl",
        id: 2
      },
    ];
  },
};
