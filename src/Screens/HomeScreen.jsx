import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

const HomeScreen = ({navigation}) => {

    const signout = () => {
        signOut(auth)
        // navigation.navigate('LoginScreen')
    }
    
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={signout}>
        <Text>signOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen