/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Statistic from './views/Statistic'
import Home from './views/Home'
import store from './store/index'
import Historys from './views/History'
import Detail from './views/Details'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home {...this.props}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

const HomeStack = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      title: 'INI TITLE',
      headerStyle: {},
      headerTitleStyle: {}
    }
  },
  Details: Detail
})
const HistoryStack = createStackNavigator({
  History: Historys,
  Details: Detail
})

export default createBottomTabNavigator({
  Parking: HomeStack,
  Stats: Statistic,
  History: HistoryStack
})