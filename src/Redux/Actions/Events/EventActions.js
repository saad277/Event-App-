

import { CREATE_EVENT } from './ActionTypes'

import { baseUrl } from '../../../BaseUrl/baseUrl'

import AsyncStorage from '@react-native-community/async-storage'


export const createEvent = (name, description, type, fromDate, toDate, capacity, price, by, picture, eventLocation,alert,error) => {


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
                        "eventLocation":eventLocation


                    })




                })
                .then((res)=>res.json())
                .then((response)=>{

                    console.log(response)

                    if(response.success){

                            alert()
                    } else{

                            error("Error",response.error)
                    }

                })




            })
            .catch((error) => console.log(error))











    }
}