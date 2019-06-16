import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { Touchable } from './src';

export default class CardCustomButton extends Component {
  render() {
    const newStyle = this.props.style || {};
    let directionStyle = this.props.inColumn===true ? styles.CardButtonInColumn : styles.CardButtonInRow;
    return (
      <Touchable style={[directionStyle, newStyle]} onPress={()=>{this.props.onPress()}}>
        {this.props.children}        
      </Touchable>      
    );
  }
}

const styles = StyleSheet.create({
  CardButtonInRow: {
    height: 36,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  CardButtonInColumn: {
    height: 36,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 2
  },
  buttonImage: {
    height: 24,
    width: 24,
  }
});