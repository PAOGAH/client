import React, { Component } from 'react';
import { View } from 'react-native';

class Square extends Component {
  render() {
    return (
      <View>
        <View style={{
            backgroundColor: this.props.background, 
            width: 20, 
            height: 20
        }} />
      </View>
    );
  }
}

export default Square;
