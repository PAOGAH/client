import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'

export class SpashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text style={styles.title}> TITLE </Text>
        <Text>an app for helping security</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  }
})

export default SpashScreen