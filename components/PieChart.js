import React, { Component, Fragment } from 'react';
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View, Alert } from 'react-native';
import { Header, Body, Title, Content } from 'native-base'
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
      <View style={styles.container}>
          <View style={styles.row}>
            <Square background="#2196f3"/>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>Empty</Text>
            <Square background="#4CAF50"/>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>Filled</Text>
          </View>

        <View style={[styles.chart, { marginBottom: 10 }]}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.8}
            style={{
              //position: 'absolute',
              zIndex: 8
            }}
          />
          <Text
          style={{
            fontSize: 22,
            position: 'absolute',
            zIndex: 9,
            top: 110,
            color: 'black',
          }}>Available Slot: {this.props.totalEmpty}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 20,
    alignItems: 'center'
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
