import { instance } from './index';

type getCaptchaUrlResponseType = {
  url: string
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`);
  },
};
