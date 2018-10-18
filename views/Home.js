import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <FlatList 
          data={this.props.allPlatParking}
          renderItem={({ item }) => <Card data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
})

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        getAllVehicle: () => dispatch(getVehicle)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
