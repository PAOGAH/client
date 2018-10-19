import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Detail extends Component {


  render() {
    let { data } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text>Lisence Plate  : {data.text}</Text>
            <Text>Check In Time : {data.createdAt.split('').slice(0,15).join('')}</Text>
          </View>
          <View style={styles.columnRight}>
            {/* <Image
              style={{width: '100%', height: '50%', marginBottom: 10}}
              source={{ uri: data.imgTrue }}
            /> */}
            {/* <Image
              style={{width: '100%', height: '50%'}}
              source={{ uri: data.imgTrue }}
            /> */}
          </View>
        </View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: {
    flexDirection: 'column',
    maxWidth: '60%'
  },
  columnRight: {
    flexDirection: 'column',
    borderStyle: 'solid',
    minWidth: '40%',
    borderWidth: 1
  }
})

export default Detail;
