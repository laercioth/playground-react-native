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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
