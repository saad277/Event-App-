import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';



const Settings = ({ navigation }) => {


    const logout = async () => {


        await AsyncStorage.clear()

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

export default Settings;