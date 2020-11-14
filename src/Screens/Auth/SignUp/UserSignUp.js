import React, { useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animateable from 'react-native-animatable'

import { connect } from 'react-redux'
import { userSignUp } from '../../../Redux/Actions/Auth/AuthActions'

import AwesomeAlert from 'react-native-awesome-alerts';


const UserSignUp = ({ navigation, userSignUp }) => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setError] = useState([])



    const [alert, setAlert] = useState(false)

    const [alertText, setText] = useState("")

    const [alertHeader, setHeader] = useState("")


    const hideAlert = () => {


        setAlert(false)
    };

    const showAlert = () => {


        setAlert(true)
    };

    const settingAlert = (text, header) => {


        setText(text)
        setHeader(header)
        showAlert()

    }

    const verifyPassword = (term) => {

        let length = term.trim().length

        if (length > 0) {

            return true
        } else {

            return false



        }

    }

    const verifyName = (term) => {


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

        let validateName = verifyName(name)

        if (validateEmail && validatePassword && validateName) {



            userSignUp(name, email, password, settingAlert)

            setName("")
            setEmail("")
            setPassword("")
        }
        else {

            console.log("Invalid Email Or Password")
            setError(["Invalid Credentials"])

        }


    }




    return (

        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=319&q=80" }}
            style={styles.container}>


            <AwesomeAlert
                show={alert}

                title={alertHeader}
                message={alertText}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}

                showConfirmButton={true}

                confirmText="Okay"
                confirmButtonColor="#009387"

                onConfirmPressed={() => {
                    hideAlert();
                }}

            />


            <View style={styles.header}>
                <Text style={styles.headerText}>User Sign Up</Text>
            </View>

            <Animateable.View style={styles.formContainer} animation="fadeInUpBig">

                <ScrollView>
                    <Text style={styles.textFooter}>Name</Text>

                    <View style={styles.action}>
                        <FontAwesome
                            name="user"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput placeholder="User Name" value={name} onChangeText={(text) => setName(text)} style={styles.textInput} autoCapitalize="none" />

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

                    <Text style={{ color: "red", textAlign: "center", marginTop: 10, fontSize: 20 }}>{errors[0]}</Text>


                    <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                        <LinearGradient
                            colors={["#08d4c4", "#01ab9d"]}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>

                        </LinearGradient>



                    </TouchableOpacity>

                </ScrollView>
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

        flex: 2.5,
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
        marginTop: 25
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

        userSignUp: (name, email, password, alert) => dispatch(userSignUp(name, email, password, alert))

    }


}

export default connect(null, dispatchToProps)(UserSignUp);