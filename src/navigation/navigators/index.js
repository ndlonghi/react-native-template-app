import React from 'react';
import {
  createSwitchNavigator
} from 'react-navigation';

import ScreenNames from "../screen_names";
import Loading from "../../screens/loading";
import Login from "../../screens/login";
import Home from "../../screens/home";

const RootNavigator = createSwitchNavigator(
  {
    [ScreenNames.LOADING]: Loading,
    [ScreenNames.LOGIN]: Login,
    [ScreenNames.HOME]: Home
  },
  {
    initialRouteName: ScreenNames.LOADING
  }
);

export default RootNavigator;