import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider, AuthUserContext } from "./Context/AuthContext";
import LoginScreen from "./src/Screens/LoginScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import loader from "./assets/loading.gif";

export default function App() {
  const Stack = createNativeStackNavigator();

  function RootNavigator() {
    const { user, setUser } = useContext(AuthUserContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user)
          setLoading(false)
        };
      });
      console.log("USER", user);
    }, []);
    return (
      <NavigationContainer>
        {!user && loading === true ? (
          <Image source={loader} className='h-screen w-full'/>
        ) : !user && loading === false ? (
          <AuthStack />
        ) : (
          <MainStack/>
        )}
      </NavigationContainer>
    );
  }

  function AuthStack() {
    return (
      <Stack.Navigator
        initialRouteName="SignupScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    );
  }

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WeChat" component={HomeScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <AuthContextProvider>
      <RootNavigator />
    </AuthContextProvider>
  );
}
