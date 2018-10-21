import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card as CardNativeBase, CardItem, Thumbnail, Text as TextNativeBase, Button, Icon, Left, Body, Right } from 'native-base';
import moment from "moment";

class HomeCard extends Component {
  goToStack = (id) => {
    this.props.navigation.navigate('Detail', { data: this.props.data })
  }

  formatTimeToID = (time) => {
    console.log(time._d)
    let indoTime = time._d
    return moment(indoTime).calendar()
  }

  render() {
    return (
      <Container>
        <Header />
          <CardNativeBase>
            <CardItem>
                <Body>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{this.props.data.text}</Text>
                  <Text note>{this.formatTimeToID(moment(this.props.data.createdAt))}</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.props.data.imgTrue}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </CardNativeBase>
      </Container>
    );
  }
    
}

export default HomeCard;