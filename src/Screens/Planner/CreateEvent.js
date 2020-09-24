import React, { useState } from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Container, Header, Content, Item, Input, Button } from 'native-base';

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from 'react-native-vector-icons/FontAwesome'

import Modal from 'react-native-modal'



const CreateEvent = () => {




    const [toggleModal, setModal] = useState(true)


    const [name, setName] = useState("")

    //from states
    const [fromDate, setDateFrom] = useState(new Date());
    const [fromMode, setModeFrom] = useState('date');
    const [fromShow, setShowFrom] = useState(false);


    //To states
    const [toDate, setDateTo] = useState(new Date());
    const [toMode, setModeTo] = useState('date');
    const [toShow, setShowTo] = useState(false);

    //console.log(date)


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



    const check = () => {

        console.log(name,)


    }

    return (
        <View style={{ flex: 1 }}>


            <Modal isVisible={toggleModal} coverScreen={true} style={styles.modal}>
                <ProgressSteps>
                    <ProgressStep label="First Step" onNext={() => check()}>

                        <View style={{ alignItems: 'center', flexDirection: "column", flex: 1, }}>
                            <Item style={{ padding: 10, justifyContent: "center", marginTop: 25, }}>
                                <Icon name='birthday-cake' size={30} color="#009387" />
                                <Input placeholder='Enter Event Name' style={{ marginLeft: 20 }} value={name} onChangeText={(text) => setName(text)} />
                            </Item>

                            <Text style={styles.dateHeader}>Choose A Date </Text>

                            <Text style={styles.side}>From  </Text>

                            <Item style={{ padding: 10, marginTop: 25, justifyContent: "center", width: "100%" }} >
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
                            </Item>

                            <Text style={[styles.side, { marginTop: 20 }]}>To</Text>



                            <Item style={{ padding: 10, marginTop: 25, justifyContent: "center", width: "100%" }} >
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
                            </Item>


                            <Button danger style={styles.btnContainer}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </Button>



                        </View>
                    </ProgressStep>




                    <ProgressStep label="Second Step">
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 2!</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Third Step">
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 3!</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </Modal>
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
    }


})

export default CreateEvent;