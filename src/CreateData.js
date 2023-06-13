import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from "firebase/firestore";

const ThirdPage = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")
    const [isMarried, setMarried] = useState("")
    const [id, setId] = useState("")

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



    const sendData = () => {
        setDoc(doc(db, "UserInfo", id), {
            name: name,
            surname: surname,
            city: city,
            age: Number(age),
            isMarried: Boolean(isMarried)
        }).then(() => {
            console.log("data submitted")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <SafeAreaView style={styles.mainView}>

            <Text style={{ fontSize: 48, fontWeight: '200' }}>Add new data</Text>


            <Text>Name</Text>
            <TextInput
                placeholder='Enter your name here'
                style={styles.inputStyle}
                textAlign='center'
                value={name}
                onChangeText={(val) => setName(val)} />

            <Text>Surname</Text>
            <TextInput
                placeholder='Enter your Surname here'
                style={styles.inputStyle}
                textAlign='center'
                value={surname}
                onChangeText={(val) => setSurname(val)} />

            <Text>City</Text>
            <TextInput
                placeholder='Enter your city here'
                style={styles.inputStyle}
                textAlign='center'
                value={city}
                onChangeText={(val) => setCity(val)} />

            <Text>Age</Text>
            <TextInput
                placeholder='Enter your age here'
                style={styles.inputStyle}
                textAlign='center'
                value={age}
                onChangeText={(val) => setAge(val)} />

            <Text>Marriage Status</Text>
            <TextInput
                placeholder='Enter your Marriage Status here'
                style={styles.inputStyle}
                textAlign='center'
                value={isMarried}
                onChangeText={(val) => setMarried(val)} />

            <Text>Nickname</Text>
            <TextInput
                placeholder='nickname'
                style={styles.inputStyle}
                textAlign='center'
                value={id}
                onChangeText={(val) => setId(val)} />


            <Button title='Add Data' onPress={() => sendData()} />


        </SafeAreaView>
    )
}

export default CreateData

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        backgroundColor: '#FFE4C4',
        flex: 1
    },
    inputStyle: {
        borderRadius: 15,
        borderWidth: 1,
        width: '90%',
        height: '5%'
    }
})
