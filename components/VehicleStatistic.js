import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { connect } from 'react-redux'

import Square from './Square'

export class VehicleStatistic extends Component {
  render() {
    // alert(JSON.stringify(this.props.mobil))
    const chart_wh = 120
    const series = [this.props.mobil.length, this.props.motor.length]
    const sliceColor = ['#EA5C2C', '#F29222']

    /*
      100% totalnya 50 data
      mobil: 2 2 / 50 * 100
      motor: 1
    */
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{flexDirection: 'column', marginRight: 10, marginTop: 20}}>
            <Text style={{fontSize: 28, textAlign: 'center'}}>{Math.round((this.props.motor.length / this.props.allLisencesParking.length) * 100)}% {'\n'}</Text>
            <View style={{flexDirection: 'row'}}>
              <Square background="#F29222"/>
              <Text style={{marginLeft: 5}}>Motorbike</Text>
            </View>
          </View>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.8}
          />
          <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 20}}>
            <Text style={{fontSize: 28, textAlign: 'center'}}>{Math.round((this.props.mobil.length / this.props.allLisencesParking.length) * 100)}%</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Square background="#EA5C2C"/>
              <Text style={{marginLeft: 5}}>Car</Text>
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
    flex: 1,
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(VehicleStatistic)