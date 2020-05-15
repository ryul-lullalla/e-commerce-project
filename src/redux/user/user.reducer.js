//reducer gets two properties: initial state(object), action(object has type)

// example of action
// {
//     type:'',
//     payload: ""
// }

import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isSigningIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isSigningIn: false,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
