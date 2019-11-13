export const signupAttempt = (name, email, password) => ({
  type: "SIGNUP_ATTEMPT",
  credentials: {
    name,
    email,
    password
  }
});

export const signupSuccess = token => ({
  type: "SIGNUP_SUCCESS",
  token
});

export const loginAttempt = (email, password) => ({
  type: "LOGIN_ATTEMPT",
  credentials: {
    email,
    password
  }
});

export const loginSuccess = token => ({
  type: "LOGIN_SUCCESS",
  token
});

export const logout = () => ({
  type: "LOGOUT"
});
