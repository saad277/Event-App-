
import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { baseUrl } from '../../BaseUrl/baseUrl'

import { ListItem, Avatar } from 'react-native-elements'

const Upcoming = ({ navigation }) => {



    const [userEvents, setEvents] = useState([])

    const [refreshing, setRefreshing] = useState(false)





    const fetchEvents = async () => {

        const token = await AsyncStorage.getItem("userToken")


        fetch(baseUrl + "userEvents", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
        })
            .then((res) => res.json())
            .then((response) => {


                //  console.log("........")
                //    console.log(response.result.events)

                setEvents(response.result.events)


            })





    }


    const handleRefresh = async () => {


        setRefreshing(true)

        await fetchEvents()

        setRefreshing(false)
    }

    useEffect(() => {


        fetchEvents()

    }, [])


    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => {

        let i = item.eventId
        console.log(i)
        return (
            <TouchableOpacity onPress={() => { navigation.navigate("EventDetailsUser", { item: i }) }}>
                <ListItem bottomDivider style={styles.listItem}>
                    <Avatar size="large" source={{ uri: i.picture }} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>{i.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text style={styles.price}>$ {i.price}</Text>
                </ListItem>
            </TouchableOpacity>
        )

    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    tintColor={"black"}
                    refreshing={refreshing}
                    onRefresh={() => handleRefresh()}
                />
            }
            showsVerticalScrollIndicator={true}
        >
            <FlatList
                keyExtractor={keyExtractor}
                data={userEvents}
                renderItem={renderItem}
            />

        </ScrollView>

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
        fontWeight: "900"
    },

    title: {

        color: "black",
        fontSize: 25,
        fontWeight: "bold",
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



export default Upcoming;