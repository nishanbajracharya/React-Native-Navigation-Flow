import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, AsyncStorage, ToastAndroid } from 'react-native';

import styles from './styles';
import Button from '../../../components/Button';

class AdminScreen extends Component {

  static navigationOptions = {
    title: 'Admin Menu',
    header: ({ state }) => ({
      style: styles.header,
      right: <Button title='Log out' onPress={ () => state.params._logOut() } style={[ styles.button, styles.headerButton ]} textStyle = { styles.textStyle } underlayColor='#48b'/>
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _logOut: this._logOut
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

    ToastAndroid.show('Logged out from admin', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Admin Screen</Text>
      </View>
    );
  }

}

export default AdminScreen;
