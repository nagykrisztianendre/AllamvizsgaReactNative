// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import {firebase} from "./enviroment/config";
//
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//   <Button onPress={()=>storeHighScore(12,1)} title={"Press me!"}/>
//     </View>
//   );
// }
//
// function storeHighScore(userId, score) {
//   firebase
//       .database()
//       .ref('users/' + userId)
//       .set({
//         highscore: score,
//       });
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, HomeScreen, RegistrationScreen} from './src/screens';
import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode
}
if (!global.atob) {
    global.atob = decode
}

const Stack = createStackNavigator();
export default function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <Stack.Screen name="Home">
                        {props => <HomeScreen {...props} extraData={user} />}
                    </Stack.Screen>

                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Registration" component={RegistrationScreen}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>

    );
}
