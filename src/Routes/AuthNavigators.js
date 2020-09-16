import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'



import Login from '../Screens/Auth/Login/Login'
import SignUp from '../Screens/Auth/SignUp/SignUp'



const AuthStack = createStackNavigator({


    Login: {
        screen: Login,
        navigationOptions: () => {

            return {
                headerShown: false
            }
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => {

            return {
                headerShown: false
            }
        }
    }


})


export default AuthStack;