

import { CREATE_EVENT, FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS, FETCH_ALL_EVENTS, FETCH_NEARBY, JOIN_EVENT } from './ActionTypes'

import { baseUrl } from '../../../BaseUrl/baseUrl'

import AsyncStorage from '@react-native-community/async-storage'

import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const RNFS = require('react-native-fs');
import RNFetchBlob from 'rn-fetch-blob'

import moment from "moment";

const android = RNFetchBlob.android;

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



export const joinEvent = (eventId, eventName, userName, userId, joinedDate, ticketPrice, toggleModal, setJoin) => {

    return async (dispatch) => {

        const token = await AsyncStorage.getItem("userToken")


        //  console.log(eventId, eventName, userName, userId, joinedDate, ticketPrice)






        fetch(baseUrl + "joinEvent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                "eventId": eventId,
                "eventName": eventName,
                "userName": userName,
                "userId": userId,
                "joinedDate": joinedDate,
                "ticketPrice": ticketPrice

            })

        }).then((res) => res.json())
            .then((response) => {

                console.log(response)


                dispatch({


                    type: JOIN_EVENT,
                    payload: response.event
                })

                toggleModal()
                setJoin()
            })


    }


}



const getImage = async (recipientId, eventName, userName, eventDate, eventTime) => {


    let docsDir;
    if (Platform.OS == "android") {
        docsDir = await RNFS.ExternalStorageDirectoryPath //RNFS.DocumentDirectoryPath;
    } else {
        docsDir = await PDFLib.getDocumentsDirectory();
    }

    console.log(docsDir)

    let path = `${docsDir}/logo.png`;

    const url = "https://firebasestorage.googleapis.com/v0/b/electrical-4ce27.appspot.com/o/event_logo-0.png?alt=media&token=f3fd502a-91a9-4425-8584-c000fca20253"

    await RNFetchBlob.fetch('GET', url, {   // image is downloaded in base64

    }).then((response) => {

        //  console.log(response)

        let base64Str = response.base64()

        // console.log(base64Str)

        RNFS.writeFile(path, base64Str, "base64")
            .then((success) => {

                console.log("image stored")

                createPdf(recipientId, eventName, userName, eventDate, eventTime);


            }).catch((error) => console.log(error))

    }).catch((error) => console.log(error))


}


const createPdf = async (recipientId, eventName, userName, eventDate, eventTime,) => {




    let docsDir;

    if (Platform.OS == "android") {
        docsDir = await RNFS.ExternalStorageDirectoryPath;
    } else {
        docsDir = await PDFLib.getDocumentsDirectory();


    }
    let name = userName + "-" + recipientId
    console.log(docsDir)
    const pdfPath = `${docsDir}/${name}.pdf`;
    docsDir = Platform.OS === 'android' ? `/${docsDir}` : docsDir; // for ios 

    const image = `${docsDir}/logo.png`;



    const page1 = PDFPage
        .create()
        .drawImage(
            image,
            'png',
            {
                x: 77,
                y: 389,
                width: 100,
                height: 100,

            }
        )
        .drawText('Recipient ID :', {
            x: 10,
            y: 360,
            fontSize: 13,
            color: "#009387",

        })
        .drawText(recipientId, {
            x: 87,
            y: 360,
            fontSize: 11,
            color: "#000000",

        })
        .drawText('Event Name :', {
            x: 10,
            y: 340,
            fontSize: 13,
            color: "#009387",


        })
        .drawText(eventName, {
            x: 87,
            y: 340,
            fontSize: 11,
            color: "#000000",

        })
        .drawText('User Name :', {
            x: 10,
            y: 320,
            fontSize: 13,
            color: "#009387",

        })
        .drawText(userName, {
            x: 87,
            y: 320,
            fontSize: 11,
            color: "#000000",

        })
        .drawText('Event Date :', {
            x: 10,
            y: 300,
            fontSize: 13,
            color: "#009387",

        })
        .drawText(eventDate, {
            x: 87,
            y: 300,
            fontSize: 11,
            color: "#000000",

        })
        .drawText('Timing :', {
            x: 10,
            y: 280,
            fontSize: 13,
            color: "#009387",

        }).drawText(eventTime, {
            x: 87,
            y: 280,
            fontSize: 11,
            color: "#000000",

        })


    PDFDocument
        .create(pdfPath)
        .addPages(page1)
        .write() // Returns a promise that resolves with the PDF's path
        .then(path => {
            console.log('PDF created at: ' + path);
            // Do stuff with your shiny new PDF!


        });

    android.actionViewIntent(pdfPath,"application/pdf")


    RNFetchBlob.fs.unlink(image)            //deleting the image
        .then(() => {

            console.log("deleted")

        })
        .catch((err) => console.log(err))


}


export const generateRecipient = (eventId, userId) => {

    return async (dispatch) => {

        const token = await AsyncStorage.getItem("userToken")

        fetch(baseUrl + "generateRecipient", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                "eventId": eventId,
                "userId": userId,


            })

        }).then((res) => res.json())
            .then((response) => {


                // console.log(response.recipient[0])

                const { _id, eventName, userName, joinedDate, } = response.recipient[0]

                console.log(_id, eventName, userName, joinedDate,)



                getImage(_id, eventName, userName, joinedDate.slice(0, 10), moment(joinedDate).format('LT'))

            })


    }



}