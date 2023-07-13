import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import backgroungLogin from "../../assets/background_signup.jpg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("")

  const handleRegister = async () => {
    if(!email || !password || !confirmpassword){
        Alert.alert("all fields are required")
        return;
    }

    if(password !== confirmpassword){
        Alert.alert("passwords do not match")
        return;
    }

    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if(response){
            console.log(response, 'REGISTERED');
        }else{
            console.log('ERROR');
        }
    } catch (error) {
        console.log(error, 'CAUGHT ERROR');
    }

  }
  
  return (
    <>
      <KeyboardAwareScrollView className='bg-black'>
        <View>
          <Image
            source={backgroungLogin}
            className="object-cover h-80 w-full"
          />
        </View>

        <View className="bg-white h-screen rounded-t-3xl">
          <Text className="text-3xl py-3 text-[#d60e45] text-center mt-3 font-semibold">
            Sign Up
          </Text>

          <View className="items-center">
            <TextInput
              className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mt-5"
              placeholder="enter email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mt-5"
              placeholder="enter password"
              textContentType="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TextInput
              className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mt-5"
              placeholder="confirm password"
              textContentType="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={confirmpassword}
              onChangeText={(text) => setConfirmpassword(text)}
            />
          </View>

          <TouchableOpacity className="bg-[#fac25a] py-2 rounded-md mx-10 mt-16 mb-3" onPress={handleRegister}>
            <Text className="text-center font-semibold text-lg text-white">Register</Text>
          </TouchableOpacity>

          <View className='flex-row space-x-6 w-full justify-center'>
            <Text>Already have an account ?</Text>
            <TouchableOpacity
            onPress={()=> navigation.navigate('LoginScreen')}
            >
                <Text className='text-[#d60e45]'>
                    SignIn
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignupScreen;
