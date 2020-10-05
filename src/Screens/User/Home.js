


import React from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'



const Home = () => {


    const height = Platform.OS === "android" ? 100 + StatusBar.currentHeight : 80

    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: height, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                <View style={styles.searchContainer}>
                    <Ionicon name="ios-search" size={20} color={"#009387"} style={{ marginRight: 10, marginTop: 12 }} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="gray"
                        style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                    />
                </View>
            </View>
        </View>

    )


}

const styles = StyleSheet.create({


    searchContainer: {

        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        marginHorizontal: 20,
        shadowColor: "#009387",
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.8,
        elevation: 4,
        marginTop: Platform.OS === "android" ? 30 : null
    }

})


export default Home;