import React, { Component, Fragment } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux'
import firebase from 'firebase'
import 'firebase/firestore'

import getVehicle from '../store/parking/actions/getAllVehicle'
import Card from '../components/Card'
import IconFooter from '../components/IconFooter'
firebase.firestore().settings({
  timestampsInSnapshots: true
})
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
        <StatusBar hidden={true}/>
        <FlatList 
            data={this.props.allLisencesParking}
            keyExtractor={(index) => index.id}
            renderItem={({ item }) => (
              <Fragment>
                  {
                      item.status && <Card data={item} {...this.props}/>
                  }
              </Fragment>
            )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
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
