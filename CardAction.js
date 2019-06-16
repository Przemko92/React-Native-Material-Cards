import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class CardAction extends Component {
  renderRightChildren() {
    let returnChildren = this.props.children;
    returnChildren = React.Children.map(returnChildren, x => {
      if (x.props.right) {
        return x;
      }
    });

    return returnChildren;
  }

  renderLeftChildren() {
    let returnChildren = this.props.children;
    returnChildren = React.Children.map(returnChildren, x => {
      if (x.props.left || !x.props.right) {
        return x;
      }
    });


    return returnChildren;
  }

  render() {
    const newStyle = this.props.style || {};

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, alignSelf: "stretch"}}>
        <View
          style={
            this.props.separator && !this.props.isDark
              ? [styles.cardActionInRow, styles.separatorAdd, newStyle]
              : [styles.cardActionInRow, newStyle]
          }
        >
          {this.renderLeftChildren()}
        </View>
        <View
          style={
            this.props.separator && !this.props.isDark
              ? [styles.cardActionImageInRow, styles.separatorAdd, newStyle]
              : [styles.cardActionImageInRow, newStyle]
          }
        >
          {this.renderRightChildren()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardActionInRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    flex: 1
  },
  cardActionImageInRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    flex: 1
  },
  separatorAdd: {
    borderTopColor: "#E9E9E9",
    borderTopWidth: 1
  }
});
