import React, { Component, Fragment } from 'react';
import { View, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Picker, Item, Icon, Input } from 'native-base';
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
      orderBy: 'desc',
    };
  }

  componentWillMount = () => {
    this.props.getAllVehicle()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Item style={{ marginBottom: 10 }} picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ width: undefined }}
            placeholder="Order By"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.orderBy}
          >
            <Picker.Item label="Desc" value="key0" />
            <Picker.Item label="Asc" value="key1" />
          </Picker>
        </Item>

        <Item style={{ marginBottom: 20 }}>
          <Input placeholder='Search...'/>
          <TouchableOpacity onPress={() => alert('hai')}>
            <Icon name='search' />
          </TouchableOpacity>
        </Item>

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
