/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, View, Image, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator, NavigationActions } from 'react-navigation'
import { Container, Header, Content, Icon, Button } from 'native-base';

import './config'
import store from './store'
import Home from './views/Home'
import Detail from './views/Detail'
import Statistic from './views/Statistic'
import Histories from './views/History'
import SplashScreen from './views/SplashScreen'
import SearchView from './views/Search'
import DetailHistory from './views/DetailHistory'
import SearchViewHistory from './views/SearchViewHistory'

export default class App extends Component {
  state = {
    loading: false
  }

  componentDidMount = () => {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1500);
    })
  }
  render() {
    return (
      <Provider store={store}>
        {
          this.state.loading ? <SplashScreen/> : <BottomNav/>
        }
      </Provider>
    );
  }

}


const HomeStack = createStackNavigator({
  Home: Home,
  Detail: Detail,
  Search: SearchView
})

const HistoryStack = createStackNavigator({
  Home: Histories,
  Detail: DetailHistory,
  Search: SearchViewHistory
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
        return <Image source={require('./icons/parkIcon.png')} style={{ width: 25, height: 25 }}/>
      } else if (routeName === 'Stats') {
        return <Image source={require('./icons/statsIcon.png')} style={{ width: 25, height: 25 }}/>
      } else if (routeName === 'History') {
        return <Image source={require('./icons/historyIcon.png')} style={{ width: 25, height: 25 }}/>
      }
    },
  }),
  tabBarOptions: {
    activeBackgroundColor: '#204170',
    showLabel: false,
    style: {
      backgroundColor: '#1D3557'
    }
  }
})

