import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Platform, TextInput, StatusBar, ImageBackground } from 'react-native'

import * as Animateable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import { connect } from 'react-redux'
import { signIn } from '../../../Redux/Actions/Auth/AuthActions'



const Login = ({ navigation, signIn, }) => {




    const [email, setEmail] = useState("saad@gmail.com")
    const [password, setPassword] = useState("123")

    const [errors, setError] = useState([])

    const verifyPassword = (term) => {

        let length = term.trim().length

        if (length > 0) {

            return true
        } else {

            return false



        }

    }

    const verifyEmail = (term) => {

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        let isValid = expression.test(String(term).toLowerCase())

        return isValid;

    }


    const handleSubmit = () => {


        let validateEmail = verifyEmail(email)

        let validatePassword = verifyPassword(password)

        if (validateEmail && validatePassword) {


            signIn(email, password, navigation)
        }
        else {

            console.log("Invalid Email Or Password")
            setError(["Invalid Email OR Password"])

        }


    }




    return (

        <ImageBackground

            style={styles.container}
            source={{ uri: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=319&q=80" }}>
            <StatusBar color="black" />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Welcome !</Text>
            </View>
            <Animateable.View style={styles.footer} animation="fadeInUpBig"  >


                <Text style={styles.textFooter}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        style={styles.textInput}
                        autoCapitalize="none"


                    />


                </View>

                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={true}

                    />

                </View>
                <Text style={{ color: "red", textAlign: "center", marginTop: 10, fontSize: 20 }}>{errors[0]}</Text>
                <View style={styles.button} >
                    <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]} onPress={() => handleSubmit()} >Sign In</Text>

                    </LinearGradient>

                    <TouchableOpacity

                        style={[styles.signIn, { borderColor: "#009387", borderWidth: 1, marginTop: 15 }]}
                    >
                        <Text style={[styles.textSign, { color: "#009387" }]}
                            onPress={() => navigation.navigate("RegisterAs")}>Sign Up</Text>
                    </TouchableOpacity>

                </View>

            </Animateable.View>
        </ImageBackground>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {

        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        marginLeft: 5,
        color: '#05375a',
        // borderBottomColor: "B",
        // borderBottomWidth: 0

    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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


const dispatchStateToProps = (dispatch) => {


    return {
        signIn: (email, password, navigation) => dispatch(signIn(email, password, navigation)),

    }


}

export default connect(null, dispatchStateToProps)(Login);