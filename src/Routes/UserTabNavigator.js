import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Screens/User/Home'
import Nearby from '../Screens/User/Nearby'
import Upcoming from '../Screens/User/Upcoming'

const UserTabNavigator = createBottomTabNavigator({



    Home: {

        screen: Home
    },
    Nearby: {
        screen: Nearby
    },
    Upcoming: {
        screen: Upcoming
    }








})

export default UserTabNavigator;