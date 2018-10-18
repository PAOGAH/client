import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToStack = (id) => {
    return () => {
        console.log(`tekan akoeh`)
    }
  }

  render() {
    return (
        <TouchableHighlight onPress={this.goToStack(this.props.data.id)}>
            <View style={styles.card}>
                <View>
                    <Text>{this.props.data.text}</Text>
                </View>
                <View>
                    <Text>{this.props.data.createdAt}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
        padding: 5
    }
})

export default Card;
