import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image } from 'react-native'


import Material from 'react-native-vector-icons/MaterialIcons'




const EventDetails = ({ navigation }) => {

    const item = navigation.getParam("item")

    console.log(item)


    return (
        <View style={styles.container}>
            <Image source={{ uri: item.picture }} style={styles.image} />

            <View style={styles.secondContainer}>

                <View style={{ flexDirection: "row", borderBottomColor: "black", borderBottomWidth: 0.6, marginHorizontal: 15, paddingVertical: 10 }}>

                    <View style={{ flexDirection: "column", flex: 1 }}>

                        <Text style={styles.header}>{item.name}</Text>
                        <Text style={styles.sub}>{item.type}</Text>

                    </View>

                    <View style={styles.iconContainer} >
                        <Material size={40} color={"#009387"} name={"favorite"} style={{ marginRight: 20, marginTop: 20 }} />
                    </View>


                </View>

                <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 30 }}>

                    <Text style={styles.header}>$ {item.price}</Text>

                 
                   

                </View>

            </View>

        </View>
    )



}

const styles = StyleSheet.create({


    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 340,
        flex: 2
    },
    secondContainer: {

        flex: 3,
        flexDirection: "column",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        paddingVertical: 10
    },
    header: {

        fontSize: 30,
        fontWeight: "bold",
        textTransform: "capitalize",
        marginLeft: 20,
    },
    sub: {
        fontSize: 18,
        marginTop: 5,
        color: "gray",
        marginLeft: 20,
        fontWeight: "700"

    },
    iconContainer: {

        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",

    }


})


export default EventDetails;