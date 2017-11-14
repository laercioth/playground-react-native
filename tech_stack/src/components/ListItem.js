import React, { Component } from 'react';
import { Text,
        StyleSheet,
        TouchableWithoutFeedback,
        View,
        LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if(expanded){
      return(
        <CardSection style={{ flex: 1 }}>
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render(){
    const { titleStyle, viewStyle } = styles;
    const {id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.props.selectLibrary(id)}>
        <View style={viewStyle}>
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
    flex: 1,
    fontSize: 18,
    paddingLeft: 15,
    margin: 10,
    color: 'black'
  },
  viewStyle: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3.5,
    borderRadius: 10
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
