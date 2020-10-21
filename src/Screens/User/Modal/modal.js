import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image,Platform, PermissionsAndroid } from 'react-native'

import Modal from 'react-native-modal';


import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const RNFS = require('react-native-fs');


import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Tile, Button } from 'react-native-elements';
import moment from "moment";

const ModalPop = ({ toggleModal, name, fromDate, toDate, ticket }) => {


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

        getPermissions()

    }, [])




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


        const page1 = PDFPage
            .create()
            .drawText('You can add text and rectangles to the PDF!', {
                x: 5,
                y: 235,
                fontSize: 10

            })


        PDFDocument
            .create(pdfPath)
            .addPages(page1)
            .write() // Returns a promise that resolves with the PDF's path
            .then(path => {
                console.log('PDF created at: ' + path);
                // Do stuff with your shiny new PDF!
            });






    }
    return (
        <Modal isVisible={toggleModal}>
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

})


export default ModalPop;