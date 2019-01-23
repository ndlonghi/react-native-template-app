import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {navigateToHome, navigateToLogin} from "../navigation/actions/index";
import LoadingLayout from '../components/loading/index';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({navigateToLogin, navigateToHome}, dispatch);
};

class Loading extends Component {

  componentDidMount() {
    this.redirect();
  }

  redirect = () => {
    if (this.props.auth.authObject) {
      this.props.navigateToHome();
    } else {
      this.props.navigateToLogin();
    }
  };

  render() {
    return <LoadingLayout/>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);