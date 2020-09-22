import React, { useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';


import { connect } from 'react-redux'

import { SET_USER } from '../../../Redux/Actions/Auth/ActionTypes'

const Loading = ({ navigation, setUser }) => {




    useEffect(() => {


        setTimeout(async () => {

            const userToken = await AsyncStorage.getItem("userToken")
            const user = await AsyncStorage.getItem("user")
            const userData = JSON.parse(user)

            console.log(userToken)

            if (userToken) {


                setUser(userData)
                return navigation.navigate("UserStack")

            } else {

                const plannerToken = await AsyncStorage.getItem("plannerToken")
                const planner = await AsyncStorage.getItem("planner")
                const plannerData = JSON.parse(planner)

                console.log(plannerToken)

                if (plannerToken) {

                    setUser(plannerData)
                    return navigation.navigate("PlannerStack")

                }

            }

            return navigation.navigate("Auth")





        }, 2700)


    }, [])

    return (

        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <LottieView source={require('../../../Assets/Lottie/calendar-event.json')} autoPlay loop />
            </View>


            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.text} >Smart Event App </Text>
            </View>
        </View>
    )


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",

    },
    text: {
        color: "#009387",
        fontWeight: "bold",
        fontSize: 28
    }

})


const dispatchState = (dispatch) => {


    return {

        setUser: (user) => dispatch({ type: SET_USER, payload: user })
    }

}


export default connect(null, dispatchState)(Loading);