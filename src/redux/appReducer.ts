import { getAuthAcces } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialStateType = {
  initialized: boolean;
};

const initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthAcces());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
