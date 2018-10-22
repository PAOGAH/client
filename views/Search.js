import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { connect } from 'react-redux'

import searchLicense from '../store/parking/actions/searchLicense'
import InputSearch from '../components/InputSearch'

export class Search extends Component {
  render() {
    return (
      <View>
        <Text> {JSON.stringify(this.props.searchLicense)} </Text>
        
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <InputSearch/>
    };
  };
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    searchVehicle: (keyword) => dispatch(searchLicense(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
