

import { CREATE_EVENT, FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS, FETCH_ALL_EVENTS, FETCH_NEARBY } from './ActionTypes'

import { baseUrl } from '../../../BaseUrl/baseUrl'

import AsyncStorage from '@react-native-community/async-storage'


export const createEvent = (name, description, type, fromDate, toDate, capacity, price, by, picture, eventLocation, alert, error, fetchUpdated) => {


    return async (dispatch) => {


        const token = await AsyncStorage.getItem("plannerToken")


        console.log(eventLocation)

        //console.log(picture)

        let source = {
            uri: picture.path,
            type: picture.mime,
            name: "event_picture"
        }


        const data = new FormData()
        data.append("file", source)
        data.append("upload_preset", "event_app")
        data.append("cloud_name", "saad277")


        fetch("https://api.cloudinary.com/v1_1/saad277/image/upload", {
            method: "POST",
            body: data,
            // headers: {
            //     "Accept": "application/json",
            //     "Content-type": "multipart/form-data"
            // }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.secure_url)



                fetch(baseUrl + "createEvent", {

                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token
                    },

                    body: JSON.stringify({
                        "name": name,
                        "description": description,
                        "type": type,
                        "fromDate": fromDate,
                        "toDate": toDate,
                        "capacity": capacity,
                        "price": price,
                        "by": by,
                        "picture": data.secure_url,
                        "eventLocation": eventLocation


                    })




                })
                    .then((res) => res.json())
                    .then((response) => {

                        //  console.log(response)

                        if (response.success) {

                            fetchUpdated()
                            alert()
                        } else {

                            error("Error", response.error)
                        }

                    })




            })
            .catch((error) => console.log(error))











    }
}




export const fetchEvents = () => {

    return async (dispatch) => {

        const token = await AsyncStorage.getItem("plannerToken")



        fetch(baseUrl + "myEvents", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
        })
            .then((res) => res.json())
            .then((response) => {

                // console.log(response.result)

                dispatch({

                    type: FETCH_EVENTS,
                    payload: response.result
                })


            }).catch((error) => console.log(error))


    }

}




export const fetchRandomEvents = () => {


    return async (dispatch) => {


        const token = await AsyncStorage.getItem("userToken")

        fetch(baseUrl + "homeEvents", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },

        }).then((res) => res.json())
            .then((response) => {

                // console.log(response.result)


                dispatch({

                    type: USER_FETCH_RANDOM_EVENTS,
                    payload: response.result
                })



            }).catch((error) => console.log(error))


    }


}



export const fetchAllEvents = () => {


    return async (dispatch) => {


        const token = await AsyncStorage.getItem("userToken")


        fetch(baseUrl + "allEvents", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },

        }).then((res) => res.json())
            .then((response) => {

                // console.log(response.result)


                dispatch({

                    type: FETCH_ALL_EVENTS,
                    payload: response.result
                })



            }).catch((error) => console.log(error))

    }


}






export const fetchNearby = (latitude, longitude) => {


    return async (dispatch) => {


        const token = await AsyncStorage.getItem("userToken")


        fetch(baseUrl + "findNearestEvent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({

                "latitude": latitude,
                "longitude": longitude
            })

        }).then((res) => res.json())
            .then((response) => {

                 console.log(response.result)


                dispatch({

                    type: FETCH_NEARBY,
                    payload: response.result
                })



            }).catch((error) => console.log(error))

    }


}