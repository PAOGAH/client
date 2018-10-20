import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToStack = (id) => {
      this.props.navigation.navigate('Detail', { data: this.props.data })
  }

  render() {
    return (
        <TouchableHighlight onPress={this.goToStack}>
            <View style={styles.card}>
                <View>
                    <Text>{this.props.data.text}</Text>
                </View>
                <View>
                    <Text>{this.props.data.createdAt.split('').slice(0,15).join('')}</Text>
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
