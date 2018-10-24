import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux'

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
      
        <View>
          <ScrollView>
            <PieChart/>
            <VehicleStatistic/>
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

export default Statistic;
