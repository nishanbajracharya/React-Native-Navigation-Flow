import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
import RouterScreen from './scenes/Router';
import AuthScreen from './scenes/AuthScreen';
import AdminScreen from './scenes/AdminScreen';
import SplashScreen from './scenes/SplashScreen';
import CheckFirstRun from './scenes/CheckFirstRun';
import CustomerScreen from './scenes/CustomerScreen';

class App extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar backgroundColor='#f4f4f4' barStyle='dark-content'/>
        <Navigator />
      </View>
    );
  }

}

const Navigator = StackNavigator({
  CheckFirstRun: {
    screen: CheckFirstRun
  },
  Splash: {
    screen: SplashScreen
  },
  Router: {
    screen: RouterScreen
  },
  Customer: {
    screen: CustomerScreen
  },
  Admin: {
    screen: AdminScreen
  },
  Auth: {
    screen: AuthScreen
  }
}, {
  navigationOptions: {
    header: {
      visible: false
    }
  }
});

export default App;
