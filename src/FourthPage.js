import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, deleteDoc } from "firebase/firestore";

const FourthPage = () => {
    const [deletedata, setDelete] = useState("")

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

    const deleteFunc = async () => {
        Alert.alert("Do you agreed delete the data: ", `${deletedata}`, [
            {text:'Evet', onPress: () => [deleteDoc(doc(db, "UserInfo", deletedata)), Alert.alert("User has been removed.")]},
            {text:'Hayır', onPress: () => console.log("Iptal")}
        ])
        
    }

    return (
        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFE4C4', flex: 1 }}>

            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: '75%',
                    height: '5%'

                }}
                placeholder='Delete Data...'
                textAlign='center'
                value={deletedata}
                onChangeText={(val) => setDelete(val)} />


            <Button title='Delete Data' onPress={() => deleteFunc()} />

        </View>
    )
}

export default FourthPage

const styles = StyleSheet.create({})