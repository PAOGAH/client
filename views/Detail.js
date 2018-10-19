import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableHighlight, Alert } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [{
  // Simplest usage.
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

  // width: number
  // height: number
  // Optional, if you know the image size, you can set the optimization performance

  // You can pass props to <Image />.
  props: {
      // headers: ...
  }
}, {
  props: {
      // Or you can set source directory.
      // source: require('../background.png')
  }
}]

class Detail extends Component {
  state = {
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
              <Image
                style={{width: '100%', height: '100%'}}
                source={{ uri: data.imgTrue }}
              />
            </View>

              <View View style={{ width: '100%', height: '45%'}}>
                <Text style={{fontWeight: 'bold'}}>Check Out Image</Text>
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.showAndHideImage) }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{ uri: data.imgTrue }}
                  />
                </TouchableHighlight>
              </View>

            {/* <Modal visible={this.state.modalVisible} transparent={true}>
              <ImageViewer imageUrls={images}/>
            </Modal> */}
              <Modal
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <ImageViewer imageUrls={images}/>

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