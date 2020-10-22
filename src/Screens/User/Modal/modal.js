import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, LogBox, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native'

import Modal from 'react-native-modal';


import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const RNFS = require('react-native-fs');


import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Tile, Button } from 'react-native-elements';
import moment from "moment";


import RNFetchBlob from 'rn-fetch-blob'

LogBox.ignoreLogs(['Warning: ...']);

const ModalPop = ({ toggleModal, name, fromDate, toDate, ticket, closeModal }) => {


    const getPermissions = async () => {

        if (Platform.OS == "android") {
            try {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message:
                            'Write storage permission need.',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
            } catch (err) {
                console.warn(err);
            }
        }



    }

    useEffect(() => {

        getPermissions();

    }, [])




    const getImage = async () => {


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

                    createPdf();


                }).catch((error) => console.log(error))

        }).catch((error) => console.log(error))


    }


    const createPdf = async () => {


        console.log(".....")

        let docsDir;

        if (Platform.OS == "android") {
            docsDir = await RNFS.ExternalStorageDirectoryPath;
        } else {
            docsDir = await PDFLib.getDocumentsDirectory();


        }
        console.log(docsDir)
        const pdfPath = `${docsDir}/sample.pdf`;
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
            .drawText('800000002212', {
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
            .drawText('Hello World', {
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
            .drawText('Saad ', {
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
            .drawText('11-Nov-2020 ', {
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

            }).drawText('5:45 pm ', {
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

        RNFetchBlob.fs.unlink(image)            //deleting the image
            .then(() => {

                console.log("deleted")

            })
            .catch((err) => console.log(err))


    }



    return (
        <Modal isVisible={toggleModal} onBackButtonPress={() => closeModal()}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Image source={require("../../../Assets/event_logo-0.png")} style={styles.image} />
                <Text style={styles.header}>{name}</Text>

                <View style={[styles.rowContainer, { marginTop: 20, borderBottomColor: "white", borderBottomWidth: 0, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{fromDate.slice(0, 10)}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{toDate.slice(0, 10)}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"calendar"} />
                    </View>

                </View>



                <View style={[styles.rowContainer, { marginTop: 10, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{moment(fromDate).format('LT')}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{moment(toDate).format('LT')}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"clock"} />
                    </View>

                </View>

                <View style={[styles.rowContainer, { marginTop: 20 }]}>




                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
                        <Text style={styles.label}>Ticket</Text>
                        <Text style={styles.text}>{ticket} $</Text>
                    </View>


                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"money-bill-alt"} />
                    </View>


                </View>

                <View style={styles.iconContainer} >
                    <Button
                        buttonStyle={{ backgroundColor: "red" }}
                        containerStyle={{ color: "red", paddingHorizontal: 20, marginTop: 10 }}

                        style={{ color: "#009387" }}
                        icon={
                            <FontAwesome
                                name="minus-circle"
                                size={15}
                                color="white"
                                style={{ marginRight: 10 }}
                            />
                        }
                        title="CANCEL"
                        onPress={() => closeModal()}
                    />
                    <Button
                        buttonStyle={{ backgroundColor: "#009387" }}
                        containerStyle={{ color: "#009387", paddingHorizontal: 20, marginTop: 10 }}

                        style={{ color: "#009387" }}
                        icon={
                            <FontAwesome
                                name="plus-circle"
                                size={15}
                                color="white"
                                style={{ marginRight: 10 }}
                            />
                        }
                        title="Confirm"
                        onPress={() => getImage()}
                    />
                </View>



            </View>
        </Modal>
    )


}


const styles = StyleSheet.create({


    image: {
        width: 150,
        height: 150,
        alignSelf: "center"
    },
    header: {

        fontSize: 30,
        fontWeight: "bold",
        textTransform: "capitalize",
        alignSelf: "center",
        marginTop: 10

    },
    rowContainer: {

        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 0.6,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingLeft: 20

    },
    label: {

        fontSize: 15,
        color: "#009387"
    },
    text: {

        fontSize: 12,
        fontWeight: "700"
    },
    iconContainer: {

        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10


    },

})


export default ModalPop;