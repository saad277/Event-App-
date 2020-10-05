import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Screens/User/Home'
import Nearby from '../Screens/User/Nearby'
import Upcoming from '../Screens/User/Upcoming'
import Settings from '../Screens/User/Settings'

import Icon from 'react-native-vector-icons/FontAwesome';

const UserTabNavigator = createBottomTabNavigator({



    Home: {

        screen: Home,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="home" size={26} color={tintColor} />

                }
            }

        }
    },
    Nearby: {
        screen: Nearby,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="map-marker" size={26} color={tintColor} />

                }
            }

        }
    },
    Upcoming: {
        screen: Upcoming,
        navigationOptions: () => {

            return {
                
                title:"My Events",
                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="calendar" size={26} color={tintColor} />

                }
            }

        }
    },
    Settings: {

        screen: Settings,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="cog" size={26} color={tintColor} />

                }
            }

        }

    }

}, {


    tabBarOptions: {

        inactiveTintColor: "lightgray",
        activeTintColor: "#009387",
        labelStyle: {
            fontWeight: "bold",
            fontSize: 12
        },
        style: {
            height: 50,
        }
    }
})

export default UserTabNavigator;