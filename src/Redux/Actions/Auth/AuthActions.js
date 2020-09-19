
import axios from 'axios'

import { LOG_OUT, SET_USER } from './ActionTypes'
import asyncStorage from '@react-native-community/async-storage'






export const signIn = (email, password, navigation) => {

    console.log(email, password)

    return async (dispatch) => {



        fetch("http://10.0.2.2:4000/signIn", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                "email": email,
                "password": password
            })

        })
            .then((res) => res.json())
            .then(async (response) => {

                console.log(response)


                if (response.user) {

                    await asyncStorage.setItem("userToken", response.token)

                    await asyncStorage.setItem("user", JSON.stringify(response.user))

                    dispatch({

                        type: SET_USER,
                        payload: response.user

                    })

                        navigation.navigate("Loading")
                 

                } else if (response.planner) {

                    await asyncStorage.setItem("plannerToken", response.token)

                    await asyncStorage.setItem("planner", JSON.stringify(response.planner))

                    dispatch({

                        type: SET_USER,
                        payload: response.planner

                    })


                        navigation.navigate("Loading")

                   

                }






            })


    }




}



export const logOut = () => {


    return (dispatch) => {

        console.log("12222222222222")

        dispatch({

            type: LOG_OUT,
            payload: "saaaaa"
        })

    }


}