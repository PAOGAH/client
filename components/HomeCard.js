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
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import moment from "moment";

class HomeCard extends Component {
  goToStack = (id) => {
    this.props.navigation.navigate('Detail', { data: this.props.data })
  }

  formatTimeToID = time => {
    let indoTime = time._d;
    return moment(indoTime).calendar();
  };

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={this.goToStack}>
          <CardNativeBase>
            <CardItem>
              <Body>
                <Text
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                  }}
                >
                  {this.props.data.text}
                </Text>
                <Text note>
                  {this.formatTimeToID(moment(this.props.data.createdAt))}
                </Text>
              </Body>
            </CardItem>
            {/* <CardItem cardBody> */}
              {/*<TouchableOpacity onPress={this.goToStack}>
                <Image
                  source={{ uri: this.props.data.imgTrue }}
                  style={{
                    height: 200,
                    width: 350,
                    flex: 1,
                    marginRight: 100,
                    marginBottom: 10
                  }}
                />
              </TouchableOpacity>*/}
            {/* </CardItem> */}
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Parking Spot: {this.props.parkingSpot+1}</Text>
                </Button>
              </Left>
              <Right>
                <Text>{moment(this.props.data.createdAt).fromNow()}</Text>
              </Right>
            </CardItem>
          </CardNativeBase>
        </TouchableOpacity>
      </Fragment>
    );
  }
    
}

export default HomeCard;