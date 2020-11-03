import { NavigationActions } from 'react-navigation';

let navigator;

// allows us to navigate around the navigation
export const setNavigator = (nav) => {
  navigator = nav
};

//! tells react navigation we want to change a different screen to user
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName, 
      params
    })
  )
}