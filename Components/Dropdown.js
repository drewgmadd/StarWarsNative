import React from "react";
import {Text, View, Picker} from "react-native";

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    }
  }
  render() {
    return (
      <View className="container">
        <Picker style={{height: 50, width: 100}}>
          <Picker.Item label="First"/>
          <Picker.Item label="Second"/>
        </Picker>
      </View>
    )
  }
}
