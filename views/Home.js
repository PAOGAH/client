import React, { Component, Fragment } from 'react';
import { View, FlatList, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker, Item, Icon, Input } from 'native-base';
import { connect } from 'react-redux'
import firebase from 'firebase'
import 'firebase/firestore'

firebase.firestore().settings({
  timestampsInSnapshots: true
})

import getVehicle from '../store/parking/actions/getAllVehicle'
// import Card from '../components/Card'
import HomeCard from '../components/HomeCard'
import getNewData from '../store/parking/actions/getNewData'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'desc',
      parkingLicense: []
    };
  }

  componentDidMount = () => {
    this.props.getAllVehicle()
    this.setState({
      parkingLicense: this.props.allLisencesParking
    })

    firebase.firestore().collection('licenses').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
      // alert('realtime')
      let newData = []
      let newAllPlatTrue = []
      snapshot.forEach(doc => {
        let data = doc.data()
        if(data.status) {
          newAllPlatTrue.push(data)
        } else {
          newData.push({
            id: doc.id,
            ...data
          })
  
        }
      })
      this.setState({
        parkingLicense: newAllPlatTrue
      })
    })
  }


  sortBy = (val) => {
    firebase.firestore()
      .collection('licenses')
      .where('status', '==', true)
      .orderBy('createdAt', val)
      .get()
      .then(snapshot => {
        let arr = []
        snapshot.forEach(doc => {
          arr.push(doc.data())
        })
        this.setState({
          parkingLicense: arr,
          orderBy: val
        })
      })
      .catch(err => {
        alert(JSON.stringify(err))
      })
  }

  render() {
    return (
    <ScrollView>
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
              onValueChange={this.sortBy}
            >
              <Picker.Item label="Desc" value="desc" />
              <Picker.Item label="Asc" value="asc" />
            </Picker>
          </Item>
          <FlatList 
              data={this.state.parkingLicense}
              keyExtractor={(index) => index.id}
              renderItem={({ item, index: parkingSpot }) => (
                <Fragment>
                    {
                        item.status && <HomeCard data={item} parkingSpot={parkingSpot} {...this.props}/>
                    }
                </Fragment>
              )}
          />
      </View>
    </ScrollView>
    );
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{marginLeft: 5, minWidth: 50}} >
          <Image source={require('../icons/paogah.png')} style={{ width: 30, height: 30 }}/>
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
      )
    };
  };
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
    getAllVehicle: () => dispatch(getVehicle),
    getNewUpdate: (data) => dispatch(getNewData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
