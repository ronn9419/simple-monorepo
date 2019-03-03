import core from "@core";
import config from "@config";
import React from "react";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  storageBucket: config.firebase.storageBucket
};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref("users/ep32jGXj3lO6umk4ZN39")
  .set({
    highscore: 100
  });

console.log({ core, React });
