import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { connect } from 'react-redux'

import searchLicense from '../store/parking/actions/searchLicense'

export class InputSearch extends Component {
  changeText = (text) => {
    if(text[text.length-1] !== '\\'){
      let myRegEx = new RegExp(text.toLowerCase() + '(\n.*)*', 'g');
      let searchLicense = []
      this.props.allLisencesParking.forEach(license => {
        let licenseText = license.text.toLowerCase()
        
        if(licenseText.match(myRegEx)) {
          searchLicense.push(license)
        }
      })
      this.props.searchInput(searchLicense)
    }
    
  }
  render() {
    return (
      <View>
        <Input placeholder="Search" autoFocus onChangeText={(e) => {
          // let newSearch = new Search()
          return this.changeText(e)
        }}/>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    searchInput: (license) => dispatch(searchLicense(license))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)