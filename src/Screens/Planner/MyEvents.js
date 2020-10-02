import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { fetchEvents } from '../../Redux/Actions/Events/EventActions'

import { ListItem, Divider, Avatar } from 'react-native-elements'


const MyEvents = ({ fetchEvents, myEvents }) => {


  

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider style={styles.listItem}>
            <Avatar size="large" source={{ uri: item.picture }} />
            <ListItem.Content>
                <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
            </ListItem.Content>
            <Text style={styles.price}>$ {item.price}</Text>
        </ListItem>
    )



    console.log(".........")
    console.log(myEvents)

    useEffect(() => {


        fetchEvents()


    }, [])

    return (


        <FlatList
            keyExtractor={keyExtractor}
            data={myEvents}
            renderItem={renderItem}
        />


    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",

    },
    price: {

        color: "#009387",
        fontSize: 20,
        fontWeight:"900"
    },

    title:{

        color:"black",
        fontSize:25,
        fontWeight:"bold",
        textTransform: 'capitalize',
    },

    listItem: {

        marginBottom: 8,
        backgroundColor: "#fff",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#009387",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        marginHorizontal: 10,
        marginVertical: 9,
        borderBottomLeftRadius: 22,
        borderTopRightRadius: 22,
    },





});






const mapState = (state) => {


    return {

        myEvents: state.event
    }


}


const mapDispatch = (dispatch) => {

    return {

        fetchEvents: () => dispatch(fetchEvents())


    }

}

export default connect(mapState, mapDispatch)(MyEvents);