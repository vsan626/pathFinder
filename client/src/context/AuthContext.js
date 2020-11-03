import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
//! reducer function gets called with two arguments with dispatch function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign up with that email and password
    const response = await trackerApi.post('/signup', { email, password });
    // if we sign PaymentRequestUpdateEvent, modify our state, and say that we are authenticated
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });

    // navigates to main flow
    navigate('TrackList');
  } catch (err) {
    // if signing up fails, we need to refelct an error message somewhere
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
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
  { token: null, errorMessage: '' }
);
