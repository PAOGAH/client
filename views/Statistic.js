import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
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
        <Fragment>
          <PieChart/>
        </Fragment>
      </Provider>
    );
  }
}

export default Statistic;
