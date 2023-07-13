import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import backgroungLogin from "../../assets/background_signin.jpg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            Sign In
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
          </View>

          <TouchableOpacity className="bg-[#fac25a] py-2 rounded-md mx-10 mt-16 mb-3">
            <Text className="text-center font-semibold text-lg text-white">LogIn</Text>
          </TouchableOpacity>

          <View className='flex-row space-x-6 w-full justify-center'>
            <Text>Don't have an account ?</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignupScreen')}
            >
                <Text className='text-[#d60e45]'>
                    SignUp
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;
