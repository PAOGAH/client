import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableHighlight, Alert } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

console.disableYellowBox = true
 
class Detail extends Component {
  state = {
    modalVisible: false,
    urlImage: this.props.navigation.state.params.data.imgTrue
  }
  setModalVisible(visible, url) {
    this.setState({
      modalVisible: visible,
      urlImage: url
    });
  }

  render() {
    let { data } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text>Lisence Plate  : {data.text}</Text>
            <Text>Check In Time : {data.createdAt.split('').slice(0,15).join('')}</Text>
            {
              data.updatedAt? <Text>Check Out Time : {data.updatedAt}</Text> : <Text>Check Out Time : -</Text>
            }
          </View>
          <View style={styles.columnRight}>
          
            <View style={{ width: '100%', height: '45%', marginBottom: 25}}>
              <Text style={{fontWeight: 'bold'}}>Check In Image</Text>
              <TouchableHighlight onPress={() => { this.setModalVisible(!this.showAndHideImage, data.imgTrue) }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{ uri: data.imgTrue }}
                />
              </TouchableHighlight>
            </View>

              <View View style={{ width: '100%', height: '45%'}}>
                <Text style={{fontWeight: 'bold'}}>Check Out Image</Text>
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.showAndHideImage, data.imgFalse) }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{ uri: data.imgFalse }}
                  />
                </TouchableHighlight>
              </View>

              <Modal
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <ImageViewer imageUrls={[{
                    url: this.state.urlImage
                }]}/>
              </Modal>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: {
    marginTop: 20,
    flexDirection: 'column',
    maxWidth: '60%'
  },
  columnRight: {
    flexDirection: 'column',
    minWidth: '40%',
    alignItems: 'center',
  }
})

export default Detail;
