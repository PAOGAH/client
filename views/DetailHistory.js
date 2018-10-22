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
  Right
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
    console.log('iniiii =>>', currentTime)
    let pay;
    if (
      currentTime == "1 hours ago" || 
      currentTime.split(' ').indexOf('minutes') != -1 ||
      currentTime == "a few seconds ago"
      ) {
      pay = 'Rp. 3000,00'
    } else if (currentTime == "2 hours ago") {
      pay = 'Rp. 4000,00'
    } else if (currentTime == "3 hours ago") {
      pay = 'Rp. 5000,00'
    } else if (currentTime == "4 hours ago") {
      pay = 'Rp. 6000,00'
    } else if (currentTime == "5 hours ago") {
      pay = 'Rp. 7000,00'
    } else {
      pay = 'Rp. 10000,00'
    }

    return pay
  }

  render() {
    let { data } = this.props.navigation.state.params;
    return (
      <Fragment>
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require('../icons/paogah.png')}
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
                <Text>Check In Image</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.showAndHideImage, data.imgTrue);
                  }}
                >
                  <Image
                    source={{ uri: data.imgTrue }}
                    style={{ height: 150, width: 300, flex: 0}}
                  />
                </TouchableHighlight>

                <Text>Check Out Image</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.showAndHideImage, data.imgFalse);
                  }}
                >
                  <Image
                    source={{ uri: data.imgFalse }}
                    style={{ height: 150, width: 300}}
                  />
                </TouchableHighlight>

                
                <Text style={{marginTop: 10, fontSize: 25}}>Parking Fee: <Text style={{fontSize: 20}}>{this.bayarWoi(moment(data.createdAt).fromNow())}</Text></Text>
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
          <ImageViewer
            imageUrls={[
              {
                url: this.state.urlImage
              }
            ]}
          />
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({

});

export default Detail;
