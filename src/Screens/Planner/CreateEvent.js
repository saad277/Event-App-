import React, { useState, useRef } from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Button as Btn, TouchableOpacity } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Item, Input, Button, Picker, Form, Textarea, } from 'native-base';

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from 'react-native-vector-icons/FontAwesome'
import AwesomeAlert from 'react-native-awesome-alerts';


import ImagePicker from 'react-native-image-crop-picker';



import { connect } from 'react-redux'
import { createEvent, fetchEvents } from '../../Redux/Actions/Events/EventActions'

const CreateEvent = ({ createEvent, planner, navigation, fetchEvents }) => {

    // console.log("///////////////")
    // console.log(planner)

    const by = planner.name



    //alert states

    const [showAlert2, setAlert2] = useState(false)

    const [showAlert, setAlert] = useState(false)
    const [alertHeader, setAheader] = useState("Empty Fields")
    const [alertText, setAtext] = useState("Please Fill All Fields")



    //event states
    const [name, setName] = useState("")
    const [picture, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [eventLocation, setEventLocation] = useState(null)
    const [type, setType] = useState("Festival")
    const [description, setDescription] = useState("")
    const [capacity, setCapacity] = useState("")
    const [price, setPrice] = useState(null)




    //from states
    const [fromDate, setDateFrom] = useState(new Date());
    const [fromMode, setModeFrom] = useState('date');
    const [fromShow, setShowFrom] = useState(false);


    //To states
    const [toDate, setDateTo] = useState(new Date());
    const [toMode, setModeTo] = useState('date');
    const [toShow, setShowTo] = useState(false);

    //console.log(date)


    const settingAlert = () => {

        setAlert2(true)

    }

    const errorAlert = (header, text) => {

        setAheader(header)
        setAtext(text)
        setAlert(true)

    }

    const chooseImage = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setImage(image)
        });

    }

    const findLocation = () => {

        fetch(`http://api.positionstack.com/v1/forward?access_key=b060536a5abca8391d7dbb68ac74ace8&query=${location}`)
            .then((res) => res.json())
            .then(response => {

                console.log(response)

                console.log(response.data[0].country)
                console.log(response.data[0].county)
                console.log(response.data[0].label)
                console.log(response.data[0].latitude)
                console.log(response.data[0].longitude)

                let details = {

                    country: response.data[0].country,
                    county: response.data[0].county,
                    label: response.data[0].label,
                    latitude: response.data[0].latitude,
                    longitude: response.data[0].longitude

                }

                setEventLocation(details)



            }


            )


    }



    //From functions
    const onChangeFrom = (event, selectedDate) => {
        const currentDate = selectedDate || fromDate;

        console.log(selectedDate)
        setShowFrom(Platform.OS === 'ios');
        setDateFrom(currentDate);
    };

    const showModeFrom = (currentMode) => {
        setShowFrom(true);
        setModeFrom(currentMode);
    };

    const showDatepickerFrom = () => {
        showModeFrom('date');
    };

    const showTimepickerFrom = () => {
        showModeFrom('time');
    };


    // To Functions
    const onChangeTo = (event, selectedDate) => {
        const currentDate = selectedDate || toDate;

        console.log(selectedDate)
        setShowTo(Platform.OS === 'ios');
        setDateTo(currentDate);
    };

    const showModeTo = (currentMode) => {
        setShowTo(true);
        setModeTo(currentMode);
    };

    const showDatepickerTo = () => {
        showModeTo('date');
    };

    const showTimepickerTo = () => {
        showModeTo('time');
    };








    const submit = () => {

        console.log(".....")



        if (!capacity || !price || !description) {

            return setAlert(true)

        } else {

            //  console.log(name, toDate, fromDate, description, capacity, type, eventLocation, price)

            createEvent(name, description, type, fromDate, toDate, capacity, price, by, picture, eventLocation, settingAlert, errorAlert, fetchEvents)



        }
    }



    const hideAlert = () => {

        setAlert(false)

    }



    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>

            <AwesomeAlert

                show={showAlert2}
                showProgress={false}
                title={"Event Saved"}
                message={"Your Event has been created"}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}

                confirmText="Okay"
                confirmButtonColor="#DD6B55"

                onConfirmPressed={() => {

                    navigation.navigate("MyEvents")

                }}
            />


            <AwesomeAlert

                show={showAlert}
                showProgress={false}
                title={alertHeader}
                message={alertText}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}

                confirmText="Okay"
                confirmButtonColor="#DD6B55"

                onConfirmPressed={() => {
                    hideAlert();
                }}
            />



            <ProgressSteps  >

                <ProgressStep label="First Step" nextBtnDisabled={name ? false : true}>

                    <View style={{ alignItems: 'center', flexDirection: "column", flex: 1, }}>
                        <Item style={{ padding: 10, justifyContent: "center", marginTop: 25, }}>
                            <Icon name='birthday-cake' size={30} color="#009387" />
                            <Input placeholder='Enter Event Name' style={{ marginLeft: 20 }} value={name} onChangeText={(text) => setName(text)} />
                        </Item>

                        <Text style={styles.dateHeader}>Choose A Date </Text>

                        <Text style={styles.side}>From  </Text>

                        <Item style={{ padding: 10, marginTop: 25, width: "100%", flexDirection: "row" }} >
                            <Icon name='calendar' size={30} color="#009387" style={{ marginRight: 20 }} />

                            {fromShow && (<DateTimePicker
                                testID="dateTimePicker"
                                value={fromDate}
                                mode={fromMode}
                                is24Hour={false}

                                display="default"
                                onChange={onChangeFrom}
                            />)}
                            <Text onPress={() => showDatepickerFrom()} style={{ fontSize: 16 }} >{fromDate.toString().slice(0, 16)}</Text>

                            <Icon name='clock-o' size={30} color="#009387" style={{ marginLeft: 15, marginRight: 20 }} />

                            <Text onPress={() => showTimepickerFrom()} style={{ fontSize: 16, }} >{fromDate.toString().slice(16, 25)}</Text>


                        </Item>

                        <Text style={[styles.side, { marginTop: 20 }]}>To</Text>



                        <Item style={{ padding: 10, marginTop: 25, width: "100%", flexDirection: "row" }} >
                            <Icon name='calendar' size={30} color="#009387" style={{ marginRight: 20 }} />

                            {toShow && (<DateTimePicker
                                testID="dateTimePicker"
                                value={toDate}
                                mode={toMode}
                                is24Hour={false}

                                display="default"
                                onChange={onChangeTo}
                            />)}
                            <Text onPress={() => showDatepickerTo()} style={{ fontSize: 16 }} >{toDate.toString().slice(0, 16)}</Text>



                            <Icon name='clock-o' size={30} color="#009387" style={{ marginLeft: 15, marginRight: 20 }} />

                            <Text onPress={() => showTimepickerTo()} style={{ fontSize: 16, }} >{toDate.toString().slice(16, 25)}</Text>


                        </Item>





                    </View>
                </ProgressStep>




                <ProgressStep label="Second Step" nextBtnDisabled={picture ? false : true}>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={styles.dateHeader}>Choose An Image For Event</Text>
                        <Image style={styles.image}
                            source={picture ? { uri: 'data:image/jpeg;base64,' + picture.data } : { uri: "https://thumbs.dreamstime.com/b/camera-plus-line-icon-add-photo-vector-166966023.jpg" }} />

                        <Button style={{ width: 160, justifyContent: "center", alignSelf: "center", marginTop: 50 }}
                            iconLeft transparent success
                            onPress={() => chooseImage()}
                        >
                            <Icon name='camera' size={20} style={{ color: "white", marginHorizontal: 20, }} />
                            <Text style={{ fontSize: 20, color: "white" }} >Choose </Text>
                        </Button>


                    </View>
                </ProgressStep>

                <ProgressStep label="Third Step" nextBtnDisabled={eventLocation ? false : true} >

                    <Text style={[styles.dateHeader, { alignSelf: "center" }]}>Search A place </Text>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 25, marginLeft: 10 }}>Country : {eventLocation ? eventLocation.country : null} </Text>
                        <Text style={{ fontSize: 25, marginLeft: 10 }}>City : {eventLocation ? eventLocation.label : null}</Text>
                    </View>


                    <View style={{ backgroundColor: "white", flexDirection: "column", marginTop: "8%", }}>

                        <Input placeholder='Enter Location' style={{ marginHorizontal: 20, flex: 1, borderBottomWidth: 2, borderColor: "black" }} value={location} onChangeText={(text) => setLocation(text)} />


                        <TouchableOpacity style={{ width: "60%", marginTop: 20, alignSelf: "center" }}>
                            <Btn

                                color="#009387"
                                title="Search"
                                style={{ flex: 0.7, justifyContent: "center", }}
                                onPress={() => findLocation()}
                            />
                        </TouchableOpacity>






                    </View>


                </ProgressStep>


                <ProgressStep label="Fourth Step" onSubmit={() => submit()}>


                    <View style={{ flex: 1 }}>

                        <Form style={{ width: "100%" }}>

                            <Text style={[styles.side, { marginTop: 25 }]}>Event Description :</Text>
                            <Textarea rowSpan={5} value={description} bordered placeholder="Enter Event Description" onChangeText={(text) => setDescription(text)} />


                            <Text style={[styles.side, { marginTop: 25 }]}>Event Type :</Text>
                            <Picker
                                mode="dropdown"
                                selectedValue={type}
                                onValueChange={(text) => setType(text)}
                            >
                                <Picker.Item label="Education" value="Education" />
                                <Picker.Item label="Festival" value="Festival" />
                                <Picker.Item label="Work Shop" value="Work Shop" />
                                <Picker.Item label="Party" value="Party" />
                                <Picker.Item label="Concert" value="Concert" />
                                <Picker.Item label="Tour" value="Tour" />
                            </Picker>


                        </Form>


                        <Text style={[styles.side, { marginTop: 25 }]}>Capacity :</Text>

                        <Item style={{ padding: 10, justifyContent: "center", marginTop: 15, }}>
                            <Icon name='user-circle-o' size={30} color="#009387" />
                            <Input placeholder='Enter Event Capacity' style={{ marginLeft: 20 }} value={capacity} keyboardType={"numeric"} onChangeText={(text) => setCapacity(text)} />
                        </Item>

                        <Text style={[styles.side, { marginTop: 25 }]}>Ticket Price :</Text>

                        <Item style={{ padding: 10, justifyContent: "center", marginTop: 15, }}>
                            <Icon name='ticket' size={30} color="#009387" />
                            <Input placeholder='Event Fees' style={{ marginLeft: 20 }} value={price} keyboardType={"numeric"} onChangeText={(text) => setPrice(text)} />
                        </Item>


                    </View>





                </ProgressStep>

            </ProgressSteps>




        </View>
    )

}


const styles = StyleSheet.create({

    container: {

        flex: 1
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 10,
    },
    dateHeader: {

        fontWeight: "bold",
        color: "#009387",
        fontSize: 26,
        marginTop: 20,
    },
    side: {

        fontWeight: "bold",
        color: "#009387",
        fontSize: 23,
        alignSelf: "flex-start",
        marginLeft: 10,

    },
    btnContainer: {

        width: 70,
        marginTop: 20,
        marginLeft: 10,
        justifyContent: "center",
        alignSelf: "center"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    image: {
        height: 200,
        width: 200,
        marginTop: 30,
        borderRadius: 100
    }


})

const mapDispatch = (dispatch) => {


    return {

        createEvent: (name, description, type, fromDate, toDate, capacity, price, by, picture, eventLocation, alert, error, fetch) =>
            dispatch(createEvent(name, description, type, fromDate, toDate, capacity, price, by, picture, eventLocation, alert, error, fetch)),
        fetchEvents: () => dispatch(fetchEvents())
    }


}


const mapState = (state) => {

    return {

        planner: state.auth
    }

}

export default connect(mapState, mapDispatch)(CreateEvent);