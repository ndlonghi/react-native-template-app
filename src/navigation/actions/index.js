import {NavigationActions} from 'react-navigation';

import ScreenNames from "../screen_names";

export const navigateBack = () =>
  NavigationActions.back();

export const navigateToHome = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.HOME
  });

export const navigateToLogin = () =>
  NavigationActions.navigate({
    routeName: ScreenNames.LOGIN
  });