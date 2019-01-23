import React from 'react';
import {connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {
  BackHandler
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import RootNavigator from "../navigators";

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

const ReduxifyApp = reduxifyNavigator(RootNavigator, 'root');

class RootNavigatorWithState extends ReduxifyApp {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    );
    return true;
  };

}

export default connect(mapStateToProps)(RootNavigatorWithState);