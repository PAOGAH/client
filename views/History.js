import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> HELLO FROM HISTORY </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    }
  });

export default History;
