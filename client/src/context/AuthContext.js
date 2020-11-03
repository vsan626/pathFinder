import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
//! reducer function gets called with two arguments with dispatch function
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      // make api request to sign up with that email and password
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
      // if we sign PaymentRequestUpdateEvent, modify our state, and say that we are authenticated
    } catch (err) {
      // if signing up fails, we need to refelct an error message somewhere
      console.log(err.response.data);
    }

  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing a message
  };
};
const signout = (dispatch) => {
  return ({ email, password }) => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
