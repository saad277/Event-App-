



import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, LogBox, PermissionsAndroid, NativeModules } from 'react-native'



import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import { Tile, Button } from 'react-native-elements';

import { Content, Icon, Item, Accordion } from 'native-base';




import { generateRecipient } from '../../Redux/Actions/Events/EventActions'

LogBox.ignoreLogs(['Warning: ...']);

import moment from "moment";

import Modal from './Modal/modal'

import { connect } from 'react-redux'

const EventDetails = ({ navigation, user, random, all, nearby, generateRecipient }) => {





  


    let param = navigation.getParam("item")

    console.log(param)





    const [toggleModal, setModal] = useState(false)


    const [joined, setJoined] = useState(false)



    const closeModal = () => {


        setModal(false)

    }


    const setJoin = () => {

        setJoined(true)
    }

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


        // console.log(param._id)

        // console.log(user._id)


        console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")


        console.log(all)




        const arr = param.members.map((x) => {

            if (x.userId == user._id) {

                console.log("wwwwwwwwwwwwwwwwwwwwweeeeeeeee")
                setJoined(true)
            }


        })

        getPermissions()

    }, [all, random, nearby])



    const renderButton = () => {

        if (joined) {

            return (<Button
                buttonStyle={{ backgroundColor: "green" }}
                containerStyle={{ color: "#009387", paddingHorizontal: 20, marginTop: 5 }}

                style={{ color: "#009387" }}

                title="Generate Recipient"
                onPress={() => generateRecipient(param._id, user._id)}
            />)
        } else if (param.capacity == param.members.length) {

            return (
                <Text style={{ fontSize: 20, color: "red", marginRight: 10, marginTop: 8 }}>Sold Out</Text>
            )
        } else {

            return (
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
                    title="Join"
                    onPress={() => setModal(true)}
                />
            )
        }



    }

    return (
        <ScrollView style={styles.container}>

            <Tile
                imageSrc={{ uri: param.picture }}
                // title={item.name}
                featured
            //caption="Some Caption Text"
            />

            <Modal
                toggleModal={toggleModal}
                closeModal={closeModal}
                id={param._id}
                name={param.name}
                fromDate={param.fromDate}
                toDate={param.toDate}
                city={param.city}
                country={param.country}
                ticket={param.price}
                setJoin={setJoin}
            />


            <View style={styles.secondContainer}>

                <View style={styles.rowContainer}>

                    <View style={{ flexDirection: "column", flex: 1 }}>

                        <Text style={styles.header}>{param.name}</Text>
                        <Text style={styles.sub}>{param.type}</Text>

                    </View>

                    <View style={styles.iconContainer} >


                        {renderButton()}
                    </View>


                </View>

                <View style={[styles.rowContainer, { marginTop: 20 }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>Capacity </Text>
                        <Text style={styles.text}>{param.members.length}/{param.capacity}</Text>
                    </View>

                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
                        <Text style={styles.label}>Ticket</Text>
                        <Text style={styles.text}>{param.price} $</Text>
                    </View>


                </View>

                <View style={[styles.rowContainer, { marginTop: 20 }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>City</Text>
                        <Text style={styles.text}>{param.city}</Text>
                    </View>

                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
                        <Text style={styles.label}>Country</Text>
                        <Text style={styles.text}>{param.country}</Text>
                    </View>


                </View>



                <View style={[styles.rowContainer, { marginTop: 20, borderBottomColor: "white", borderBottomWidth: 0, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{param.fromDate.slice(0, 10)}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{param.toDate.slice(0, 10)}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"calendar"} />
                    </View>

                </View>




                <View style={[styles.rowContainer, { marginTop: 20, }]}>


                    <View style={{ flexDirection: "column", flex: 1, }}>
                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{moment(param.fromDate).format('LT')}</Text>
                    </View >



                    <View style={{ flexDirection: "column", justifyContent: "flex-end", flex: 1, marginLeft: 20 }}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.text}>{moment(param.toDate).format('LT')}</Text>
                    </View>

                    <View style={{ flexDirection: "column", }}>
                        <FontAwesome size={30} color={"#009387"} name={"clock"} />
                    </View>

                </View>


                <View style={[styles.rowContainer,]}>

                    <Content style={{ marginVertical: 20 }} >
                        <Accordion
                            dataArray={[{ title: "Description", content: param.description }]}
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


        </ScrollView>
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



const mapState = (state) => {


    return {

        user: state.auth,
        nearby: state.event.nearby,
        all: state.event.all,
        random: state.event.random,
    }

}


const dispatchState = (dispatch) => {

    return {

        generateRecipient: (eventId, userId) => dispatch(generateRecipient(eventId, userId))
    }


}

export default connect(mapState, dispatchState)(EventDetails);