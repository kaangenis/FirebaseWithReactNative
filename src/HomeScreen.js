import { View, Dimensions, Image, TouchableOpacity, Button, TextInput, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const url = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
let deviceWidth = Dimensions.get("screen").width
let deviceHeight = Dimensions.get("screen").height


export default function HomeScreen({ navigation }) {
  const [searchData, setData] = useState("")
  const [dataArray, setArray] = useState([])


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
  const db = getFirestore(app);

  const getData = async () => {
    const docRef = doc(db, "UserInfo", searchData);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setArray(docSnap.data())

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      Alert.alert("No such document!")
    }

  }


  console.log(dataArray)

  return (

    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFE4C4', flex: 1 }}>

      <TouchableOpacity onPress={() => navigation.replace("FirstPage")}>

        <Image
          style={{
            width: deviceWidth * 0.30,
            height: deviceHeight * 0.138
          }}
          source={{ uri: url }} />

      </TouchableOpacity>

      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          width: '75%',
          height: '5%'

        }}
        placeholder='Search Data...'
        textAlign='center'
        value={searchData}
        onChangeText={(val) => setData(val)} />

      <View>

        <Text style = {{fontSize:24}}>{dataArray.name}</Text>
        <Text style = {{fontSize:24}}>{dataArray.surname}</Text>
        <Text style = {{fontSize:24}}>{dataArray.age}</Text>
        <Text style = {{fontSize:24}}>{dataArray.city}</Text>
        <Text style = {{fontSize:24}}>{String(dataArray.isMarried)}</Text>

      </View>

      <View>

        <Button title='Get Data' onPress={() => getData()} />
        <Button title='Add Data' onPress={() => navigation.navigate("ThirdPage")} />
        <Button title='Delete Data' onPress={() => navigation.navigate("FourthPage")} />
        <Button title='Update Data' onPress={() => navigation.navigate("FifthPage")} />

      </View>

    </View>

  )
}