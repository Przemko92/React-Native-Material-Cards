import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Touchable } from "./src";

export default class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc_height: 0
    };
  }
  render() {
    const newStyle = this.props.style || {};

    if (!this.props.onPress) {
      return (
        <View
          style={[styles.cardImage, newStyle]}
          onLayout={e => {
            this.setState({
              calc_height: (e.nativeEvent.layout.width * 9) / 16
            });
          }}
        >
          <ImageBackground
            source={this.props.source}
            resizeMode={this.props.resizeMode || "stretch"}
            resizeMethod={this.props.resizeMethod || "resize"}
            style={[styles.imageContainer, { height: this.state.calc_height }]}
          >
            {this.props.title !== undefined &&
              this.props.singleLineTitle == true && (
                <Text numberOfLines={1} style={styles.imageTitleText}>
                  {this.props.title}
                </Text>
              )}
            {this.props.title !== undefined &&
              (this.props.singleLineTitle == false ||
                this.props.singleLineTitle === undefined) && (
                <Text style={styles.imageTitleText}>{this.props.title}</Text>
              )}
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View
          style={[styles.cardImage, newStyle]}
          onLayout={e => {
            this.setState({
              calc_height: (e.nativeEvent.layout.width * 9) / 16
            });
          }}
          onPress={() => {
            this.props.onPress();
          }}
        >
          <ImageBackground
            source={this.props.source}
            resizeMode={this.props.resizeMode || "stretch"}
            resizeMethod={this.props.resizeMethod || "resize"}
            style={[styles.imageContainer, { height: this.state.calc_height }]}
          >
            {this.props.title !== undefined &&
              this.props.singleLineTitle == true && (
                <Text numberOfLines={1} style={styles.imageTitleText}>
                  {this.props.title}
                </Text>
              )}
            {this.props.title !== undefined &&
              (this.props.singleLineTitle == false ||
                this.props.singleLineTitle === undefined) && (
                <Text style={styles.imageTitleText}>{this.props.title}</Text>
              )}
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "grey",
    alignSelf: "stretch",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "stretch"
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: "flex-end"
  },
  imageTitleText: {
    fontSize: 24,
    color: "rgba(255 ,255 ,255 , 0.87)"
  }
});
