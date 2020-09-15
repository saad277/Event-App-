
import React from 'react'



import { createSwitchNavigator, createAppContainer } from 'react-navigation'




import UserStack from "./UserTabNavigator";
import PlannerStack from './PlannerTabNavigator'



import AuthStack from './AuthNavigators'


import Loading from "../Screens/Auth/Loading/Loading";







const MainNavigator = createSwitchNavigator({


    Auth: {
        screen: AuthStack
    },
    Loading: {
        screen: Loading
    },
    UserStack: {
        screen: UserStack
    },
    PlannerStack: {
        screen: PlannerStack
    }



})


const AppContainer = createAppContainer(MainNavigator)

export default AppContainer;