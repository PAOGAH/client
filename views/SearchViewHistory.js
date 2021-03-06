import React, { Component, Fragment } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import searchLicense from '../store/parking/actions/searchLicense'
import InputSearch from '../components/InputSearch'
import HomeCard from '../components/HomeCard'
import Card from '../components/Card'

export class Search extends Component {
  render() {
    return (
      <View>
        {/* <Text>{JSON.stringify(this.props.searchLicense)}</Text> */}
        <FlatList 
          data={this.props.searchLicense}
          keyExtractor={(index) => index.id}
          renderItem={({ item, index: parkingSpot }) => (
            <Fragment>
                {
                  !item.status && <Card data={item} parkingSpot={parkingSpot} {...this.props}/>
                }
            </Fragment>
          )}
        />
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <InputSearch question="allLisences"/>
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
