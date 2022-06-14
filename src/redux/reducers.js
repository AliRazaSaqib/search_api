/** @format */

import { LOGIN, LOGOUT } from "./actionTypes";

export const initializeState = {
  token: null,
  email: null,
};

const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    case LOGOUT:
      return { ...initializeState };
    default:
      return state;
  }
};

export default reducer;
