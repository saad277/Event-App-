import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image, Button, Platform, PermissionsAndroid } from 'react-native'

import Modal from 'react-native-modal';


import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const RNFS = require('react-native-fs');


const ModalPop = ({ toggleModal }) => {


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
                <Button title="PDF" onPress={() => createPdf()} />
            </View>
        </Modal>
    )


}


export default ModalPop;