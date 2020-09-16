import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'



import Login from '../Screens/Auth/Login/Login'
import UserSignUp from '../Screens/Auth/SignUp/UserSignUp'
import PlannerSignUp from "../Screens/Auth/SignUp/PlannerSignUp"
import RegisterAs from '../Screens/Auth/Loading/RegisterAs'


const AuthStack = createStackNavigator({


    Login: {
        screen: Login,
        navigationOptions: () => {

            return {
                headerShown: false
            }
        }
    },
    
    RegisterAs: {

        screen: RegisterAs,
        navigationOptions: () => {

            return {
               headerShown: false
            }
        }
    },

    UserSignUp: {
        screen: UserSignUp,
        navigationOptions: () => {

            return {
                headerShown: false
            }
        }
    },
    PlannerSignUp: {
        screen: PlannerSignUp,
        navigationOptions: () => {

            return {
                headerShown: false
            }
        }
    }


})


export default AuthStack;