import React, { Component, Fragment } from 'react';
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

  componentWillReceiveProps = () => {

  }

  render() {
    const chart_wh = 250
    const series = [this.props.totalEmpty, this.props.totalVehicle]
    const sliceColor = ['#2196F3', '#4CAF50']
    return (
      <Fragment>
        <StatusBar hidden={true}/>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}> Total Parking Slot </Text>
            <View style={styles.row}>
              <Square background="#2196f3"/>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Empty, </Text>
              <Square background="#4CAF50"/>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Fill</Text>
            </View>
          </View>

          <View style={styles.chart}>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.8}
            />
            <Text>Available slot {this.props.totalEmpty}</Text>
            <Text style={styles.title}>Vehicle Statistics</Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.8}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  column: {
    flexDirection: 'column',
    margin: 10,
  },
  chart: {
    position: 'relative',
    alignItems: 'center',
    
  }
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(PieChartComponent);
