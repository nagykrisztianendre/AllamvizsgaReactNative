import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {firebase} from "./enviroment/config";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
  <Button onPress={()=>storeHighScore(12,1)} title={"Press me!"}/>
    </View>
  );
}

function storeHighScore(userId, score) {
  firebase
      .database()
      .ref('users/' + userId)
      .set({
        highscore: score,
      });
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
