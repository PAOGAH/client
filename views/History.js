import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import Card from '../components/Card'
import Detail from './Detail'

export class Histories extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <FlatList
          data={this.props.allLisences}
          keyExtractor={(index => index.id)}
          renderItem={({  item }) => <Card data={item} {...this.props}/>}
        /> */}
        {/* <HistoryStack/> */}
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  }
})

const mapStateToProps = state => {
  return state
}

const HistoryStack = createStackNavigator({
  Home: Histories,
  Detail: Detail
})

export default connect(mapStateToProps, null)(Histories)