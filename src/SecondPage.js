import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SecondPage({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)

  const firebaseConfig = {
    apiKey: "AIzaSyAzOCyCOXIrVx3yBP0auJluOamY5q71Jd4",
    authDomain: "mytestarea-8b238.firebaseapp.com",
    databaseURL: "https://mytestarea-8b238-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mytestarea-8b238",
    storageBucket: "mytestarea-8b238.appspot.com",
    messagingSenderId: "385248881837",
    appId: "1:385248881837:web:1a434806c1c51e5004aa24",
    measurementId: "G-K4KQ18Q117"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const newUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert("Successfully created new account.")
        navigation.replace("FirstPage")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage)
        // ..
      });
  }



  return (

    <SafeAreaView style={styles.mainView}>

      <Text style={{ fontSize: 36, fontWeight: '200' }}>Register for new account</Text>

      <View style={styles.centerView}>

        <Text style={{ fontSize: 30, fontWeight: '200', right: 100 }}>E-Mail: </Text>
        <TextInput
          placeholder='Enter your mail address...'
          style={styles.inputStyle}
          textAlign='center'
          value={email}
          onChangeText={(val) => setEmail(val)}
          clearButtonMode='while-editing' />


        <Text style={{ fontSize: 30, fontWeight: '200', right: 80 }}>Password: </Text>
        <TextInput
          placeholder='Enter your password...'
          style={styles.inputStyle}
          textAlign='center'
          value={password}
          onChangeText={(val) => setPassword(val)}
          clearButtonMode='while-editing'
          secureTextEntry={showPassword} />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>

          <Image
            style={{ width: 45, height: 45, left: 130 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6405/6405909.png' }} />

        </TouchableOpacity>

        <Button title='Register' onPress={() => newUser()} />

        <Button title='Go Back' onPress={() => navigation.goBack()} />

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#E0FFFF',
    flex: 1,
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 0.5,
    borderRadius: 20,
    height: '20%',
    width: '90%'
  },
  centerView: {
    width: '80%',
    height: '30%',
    marginTop: 300,
    alignItems: 'center',
    justifyContent: 'center'
  }
})