import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import store from './store'
import Home from './views/Home'
import Detail from './views/Detail.js'
import Statistic from './views/Statistic'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    
  }

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
  Detail: Detail
})

export default  createBottomTabNavigator({
  Parking: HomeStack,
  Stats: Statistic
})
