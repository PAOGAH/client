import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View
            style={{
                backgroundColor: this.props.background,
                width: 20,
                height: 20,
                borderRadius: 10
            }}
        />
      </View>
    );
  }
}

export default Square;
