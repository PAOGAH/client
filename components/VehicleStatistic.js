import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { connect } from 'react-redux'

import Square from './Square'

export class VehicleStatistic extends Component {
  render() {
    // alert(JSON.stringify(this.props.mobil))
    const chart_wh = 150
    const series = [this.props.mobil.length === 0 ? 1 : this.props.mobil.length, this.props.motor.length  === 0 ? 1 : this.props.motor.length]
    const sliceColor = ['#EA5C2C', '#F29222']

    /*
      100% totalnya 50 data
      mobil: 2 2 / 50 * 100
      motor: 1
    */
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vehicle Statistics</Text>
        <View style={styles.row}>
          
        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.8}
        />
        <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 10}}>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Square background="#F29222"/>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>Motor Bike</Text>
            <Square background="#EA5C2C"/>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>Car</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>
              Car: {Math.round((this.props.mobil.length / this.props.allLisencesParking.length) * 100)}% {'\n'}
              Motor Bike: {Math.round((this.props.motor.length / this.props.allLisencesParking.length) * 100)}%
            </Text>
          </View>
        </View>
        
        
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    marginTop: 280
  },
  row: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(VehicleStatistic)