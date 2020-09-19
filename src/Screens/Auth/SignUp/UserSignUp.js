import React, { useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animateable from 'react-native-animatable'

import { connect } from 'react-redux'
import { userSignUp } from '../../../Redux/Actions/Auth/AuthActions'

const UserSignUp = ({ navigation, userSignUp }) => {


    const [name, setName] = useState("saad3")
    const [email, setEmail] = useState("saad3@gmail.com")
    const [password, setPassword] = useState("123")


    return (

        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=319&q=80" }}
            style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>User Sign Up</Text>
            </View>

            <Animateable.View style={styles.formContainer} animation="fadeInUpBig">

                <Text style={styles.textFooter}>Name</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput placeholder="Enter Name" value={name} onChangeText={(text) => setName(text)} style={styles.textInput} autoCapitalize="none" />

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

                <Text style={[styles.textFooter, { marginTop: 30 }]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={22}
                    />
                    <TextInput placeholder="Enter Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.textInput} autoCapitalize="none" secureTextEntry={true} />

                </View>

                <TouchableOpacity style={styles.button} onPress={() => userSignUp(name, email, password)}>
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

        flex: 2,
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



const dispatchToProps = (dispatch) => {


    return {

        userSignUp: (name, email, password) => dispatch(userSignUp(name, email, password))

    }


}

export default connect(null, dispatchToProps)(UserSignUp);