import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Main';

class AdminScreen extends Component {

  render() {
    return (
      <Navigator screenProps={{ nav: this.props.screenProps.nav }}/>
    );
  }

}

const Navigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

export default AdminScreen;
