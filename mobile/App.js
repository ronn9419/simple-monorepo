import "./init";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import core from "@core";
import * as R from "redux";
import * as firebase from "firebase";

function storeHighScore(userId, score) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      highscore: score
    });
}

storeHighScore("123", 100);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(Object.keys(R))}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
