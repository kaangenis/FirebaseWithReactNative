import { StyleSheet, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const FifthPage = () => {
    const [pickUpdate, setPick] = useState("")
    const [updateData, setUpdate] = useState("")



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


    return (

        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFE4C4', flex: 1 }}>

            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: '75%',
                    height: '5%'

                }}
                placeholder='Pick Data...'
                textAlign='center'
                value={pickUpdate}
                onChangeText={(val) => setPick(val)} />

            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: '75%',
                    height: '5%'

                }}
                placeholder='Update Data...'
                textAlign='center'
                value={updateData}
                onChangeText={(val) => setUpdate(val)} />

            <View>

                <Button title='Get Data' onPress={() => updateTry()} />

            </View>

        </View>

    )
}

export default FifthPage

const styles = StyleSheet.create({})
