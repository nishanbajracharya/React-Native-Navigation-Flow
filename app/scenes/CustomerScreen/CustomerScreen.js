import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main';

class CustomerScreen extends Component {

  render() {
    return (
      <Navigator screenProps={{ nav: this.props.navigation }}/>
    );
  }

}

const Navigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

export default CustomerScreen;
