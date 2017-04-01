import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

class CheckFirstRun extends Component {

  componentDidMount() {
    this._checkFirstRun();
  }

  _checkFirstRun = async () => {
    let firstRun = await AsyncStorage.getItem('firstRun');

    if(firstRun !== null) this._navigateToScene('Router');
    else this._navigateToScene('Splash');
  }

  _navigateToScene = async (scene) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: scene,
          params: {}
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View />
    );
  }

}

export default CheckFirstRun;
