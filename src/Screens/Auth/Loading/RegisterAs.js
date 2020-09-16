import React from 'react'

import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Button, Text } from 'native-base'

import * as Animateable from 'react-native-animatable'

const RegisterAs = ({ navigation }) => {



    return (

        <ImageBackground style={styles.container} 
        imageStyle={{ opacity: 0.4 }} 
        source={{ uri: "https://images.unsplash.com/photo-1542326237-94b1c5a538d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80ttps://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80" }}>

            <Text style={styles.headerText}>Choose Your Title</Text>
            <View style={styles.imageContainer}>

                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("UserSignUp")}>
                    < Image
                        style={styles.image}
                        source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/91/19/businessman-avatar-profile-vector-26939119.jpg" }} />

                    <Text style={styles.text}>Attendee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("PlannerSignUp")}>
                    < Image
                        style={styles.image}
                        source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/91/19/businessman-avatar-profile-vector-26939119.jpg" }} />
                    <Text style={styles.text}>Organizer</Text>
                </TouchableOpacity>



            </View>

            <Button success style={{ marginBottom: "20%", alignSelf: "center" }} ><Text > Login ? </Text></Button>

        </ImageBackground>

    )



}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingVertical: 20,
    },
    headerText: {
        flex: 1,
        color: "black",
        fontSize: 29,
        fontWeight: "bold"
    },
    image: {
        height: 130,
        width: 130,
        borderRadius: 200,
        margin: 20,
    },
    imageContainer: {
        flex: 3,
        flexDirection: "row",


    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#009387",
    }

})

export default RegisterAs; 