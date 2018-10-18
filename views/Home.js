import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'


import getVehicle from '../store/parking/actions/getAllVehicle'
import Card from '../components/Card'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = () => {
    this.props.getAllVehicle()
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.props.allPlatParking}
          renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
        />
        <Card/>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        getAllVehicle: () => dispatch(getVehicle)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
