import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image } from 'react-native'


import Material from 'react-native-vector-icons/MaterialIcons'

import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import { Tile } from 'react-native-elements';

import { Container, Header, Content, Button, Icon, Item, Accordion } from 'native-base';



import moment from "moment";

const EventDetails = ({ navigation }) => {

    const item = navigation.getParam("item")

    console.log(item)


    return (
        <ScrollView style={styles.container}>
            {/* <Image source={{ uri: item.picture }} style={styles.image} /> */}
            <Tile
                imageSrc={{ uri: item.picture }}
                // title={item.name}
                featured
            //caption="Some Caption Text"
            />

            <View style={styles.secondContainer}>

                <View style={styles.rowContainer}>

                    <View style={{ flexDirection: "column", flex: 1 }}>

                        <Text style={styles.header}>{item.name}</Text>
                        <Text style={styles.sub}>{item.type}</Text>

                    </View>

                    <View style={styles.iconContainer} >
                        <Material size={40} color={"#009387"} name={"favorite"} style={{ marginRight: 20, marginTop: 20 }} />
                    </View>


                </View>

                <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 30 }}>

                    <Text style={[styles.header, { fontWeight: "900", flex: 1, marginLeft: 20 }]}>$ {item.price}</Text>

                    <View style={{ justifyContent: "flex-end", backgroundColor: "red" }}>

                        <Button iconLeft primary success style={{ justifyContent: "center", paddingHorizontal: 10, color: "#009387" }}>
                            <Icon name='people' />
                            <Text style={{ marginLeft: 10, fontSize: 16 }}>{item.members.length}</Text>
                        </Button>

                    </View>


                </View >

                <View style={[styles.rowContainer, { marginTop: 20 }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>City</Text>
                        <Text style={styles.text}>{item.city}</Text>
                    </View>

                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
                        <Text style={styles.label}>Country</Text>
                        <Text style={styles.text}>{item.country}</Text>
                    </View>


                </View>


                <View style={[styles.rowContainer, { marginTop: 20, borderBottomColor: "white", borderBottomWidth: 0, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{item.fromDate.slice(0, 10)}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{item.toDate.slice(0, 10)}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"calendar"} />
                    </View>

                </View>

                <View style={[styles.rowContainer, { marginTop: 20, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{moment(item.toDate).format('LT')}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{moment(item.toDate).format('LT')}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"clock"} />
                    </View>

                </View>

                <View style={[styles.rowContainer,]}>

                    <Content style={{ marginVertical: 20 }} >
                        <Accordion
                            dataArray={[{ title: "Description", content: item.description }]}
                            expandedIcon="remove"
                            expanded={1}
                            iconStyle={{ color: "#009387" }}
                            expandedIconStyle={{ color: "#009387", fontWeight: "bold" }}
                            headerStyle={{ backgroundColor: "white" }}
                            contentStyle={{ backgroundColor: "#ddecf8" }}

                        />
                    </Content>

                </View>


            </View>

        </ScrollView >
    )



}

const styles = StyleSheet.create({


    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 280,
        flex: 2
    },
    secondContainer: {

        flex: 3,
        flexDirection: "column",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        paddingVertical: 10
    },
    header: {

        fontSize: 30,
        fontWeight: "bold",
        textTransform: "capitalize",

    },
    sub: {
        fontSize: 18,
        marginTop: 5,
        color: "gray",

        fontWeight: "700"

    },
    iconContainer: {

        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",

    },
    label: {

        fontSize: 20,
        color: "#009387"
    },
    text: {

        fontSize: 16,
        fontWeight: "700"
    },
    rowContainer: {

        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 0.6,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingLeft: 20

    }


})


export default EventDetails;