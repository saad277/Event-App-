

import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, StatusBar, FlatList, Platform, TouchableOpacity, TextInput } from 'react-native'

import { connect } from 'react-redux'

import Ionicon from 'react-native-vector-icons/Ionicons'

import { ListItem, Avatar } from 'react-native-elements'

import { fetchAllEvents } from '../../Redux/Actions/Events/EventActions'


import Search from './Components/Search'

const AllEvents = ({ all, navigation }) => {




    

    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            <Search navigation={navigation} />

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






const mapState = (state) => {


    return {

        all: state.event.all
    }

}


export default connect(mapState)(AllEvents);