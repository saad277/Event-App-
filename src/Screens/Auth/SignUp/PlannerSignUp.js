import React, { useState } from 'react'


import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animateable from 'react-native-animatable'

import { connect } from 'react-redux'

import { plannerSignUp } from '../../../Redux/Actions/Auth/AuthActions'


const PlannerSignUp = ({ navigation, plannerSignUp }) => {


    const [name, setName] = useState("saad5")
    const [email, setEmail] = useState("saad5@gmail.com")
    const [organization, setOrg] = useState("home")
    const [password, setPassword] = useState("123")

    return (

        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=319&q=80" }}
            style={styles.container}>


            <View style={styles.header}>
                <Text style={styles.headerText}>Planner Sign Up</Text>
            </View>

            <Animateable.View style={styles.formContainer} animation="fadeInUpBig">


                <Text style={styles.textFooter}>Name</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput placeholder="Enter Email" value={name} onChangeText={(text) => setEmail(text)} style={styles.textInput} autoCapitalize="none" />

                </View>

                <Text style={[styles.textFooter, { marginTop: 30 }]}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="envelope"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.textInput} autoCapitalize="none" />

                </View>


                <Text style={[styles.textFooter, { marginTop: 30 }]}>Organization </Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="industry"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput placeholder="Organization Name" value={organization} style={styles.textInput} autoCapitalize="none" secureTextEntry={true} />

                </View>
                <Text style={[styles.textFooter, { marginTop: 30 }]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={22}
                    />
                    <TextInput placeholder="Enter Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.textInput} autoCapitalize="none" secureTextEntry={true} />

                </View>

                <TouchableOpacity style={styles.button} onPress={() => plannerSignUp(name, email, password, organization)}>
                    <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>

                    </LinearGradient>



                </TouchableOpacity>

            </Animateable.View>

        </ImageBackground>
    )

}




const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    header: {

        flex: 1,
        justifyContent: "center"


    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white"
    },
    formContainer: {

        flex: 3,
        backgroundColor: "white",
        width: "100%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    textfooter: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})




const dispatchState = (dispatch) => {


    return {

        plannerSignUp: (name, email, password, organization) => dispatch(plannerSignUp(name, email, password, organization))
    }

}


export default connect(null, dispatchState)(PlannerSignUp);