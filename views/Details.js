import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Detail extends Component {


  render() {
    let { data } = this.props.navigation.state.params
    return (
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

export default Detail;
