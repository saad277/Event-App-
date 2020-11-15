


import { LOG_OUT, SET_USER, PLANNER_SIGN_UP, USER_SIGN_UP } from './ActionTypes'
import asyncStorage from '@react-native-community/async-storage'

import { baseUrl } from '../../../BaseUrl/baseUrl'











export const signIn = (email, password, token, navigation, alert) => {

    console.log(email, password)

    console.log(token)


    let cloudToken = token


    return async (dispatch) => {



        fetch(baseUrl + "signIn", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                "email": email,
                "password": password,
                "cloudToken": cloudToken
            })

        })
            .then((res) => res.json())
            .then(async (response) => {

                console.log(response)

                if (response.error) {

                    // alert(response.error, "Error")
                }




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


    return async (dispatch) => {

        console.log("Logged Out")

        await asyncStorage.clear()

        dispatch({

            type: LOG_OUT,
            payload: {}
        })

    }


}

export const userLogout = (email) => {

    console.log(email)

    
    return async (dispatch) => {


        fetch(baseUrl + "we", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                "email": email,

            })

        }).then((res) => res.json())
            .then(async (response) => {


                if (response.result) {

                    console.log(response.result)

                    dispatch({

                        type: LOG_OUT,
                        payload: {}
                    })

                }

            })

    }

}



export const userSignUp = (name, email, password, alert) => {


    return (dispatch) => {


        fetch(baseUrl + "user/signUp", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                "name": name,
                "email": email,
                "password": password
            })

        }).then((res) => res.json())
            .then((response) => {

                console.log(response)

                if (response.error) {

                    alert(response.error, "Error")
                }

                if (response.success) {

                    alert(response.success, "Success")
                }
            })


    }



}








export const plannerSignUp = (name, email, password, organization, alert) => {


    return (dispatch) => {


        fetch(baseUrl + "planner/signUp", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                "name": name,
                "email": email,
                "password": password,
                "organization": organization
            })

        }).then((res) => res.json())
            .then((response) => {

                console.log(response)


                if (response.error) {

                    alert(response.error, "Error")
                }

                if (response.success) {

                    alert(response.success, "Success")
                }


            })


    }



}