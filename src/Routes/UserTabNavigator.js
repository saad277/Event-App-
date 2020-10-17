import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/User/Home'
import Nearby from '../Screens/User/Nearby'
import Upcoming from '../Screens/User/Upcoming'
import Settings from '../Screens/User/Settings'
import AllEvents from '../Screens/User/AllEvents'
import EventDetails from '../Screens/User/EventDetails'

import Icon from 'react-native-vector-icons/FontAwesome';


const HomeStack = createStackNavigator({

    Home: {

        screen: Home,
        navigationOptions: () => {

            return {

                headerShown: false
            }

        }
    },

    AllEvents: {
        screen: AllEvents,
        navigationOptions: () => {

            return {


                headerShown: false
            }

        }
    },

    EventDetailsUser: {

        screen: EventDetails,
        navigationOptions: () => {

            return {

                title: "Event Details",
                headerShown: false,
            }
        }
    }


})



const NearbyStack = createStackNavigator({

    Nearby: {
        screen: Nearby,

    },
    EventDetailsUser: {

        screen: EventDetails,
        navigationOptions: () => {

            return {

                title: "Event Details",
                headerShown: false,
            }
        }
    }


})

const UserTabNavigator = createBottomTabNavigator({



    Home: {

        screen: HomeStack,
        navigationOptions: () => {

            return {

                tabBarIcon: ({ tintColor }) => {

                    return <Icon name="home" size={26} color={tintColor} />

                }
            }

        }
    },
    Nearby: {
        screen: NearbyStack,
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

                title: "My Events",
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