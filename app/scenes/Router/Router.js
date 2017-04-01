import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, ActivityIndicator, AsyncStorage, ToastAndroid } from 'react-native';

import styles from './styles';

class Router extends Component {

  componentDidMount() {
    this.router();
  }

  router = async () => {
    let route = await AsyncStorage.getItem('routeName');
    let loggedIn = false;

    if (route === null) {
      ToastAndroid.show('Not Logged In', ToastAndroid.SHORT);
      route = 'Customer';
    } else {
      ToastAndroid.show(`Logged in to ${ route }`, ToastAndroid.SHORT);
      loggedIn = true;
    }

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: route,
          params: { loggedIn }
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator size='large'/>
      </View>
    );
  }

}

export default Router;
