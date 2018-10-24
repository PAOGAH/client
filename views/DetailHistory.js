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
  bayarWoi = (createdAt, updatedAt) => {
    let checkIn = moment(createdAt)
    let checkOut = moment(updatedAt)
    let currentTime = checkIn.from(checkOut)
    let pay;
    if (
      currentTime == "an hour ago" || 
      currentTime.split(' ').indexOf('minutes') != -1 ||
      currentTime.split(' ').indexOf('minute') != -1 ||
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
            <View style={{ width: '100%', height: 1, backgroundColor: '#b3b3b3' }} />
            <CardItem>
              <Body>
                <Text style={styles.textBody}><Text style={{ fontWeight: '500', color: '#666666' }}>CHECK IN</Text> at: {moment(data.createdAt).format("LT")}</Text>
                <View style={{ alignItems: 'center' }}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.showAndHideImage, data.imgTrue);
                    }}
                  >
                    <Image
                      source={{ uri: data.imgTrue }}
                      style={{ height: 200, width: 320, flex: 0, borderRadius: 8}}
                    />
                  </TouchableHighlight>
                </View>

                {
                  data.imgFalse && (
                    <Fragment>
                      <Text style={[styles.textBody, { marginTop: 8 }]}><Text style={{ fontWeight: '500', color: '#666666' }}>CHECK OUT</Text> at: {moment(data.updatedAt).format("LT")}</Text>
                      <View style={{alignItems: 'center'}}>
                        <TouchableHighlight
                          onPress={() => {
                            this.setModalVisible(!this.showAndHideImage, data.imgFalse);
                          }}
                        >
                          <Image
                            source={{ uri: data.imgFalse }}
                            style={{ height: 200, width: 320, flex: 0, borderRadius: 8 }}
                          />
                        </TouchableHighlight>
                      </View>
                    </Fragment>
                  )
                }
                
                <Button block style={{marginTop: 20, backgroundColor: "#F27242"}}>
                  <H3 style={{fontSize: 20, marginLeft: 5, color: "white"}}>
                    <Image source={require('../icons/money-flat2.png')} style={{width: 40, height: 40}}/>
                    {this.bayarWoi(data.createdAt, data.updatedAt)}
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
            this.setModalVisible(false);
          }}
        >
          <View style={{ width: '100%', height: '110%' }}>
            <ImageViewer 
              imageUrls={[
                {
                  url: data.imgTrue
                },
                {
                  url: data.imgFalse
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
  textBody: {
    fontSize: 18,
    textAlign: 'left',
    paddingVertical: 15
  }
});

export default Detail;
