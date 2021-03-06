import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9453f2b4-077f-4e03-b64e-caf3f68760d1',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users/?page=${currentPage}&count${pageSize}`).then((response) => {
      return response.data;
    });
  },
  deleteFollows(userId) {
    return instance.delete(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  postFollows(userId) {
    return instance.post(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  },
  savePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  updateProfileInfo(profile) {
    return instance.put('profile', profile);
  },
};

export const authAPI = {
  getAccess() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
