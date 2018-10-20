/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, View } from 'react-native';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Container, Header, Content, Icon } from 'native-base';

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
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {}
    }
  },
  Detail: Detail
})

const HistoryStack = createStackNavigator({
  Home: {
    screen: Histories,
    navigationOptions: {
      title: 'History',
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {}
    }
  },
  Detail: {
    screen: Detail,
  }
})

const BottomNav = createBottomTabNavigator({
  Parking: HomeStack,
  Stats: Statistic,
  History: HistoryStack
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Parking') {
        return <Icon name="apps" />
      } else if (routeName === 'Stats') {
        return <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
      } else if (routeName === 'History') {
        return  <Icon type="FontAwesome" name="home" />
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: '#F1FAEE',
    inactiveTintColor: 'rgba(194, 202, 214, 0.3)',
    showLabel: true,
    style: {
      backgroundColor: '#1D3557'
    }
  }
})