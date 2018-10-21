import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Picker, Item, Icon, Input } from 'native-base';
import { connect } from 'react-redux'

import Card from '../components/Card'
import Detail from './Detail'

export class Histories extends Component {

  constructor (props) {
    super(props);
    this.state = {
      orderBy: 'desc',
    };
  }

  render() {
    return (
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
          data={this.props.allLisences}
          keyExtractor={(index => index.id)}
          renderItem={({  item }) => <Card data={item} {...this.props}/>}
        />
      </View>
    )
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

export default connect(mapStateToProps, null)(Histories)