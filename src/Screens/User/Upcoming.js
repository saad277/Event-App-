
import React, { useEffect, useState } from 'react'

import { View, Text } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { baseUrl } from '../../BaseUrl/baseUrl'



const Upcoming = () => {



    const [userEvents, setEvents] = useState([])

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

                console.log(response.result.events)


            })





    }

    useEffect(() => {


        fetchEvents()

    }, [])



    return (

        <View>
            <Text>Upcoming</Text>
        </View>
    )


}

export default Upcoming;