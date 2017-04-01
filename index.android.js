import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/';

export default class ReactNativeNavigationFlow extends Component {

  render() {
    return (
      <App />
    );
  }

}

AppRegistry.registerComponent('ReactNativeNavigationFlow', () => ReactNativeNavigationFlow);
