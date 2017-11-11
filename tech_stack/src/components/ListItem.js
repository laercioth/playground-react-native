import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render(){

    const { titleStyle } = styles;

    return(
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

// StyleSheet
const styles = StyleSheet.create({
	titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    margin: 10,
    color: 'black'
  }
});

export default ListItem;
