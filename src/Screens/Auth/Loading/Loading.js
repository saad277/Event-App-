import React, { useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = ({ navigation }) => {




    useEffect(() => {


        setTimeout(async () => {

            const userToken = await AsyncStorage.getItem("userToken")
            console.log(userToken)

            if (userToken) {

                return navigation.navigate("UserStack")

            } else {

                const plannerToken = await AsyncStorage.getItem("plannerToken")

                console.log(plannerToken)

                if (plannerToken) {

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

export default Loading;