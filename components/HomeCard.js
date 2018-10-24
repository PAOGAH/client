import React, { Component, Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card as CardNativeBase,
  CardItem,
  Thumbnail,
  Text as TextNativeBase,
  Button as ButtonNativeBase,
  Icon,
  Left,
  Body,
  Right,
  H3
} from "native-base";
import moment from "moment";

class HomeCard extends Component {
  goToStack = id => {
    this.props.navigation.navigate("Detail", { data: this.props.data });
  };

  formatTimeToID = time => {
    let indoTime = time._d;
    return moment(indoTime).calendar();
  };

  vehicleType = (type) => {
    let split = type.split('_')
    if (split.indexOf('car.jpg') != -1) {
      return true
    } else {
      return false
    }
  }

  componentDidMount = () => {
    console.log(this.props.data);
  };

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={this.goToStack}>
          <CardNativeBase>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center",
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: 20
                    }}
                  >
                    {this.props.data.text}
                  </Text>
                  <Text note>
                    {this.formatTimeToID(moment(this.props.data.createdAt))}
                  </Text>
                </Body>
              </Left>
              <Right>
                {this.vehicleType(this.props.data.imgTrue) ? <Icon style={{color: 'black', fontSize: 40}} name='car'/> : <Icon style={{color: 'black', fontSize: 40}} name='bicycle'/>}
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <ButtonNativeBase rounded primary>
                  <TextNativeBase style={{ color: "white" }}>
                    Parking Spot: {this.props.parkingSpot + 1}
                  </TextNativeBase>
                </ButtonNativeBase>
              </Left>
              <Right>
                <H3 style={{ fontSize: 16 }}>
                  {moment(this.props.data.createdAt).fromNow()}
                </H3>
              </Right>
            </CardItem>
          </CardNativeBase>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default HomeCard;
