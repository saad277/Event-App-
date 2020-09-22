import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'



import Icon from 'react-native-vector-icons/FontAwesome';

import asyncStorage from '@react-native-community/async-storage'

import { MyEventStack, IncomeStack, SettingsStack } from './StackNavigators'

import { connect } from 'react-redux'

import CustomDrawerContentComponent from './ContentComponent/ContentComponent'



const PlannerTabNavigator = createDrawerNavigator({


    MyEvents: {
        screen: MyEventStack,
        navigationOptions: () => {

            return {
                drawerLabel: "My Events",
                tintColor: "#009387",
                drawerIcon: ({ tintColor }) => {



                    return <Icon name="calendar" size={26} color="black" />

                }
            }

        }
    },
    Income: {
        screen: IncomeStack,
        navigationOptions: () => {

            return {

                drawerIcon: ({ tintColor }) => {

                    return <Icon name="line-chart" size={26} color="black" />

                }
            }

        }
    },

    Settings: {

        screen: SettingsStack,
        navigationOptions: () => {

            return {

                drawerIcon: ({ tintColor }) => {

                    return <Icon name="cog" size={26} color="black" />

                },

            }

        }

    }



}, {
    contentComponent: (props) => <CustomDrawerContentComponent {...props} />,

})



export default (PlannerTabNavigator)