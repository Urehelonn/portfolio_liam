import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthStateType = {
  isAuth: boolean;
  username: string;
  uid: string;
  sid: string;
};

const initialState = {
  value: {
    isAuth: false,
    username: '',
    uid: '',
    sid: '',
  } as AuthStateType,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<AuthStateType>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload.username,
          uid: action.payload.uid,
          sid: action.payload.sid,
        },
      };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
