import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const FirstPage = ({navigation}) => {
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

  const authLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.replace("HomeScreen")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Invalid login attempt.", `Invalid Values, Try Again. \n ${errorMessage}`)
      });
  }





  return (
    <SafeAreaView style={styles.mainView}>

      <View style={styles.headerStyle}>

        <View style={{ flexDirection: 'row' }}>

          <Text style={[styles.titleStyle, { color: '#F6820D' }]}>Firebase</Text>
          <Text style={styles.titleStyle}> App</Text>

        </View>


        <View style={{ flexDirection: 'row' }}>

          <Text style={styles.textStyle}>Using </Text>
          <Text style={[styles.textStyle, { color: '#F6820D', fontWeight: '400' }]}>Firebase</Text>
          <Text style={styles.textStyle}> with React-Native.</Text>

        </View>

        <Text style={styles.textStyle}>For Authentication and CRUD Operations.</Text>

      </View>

      <View style={styles.loginView}>

        <View style={{ alignItems: 'center', top: 20 }}>

          <Text style={{ fontSize: 24, fontWeight: '300', alignSelf: 'flex-start', left: 25 }}>E-Mail:</Text>

          <TextInput
            placeholder='example@gmail.com'
            style={styles.inputView}
            textAlign='center'
            value={email}
            onChangeText={(val) => setEmail(val)}
            clearButtonMode='while-editing' />

        </View>

        <View style={{ alignItems: 'center' }}>

          <Text style={{ fontSize: 24, fontWeight: '300', alignSelf: 'flex-start', left: 25 }}>Password:</Text>

          <TextInput
            placeholder='**********'
            style={styles.inputView}
            textAlign='center'
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry = {showPassword}
            clearButtonMode='while-editing' />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style = {{fontSize:14, fontWeight:'300', left:85, top:5}}>Show / Hide Password</Text>
            </TouchableOpacity>

        </View>


      </View>

      <View style={{ width: '90%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>



        <TouchableOpacity 
        style={styles.loginTouchable}
        onPress={() => authLogin()}>
          <Text style={{ fontSize: 24, fontWeight: '200' }}>Log in</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("SecondPage")}>
          <Text style={{ fontSize: 18, fontWeight: '200' }}>Don't have an account?</Text>
          <Text style={{ fontSize: 24, fontWeight: '400' }}>Register</Text>
        </TouchableOpacity>

      </View>



    </SafeAreaView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E0FFFF'
  },


  headerStyle: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E0FFFF',
    borderColor: 'lightgray',
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 48,
    fontWeight: '300',
    color: 'gray'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '200',
    color: 'gray'
  },


  loginView: {
    width: '90%',
    height: '30%',
    borderRadius: 20,
    borderWidth: 0.25,
    padding: 10,

  },
  inputView: {
    borderWidth: 1,
    borderRadius: 20,
    height: '40%',
    width: '90%'
  },

  loginTouchable: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    width: '40%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
    marginBottom: 150
  }
})





/*import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, addDoc, getDoc } from "firebase/firestore";


export default function FirstPage({ navigation }) {
  const [username, setUsername] = useState("")
  const [mail, setMail] = useState("")
  const [aranacakDeger, setDeger] = useState("")
  const [showName, setName] = useState("")


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const sendData = () => {
    addDoc(collection(db, "users"), {
      mail: mail,
      username: username
    }).then(() => {
      console.log("data submitted")
    }).catch((error) => {
      console.log(error)
    })

  }

  const getData = async () => {
    const docRef = doc(db, "users", aranacakDeger);
    const docSnap = await getDoc(docRef);
    console.log(aranacakDeger)

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setName(docSnap.data().username)
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }



  return (
    <View style={styles.mainView}>

      <Text style={{ fontSize: 40, fontWeight: '200' }}>FirstPage</Text>

      <TextInput
        placeholder='Username'
        style={{ borderBottomWidth: 1, width: '80%', alignSelf: 'center', padding: 20 }}
        textAlign='center'
        value={username}
        onChangeText={(value) => setUsername(value)} ></TextInput>

      <TextInput
        placeholder='Mail Address'
        style={{ borderBottomWidth: 1, width: '80%', alignSelf: 'center', padding: 20 }}
        textAlign='center'
        value={mail}
        onChangeText={(value) => setMail(value)} ></TextInput>

      <TextInput
        placeholder='Deger Ara'
        style={{ borderBottomWidth: 1, width: '80%', alignSelf: 'center', padding: 20 }}
        textAlign='center'
        value={aranacakDeger}
        onChangeText={(value) => setDeger(value)} ></TextInput>

      <Text>Your Username is: {showName}</Text>

      

      <Button title="Register" onPress={() => sendData()} />
      <Button title="Show Data" onPress={() => getData()} />

      <Text>{username} - {mail}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
*/
