import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Picker, Item, Icon } from 'native-base';
import { connect } from 'react-redux'

import Card from '../components/Card'
import sort from '../store/parking/actions/sortHistory'
export class Histories extends Component {

  constructor (props) {
    super(props);
    this.state = {
      orderBy: 'desc',
    };
  }
  sortBy = (val) => {
    this.setState({
      orderBy: val
    })
    this.props.sortHistory(val)
  }

  render() {
    return (
    <ScrollView>
      <View style={styles.container}>

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
          data={this.props.allLisences}
          keyExtractor={(index => index.id)}
          renderItem={({  item }) => <Card data={item} {...this.props}/>}
        />

      </View>
    </ScrollView>
    )
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'History',
      headerStyle: {
        backgroundColor: '#fff',
        headerTitleStyle: {
          color: '#404040'
        }
      },
      headerRight: (
        <TouchableOpacity onPress={() => {
          navigation.navigate('Search')
        }}>
          <View style={{marginRight: 12}}>
              <Icon name='search'/>
          </View>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  }
})

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    sortHistory: (val) => dispatch(sort(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Histories)