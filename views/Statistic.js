import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

import store from '../store'
import PieChart from '../components/PieChart'
import VehicleStatistic from '../components/VehicleStatistic'

class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ backgroundColor: '#fff'}}>
          <StatusBar hidden={true}/>
          <ScrollView>
            <View style={{margin: 15}}>
              <Card>
                <CardItem header bordered style={{backgroundColor: '#3F51B5'}}>
                  <Text style={{color: 'white'}}>Total Parking Space</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <PieChart/>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem header bordered style={{backgroundColor: '#3F51B5'}}>
                  <Text style={{color: 'white'}}>Vehicle Statistics</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <VehicleStatistic/>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </ScrollView>
        </View>
      </Provider>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Statistic',
      headerTitleStyle: {
        color: '#404040'
      }
    };
  };
}

export default Statistic;
