import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text as TextNativeBase,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H3
} from "native-base";
import moment from "moment";

console.disableYellowBox = true;

class Detail extends Component {
  state = {
    modalVisible: false,
    urlImage: this.props.navigation.state.params.data.imgTrue
  };
  setModalVisible(visible, url) {
    this.setState({
      modalVisible: visible,
      urlImage: url
    });
  }
  bayarWoi = (currentTime) => {
    let pay;
    if (
      currentTime == "an hour ago" || 
      currentTime.split(' ').indexOf('minutes') != -1 ||
      currentTime.split(' ').indexOf('minute') != -1 ||
      currentTime == "a few seconds ago"
      ) {
      pay = 'Rp 3.000,-'
    } else if (currentTime == "2 hours ago") {
      pay = 'Rp 4.000,-'
    } else if (currentTime == "3 hours ago") {
      pay = 'Rp 5.000,-'
    } else if (currentTime == "4 hours ago") {
      pay = 'Rp 6.000,-'
    } else if (currentTime == "5 hours ago") {
      pay = 'Rp 7.000,-'
    } else {
      pay = 'Rp 10.000,-'
    }

    return pay
  }

  render() {
    let { data } = this.props.navigation.state.params;
    return (
      <Fragment>
        <Content>
          <Card style={{ flex: 1, paddingBottom: 28 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require('../icons/paogahtopi.png')}
                  style={{height: 35}}
                />
                <Body>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20
                    }}
                  >
                    {data.text}
                  </Text>
                  <Text note>{moment(data.createdAt).format("LLLL")}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.showAndHideImage, data.imgTrue);
                  }}
                >
                  <Image
                    source={{ uri: data.imgTrue }}
                    style={{ height: 320, width: 320, flex: 0}}
                  />
                </TouchableHighlight>
                <Button block style={{marginTop: 10, backgroundColor: "#EA5C2C"}}>
                <H3 style={{fontSize: 20, marginLeft: 5, color: "white"}}>
                  <Image source={require('../icons/money-flat2.png')} style={{width: 40, height: 40}}/>
                  {this.bayarWoi(moment(data.createdAt).fromNow())}
                </H3>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ width: '100%', height: 600}}>
            <ImageViewer
              imageUrls={[
                {
                  url: this.state.urlImage
                }
              ]}
            />
          </View>
        </Modal>
      </Fragment>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Details'
    };
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnLeft: {
    marginTop: 20,
    flexDirection: "column",
    maxWidth: "60%"
  },
  columnRight: {
    flexDirection: "column",
    minWidth: "40%",
    alignItems: "center"
  }
});

export default Detail;
