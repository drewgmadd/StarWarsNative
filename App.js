import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dropdown from "./Components/Dropdown.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dropdown/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
