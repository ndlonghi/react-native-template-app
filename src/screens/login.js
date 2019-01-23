import React, {Component} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {removeAuth, setAuth} from "../services/auth/actions/index";
import {navigateToHome} from "../navigation/actions/index";
import type {AuthObject} from "../models/auth-object";
import type {ApiErrorResponse} from "../models/api-error-response";
import Api from '../services/api/index';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setAuth, removeAuth, navigateToHome}, dispatch);
};

class Login extends Component {

  handleSubmit = () => {
    Api.login({
      email: 'mobile@4rsoluciones.com',
      password: 'aoeu'
    })
      .then((auth: AuthObject) => {
        this.props.setAuth(auth);
        this.props.navigateToHome();
      })
      .catch((error: ApiErrorResponse) => {
        this.props.removeAuth();
      })
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../assets/imgs/logo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <Button
            onPress={this.handleSubmit}
            title="Log in"
          />
        </View>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#838383',
    color: 'white',
  }
});

export default connect(null, mapDispatchToProps)(Login);