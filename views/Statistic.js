import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux'

import store from '../store'
import PieChart from '../components/PieChart'

class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <ScrollView style={{ paddingVertical: 20 }}>
          <PieChart/>
        </ScrollView>
      </Provider>
    );
  }
}

export default Statistic;
