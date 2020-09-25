
import React from 'react'



import { createSwitchNavigator, createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'



import Icon from 'react-native-vector-icons/FontAwesome';



import UserStack from "./UserTabNavigator";
import PlannerStack from './PlannerDrawerNavigator'



import AuthStack from './AuthNavigators'


import Loading from "../Screens/Auth/Loading/Loading";
import CreateEvent from '../Screens/Planner/CreateEvent'


const Planner = createStackNavigator({

    Planner: {

        screen: PlannerStack,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: () => <Icon name="bars" color="#05375a" size={20} style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />,
                headerRight: () => <Icon name="plus-circle" color="#05375a" size={24} style={{ marginRight: 10 }} onPress={()=>navigation.navigate("CreateEvent")} />,
            }
        }
    },
    CreateEvent: {
        screen: CreateEvent,
        navigationOptions:({navigation})=>{

            return {
                    title:"Create Event"
            }

        }
    }


})




const MainNavigator = createSwitchNavigator({

    Loading: {
        screen: Loading
    },
    Auth: {
        screen: AuthStack
    },

    UserStack: {
        screen: UserStack
    },
    PlannerStack: {
        screen: Planner
    }




})


const AppContainer = createAppContainer(MainNavigator)

export default AppContainer;