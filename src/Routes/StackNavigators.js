



import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import MyEvents from '../Screens/Planner/MyEvents'
import Income from '../Screens/Planner/Income'
import Settings from '../Screens/Planner/Settings'

import Icon from 'react-native-vector-icons/FontAwesome';








export const MyEventStack = createStackNavigator({

    MyEvents: {

        screen: MyEvents,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
                title:"My Events"
            }
        }
    }


})


export const IncomeStack = createStackNavigator({

    Income: {
        screen: Income,
        navigationOptions: ({ navigation }) => {

            return {
                
                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
              
            }
        }

    }
})

export const SettingsStack = createStackNavigator({


    Settings: {

        screen: Settings,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />
            }
        }
    }

})
