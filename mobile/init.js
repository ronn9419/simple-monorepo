import * as firebase from "firebase";
import config from "@config";

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  storageBucket: config.firebase.storageBucket
};

firebase.initializeApp(firebaseConfig);
