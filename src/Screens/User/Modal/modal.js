import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, LogBox, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native'

import Modal from 'react-native-modal';


import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const RNFS = require('react-native-fs');


import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Tile, Button } from 'react-native-elements';
import moment from "moment";


import RNFetchBlob from 'rn-fetch-blob'

LogBox.ignoreLogs(['Warning: ...'])


import { connect } from 'react-redux'

import { joinEvent } from '../../../Redux/Actions/Events/EventActions'

const ModalPop = ({ toggleModal, id, name, fromDate, toDate, ticket, closeModal, user, joinEvent, setJoin }) => {


    //console.log(user)




    //eventId, eventName, userName, userId, joinedDate, ticketPrice



    const joinTheEvent = () => {

        joinEvent(id, name, user["name"], user["_id"], fromDate, ticket, closeModal, setJoin)

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
                        onPress={() => joinTheEvent()}
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


const mapState = (state) => {


    return {

        user: state.auth
    }

}


const dispatchState = (dispatch) => {


    return {

        joinEvent: (eventId, eventName, userName, userId, joinedDate, ticketPrice, closeModal, setJoin) => dispatch(joinEvent(eventId, eventName, userName, userId, joinedDate, ticketPrice, closeModal, setJoin))
    }

}

export default connect(mapState, dispatchState)(ModalPop);