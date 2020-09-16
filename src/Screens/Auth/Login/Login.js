import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Platform, TextInput, StatusBar, ImageBackground } from 'react-native'

import * as Animateable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/MaterialIcons'




const Login = ({ navigation }) => {


    return (

        <ImageBackground style={styles.container} source={{ uri: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=319&q=80" }}>
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
                    <TextInput placeholder="Enter Email" style={styles.textInput} autoCapitalize="none" />
                    {/* <Feather  name="check-circle" color="green" size={2}  /> */}
                </View>

                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput placeholder="Enter Password" style={styles.textInput} autoCapitalize="none" secureTextEntry={true} />
                    {/* <Material  name="visibility" color="grey" size={2}  /> */}
                </View>

                <View style={styles.button}>
                    <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>

                    </LinearGradient>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={[styles.signIn, { borderColor: "#009387", borderWidth: 1, marginTop: 15 }]}
                    >
                        <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
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
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
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

export default Login;