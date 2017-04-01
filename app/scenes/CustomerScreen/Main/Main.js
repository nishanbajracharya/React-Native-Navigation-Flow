import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, AsyncStorage, ToastAndroid } from 'react-native';

import styles from './styles';
import Button from '../../../components/Button';

class Main extends Component {

  static navigationOptions = {
    title: 'Customer',
    header: ({ state }) => ({
      style: styles.header,
      right: state.params && state.params._setHeaderButton
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _setHeaderButton: this._setHeaderButton()
    });
  }

  _navigateToAuth = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Auth',
      params: {}
    });

    this.props.screenProps.nav.dispatch(navigateAction);
  }

  _logOut = async () => {
    await AsyncStorage.removeItem('routeName');

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Router',
          params: {}
        })
      ]
    });
    this.props.screenProps.nav.dispatch(resetAction);

    ToastAndroid.show('Logged out from customer', ToastAndroid.SHORT);
  }

  _setHeaderButton = () => {
    if (this.props.screenProps.nav.state.params.loggedIn) {
      return <Button title='Logout' onPress={ () => this._logOut() } style={[ styles.button, styles.headerButton ]} textStyle = { styles.textStyle } underlayColor='#48b'/>;
    }

    return <Button title='Login' onPress={ () => this._navigateToAuth() } style={[ styles.button, styles.headerButton ]} textStyle = { styles.textStyle } underlayColor='#48b'/>;
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Customer Screen</Text>
        <Text>Mount Test (Random Number Each Time)</Text>
        <Text>{ Math.floor(Math.random() * 10) }</Text>
      </View>
    );
  }

}

export default Main;
