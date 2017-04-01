import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import styles from './styles';

class Button extends Component {

  render() {
    return (
      <TouchableHighlight
        onPress={ () => this.props.onPress()}
        style={[ styles.button, this.props.style || {} ]}
        underlayColor={ this.props.underlayColor || '#eee' }
        activeOpacity={ this.props.activeOpacity || 1 }>
        <View>
          <Text style={[ styles.text, this.props.textStyle || {} ]}>{ this.props.title || 'Button' }</Text>
        </View>
      </TouchableHighlight>
    );
  }

}

export default Button;
