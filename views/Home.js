import React, { Component, Fragment } from 'react';
import { View, FlatList, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker, Item, Icon, Spinner, Text } from 'native-base';
import { connect } from 'react-redux'
import firebase from 'firebase'
import 'firebase/firestore'

firebase.firestore().settings({
  timestampsInSnapshots: true
})

import getVehicle from '../store/parking/actions/getAllVehicle'
import HomeCard from '../components/HomeCard'
import sort from '../store/parking/actions/sortParking'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'desc'
    };
  }

  componentDidMount = () => {
    this.props.getAllVehicle()
  }


  sortBy = (val) => {
    this.setState({
      orderBy: val
    })
    this.props.sortParking(val)
  }

  render() {
    return (
    <ScrollView>

      
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        
          <Item style={{ marginBottom: 10 }} picker>
            <Text>Order By : </Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="Order By"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.orderBy}
              onValueChange={this.sortBy}
            >
              <Picker.Item label="Desc" value="desc" />
              <Picker.Item label="Asc" value="asc" />
            </Picker>
          </Item>
          {
            this.props.loadingGetLicenses ? <Spinner color='blue' /> : (
                <FlatList 
                  data={this.props.allLisencesParking}
                  keyExtractor={(index) => index.id}
                  renderItem={({ item, index: parkingSpot }) => (
                    <Fragment>
                        {
                            item.status && <HomeCard data={item} parkingSpot={parkingSpot} {...this.props}/>
                        }
                    </Fragment>
                  )}
                />
              )
          }
      </View>
    </ScrollView>
    );
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitle: (
        <View style={{marginLeft: 5, minWidth: 100}} >
          <Image source={require('../icons/paogahtopi.png')} style={{ width: 60, height: 60, resizeMode: 'contain' }}/>
        </View>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => {
          navigation.navigate('Search')
        }}>
          <View style={{marginRight: 12}}>
              <Icon name='search'/>
          </View>
        </TouchableOpacity>
      ),
    };
  };
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getAllVehicle: () => dispatch(getVehicle),
    sortParking: (val) => dispatch(sort(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
