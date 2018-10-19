import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View, Alert } from 'react-native';
import PieChart from 'react-native-pie-chart'
import { connect } from 'react-redux'

import Square from './Square'

class PieChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const chart_wh = 250
    const series = [this.props.totalEmpty, this.props.totalVehicle]
    const sliceColor = ['#2196F3', '#4CAF50']
    // console.log(series)
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text style={styles.title}> Information </Text>
        <View style={styles.row}>
          <Square background="#2196f3"/>
          <Text style={{ marginLeft: 10, marginRight: 10 }}>Empty, </Text>
          <Square background="#4CAF50"/>
          <Text style={{ marginLeft: 10, marginRight: 10 }}>Fill</Text>
        </View>

        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
        />
        <Text>Empty: {this.props.totalEmpty}, Fill: {this.props.totalVehicle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10,
  }
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(PieChartComponent);
