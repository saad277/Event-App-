import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'



import MyEvents from '../Screens/Planner/MyEvents'





const PlannerTabNavigator = createBottomTabNavigator({


    MyEvents: {
        screen: MyEvents
    }



})

export default PlannerTabNavigator