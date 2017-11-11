import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if(library.id === selectedLibraryId){
      return(
        <Text>{library.description}</Text>
      );
    }
  }

  render(){
    const { titleStyle } = styles;
    const {id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);
