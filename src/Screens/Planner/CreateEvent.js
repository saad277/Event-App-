import React, { useState } from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Button } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Container, Header, Content, Item, Input, } from 'native-base';

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from 'react-native-vector-icons/FontAwesome'

import Modal from 'react-native-modal'



const CreateEvent = () => {


    const [toggleModal, setModal] = useState(false)

    const [name, setName] = useState("hello")


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ flex: 1 }}>


            <Modal isVisible={toggleModal} coverScreen={true} style={styles.modal}>
                <ProgressSteps>
                    <ProgressStep label="First Step">

                        <View style={{ alignItems: 'center', flexDirection: "column", flex: 1, }}>
                            <Item style={{ padding: 10, justifyContent: "center", marginTop: 25, }}>
                                <Icon name='birthday-cake' size={30} color="#009387" />
                                <Input placeholder='Enter Event Name' style={{ marginLeft: 20 }} />
                            </Item>

                            <Item style={{ padding: 10, justifyContent: "center", marginTop: 25, }} >
                                <Icon name='calendar' size={30} color="#009387" />

                                {show && (<DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />)}
                            </Item>






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
    }


})

export default CreateEvent;