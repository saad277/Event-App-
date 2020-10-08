import React from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native'








const MoreItems = ({ picture}) => {
    const { width, height } = Dimensions.get("window")

    return (

        <View style={{ width: width - 40, height: 200, marginTop: 20, marginRight: 20, backgroundColor: "white" }} >
            <Image
                source={{ uri: picture }}
                style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderRadius: 5, borderWidth: 1 }}
            />


        </View>


    )


}


export default MoreItems;