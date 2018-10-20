import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import store from './store'
import Home from './views/Home'
import Detail from './views/Detail.js'
import Statistic from './views/Statistic'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Histories from './views/History'

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
      title: 'BUKAN TITLE',
      headerStyle: {},
      headerTitleStyle: {}
    }
  },
  Detail: Detail
})

const BottomNav = createBottomTabNavigator({
  Parking: HomeStack,
  Stats: Statistic,
  History: Histories
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Parking') {
          return <Ionicons name="md-home" size={horizontal ? 20 : 25} color={tintColor}/>
        } else if (routeName === 'Stats') {
          return <Ionicons name="md-compass" size={horizontal ? 20 : 25} color={tintColor}/>
        } else if (routeName === 'History') {
          return <Ionicons name="md-log-out" size={horizontal ? 20 : 25} color={tintColor}/>
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
    },
  }
);

export default BottomNav

// export default  createBottomTabNavigator({
//   Parking: HomeStack,
//   Stats: Statistic
// })
