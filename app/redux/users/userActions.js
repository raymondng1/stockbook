export const logInSuccess = () => {
  return {
    type: LOGIN_SUCCCESS
  };
};

//Thunks for logging in 

export const logInUser = ({ email, password }) => {
  return dispatch => {
    return axios
      .post(`/api/users/login`, { email, password })
      .then(user => {
        dispatch(logInSuccess());
      })
      .catch((e) => {
				console.log('Failed logging in')
      });
  };
};

export const loggedInFail = () => {
  return {
    type: LOGIN_ERROR
  };
};