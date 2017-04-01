import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, AsyncStorage, ToastAndroid } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';

class SplashScreen extends Component {

  componentDidMount() {
    ToastAndroid.show('This should show up once', ToastAndroid.SHORT);
  }

  _navigateToHome = async () => {
    await AsyncStorage.setItem('firstRun', 'false');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Router',
          params: {}
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>SplashScreen</Text>
        <Button title='Navigate to home' onPress={ () => this._navigateToHome() } style={ styles.button } textStyle = { styles.textStyle } underlayColor='#48b'/>
      </View>
    );
  }

}

export default SplashScreen;
