import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import Button from '../../../components/Button';

class SignUpScreen extends Component {

  _navigateToSignIn = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'SignIn',
          params: {}
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  static navigationOptions = {
    title: 'Sign Up'
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>SignUp</Text>
        <Button title='Sign In' onPress={ () => this._navigateToSignIn() } style={ styles.button } textStyle = { styles.textStyle } underlayColor='#48b'/>
      </View>
    );
  }

}

export default SignUpScreen;
