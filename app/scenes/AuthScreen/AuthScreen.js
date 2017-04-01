import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

class AuthScreen extends Component {

  render() {
    return (
      <Navigator screenProps = {{ nav: this.props.navigation }} />
    );
  }

}

const Navigator = StackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
}, {
  navigationOptions: {
    header: {
      style: styles.header
    }
  }
});

export default AuthScreen;
