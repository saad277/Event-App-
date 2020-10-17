import React from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'








const MoreItems = ({ item, navigation }) => {
    const { width, height } = Dimensions.get("window")

    return (

        <TouchableOpacity onPress={() => navigation.navigate("EventDetailsUser", { item })}>
            <View style={{ width: width - 40, height: 200, marginTop: 20, marginRight: 20, backgroundColor: "white" }} >
                <Image
                    source={{ uri: item.picture }}
                    style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderRadius: 5, borderWidth: 1 }}
                />


            </View>
        </TouchableOpacity>


    )


}


export default MoreItems;