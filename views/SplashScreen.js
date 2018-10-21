import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Image } from 'react-native'

export class SpashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View>
          <Image 
            source={require('../icons/paogah.png')} 
            style={{
              width: 350,
              height: 200
            }}
            resizeMode="cover"
            />
        </View>
        <Text style={styles.title}>PAOGA<Text style={{color: '#f04f10'}}>H</Text></Text>
        <Text style={styles.description}>Parking Automatic Gate Hacktiv</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  description: {
    fontWeight: '200',
    fontSize: 20,
    color: '#808080'
  }
})

export default SpashScreen