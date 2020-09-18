
import axios from 'axios'

import { SIGN_IN,LOG_OUT } from './ActionTypes'
import asyncStorage from '@react-native-community/async-storage'






export const signIn = (email, password) => {

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

                await asyncStorage.setItem("token", response.token)
            

                dispatch({

                    type:SET_USER,
                    payload:response.user
                })

            })


    }




}



export const logOut=()=>{


    return (dispatch)=>{

            console.log("12222222222222")

        dispatch({

                type:LOG_OUT,
                payload:"saaaaa"
        })

    }


}