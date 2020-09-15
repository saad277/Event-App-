import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'



import Login from '../Screens/Auth/Login/Login'
import SignUp from '../Screens/Auth/SignUp/SignUp'



const AuthStack=createStackNavigator({


    Login:{
        screen:Login
    },
    SignUp:{
        screen:SignUp
    }


})


export default AuthStack;