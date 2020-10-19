import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, TouchableOpacity, Image } from 'react-native'

import Modal from 'react-native-modal';





const ModalPop = ({ toggleModal }) => {


    return (
        <Modal isVisible={toggleModal}>
            <View style={{ flex: 1,backgroundColor:"white" }}>
                <Text style={{ flex: 1 }}>I am thesaaaaaaaaaaaaaaa modal content!</Text>
            </View>
        </Modal>
    )


}


export default ModalPop;