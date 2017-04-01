import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, AsyncStorage } from 'react-native';

import styles from './styles';
import Button from '../../../components/Button';

class SignInScreen extends Component {

  _navigateToSignUp = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'SignUp',
      params: {}
    });

    this.props.navigation.dispatch(navigateAction);
  }

  _navigateToRoute = async (route) => {
    await AsyncStorage.setItem('routeName', route);

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
  }

  static navigationOptions = {
    title: 'Sign In'
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>SignIn</Text>
        <Button title='Sign Up' onPress={ () => this._navigateToSignUp() } style={ styles.button } textStyle = { styles.textStyle } underlayColor='#48b'/>
        <Button title='Customer' onPress={ () => this._navigateToRoute('Customer') } style={ styles.button } textStyle = { styles.textStyle } underlayColor='#48b'/>
        <Button title='Admin' onPress={ () => this._navigateToRoute('Admin') } style={ styles.button } textStyle = { styles.textStyle } underlayColor='#48b'/>
      </View>
    );
  }

}

export default SignInScreen;
