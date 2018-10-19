import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC_6S9DVrDXajGBxPy9fS2E_fDzOtuFllo",
      authDomain: "auth-ffb65.firebaseapp.com",
      databaseURL: "https://auth-ffb65.firebaseio.com",
      projectId: "auth-ffb65",
      storageBucket: "auth-ffb65.appspot.com",
      messagingSenderId: "933993499967"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
