/** @format */

import { LOGIN, LOGOUT } from "./actionTypes";

export const loginAction = ({ email, token }) => ({
  type: LOGIN,
  payload: {
    token,
    email,
  },
});

export const LogoutAction = () => ({
  type: LOGOUT,
});
