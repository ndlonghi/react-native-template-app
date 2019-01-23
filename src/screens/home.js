import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {removeAuth} from "../services/auth/actions/index";
import {navigateToLogin} from "../navigation/actions/index";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeAuth, navigateToLogin}, dispatch);
};

class Home extends Component {

  handleLogout = () => {
    this.props.removeAuth();
    this.props.navigateToLogin();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>This is the home</Text>
          <Button
            onPress={this.handleLogout}
            title="Log out"
          />
        </View>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default connect(null, mapDispatchToProps)(Home);