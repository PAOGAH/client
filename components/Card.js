import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card as CardNativeBase, CardItem, Body, Text as TextNativeBase } from 'native-base';

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
      <TouchableOpacity onPress={this.goToStack}>
        <CardNativeBase>
          <CardItem>
            <Body style={styles.card}>
            <View>
                  <Text style={{ fontWeight: '600', fontSize: 16 }}>{this.props.data.text}</Text>
              </View>
              <View>
                  <Text>{this.props.data.createdAt.split('').slice(0,15).join('')}</Text>
              </View>
            </Body>
          </CardItem>
        </CardNativeBase>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
})

export default Card;
