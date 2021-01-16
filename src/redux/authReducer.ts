import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

export type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: false;
  captcha: string | null;
};

const initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return { ...state, ...action.payload };
    }

    case SET_CAPTCHA_URL:
      return { ...state, captcha: action.payload };
    default:
      return state;
  }
};

type setAuthUserDataPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type setAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA;
  payload: setAuthUserDataPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): setAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setCaptchaUrl = (captchaUrl: string) => ({
  type: SET_CAPTCHA_URL,
  payload: captchaUrl,
});

export const getAuthAcces = () => {
  return async (dispatch: any) => {
    const data = await authAPI.getAccess();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email: string, password: number, rememberMe: boolean) => async (
  dispatch: any,
) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthAcces());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCpatchaUrl());
    }
    let error = response.data.messages.lenght > 0 ? response.data.message : 'Some error';
    dispatch(stopSubmit('login', { _error: error }));
  }
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCpatchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;
