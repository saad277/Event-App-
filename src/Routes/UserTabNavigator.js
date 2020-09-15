import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Screens/User/Home'
import Nearby from '../Screens/User/Nearby'
import Upcoming from '../Screens/User/Upcoming'

import Icon from 'react-native-vector-icons/FontAwesome';

const UserTabNavigator = createBottomTabNavigator({



    Home: {

        screen: Home,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="home" size={26} color="black" />

                }
            }

        }
    },
    Nearby: {
        screen: Nearby,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="map-marker" size={26} color="black" />

                }
            }

        }
    },
    Upcoming: {
        screen: Upcoming,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="calendar" size={26} color="black" />

                }
            }

        }
    }

},{


    tabBarOptions:{

        inactiveTintColor:"lightgray",
        activeTintColor:"black",
        labelStyle:{
            fontWeight:"bold",
            fontSize:12
        },
        style:{
            height:50,
        }
    }
})

export default UserTabNavigator;