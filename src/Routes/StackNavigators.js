



import React from 'react'






import { createStackNavigator } from 'react-navigation-stack'

import MyEvents from '../Screens/Planner/MyEvents'
import EventDetails from '../Screens/Planner/EventDetails'
import Income from '../Screens/Planner/Income'
import Settings from '../Screens/Planner/Settings'

import Icon from 'react-native-vector-icons/FontAwesome';








export const MyEventStack = createStackNavigator({

    MyEvents: {

        screen: MyEvents,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
                title: "My Events",

                headerRight: () => <Icon name="plus-circle" color="#05375a" size={24} style={{ marginRight: 10 }} />,
            }
        }
    },

    EventDetails: {

        screen: EventDetails,
        navigationOptions: ({ navigation }) => {


            const title = navigation.getParam("item").name
            return {
                //  headerLeft: () => <Icon name="arrow-left" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.navigate("MyEvents")} />,

                // headerTitle: title.charAt(0).toUpperCase() + title.slice(1),

                headerShown:false




            }

        }
    }


}, {

    initialRouteName: "MyEvents"
})


export const IncomeStack = createStackNavigator({

    Income: {
        screen: Income,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
                headerRight: () => <Icon name="plus-circle" color="#05375a" size={24} style={{ marginRight: 10 }} />,
            }
        }

    }
})

export const SettingsStack = createStackNavigator({


    Settings: {

        screen: Settings,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
                headerRight: () => <Icon name="plus-circle" color="#05375a" size={24} style={{ marginRight: 10 }} />,
            }
        }
    }

})
