import React, { useState, useRef } from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Item, Input, Button, Picker, Form, Textarea, } from 'native-base';

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from 'react-native-vector-icons/FontAwesome'



import ImagePicker from 'react-native-image-crop-picker';

import Map from './Map/Map'

const CreateEvent = () => {



    let mapRef = useRef(null)




    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    const [eventLocation, setEventLocation] = useState({})

    const [type, setType] = useState("")
    const [description, setDescription] = useState("")

    const [region, setRegion] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    })


    //from states
    const [fromDate, setDateFrom] = useState(new Date());
    const [fromMode, setModeFrom] = useState('date');
    const [fromShow, setShowFrom] = useState(false);


    //To states
    const [toDate, setDateTo] = useState(new Date());
    const [toMode, setModeTo] = useState('date');
    const [toShow, setShowTo] = useState(false);

    //console.log(date)


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

                setRegion({
                    latitude: response.data[0].latitude,
                    longitude: response.data[0].longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                })

                mapRef.current.animateToCoordinate({
                    latitude: response.data[0].latitude,
                    longitude: response.data[0].longitude
                })
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



    const phaseOne = () => {

        console.log(name, toDate, fromDate)


    }

    const phaseTwo = () => {


    }


    const phaseThree = () => {


    }

    const phaseFour = () => {


    }

    const submit = () => {


    }

    const cancel = () => {


        setName("")
        setModal(!toggleModal)
    }

    return (
        <View style={{ flex: 1 }}>





            <ProgressSteps>
                <ProgressStep label="First Step" onNext={() => phaseOne()}>

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


                        <Button danger style={styles.btnContainer} onPress={() => cancel()}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Button>



                    </View>
                </ProgressStep>




                <ProgressStep label="Second Step" onNext={() => phaseTwo()}>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={styles.dateHeader}>Choose An Image For Event</Text>
                        <Image style={styles.image}
                            source={image ? { uri: 'data:image/jpeg;base64,' + image.data } : { uri: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&w=1000&q=80" }} />

                        <Button style={{ width: 160, justifyContent: "center", alignSelf: "center", marginTop: 50 }}
                            iconLeft transparent success
                            onPress={() => chooseImage()}
                        >
                            <Icon name='camera' size={20} style={{ color: "white", marginHorizontal: 20, }} />
                            <Text style={{ fontSize: 20, color: "white" }} >Choose </Text>
                        </Button>


                    </View>
                </ProgressStep>

                <ProgressStep label="Third Step" onNext={() => phaseThree()} >

                    <View style={{ flex: 1, height: 350 }}>

                        <Map region={region} forwardedRef={mapRef} />





                    </View>

                    <View style={{ backgroundColor: "white", flexDirection: "row" }}>

                        <Input placeholder='Enter Location' style={{ marginLeft: 20, width: 200, flex: 1, }} value={location} onChangeText={(text) => setLocation(text)} />

                        <Button
                            iconLeft
                            transparent
                            success
                            style={{ flex: 0.7, justifyContent: "center" }}
                            onPress={() => findLocation()}
                        >

                            <Icon name='search' size={20} style={{ marginRight: 10 }} />
                            <Text style={{ fontSize: 24 }}>Search</Text>
                        </Button>

                    </View>


                </ProgressStep>


                <ProgressStep label="Fourth Step" onNext={() => phaseFour()} onSubmit={() => submit()}>


                    <View style={{ flex: 1 }}>

                        <Text style={[styles.dateHeader, { alignSelf: "center" }]}>Almost There ! </Text>



                        <Form style={{ width: "100%" }}>

                            <Text style={[styles.side, { marginTop: 25 }]}>Event Description :</Text>
                            <Textarea rowSpan={5} bordered placeholder="Enter Event Description" onChangeText={(text) => setDescription(text)} />


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

export default CreateEvent;