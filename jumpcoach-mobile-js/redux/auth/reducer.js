const initialState = {
  token: null
};

// reducer
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ATTEMPT":
      return state;
    case "LOGIN_SUCCESS":
      return {
        token: action.token
      };
    case "LOGIN_FAILURE":
      return state;

    case "SIGNUP_ATTEMPT":
      return state;
    case "SIGNUP_SUCCESS":
      return {
        token: action.token
      };
    case "SIGNUP_FAILURE":
      return state;

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
