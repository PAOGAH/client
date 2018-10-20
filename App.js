/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'


import './config'
import store from './store'
import Home from './views/Home'
import Detail from './views/Detail'
import Statistic from './views/Statistic'
import Histories from './views/History'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BottomNav/>
      </Provider>
    );
  }
}


const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'BUKAN TITLE',
      headerStyle: {},
      headerTitleStyle: {}
    }
  },
  Detail: Detail
})

const BottomNav = createBottomTabNavigator({
  Home: HomeStack,
  Stats: Statistic,
  History: Histories
}, {
  tabBarOptions: {
    activeTintColor: '#F1FAEE',
    inactiveTintColor: 'rgba(194, 202, 214, 0.3)',
    showLabel: true,
    style: {
      backgroundColor: '#1D3557'
    }
  }
})