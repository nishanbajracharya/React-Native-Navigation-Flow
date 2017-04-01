import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import MainScreen from './Main';

class AdminScreen extends Component {

  render() {
    return (
      <Navigator screenProps={{ nav: this.props.navigation }}/>
    );
  }

}

const Navigator = TabNavigator({
  Order: {
    screen: MainScreen
  },
  Menu: {
    screen: MainScreen
  },
  User: {
    screen: MainScreen
  },
  Location: {
    screen: MainScreen
  }
}, {
  backBehavior: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#333',
    inactiveTintColor: '#777',
    style: {
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: '#f4f4f4'
    },
    indicatorStyle: {
      backgroundColor: '#333'
    },
    tabStyle: {
      paddingHorizontal: 0
    }
  }
});

export default AdminScreen;
