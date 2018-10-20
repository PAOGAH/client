import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';


export class ImageViewers extends Component {
  state = {
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
            <ImageViewer imageUrls={[{
                url: this.props.image
            }]}/>
        </Modal>
      </View>
    )
  }
}

export default ImageViewers