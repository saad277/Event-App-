import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux'
import { logOut } from '../../Redux/Actions/Auth/AuthActions'

const Settings = ({ navigation, logOut }) => {


    const logout = async () => {


        await AsyncStorage.clear()

        logOut();

        navigation.navigate("Loading")


    }

    return (

        <View style={styles.container}>
            <Button title="Logout" color="green" onPress={() => logout()} />
        </View>
    )


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    }
})


const dispatchToProps = (dispatch) => {

    return {

        logOut: () => dispatch(logOut())

    }

}
export default connect(null, dispatchToProps)(Settings);