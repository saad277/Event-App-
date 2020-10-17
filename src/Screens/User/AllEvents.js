

import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, StatusBar, FlatList, Platform, TouchableOpacity, TextInput } from 'react-native'

import { connect } from 'react-redux'

import Ionicon from 'react-native-vector-icons/Ionicons'

import { ListItem, Avatar } from 'react-native-elements'

import { fetchAllEvents } from '../../Redux/Actions/Events/EventActions'

const AllEvents = ({ fetchAllEvents, all, navigation }) => {



    useEffect(() => {


        fetchAllEvents()

    }, [])

    const heights = Platform.OS === "android" ? 100 + StatusBar.currentHeight : 80

    return (

        <View style={{ flex: 1 }}>

            <View style={{ height: heights, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                <View style={styles.searchContainer}>
                    <Ionicon name="ios-search" size={20} color={"#009387"} style={{ marginRight: 10, marginTop: 12 }} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="gray"
                        style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                    />
                </View>
            </View>

            <ScrollView>
                {all.map((x) => {

                    return (


                        <ListItem bottomDivider onPress={() => navigation.navigate("EventDetailsUser", { item: x })} >

                            <Avatar size="medium" rounded source={{ uri: x.picture }} />
                            <ListItem.Content style={{ borderColor: "#009387" }}>
                                <ListItem.Title style={{ textTransform: "capitalize", fontWeight: "bold" }}>{x.name}</ListItem.Title>
                                <ListItem.Subtitle>{x.city}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />

                        </ListItem>



                    )
                })}
            </ScrollView>

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
        marginTop: Platform.OS === "android" ? 30 : null,
        borderRadius: 10,
    }

})

const dispatchState = (dispatch) => {


    return {

        fetchAllEvents: () => dispatch(fetchAllEvents())
    }

}


const mapState = (state) => {


    return {

        all: state.event.all
    }

}


export default connect(mapState, dispatchState)(AllEvents);